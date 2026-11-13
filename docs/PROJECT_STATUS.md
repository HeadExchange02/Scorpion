# Project status

**Stage:** planning complete, repository skeleton created. Nothing is runnable yet.

## Done

- Project plan written and reviewed (architecture, database tables, API groups, security, error handling, roadmap).
- Monorepo skeleton: root workspaces and scripts, `backend`, `frontend`, `packages/shared`, `docs`.
- `.gitignore`, `.editorconfig`, `.env.example` files for backend and frontend, `CLAUDE.md`.

## Not done

- No dependencies installed, no lockfile, no app code, no Prisma schema, no CI.
- Open design questions are unanswered (see "Open questions" below).

## Verified

- Folder tree and file contents were checked after creation. Dependencies were not installed, so no script has been run.

## Open questions

Answers change the design. The plan assumed the value in brackets.

1. Playground: test an agent's prompt and model, or run n8n workflows? [prompt and model testing]
2. File management: documents agents read, or a general text editor? [documents for agents, basic text editing]
3. OTP: signup only, or every sign-in? [signup and password-less sign-in]
4. n8n: one shared instance, or one per client? [one shared, room for more]
5. Payments at launch: are Bkash and Nagad merchant accounts approved? Which crypto coin and network? [manual transaction ID confirmation first]
6. Pricing: subscription tiers, prepaid credit, or both? [both]
7. Currency and language: BDT and USD? English and Bangla? [BDT and USD, English first]
8. VIP builder scope: any workflow, or only agents they hired? [only agents they hired]
9. Team size and launch date. [unknown]
10. n8n license terms for running workflows for paying clients. [not verified]
