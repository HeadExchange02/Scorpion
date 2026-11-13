# Remaining tasks

Phases run in order. A phase is finished only when its gate passes.

## Phase 0: Foundations (next)

Gate: sign up, lockout and sign in work; the cross-tenant test passes.

| ID | Task | Done when |
| --- | --- | --- |
| T0.1 | Pin Node, Next.js, Prisma and Better Auth versions; install dependencies per workspace | Lockfile committed, `npm install` clean |
| T0.2 | Environment validation in `backend/src/config` using Zod | Missing variable stops startup with a clear message |
| T0.3 | Prisma schema for Better Auth tables, workspace, membership, plan, subscription, entitlement, auth_throttle, audit_log; first migration on Supabase | Migration applies; client generates |
| T0.4 | Express app: helmet, CORS allowlist, request-id logging, async wrapper, central error handler, response envelope, `/health` | `/health` returns the envelope; errors never leak stack traces |
| T0.5 | Better Auth email OTP in Express, with 5 attempts, 10-minute lockout and resend cooldown stored server-side | Lockout survives restarts and cannot be bypassed by reloading |
| T0.6 | Role and entitlement middleware; audit log writer | Admin-only route refuses a client; action appears in audit log |
| T0.7 | Next.js shell: route groups, Tailwind and HeroUI setup, auth pages, role-gated layouts | Signed-out visitors are redirected; role gate checked server-side |
| T0.8 | Cross-tenant test harness and CI (install, lint, test) | A test proves client A cannot read client B's data |

First action: T0.1.

## Later phases

| Phase | Scope | Gate |
| --- | --- | --- |
| 1 | n8n client, workflow registry, admin publish and unpublish, execution sync, client dashboard | Client sees only own runs; sync survives n8n downtime |
| 2 | Plans, wallet ledger, payments, invoices, quotas | A payment becomes credit once; invoice issued; quota enforced |
| 3 | Agent catalog, provisioning job, custom order flow | A hire creates a working workflow; failed steps clean up |
| 4 | Usage metering, own API keys, assistant, playground, prompt generator | Assistant cannot reach other clients; keys never leave the server |
| 5 | Workflow graph view, VIP builder, file management | Only entitled users can build; uploads are validated |
| 6 | Monitoring assistant, load test, backups, security review | No open critical issues; restore and rollback rehearsed |

Blocked on answers: see "Open questions" in `docs/PROJECT_STATUS.md`. Questions 1, 4 and 5 affect Phases 1 to 4.
