import { ChevronDown } from "lucide-react";

import { faqs } from "@/lib/constants";
import { MotionReveal } from "./MotionReveal";
import { SectionHeader } from "./SectionHeader";

export function FAQ() {
  return (
    <section id="faq" className="border-b border-white/10 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeader
            eyebrow="FAQ"
            title="Clear scope, no financial-operation ambiguity."
            description="ApexTrade is built as a portfolio-grade frontend product. The current phase focuses on presentation, architecture, and mock data."
          />
        </MotionReveal>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => (
            <MotionReveal key={faq.question} delay={index * 0.04}>
              <details className="group rounded-lg border border-white/10 bg-white/[0.035] px-5 py-4 open:border-primary/30 open:bg-primary/[0.04]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  {faq.question}
                  <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
