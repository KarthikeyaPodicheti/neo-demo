# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 16 App Router site written in TypeScript. Route files live in `app/`; `app/page.tsx` is the home page and folders such as `app/services/` contain page routes. Shared UI belongs in `components/`, grouped by page when useful (for example, `components/home/Hero.tsx`). Put reusable data, types, and helpers in `lib/`. Static files belong in `public/`; global styles are in `app/globals.css`.

## Build, Test, and Development Commands

- `npm install` installs the locked project dependencies.
- `npm run dev` starts the local development server at `http://localhost:3000`.
- `npm run lint` runs ESLint with the Next.js core-web-vitals and TypeScript rules.
- `npm run build` creates a production build and catches type and route errors.
- `npm run start` serves a completed production build.

Run `npm run lint` and `npm run build` before opening a pull request. There is currently no dedicated automated test suite; use the build plus focused browser checks for changed routes and interactions.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Follow the existing code: two-space indentation, double quotes, semicolons, and `@/` imports. Name React component files and exports in PascalCase (for example, `ServiceCard.tsx`); use camelCase for functions and variables. Keep route folders lowercase. Prefer typed props and shared definitions in `lib/types.ts` over duplicate inline shapes.

Use Tailwind utility classes and the established global CSS patterns for styling. Avoid adding dependencies or broad global styles when a local component change is sufficient.

## Testing Guidelines

For each UI change, verify the affected route at desktop and narrow mobile widths, including navigation, links, keyboard access, and responsive layout. Future tests should be named `*.test.ts(x)` and cover visible behavior rather than implementation details.

## Commit & Pull Request Guidelines

Git history is not available in this checkout, so use concise imperative subjects such as `Add contact form validation`. Keep commits focused. Pull requests should explain the change, list validation performed, link the relevant issue when applicable, and include screenshots for visual updates. Call out configuration or dependency changes.

## Configuration & Security

Keep secrets out of the repository. Store local values in uncommitted `.env.local` files and expose browser-safe values only through `NEXT_PUBLIC_` variables. Review third-party links, contact endpoints, and user-input handling before deployment.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
