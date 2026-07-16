This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Quote Submissions & Admin Dashboard

Product pages have a "Үнийн санал авах" (request a quote) form. Submissions are
stored in Supabase and viewable at [`/admin`](http://localhost:3000/admin).

### 1. Create the Supabase table

In your Supabase project, open **SQL Editor → New query**, paste the contents of
[`supabase/schema.sql`](supabase/schema.sql), and run it.

### 2. Configure environment variables

Create a `.env.local` file in the project root:

```bash
# Supabase → Project Settings → API
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Password used to log in to /admin
ADMIN_PASSWORD=choose-a-strong-password
```

> The service-role key is only used in server-side API routes and is never sent
> to the browser. Row Level Security is enabled on the table, so all access goes
> through these server routes.

### 3. Use it

- Submit a quote from any product page.
- Visit `/admin`, log in with `ADMIN_PASSWORD`, and view/manage submissions
  (filter by status, mark as contacted/done, or delete).

When deploying (e.g. Vercel), add the same three environment variables in the
project settings.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
