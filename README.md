# ApexTrade Terminal

ApexTrade Terminal is a premium dark SaaS landing page for a mock crypto trading platform. It is built as a portfolio-grade frontend project with a commercial trading-terminal visual style, typed mock market data, reusable UI components, and a responsive layout.

No real trading, exchange connections, payments, or financial operations are included.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn-style UI primitives
- Framer Motion
- Lucide React
- Recharts dependency prepared for dashboard charts
- Zustand and TanStack Query prepared for later phases

## Phase 1 Scope

- Premium marketing landing page
- Header, hero, features, stats, pricing, testimonials, FAQ, and footer
- Mock dashboard preview with market data, order book, recent trades, and price chart
- Responsive dark SaaS design
- Typed mock data structure

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Next Phase

Phase 2 will add the auth pages and dashboard shell:

- Login, register, and forgot password UI
- Dashboard sidebar and topbar
- Overview page with balance cards, market overview, portfolio chart, and recent activity
