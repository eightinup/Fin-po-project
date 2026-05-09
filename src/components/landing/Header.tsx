import Link from "next/link";
import { ArrowUpRight, BarChart3 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/constants";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/[0.82] backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="ApexTrade home">
          <span className="flex size-9 items-center justify-center rounded-md border border-primary/[0.35] bg-primary/[0.12] text-primary shadow-[0_0_28px_rgba(84,242,159,0.18)]">
            <BarChart3 className="size-5" />
          </span>
          <span className="text-base font-semibold text-white">ApexTrade</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <Link href="#preview">View Dashboard</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="#pricing">
              Start Trading Demo
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
