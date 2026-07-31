# Physique OS
A private, mobile-first bodybuilding coaching dashboard and workout log. No account, server, or cloud database is required.

## Run
```bash
npm install
npm run dev
```
Open http://localhost:3000. Quality commands: `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, and `npm run test:e2e`.

## Features
- Complete seeded five-day bodybuilding block with exercise prescriptions and muscle mapping.
- Reload-safe set-by-set workout logger, previous results, deterministic double progression, pain adjustments, rest timer, and session summary.
- Daily nutrition, body composition, cardio, steps, water, recovery, and joint tracking.
- Today dashboard, trend charts, adherence/readiness formulas, weekly check-in, exercise library, peak-week checklist, and phase countdown.
- Versioned Dexie/IndexedDB persistence, validated JSON backup/restore, demo data controls, and destructive reset confirmation.
- Installable manifest and offline-aware local UI.

## Architecture and storage
Next.js App Router renders a client-side local-first application. Domain types and tested formulas live in `src/domain`; immutable seed definitions in `src/data`; Dexie schema and migration-safe version upgrades in `src/db`; responsive screens in `src/components`. IndexedDB stores exercises, program days, sessions with individual sets, daily metrics, phases, and preferences. JSON exports are portable and validated with Zod before import.

Data remains in the active browser profile. Export a backup before clearing browser storage.
