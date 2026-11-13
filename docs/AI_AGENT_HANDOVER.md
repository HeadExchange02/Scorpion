# AI agent handover

Last updated when the repository skeleton was created. Verify the repository against this note before changing anything; if they differ, the repository wins and this note should be corrected.

## Project summary

Scorpion SaaS is a multi-tenant control plane for n8n AI workflows. Admins create, publish and bill workflows. Clients see only their own workflows, executions, token usage, files and orders. Clients can hire ready agents or order custom ones, top up credit, bring their own API keys, and pay by Bkash, Nagad or crypto.

## Current state

- Verified: folder skeleton, workspace `package.json` files, env examples, `.gitignore`, docs.
- Not done: dependency install, any application code, Prisma schema, CI.
- Nothing is runnable yet.

## Inspect first

1. `CLAUDE.md`: conventions that must be preserved.
2. `docs/TECHNICAL_DECISIONS.md`: decisions and reasons.
3. `docs/REMAINING_TASKS.md`: Phase 0 task list.
4. `docs/PROJECT_STATUS.md`: open questions and their assumed answers.

## Do not repeat

Planning and folder layout are done. Do not restructure folders without a recorded reason in `docs/TECHNICAL_DECISIONS.md`.

## First task

T0.1 in `docs/REMAINING_TASKS.md`: pin versions and install dependencies per workspace. Pin Prisma before writing `schema.prisma`.

## Verification

```bash
git status
npm install
npm run lint
npm run test
```

## Constraints to preserve

JavaScript and JSX only; Express is the only caller of outside services; every business table and query is scoped by `workspace_id`; secrets never committed; money stored as integers; the n8n key never reaches the browser.
