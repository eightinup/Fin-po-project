import { Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/constants";
import { MotionReveal } from "./MotionReveal";
import { SectionHeader } from "./SectionHeader";

export function Testimonials() {
  return (
    <section className="border-b border-white/10 bg-[#070a0f] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeader
            eyebrow="Portfolio signal"
            title="Designed to look like senior-level product work."
            description="The landing page communicates product thinking, visual polish, and technical restraint before a recruiter even opens the source code."
          />
        </MotionReveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <MotionReveal key={testimonial.name} delay={index * 0.06}>
              <Card className="h-full bg-white/[0.035]">
                <CardContent className="p-5">
                  <Quote className="size-7 text-primary" />
                  <p className="mt-6 text-base leading-7 text-white">
                    {testimonial.quote}
                  </p>
                  <div className="mt-8 border-t border-white/10 pt-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
