# Scorpion SaaS: agent conventions

Inspect existing code before changing anything. Preserve working functionality. Read `docs/AI_AGENT_HANDOVER.md` first, then compare it with the actual repository; the repository wins if they differ.

## Stack and language

- JavaScript and JSX only. No TypeScript. Use Zod at every input boundary and JSDoc on shared functions.
- Frontend: Next.js App Router, React, Tailwind CSS, HeroUI, Lucide, Recharts. Backend: Node.js and Express, ESM (`"type": "module"`).
- Database: Supabase Postgres with Prisma. Auth: Better Auth with email OTP, hosted in Express. Automation: n8n.
- Pin Prisma and other major versions before writing schema or config for them.

## Architecture rules

- The Express backend is the only code that calls n8n, Supabase, payment providers, AI providers and email. Browsers never call them.
- Backend layering: routes, then middleware, then controller (HTTP only), then service (business rules), then Prisma or `integrations/`. No business logic in controllers.
- Every business table has `workspace_id`. Every query is scoped by the workspace from the session. No endpoint accepts a workspace ID from the client.
- Admin rights are a role. VIP access (workflow builder) is an entitlement, not a role.
- Money and token cost are integers in the smallest unit. The wallet is an append-only ledger with idempotency keys.
- API responses use `{ success, message, data, error? }`. Lists use cursor pagination. Payment and order creation require an `Idempotency-Key`.

## Security rules

- Never commit secrets. Only `.env.example` files are tracked.
- The n8n API key and client API keys never reach the browser or logs. Client keys are encrypted at rest and shown only as the last four characters.
- Store a sanitized workflow snapshot for client views, never the raw n8n export.
- The AI assistant gets fixed read-only tools. The server supplies the workspace; the model never does.

## Quality bar

Every screen has loading, empty and error states. Every external call has a timeout and a defined failure behavior. Add or update tests for tenant isolation whenever a query changes. Update `docs/PROJECT_STATUS.md` when a task finishes.
