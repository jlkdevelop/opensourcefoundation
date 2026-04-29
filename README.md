# OpenSource Foundation

A sustainability platform for open-source software. Maintainers create project profiles, supporters fund them, and payouts flow through Stripe Connect.

[![CI](https://github.com/jlkdevelop/opensourcefoundation/actions/workflows/ci.yml/badge.svg)](https://github.com/jlkdevelop/opensourcefoundation/actions/workflows/ci.yml)

## Stack

| Layer       | Choice                       |
|-------------|------------------------------|
| Framework   | Next.js 15 (App Router)      |
| Language    | TypeScript                   |
| Styling     | Tailwind CSS + shadcn/ui     |
| ORM         | Prisma 7                     |
| Database    | PostgreSQL (Neon)            |
| Auth        | Auth.js v5 (GitHub + email)  |
| Payments    | Stripe + Stripe Connect      |
| Hosting     | Vercel                       |
| CI          | GitHub Actions               |

See [`docs/adr/0001-tech-stack.md`](docs/adr/0001-tech-stack.md) for the full architecture decision record.

## Quick Start (< 10 min)

### Prerequisites

- Node.js 20+
- npm 10+
- A PostgreSQL database (local or [Neon](https://neon.tech) free tier)

### 1. Clone and install

```bash
git clone https://github.com/jlkdevelop/opensourcefoundation.git
cd opensourcefoundation
npm install
```

### 2. Configure environment

```bash
cp .env.example .env
```

Open `.env` and fill in at minimum:

| Variable | Where to get it |
|---|---|
| `DATABASE_URL` | Neon dashboard → Connection string (pooled) |
| `AUTH_SECRET` | `openssl rand -hex 32` |
| `AUTH_GITHUB_ID` / `AUTH_GITHUB_SECRET` | [GitHub OAuth app](https://github.com/settings/developers) (callback: `http://localhost:3000/api/auth/callback/github`) |

Leave Stripe and email empty for local UI development — they are only needed for the funding flow.

### 3. Set up the database

```bash
npx prisma migrate dev
```

### 4. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build |
| `npm run type-check` | TypeScript validation |
| `npm run lint` | ESLint |
| `npm run test` | Vitest unit tests |
| `npm run test:watch` | Vitest in watch mode |
| `npm run db:validate` | Validate Prisma schema |

## Project Structure

```
app/           Next.js App Router (pages, API routes, server actions)
components/    Shared UI components
prisma/        Prisma schema + migrations
docs/adr/      Architecture Decision Records
__tests__/     Unit tests (Vitest)
```

## Contributing

1. Fork and create a feature branch.
2. Run `npm run type-check && npm run lint && npm run test` before pushing.
3. Open a PR — CI runs automatically and Vercel posts a preview URL.

## License

MIT — see [LICENSE](LICENSE).
