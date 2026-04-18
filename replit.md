# Car Rental Template

## Overview

A pure Vite + React frontend project — no fullstack setup, no backend, no database. Clean for GitHub just like a standalone Vite project.

## Stack

- **Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + shadcn/ui
- **Routing**: Wouter
- **Animations**: Framer Motion
- **State**: TanStack React Query (client-side only)
- **Forms**: React Hook Form + Zod
- **TypeScript**: 5.8

## Key Commands

- `pnpm --filter @workspace/car-rental-template run dev` — run locally in Replit
- `npm run dev` — run standalone (after cloning from GitHub)
- `npm run build` — build for production
- `npm run preview` — preview production build

## Git / GitHub

The `.gitignore` is configured to exclude all Replit monorepo boilerplate. When pushed to GitHub, only `artifacts/car-rental-template/` contents are visible — just Vite config, package.json, src/, public/, etc. No server, no lib, no scripts.

## Project Structure

```
artifacts/car-rental-template/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── components/ui/   # shadcn/ui components
│   ├── pages/
│   ├── hooks/
│   └── lib/
├── public/
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```
