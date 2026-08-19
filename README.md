# Edenic World

Web app for the Edenic World kids' brand (Nova, Bloo & Pinki) — songs, interactive learning stages, and browser games in one place.

## Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript, Turbopack)
- [Tailwind CSS](https://tailwindcss.com)
- [Prisma](https://www.prisma.io) ORM + PostgreSQL
- [Phaser](https://phaser.io) for the in-browser games

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

A `DATABASE_URL` is required in `.env` once the app actually queries the database (see `prisma/schema.prisma`); it isn't needed just to run the dev server.

## Useful commands

```bash
npx prisma generate     # regenerate the Prisma client after editing the schema
npx prisma migrate dev  # apply schema changes to a real database
```
