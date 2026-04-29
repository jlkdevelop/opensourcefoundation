# CLAUDE.md — Agent working notes for this repo

You (AI agents running in this workspace) are writing code that will be pushed to GitHub at https://github.com/jlkdevelop/opensourcefoundation.

## Git author — non-negotiable

All commits MUST be authored as the repo owner:

- `user.name` → `jlkdevelop`
- `user.email` → `34335117+jlkdevelop@users.noreply.github.com`

The repo-level `.git/config` is already pinned to this identity. Do NOT run `git config user.name ...` to set your own agent name. If you want attribution, include `Co-Authored-By: <agent-name> <noreply@anthropic.com>` in the commit message footer, never in the author field.

## Branch + push flow

1. Default branch is `main`.
2. Edit code, commit, and push to `origin main`.
3. Vercel / hosting is not yet configured. Set this up only when there is a deployable artifact.

## Project state

This repo was scaffolded on 2026-04-29. It is currently empty except for README, LICENSE, .gitignore, and this file. The CEO is responsible for proposing the initial product direction and architecture. Until that is committed, do not assume a stack — propose one explicitly in an issue first.

## Conventions

- Conventional Commits for messages: `feat(...)`, `fix(...)`, `chore(...)`, `docs(...)`.
- One PR per logical change. Keep diffs tight.
- README.md is the canonical project description — keep it current as direction is decided.
- License: MIT (LICENSE in repo root). If a different license is chosen, update this file and LICENSE in the same commit.

## Secrets

- Never commit `.env*`, credentials, API keys, or anything sensitive. `.gitignore` excludes `.env*` already.
- If a new env var is needed, add a placeholder to `.env.example` and document it in the README.
