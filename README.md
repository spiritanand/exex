# EXEX - Ecommerce app

Next.js 14 (App Router) repo for an Ecommerce app using NeonDB (Postgres) and Next-Auth for authentication.

## TODO

- [x] Deploy (Vercel)
- [x] Set up a database (Neon)
- [x] Safe env variables (T3 Env)
- [x] Form for adding new products (Server Actions)
- [x] Add authentication (Next-Auth)
- [x] Set up DB schema
- [x] Basic UI for displaying all products using DB
- [x] "taint" (server-only), security

## Getting Started locally

1. Clone the repo

```bash
git clone
```

2. Install dependencies

```bash
cd exex
pnpm i
```

3. Copy `.env.example` to `.env` and fill in the values

```bash
cp .env.example .env
```

4. Run the app

```bash
pnpm dev
```

## Challenges for you

- landing page
- product description page
- image uploading (uploadthing/S3)
- user (route groups nextjs)
- cart
- checkout/payment integration