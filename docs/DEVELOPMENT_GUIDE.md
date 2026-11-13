# Development guide

## Requirements

- Node 22 or newer, npm 10 or newer.
- A Supabase project and an n8n instance (from Phase 0 and Phase 1 respectively).

## Setup

```bash
npm install
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local
```

Fill in the values. Only the `.example` files are tracked by git.

## Scripts (root)

| Script | What it does |
| --- | --- |
| `npm run dev` | Starts backend (nodemon) and frontend together with concurrently |
| `npm run dev:worker` | Starts the job worker with nodemon |
| `npm run install:all` | Installs every workspace (same as `npm install`, kept for convenience) |
| `npm run build` | Builds the frontend |
| `npm run lint` / `npm run test` | Runs each workspace's script when it has one |

**Current state:** the app dependencies are not installed yet, so `npm run dev` does not work until task T0.1 in `docs/REMAINING_TASKS.md` is done.

## Conventions

- JavaScript and JSX only. Validate input with the Zod schemas in `packages/shared`.
- Follow the layering and tenant rules in `CLAUDE.md`.
- Code that calls an outside service lives only in `backend/src/integrations/`, so it can be mocked in tests.
- Never commit secrets or `.env` files.

## Environments

Local, staging and production each have their own database, n8n workspace and secrets. Frontend and API share a parent domain (`app.` and `api.` subdomains) so the auth cookie works across both.
