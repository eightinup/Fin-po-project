import Link from "next/link";
import { BarChart3, BriefcaseBusiness, Code2, Mail, MoveRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#05070a]">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Link href="/" className="flex items-center gap-3" aria-label="ApexTrade home">
              <span className="flex size-9 items-center justify-center rounded-md border border-primary/[0.35] bg-primary/[0.12] text-primary">
                <BarChart3 className="size-5" />
              </span>
              <span className="text-base font-semibold text-white">ApexTrade</span>
            </Link>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
              A premium mock crypto trading dashboard for portfolio presentation,
              SaaS UI practice, and senior-level frontend architecture.
            </p>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-end">
            <Button asChild>
              <Link href="#pricing">
                Start Trading Demo
                <MoveRight className="size-4" />
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              {[
                { label: "Code", icon: Code2, href: "#" },
                { label: "Portfolio", icon: BriefcaseBusiness, href: "#" },
                { label: "Email", icon: Mail, href: "mailto:hello@apextrade.dev" },
              ].map((item) => (
                <Button
                  key={item.label}
                  asChild
                  variant="secondary"
                  size="icon"
                  aria-label={item.label}
                >
                  <Link href={item.href}>
                    <item.icon className="size-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>(c) 2026 ApexTrade Terminal. Mock data only.</div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
