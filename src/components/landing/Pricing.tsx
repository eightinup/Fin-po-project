import Link from "next/link";
import { Check, MoveRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pricingPlans } from "@/lib/constants";
import { MotionReveal } from "./MotionReveal";
import { SectionHeader } from "./SectionHeader";

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-white/10 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeader
            eyebrow="Pricing"
            title="Plans that frame ApexTrade like a real commercial SaaS."
            description="The product is mock-only for now, but the packaging mirrors how a premium fintech dashboard would be sold to operators, pros, and teams."
          />
        </MotionReveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <MotionReveal key={plan.name} delay={index * 0.06}>
              <Card
                className={
                  plan.highlighted
                    ? "relative h-full border-primary/[0.45] bg-primary/[0.08] shadow-[0_24px_70px_rgba(84,242,159,0.1)]"
                    : "h-full bg-white/[0.035]"
                }
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex size-11 items-center justify-center rounded-md border border-white/10 bg-white/[0.05] text-primary">
                      <plan.icon className="size-5" />
                    </div>
                    {plan.highlighted ? <Badge>Most selected</Badge> : null}
                  </div>
                  <CardTitle className="mt-5">{plan.name}</CardTitle>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-semibold text-white">
                      {plan.price}
                    </span>
                    <span className="pb-1 text-sm text-muted-foreground">/mo</span>
                  </div>
                  <div className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <Check className="size-4 text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant={plan.highlighted ? "default" : "secondary"}
                    className="w-full"
                  >
                    <Link href="#preview">
                      Launch demo
                      <MoveRight className="size-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
