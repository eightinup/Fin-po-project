import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { complianceItems } from "@/lib/constants";
import { DashboardPreview } from "./DashboardPreview";
import { MotionReveal } from "./MotionReveal";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 terminal-grid opacity-35" />
      <div className="absolute inset-x-0 top-16 -z-10 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="market-scanline pointer-events-none absolute inset-x-0 top-24 -z-10 h-48 opacity-80" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:pb-20">
        <MotionReveal className="max-w-2xl">
          <Badge>
            <ShieldCheck className="size-3.5" />
            Portfolio-grade trading UI
          </Badge>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Premium crypto trading terminal for real-time market analysis.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            ApexTrade is a premium crypto trading dashboard for monitoring
            markets, managing portfolios, and analyzing trading performance in
            real time.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#pricing">
                Start Trading Demo
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#preview">View Dashboard</Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {complianceItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-muted-foreground"
              >
                <item.icon className="size-4 text-primary" />
                {item.label}
              </div>
            ))}
          </div>
        </MotionReveal>

        <MotionReveal delay={0.12} className="min-w-0">
          <div className="relative">
            <DashboardPreview />
          </div>
        </MotionReveal>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-4 pb-8 sm:grid-cols-3 sm:px-6 lg:px-8">
        {[
          "No real exchange connections",
          "Typed mock market data",
          "Built for portfolio evaluation",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 border-t border-white/10 pt-4 text-sm text-muted-foreground"
          >
            <CheckCircle2 className="size-4 text-primary" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
