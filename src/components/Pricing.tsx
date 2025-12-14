import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const Pricing = () => {
  const tiers = [
    {
      name: "Core",
      price: "$500",
      period: "/month",
      description: "Essential access for committed traders",
      features: [
        "Weekly group calls",
        "Access to main community",
        "Full video module library",
        "Trading frameworks & resources"
      ],
      cta: "Get Started",
      featured: false
    },
    {
      name: "Elite",
      price: "$750",
      period: "/month",
      description: "For traders ready to accelerate",
      features: [
        "Daily group calls",
        "Exclusive inner circle access",
        "Main community access",
        "GaxTon's personal signals",
        "Full video module library",
        "Priority support"
      ],
      cta: "Join Elite",
      featured: true
    },
    {
      name: "1:1 Mastery",
      price: "$1,000",
      period: "/month",
      description: "Direct mentorship with GaxTon",
      features: [
        "Weekly 1:1 coaching sessions",
        "Live trading with GaxTon",
        "Daily group calls",
        "Exclusive & main community",
        "GaxTon's personal signals",
        "Full video module library",
        "Direct line to GaxTon"
      ],
      cta: "Apply Now",
      featured: false
    }
  ];

  return (
    <section id="pricing" className="py-32 relative">
      <div className="container px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium text-primary uppercase tracking-widest mb-4">
            Investment
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
            Choose your level
          </h2>
          <p className="text-muted-foreground text-lg">
            Every tier includes lifetime access to our trading frameworks and risk management systems.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                tier.featured 
                  ? 'bg-gradient-to-b from-primary/20 via-card/80 to-card/60 border-2 border-primary/40 shadow-2xl shadow-primary/10' 
                  : 'glass-card'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {tier.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.featured ? "hero" : "heroOutline"} 
                size="lg"
                className="w-full"
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-muted-foreground mt-12 max-w-md mx-auto">
          All plans are billed monthly. Cancel anytime. Prices in USD.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
