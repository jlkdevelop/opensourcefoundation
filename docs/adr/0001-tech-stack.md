# ADR-0001: Technology Stack

**Date:** 2026-04-29  
**Status:** Proposed  
**Deciders:** CTO, CEO  

---

## Context

OpenSource Foundation is a sustainability platform for open-source software. Core flows:

1. OSS maintainers create project profiles
2. Supporters fund projects (one-time or recurring)
3. Maintainers receive payouts and visibility into their supporter base

We are starting from scratch. The stack must be:
- Fast to ship (small team, zero existing code)
- Low operational overhead (no infra team)
- Familiar to the open-source developer audience we serve
- Capable of handling payments, auth, and a public-facing discovery surface

---

## Decision

### Frontend — Next.js 15 + TypeScript

**Choice:** Next.js 15 (App Router) with TypeScript  
**Styling:** Tailwind CSS  
**Components:** shadcn/ui (Radix primitives, copy-owned, no vendor lock-in)

**Why:**
- App Router gives server components for fast project profile pages (SEO-critical)
- TypeScript catches the class of bugs most costly to debug in a payments context
- shadcn/ui is accessible, customizable, and used widely in the OSS community we're targeting
- Avoids a separate frontend/backend split — one repo, one deploy

**Alternatives rejected:**
- Remix: smaller ecosystem, fewer deployment targets
- SvelteKit: excellent DX but smaller hiring pool and fewer payment library integrations
- Separate SPA + API: unnecessary operational overhead at this stage

---

### Backend — Next.js API Routes + Server Actions

**Choice:** Next.js API Routes for webhooks/external integrations; Server Actions for form flows  
**ORM:** Prisma 6  

**Why:**
- Co-located with the frontend — no separate service to deploy or version
- Prisma gives type-safe DB access and schema migrations as code
- Server Actions simplify auth-gated mutations without manual API plumbing
- API Routes remain for Stripe webhooks and future public API surface

**Alternatives rejected:**
- tRPC: adds complexity before we have multi-client needs
- Separate Express/Fastify API: premature separation of concerns
- Drizzle ORM: good but Prisma has more complete migration tooling and wider team familiarity

---

### Database — PostgreSQL (Neon)

**Choice:** PostgreSQL, hosted on Neon (serverless Postgres)  
**Access:** via Prisma ORM

**Why:**
- Relational model fits the domain: users, projects, fundings, payouts, supporters all have clear foreign-key relationships
- Neon is Vercel's native Postgres integration — zero-config branching per PR preview, connection pooling included
- Prisma migrations keep schema evolution auditable in git
- Standard SQL means no vendor-specific query syntax to learn

**Alternatives rejected:**
- PlanetScale: MySQL dialect, no foreign keys by default — wrong fit for a payments schema
- Supabase: excellent product but adds a second control plane; Neon + Prisma keeps the stack tighter
- MongoDB: schema flexibility not needed; payment data demands referential integrity

---

### Auth — Auth.js v5 (NextAuth)

**Choice:** Auth.js v5 with GitHub OAuth as primary provider, email magic-link as fallback  
**Session storage:** Database sessions (PostgreSQL)

**Why:**
- GitHub OAuth is the natural identity for OSS maintainers — they already have accounts
- Auth.js is purpose-built for Next.js App Router; session tokens in DB rather than JWT for easier revocation
- Magic-link email covers supporters who may not have GitHub accounts
- No third-party auth vendor costs; we own the auth tables

**Alternatives rejected:**
- Clerk: excellent DX but external vendor dependency and per-MAU pricing
- Auth0: same concern — adds cost and a third-party data processor to a platform handling payments
- Lucia: lower-level, more assembly required; Auth.js gives us GitHub + email in one package

---

### Payments — Stripe

**Choice:** Stripe with Stripe Connect (Express accounts for maintainers)  
**Recurring billing:** Stripe Subscriptions  
**One-time:** Stripe Payment Intents  

**Why:**
- Industry standard; strongest documentation and TypeScript SDK
- Stripe Connect Express handles payout compliance (KYC, tax forms) without us becoming a money transmitter
- Supports both one-time tips and monthly recurring sponsorships out of the box
- Webhook-driven event model integrates cleanly with Next.js API Routes

**Alternatives rejected:**
- Paddle: simpler but less control over the payout/Connect side
- Lemon Squeezy: OSS-friendly but limited Connect-equivalent for multi-party payouts
- Manual bank transfers: not viable at any scale

---

### Hosting — Vercel

**Choice:** Vercel (Pro plan when needed; Hobby for initial development)

**Why:**
- Native Next.js deployment — zero config
- Preview deployments per PR are invaluable for design/product review
- Edge network covers the static project profile pages efficiently
- Neon Postgres integrates directly from the Vercel dashboard

**Alternatives rejected:**
- Railway: good but no equivalent to Vercel's preview deploy UX
- Fly.io: requires Dockerfile and more ops overhead
- Self-hosted: no ops capacity at this stage

---

### CI/CD — GitHub Actions + Vercel

**Choice:** GitHub Actions for test/lint/type-check; Vercel for deploy previews and production

**Workflow:**
1. PR opened → GitHub Actions runs `tsc --noEmit`, `eslint`, `prisma validate`, and unit tests
2. Vercel bot posts preview URL to the PR
3. Merge to `main` → Vercel auto-deploys to production

**Why:**
- Free for public repos (OSS-aligned)
- Vercel handles the deploy side; GH Actions handles correctness gates
- Simple enough to maintain without a dedicated DevOps engineer

---

## Full Stack Summary

| Layer       | Choice                        |
|-------------|-------------------------------|
| Framework   | Next.js 15 (App Router)       |
| Language    | TypeScript                    |
| Styling     | Tailwind CSS + shadcn/ui      |
| ORM         | Prisma 6                      |
| Database    | PostgreSQL (Neon)             |
| Auth        | Auth.js v5 (GitHub + email)   |
| Payments    | Stripe + Stripe Connect       |
| Hosting     | Vercel                        |
| CI          | GitHub Actions                |

---

## Consequences

**Positive:**
- Entire stack is TypeScript end-to-end — one language, shared types via Prisma's generated client
- Vercel + Neon + GitHub Actions = near-zero infra management
- All choices are mainstream in the OSS dev community we're building for
- Stripe Connect offloads payment compliance risk

**Risks and mitigations:**
- Vercel vendor lock-in: Next.js is portable; if we need to migrate, we target Node.js adapter + managed Postgres elsewhere
- Stripe dependency: payments are inherently coupled to a processor; Stripe is the lowest-risk choice at this stage
- Neon cold starts: use connection pooling (PgBouncer, included in Neon) for consistent latency

---

## Next Steps (pending CEO approval)

1. **[OPE-3]** Scaffold repo: `create-next-app`, Prisma init, Tailwind, shadcn/ui, GitHub Actions CI
2. **[OPE-4]** Auth: Auth.js v5 with GitHub OAuth + magic-link email
3. **[OPE-5]** Database schema: users, projects, fundings, payouts, supporters
4. Stripe account setup + Connect onboarding flow (OPE-7)
