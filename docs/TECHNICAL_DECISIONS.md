# Technical decisions

Status "proposed" means the plan chose it but you can overrule it. Change the row and note the date if a decision changes.

| # | Decision | Why | Status |
| --- | --- | --- | --- |
| D1 | JavaScript + JSX, Zod validation at boundaries, ESM in backend and shared | Matches the no-TypeScript rule; Zod gives runtime safety | Decided |
| D2 | One repo, npm workspaces: `backend`, `frontend`, `packages/shared` | Shared validation schemas and constants; one install | Decided |
| D3 | Express is the single API, with a separate worker process from the same code | n8n sync, webhooks, payment callbacks and jobs need a long-running server | Proposed |
| D4 | Better Auth with email OTP, hosted in Express | Users live in our own Postgres; Firebase would add a second user store | Proposed |
| D5 | Supabase Postgres with Prisma; pooled URL at runtime, direct URL for migrations | Standard setup; Prisma version pinned first | Decided |
| D6 | Tenant isolation enforced in the service layer, with RLS as a second layer | Prisma's database role bypasses RLS, so RLS alone does not protect data | Decided |
| D7 | Background jobs on pg-boss (Postgres) | No Redis to run in v1; move to BullMQ plus Redis if volume demands | Proposed |
| D8 | Live updates by Server-Sent Events from Express | Keeps every access check in one place | Proposed |
| D9 | Roles are admin and client; VIP is an entitlement | Access can be granted or revoked without code changes | Decided |
| D10 | Wallet as an append-only ledger with idempotency keys | Safe retries, auditable balance | Decided |
| D11 | Workflow snapshots are sanitized before storage | Raw n8n JSON can hold keys and private URLs | Decided |
| D12 | n8n API key is server-side only; clients reach n8n data through the workflow mapping table | The key can reach every client's workflows | Decided |
| D13 | Token usage is reported by workflows to a signed `/internal/usage` endpoint | n8n does not provide per-client cost data | Proposed |
| D14 | Payments as adapters behind one interface; manual transaction ID confirmation first | Merchant account approval takes time | Proposed |
| D15 | Client API keys encrypted with AES-256-GCM, master key outside the database | A database leak alone must not expose keys | Decided |
