import { Users, BarChart3, MessageSquare, BookOpen } from "lucide-react";

const Membership = () => {
  const features = [
    {
      icon: Users,
      title: "Private Community",
      description: "A vetted group of serious traders. No noise, no spam, no moonboy culture. Just focused discussion on markets and strategy."
    },
    {
      icon: BarChart3,
      title: "Trade Breakdowns",
      description: "Detailed analysis of real trades — entries, exits, and most importantly, the thinking behind each decision."
    },
    {
      icon: MessageSquare,
      title: "Live Commentary",
      description: "Real-time market analysis during key sessions. Not signals — context and framework for making your own decisions."
    },
    {
      icon: BookOpen,
      title: "Risk Frameworks",
      description: "Structured approaches to position sizing, portfolio heat, and psychological triggers. The edge that compounds."
    }
  ];

  return (
    <section id="membership" className="py-32 relative bg-gradient-to-b from-transparent via-muted/20 to-transparent">
      <div className="container px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium text-primary uppercase tracking-widest mb-4">
            Membership
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
            What you get access to
          </h2>
          <p className="text-muted-foreground text-lg">
            This is not a signal service. It's a framework for developing 
            your own edge through structured learning and community accountability.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="glass-card p-8 group hover:border-border transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                  <feature.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emphasis box */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="glass-card p-8 text-center border-primary/20">
            <p className="text-sm text-muted-foreground italic">
              "The goal is not to give you fish. It's to make you a better fisherman — 
              one who understands the water, the weather, and knows when not to cast."
            </p>
            <p className="text-xs text-primary mt-4 font-medium">— GaxTon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
