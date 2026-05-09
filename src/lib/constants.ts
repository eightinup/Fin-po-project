import {
  Activity,
  BellRing,
  CandlestickChart,
  CircleDollarSign,
  Gauge,
  Layers3,
  LockKeyhole,
  Radar,
  ShieldCheck,
  Sparkles,
  WalletCards,
  Zap,
} from "lucide-react";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Stats", href: "#stats" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const featureCards = [
  {
    title: "Multi-market command center",
    description:
      "Track spot, derivatives, watchlists, and portfolio exposure from one responsive trading workspace.",
    icon: CandlestickChart,
  },
  {
    title: "Portfolio intelligence",
    description:
      "Understand allocation, realized PnL, drawdown, and asset concentration with clean analytics.",
    icon: WalletCards,
  },
  {
    title: "Mock live market engine",
    description:
      "Portfolio-ready simulated prices, order books, and recent trades without real execution risk.",
    icon: Activity,
  },
  {
    title: "Risk-first interface",
    description:
      "Clear states, market context, and precise controls designed for confident decision making.",
    icon: ShieldCheck,
  },
  {
    title: "Fast terminal workflows",
    description:
      "Keyboard-friendly layouts, focused panels, and dense information design for serious operators.",
    icon: Zap,
  },
  {
    title: "Premium SaaS foundation",
    description:
      "Built with reusable components, typed mock data, smooth motion, and production-style structure.",
    icon: Layers3,
  },
] as const;

export const stats = [
  { value: "$4.8B", label: "Simulated daily volume" },
  { value: "99.9%", label: "Interface uptime target" },
  { value: "24 ms", label: "Mock data refresh latency" },
  { value: "38+", label: "Tracked market signals" },
] as const;

export const pricingPlans = [
  {
    name: "Starter",
    price: "$19",
    description: "For personal portfolio monitoring and market discovery.",
    features: ["Realtime mock watchlists", "Portfolio overview", "Basic alerts"],
    highlighted: false,
    icon: Gauge,
  },
  {
    name: "Pro Terminal",
    price: "$49",
    description: "For active traders who need deeper market context.",
    features: ["Advanced order book UI", "PnL analytics", "Priority terminal layouts"],
    highlighted: true,
    icon: Sparkles,
  },
  {
    name: "Desk",
    price: "$149",
    description: "For teams building internal trading and reporting workflows.",
    features: ["Team dashboards", "Audit-ready activity feed", "Custom data modules"],
    highlighted: false,
    icon: CircleDollarSign,
  },
] as const;

export const testimonials = [
  {
    quote:
      "ApexTrade feels like the kind of terminal a serious fintech team would actually ship.",
    name: "Maya Chen",
    role: "Product Lead, Northstar Capital",
  },
  {
    quote:
      "The interface gives dense market information without making the operator fight the screen.",
    name: "Daniel Frost",
    role: "Senior Frontend Consultant",
  },
  {
    quote:
      "It is exactly the portfolio piece I look for: polished, typed, responsive, and commercially believable.",
    name: "Elena Brooks",
    role: "Engineering Manager",
  },
] as const;

export const faqs = [
  {
    question: "Does ApexTrade connect to real exchanges?",
    answer:
      "No. This portfolio build uses typed mock data only. It is designed to demonstrate product quality without enabling real trades or financial operations.",
  },
  {
    question: "Is this only a landing page?",
    answer:
      "Phase 1 ships the premium marketing website. The dashboard, terminal, portfolio, transactions, and settings flows are planned for the next phases.",
  },
  {
    question: "What makes it portfolio-ready?",
    answer:
      "The project uses App Router, TypeScript, Tailwind CSS, reusable UI primitives, structured mock data, responsive layouts, and motion with a commercial SaaS presentation.",
  },
  {
    question: "Can it become a real product later?",
    answer:
      "Yes. The structure leaves clear boundaries for auth UI, mock API adapters, Zustand state, TanStack Query, and future dashboard routes.",
  },
] as const;

export const complianceItems = [
  { label: "Read-only demo", icon: LockKeyhole },
  { label: "Mock execution", icon: Radar },
  { label: "Configurable alerts", icon: BellRing },
] as const;
