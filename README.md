# Portfolio Web App

A professional personal portfolio website built with modern React and Next.js technologies, including smooth section transitions, responsive UI, and theme support.

## 🧩 Project Summary

- Framework: Next.js 16 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS v4
- Design system: Radix UI primitives + custom components
- Animations: CSS and custom utility components
- Form handling: react-hook-form + zod
- Analytics: @vercel/analytics

## 🚀 Features

- Hero / Introduction section
- About section with animation and details
- Skills visualization
- Projects showcase
- Experience timeline
- Contact form / call-to-action
- Footer and sticky navigation
- Dark/light theme support via `next-themes`
- Responsive mobile-first layout

## 📁 Folder structure

- `app/` - route entry and main page
- `components/` - reusable UI blocks and sections
- `components/sections/` - page sections (Hero, About, Skills, etc.)
- `components/ui/` - shared UI primitives
- `lib/` - constants, utilities, animation helpers
- `styles/` - global CSS and theme assets

## 🛠️ Setup Instructions

1. Install dependencies

```bash
npm install
```

2. Dev server

```bash
npm run dev
```

3. Production build

```bash
npm run build
```

4. Start built app

```bash
npm run start
```

5. Lint checks

```bash
npm run lint
```

## 🔧 Customization

- Update text, data, links in `components/sections/*.tsx`.
- Theme settings are in `components/theme-provider.tsx` and `styles/globals.css`.
- Add or modify UI elements under `components/ui/*`.

## 📦 Dependencies (selected)

- `next`, `react`, `react-dom`
- `tailwindcss`, `@tailwindcss/postcss`
- `@radix-ui/react-*` component primitives
- `lucide-react`, `embla-carousel-react`, `recharts`
- `react-hook-form`, `zod`, `@hookform/resolvers`
- `next-themes`, `@vercel/analytics`

## 🧪 Development notes

- File-based sections are rendered from `app/page.tsx` in order.
- UI components use `class-variance-authority` + `clsx` for variant styles.
- The project uses Radix UI with custom wrappers in `components/ui`.


