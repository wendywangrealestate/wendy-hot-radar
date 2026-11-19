/* Standalone Apps Script. Never called by the subscription request. */
var HEADERS = ['邮箱', '姓名', '订阅时间', '来源', 'Language', 'Consent', 'Consent version', 'Subscriber ID', 'Synced at'];

function syncHotRadar() {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(1000)) return;
  var props = PropertiesService.getScriptProperties();
  try {
    var config = props.getProperties();
    if (!/^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(config.SUPABASE_URL || '')) throw new Error('Invalid SUPABASE_URL');
    if (!config.SUPABASE_API_KEY || !config.SUPABASE_READ_TOKEN || !config.SPREADSHEET_ID) throw new Error('Missing configuration');
    var sheet = SpreadsheetApp.openById(config.SPREADSHEET_ID).getSheetByName('Sheet1');
    if (!sheet) throw new Error('Sheet1 missing; no sheet created');
    var headers = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
    HEADERS.forEach(function (h, i) { if (headers[i] && headers[i] !== h) throw new Error('Unexpected header at column ' + (i + 1)); });
    var existing = sheet.getLastRow() > 1 ? sheet.getRange(2, 1, sheet.getLastRow() - 1, HEADERS.length).getValues() : [];
    var seen = Object.create(null);
    existing.forEach(function (row) { if (row[0]) seen[normalizeEmail(row[0])] = true; });
    // Keyset pagination, full reconciliation on each run: failures need no cursor repair.
    var cursor = '', count = 0, started = Date.now();
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    while (true) {
      if (Date.now() - started > 240000) throw new Error('Time budget reached; next run reconciles remaining rows');
      var url = config.SUPABASE_URL + '/rest/v1/subscribers?select=*&order=id.asc&limit=500' + (cursor ? '&id=gt.' + encodeURIComponent(cursor) : '');
      var records = fetchPage(url, config);
      if (!records.length) break;
      var rows = [];
      records.forEach(function (record) {
        var row = subscriberRow(record);
        var key = normalizeEmail(record.email);
        if (!seen[key]) { rows.push(row); seen[key] = true; }
      });
      if (rows.length) {
        var nextRow = sheet.getLastRow() + 1;
        if (nextRow + rows.length - 1 > sheet.getMaxRows()) sheet.insertRowsAfter(sheet.getMaxRows(), rows.length);
        sheet.getRange(nextRow, 1, rows.length, HEADERS.length).setNumberFormat('@').setValues(rows);
        SpreadsheetApp.flush();
        count += rows.length;
      }
      var nextCursor = String(records[records.length - 1].id || '');
      if (!nextCursor || nextCursor <= cursor) throw new Error('Invalid pagination cursor');
      cursor = nextCursor;
    }
    props.setProperties({ LAST_SUCCESS_AT: new Date().toISOString(), LAST_ADDED_COUNT: String(count), LAST_ERROR: '' });
  } catch (error) {
    // Do not log customer data, response bodies, or credentials.
    props.setProperty('LAST_ERROR', new Date().toISOString() + ': ' + error.message);
    throw error;
  } finally { lock.releaseLock(); }
}

function fetchPage(url, config) {
  for (var attempt = 0; attempt < 3; attempt++) {
    var response = UrlFetchApp.fetch(url, { method: 'get', muteHttpExceptions: true, followRedirects: false,
      headers: { apikey: config.SUPABASE_API_KEY, Authorization: 'Bearer ' + config.SUPABASE_READ_TOKEN } });
    var code = response.getResponseCode();
    if (code === 200) {
      var records = JSON.parse(response.getContentText());
      if (!Array.isArray(records)) throw new Error('Invalid Supabase response');
      return records;
    }
    if (code !== 429 && code < 500) throw new Error('Supabase HTTP ' + code);
    if (attempt < 2) Utilities.sleep(1000 * Math.pow(2, attempt));
  }
  throw new Error('Supabase unavailable after retries');
}

function normalizeEmail(value) { return String(value || '').trim().toLowerCase(); }
function safeCell(value) {
  var text = String(value == null ? '' : value);
  return /^[\s]*[=+\-@]/.test(text) ? "'" + text : text;
}
function subscriberRow(record) {
  var email = normalizeEmail(record.email);
  if (!email || !record.id || !record.created_at || isNaN(Date.parse(record.created_at))) throw new Error('Invalid subscriber record');
  var consent = record.consent === true ? 'Yes' : record.consent === false ? 'No' : 'Unknown — not recorded';
  return [email, record.name, new Date(record.created_at).toISOString(), record.source || "Wendy's Hot Radar (inferred from database)",
    record.language || '', consent, record.consent_version || '', record.id, new Date().toISOString()].map(safeCell);
}

function installHotRadarTrigger() {
  // First run must succeed before automatic execution is enabled.
  syncHotRadar();
  ScriptApp.getProjectTriggers().forEach(function (t) { if (t.getHandlerFunction() === 'syncHotRadar') ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger('syncHotRadar').timeBased().everyMinutes(15).create();
}

if (typeof module !== 'undefined') module.exports = { subscriberRow, normalizeEmail, fetchPage, syncHotRadar, installHotRadarTrigger };
