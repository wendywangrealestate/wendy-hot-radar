# Hot Radar → Google Sheets reconciliation

Status: implemented and fixture-tested; NOT installed, NOT live-tested, and no production site/database changes made.

## Architecture and data handling

A separate private Apps Script reads Supabase through GET requests and appends missing emails to Sheet1 every 15 minutes. No website deployment, subscription handler edits, database rebuild, or changes to Open House scripts are needed. Source rows remain authoritative and untouched. The script does not send marketing email.

Case-insensitive email deduplication, a script-wide lock, deterministic UUID keyset pagination, transient HTTP retries, and full reconciliation on every run handle retries/backfill and partial failures. Existing destination rows are never overwritten or deleted; duplicate existing rows are not removed. A concurrent source insert behind the cursor is picked up next run. This is an append-only subscriber archive, not an unsubscribe/status mirror; verify current consent/status at the authoritative backend before any campaign.

Columns A:D remain compatible. E:I add Language, Consent, Consent version, Subscriber ID, Synced at. Original subscription time is copied as UTC ISO text, never replaced with sync time. Source is copied if recorded, otherwise explicitly labeled as inferred from the database. Consent defaults to Unknown; explicit boolean consent and version are copied only when present. Formula-like input is escaped. No customer data or credential values are logged.

## Minimal access needed to activate

1. Owner access to create/edit ONE private standalone Apps Script and authorize its Sheets, external-request, and trigger scopes. The current Drive connector does not expose Apps Script project creation/execution or trigger installation. No public web app deployment is needed.
2. Supabase read-only REST credentials limited to SELECT on public.subscribers. Use a dedicated short-lived role/JWT with appropriate SELECT grant and RLS SELECT policy, plus the project API key. Provision this through the Supabase project administrator; the current anonymous insert-only key cannot perform the reconciliation. Do not enable public/anonymous SELECT. Do not paste secrets into chat, repository files, or spreadsheet cells. Store them directly in Apps Script Properties. Restrict script editors. A service-role key is broader than necessary and is not the requested minimum.

Script Properties:
- SUPABASE_URL: verified production project URL, without trailing slash
- SUPABASE_API_KEY: project API key for REST gateway
- SUPABASE_READ_TOKEN: dedicated read JWT; arrange renewal before expiry
- SPREADSHEET_ID: target sheet ID, or separate test spreadsheet ID for acceptance testing

Copy Code.js and appsscript.json into the standalone project. First point at a separate fixture spreadsheet with a Sheet1 tab and the four original headers, and a Supabase test backend with the same schema. Run syncHotRadar twice. Confirm original timestamp, exactly one row per normalized email, unknown consent for legacy data, affirmative/negative consent only from recorded values, and recovery after a forced fetch/write failure. Do not insert fake customers into the production subscription table.

Only after acceptance, set the production sheet ID and production read credentials. Run syncHotRadar once, reconcile counts and a small authorized sample, then run installHotRadarTrigger. Check LAST_SUCCESS_AT, LAST_ADDED_COUNT, LAST_ERROR in Script Properties and Apps Script Executions; enable Google's trigger failure notifications. Alert if no success for over 45 minutes. Do not install multiple copies of this script against the same destination (locks are project-local).

Rollback: delete only this project's syncHotRadar time trigger. Website subscription remains operational. Any imported rows are an archive; do not delete customer records automatically.

## Consent follow-up

To record new explicit consent at source, a separate reviewed additive Supabase migration and website change are still required: add nullable consent, consent_version, consent_at, source and language; present an unchecked consent checkbox with versioned notice; validate consent server-side and store the server timestamp. Existing subscribers must remain nullable/unknown, and repeated subscriptions must not overwrite prior evidence. Apply migration before deploying an updated writer, and test invalid email, missing consent, duplicates, backend outage, and normal submission. This PR intentionally does not deploy a writer that assumes unavailable columns exist.

## Market Insights

The seven-column sheet can represent the same basic fields, but records in a sheet do not prove the current backend. Do not enable this Hot Radar job for Insights or merge their consent. Confirm the active page's actual submission URL, deployed handler, persistence store, deduplication key, notice/version and revocation behavior first. If it uses Supabase, reuse the reconciliation logic with an explicit separate source/table/tab adapter. If it already writes directly to Apps Script/Sheets, inspect and repair that path instead of introducing a second writer.

## Local verification

`node --test tests/subscriber-sync.test.cjs`

Nine tests cover deduplication/reruns, preserving existing rows, 1,001-row pagination, formula injection, consent mapping, failed writes/lock release, header conflicts, auth failures, retries, and invalid timestamps. Tests mock Apps Script APIs; they do not establish live Google authorization, RLS grants, execution quotas, or actual trigger operation. No app runtime files or dependencies changed, so website behavior is isolated by construction.
