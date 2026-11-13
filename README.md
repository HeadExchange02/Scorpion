# Scorpion SaaS

A multi-tenant control plane for n8n AI workflows. Admins build, publish and bill workflows. Each client sees only their own workflows, executions, token usage, files and orders.

**Status:** planning is complete and this repository holds the folder skeleton only. No feature code exists yet, and `npm run dev` will not run until Phase 0 installs the app dependencies. See `docs/PROJECT_STATUS.md`.

## Structure

```text
scorpion/
├── package.json          # npm workspaces, dev and install:all scripts
├── CLAUDE.md             # conventions for AI coding agents
├── docs/                 # status, decisions, tasks, handover
├── packages/
│   └── shared/           # Zod schemas, role and plan keys, constants
├── backend/              # Express API process + worker process
│   ├── prisma/           # schema and migrations (written in Phase 0)
│   ├── tests/
│   └── src/
│       ├── config/  routes/  controllers/  services/
│       ├── integrations/ # n8n, payments, email, llm: the only code that calls outside services
│       ├── jobs/  middlewares/  validators/  utils/
│       ├── server.js     # API process
│       └── worker.js     # job process
└── frontend/             # Next.js App Router
    └── src/
        ├── app/          # route groups: (marketing) (auth) (client) (admin)
        └── components/  hooks/  services/  lib/  context/  store/  styles/  utils/
```

## Stack

JavaScript + JSX (no TypeScript), Next.js, React, Tailwind CSS, HeroUI, Lucide, Recharts, Express, Supabase Postgres with Prisma, Better Auth, n8n. Reasons for each choice are in `docs/TECHNICAL_DECISIONS.md`.

## Getting started

Requires Node 22 or newer.

```bash
npm install                                  # installs every workspace
cp backend/.env.example backend/.env         # fill in values, never commit them
cp frontend/.env.example frontend/.env.local
npm run dev                                  # API and frontend together (after Phase 0)
```

Details: `docs/DEVELOPMENT_GUIDE.md`.

## Docs

| File | What it holds |
| --- | --- |
| `docs/PROJECT_STATUS.md` | What exists now and what has been verified |
| `docs/TECHNICAL_DECISIONS.md` | Architecture decisions and the reason for each |
| `docs/REMAINING_TASKS.md` | Phased roadmap with gates; Phase 0 broken into tasks |
| `docs/DEVELOPMENT_GUIDE.md` | Setup, scripts, environment, conventions |
| `docs/AI_AGENT_HANDOVER.md` | Starting point for any AI agent continuing the work |

The full project plan (architecture and roadmap diagrams, database tables, API groups, security controls) is the "Scorpion SaaS — Refined Project Plan" document in Claude.
