# Prisma

The schema is written in Phase 0 (task T0.3), after the Prisma version is pinned.
Prisma's datasource configuration differs between major versions, so the version
is chosen first and `schema.prisma` is written for exactly that version.

Connection setup for Supabase:

- `DATABASE_URL`: pooled connection string, used by the running app.
- `DIRECT_URL`: direct connection string, used for migrations and by the job queue.

Planned tables are listed in section 7 of the project plan (see `docs/TECHNICAL_DECISIONS.md`).
Every business table carries `workspace_id`. Money and token cost are stored as integers
in the smallest unit, never as floats.
