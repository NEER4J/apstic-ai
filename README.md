# Apstic

Marketing website and content admin for Apstic, an AI workflow and automation studio. The site explains the work Apstic does, collects project enquiries, and publishes blog and careers content managed in Supabase.

## Stack

- Next.js App Router, React, and TypeScript
- Tailwind CSS
- Supabase for authentication and content data
- Vercel Analytics

## Run locally

1. Install Node.js 20 or later.
2. Install dependencies:

   ```bash
   npm ci
   ```

3. Copy `.env.example` to `.env.local` and set your Supabase project values.
4. Start the development server:

   ```bash
   npm run dev
   ```

The site runs at [http://localhost:3000](http://localhost:3000).

## Environment variables

- `NEXT_PUBLIC_SITE_URL`: canonical site URL, such as `http://localhost:3000` locally and `https://apstic.com` in production.
- `NEXT_PUBLIC_SUPABASE_URL`: the Supabase project URL.
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`: the project's publishable key. A legacy anon key can be stored under this variable name.

The Supabase public variables are needed during the build and at runtime. Set them for the Vercel environment that builds the site. Do not put a service-role key in a `NEXT_PUBLIC_` variable.

## Project areas

- `components/home-page.tsx`: homepage sections and workflow examples.
- `components/header.tsx` and `components/footer.tsx`: shared site navigation.
- `app/contact`: project enquiry page and form.
- `app/blogs` and `app/careers`: Supabase-backed public content.
- `app/protected`: authenticated content administration.
- `lib/supabase`: browser, server, and request-session clients.

## Checks

```bash
npm run lint
npm run build
```

The build requires the Supabase public environment variables above.
