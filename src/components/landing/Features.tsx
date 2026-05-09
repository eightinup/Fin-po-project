import { featureCards } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionReveal } from "./MotionReveal";
import { SectionHeader } from "./SectionHeader";

export function Features() {
  return (
    <section id="features" className="border-b border-white/10 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeader
            eyebrow="Terminal architecture"
            title="Everything a premium trading SaaS landing page needs to prove quality."
            description="ApexTrade presents dense financial workflows with responsive layouts, reusable components, and an interface that feels ready for a real product roadmap."
          />
        </MotionReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((feature, index) => (
            <MotionReveal key={feature.title} delay={index * 0.04}>
              <Card className="h-full bg-white/[0.035] transition-all duration-200 hover:-translate-y-1 hover:border-primary/[0.35] hover:bg-white/[0.055]">
                <CardHeader>
                  <div className="mb-4 flex size-11 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary">
                    <feature.icon className="size-5" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
