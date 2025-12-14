import { TrendingUp, Shield, Brain } from "lucide-react";

const Philosophy = () => {
  const principles = [
    {
      icon: Shield,
      title: "Risk First",
      description: "Every position starts with defining the exit. Capital preservation enables compounding. The best trade is often no trade."
    },
    {
      icon: Brain,
      title: "Psychology Over Strategy",
      description: "Execution separates winners from analysts. We train emotional regulation, not just pattern recognition."
    },
    {
      icon: TrendingUp,
      title: "Asymmetric Thinking",
      description: "Small losses, outsized wins. We focus on setups where the risk-reward fundamentally favors patience."
    }
  ];

  return (
    <section id="philosophy" className="py-32 relative">
      <div className="container px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <p className="text-xs font-medium text-primary uppercase tracking-widest mb-4">
            Philosophy
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
            Trading is a game of survival, then compounding
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            GaxTon's approach is built on a simple premise: most traders fail because 
            they focus on entries, not exits. They chase returns instead of managing risk. 
            They react to markets instead of preparing for them.
          </p>
        </div>

        {/* Principles grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <div 
              key={principle.title}
              className="glass-card-glow p-8 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <principle.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {principle.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="glow-line mt-20" />
      </div>
    </section>
  );
};

export default Philosophy;
