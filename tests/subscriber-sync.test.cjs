const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('integrations/google-sheets/Code.js','utf8');
function harness(records=[], initial=[], failWrite=false) {
  const rows = [['邮箱','姓名','订阅时间','来源'],...initial];
  const props = {SUPABASE_URL:'https://example.supabase.co',SUPABASE_API_KEY:'fixture',SUPABASE_READ_TOKEN:'fixture',SPREADSHEET_ID:'fixture'};
  let requests=0, released=false;
  const sheet={getLastRow:()=>rows.length,getMaxRows:()=>1000,insertRowsAfter(){},getRange:(r,c,n,w)=>({getValues:()=>Array.from({length:n},(_,i)=>Array.from({length:w},(_,j)=>rows[r-1+i]?.[c-1+j]??'')),setNumberFormat(){return this},setValues(values){if(failWrite&&r>1)throw Error('write failed');values.forEach((v,i)=>rows[r-1+i]=v);return this}})};
  const ctx={Date,console,LockService:{getScriptLock:()=>({tryLock:()=>true,releaseLock:()=>released=true})},PropertiesService:{getScriptProperties:()=>({getProperties:()=>props,setProperties:v=>Object.assign(props,v),setProperty:(k,v)=>props[k]=v})},SpreadsheetApp:{openById:()=>({getSheetByName:()=>sheet}),flush(){}},UrlFetchApp:{fetch(url){requests++;const match=url.match(/id=gt.([^&]+)/);const cursor=match?decodeURIComponent(match[1]):'';return {getResponseCode:()=>200,getContentText:()=>JSON.stringify(records.filter(x=>x.id>cursor).slice(0,500))}}},Utilities:{sleep(){}}};
  vm.createContext(ctx);vm.runInContext(source,ctx);
  return {ctx,rows,props,requests:()=>requests,released:()=>released};
}
const record=(id='001',email='Test@example.com')=>({id,email,name:'Test',created_at:'2026-10-29T11:00:00Z'});
test('reruns and case variants deduplicate; original timestamp and unknown consent preserved',()=>{const h=harness([record(),record('002',' TEST@example.com ')]);h.ctx.syncHotRadar();h.ctx.syncHotRadar();assert.equal(h.rows.length,2);assert.equal(h.rows[1][2],'2026-10-29T11:00:00.000Z');assert.match(h.rows[1][5],/Unknown/);assert.ok(h.props.LAST_SUCCESS_AT);});
test('existing customer details are never overwritten',()=>{const h=harness([record()],[['test@example.com','Original','original time','original source']]);h.ctx.syncHotRadar();assert.equal(h.rows[1][1],'Original');assert.equal(h.rows[1][2],'original time');});
test('pagination beyond 500 rows',()=>{const h=harness(Array.from({length:1001},(_,i)=>record(String(i).padStart(5,'0'),`test${i}@example.com`)));h.ctx.syncHotRadar();assert.equal(h.rows.length,1002);assert.equal(h.requests(),4);});
test('formula injection escaped; explicit consent and version copied',()=>{const h=harness();const row=h.ctx.subscriberRow({...record(),name:' =IMPORTXML("x")',consent:true,consent_version:'v1',source:'web',language:'en'});assert.equal(row[1][0],"'");assert.equal(row[5],'Yes');assert.equal(row[6],'v1');});
test('write failure records status, releases lock and permits safe retry',()=>{const h=harness([record()],[],true);assert.throws(()=>h.ctx.syncHotRadar(),/write failed/);assert.ok(h.props.LAST_ERROR);assert.equal(h.props.LAST_SUCCESS_AT,undefined);assert.ok(h.released());});
test('schema mismatch stops before fetch or data write',()=>{const h=harness([record()]);h.rows[0][0]='Other';assert.throws(()=>h.ctx.syncHotRadar(),/Unexpected header/);assert.equal(h.requests(),0);});
test('HTTP auth error is not retried and response body never included',()=>{const h=harness();h.ctx.UrlFetchApp.fetch=()=>({getResponseCode:()=>401,getContentText:()=> 'secret'});assert.throws(()=>h.ctx.syncHotRadar(),/Supabase HTTP 401/);assert.doesNotMatch(h.props.LAST_ERROR,/secret/);});
test('transient failures retried',()=>{const h=harness();let n=0;h.ctx.UrlFetchApp.fetch=()=>({getResponseCode:()=>++n<3?503:200,getContentText:()=> '[]'});h.ctx.syncHotRadar();assert.equal(n,3);});
test('invalid records do not create false timestamps or consent',()=>{const h=harness();assert.throws(()=>h.ctx.subscriberRow({...record(),created_at:null}),/Invalid/);assert.equal(h.ctx.subscriberRow({...record(),consent:false})[5],'No');});
