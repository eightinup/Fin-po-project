import { BarChart4, Cpu, LineChart, TrendingUp } from "lucide-react";

import { stats } from "@/lib/constants";
import { MotionReveal } from "./MotionReveal";

const icons = [TrendingUp, Cpu, LineChart, BarChart4] as const;

export function Stats() {
  return (
    <section id="stats" className="border-b border-white/10 bg-[#070a0f] py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = icons[index];

            return (
              <MotionReveal key={stat.label} delay={index * 0.05}>
                <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <Icon className="size-5 text-primary" />
                    <span className="font-mono text-xs text-muted-foreground">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="mt-8 text-3xl font-semibold text-white">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
