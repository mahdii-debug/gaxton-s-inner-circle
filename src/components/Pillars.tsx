import { Users, Phone, PlayCircle, Radio } from "lucide-react";

const Pillars = () => {
  const pillars = [
    {
      icon: Users,
      title: "Private Community",
      description: "A curated network of serious traders. Real discussions, zero noise. Your edge starts with who you surround yourself with."
    },
    {
      icon: Phone,
      title: "Daily Calls",
      description: "Live voice sessions every trading day. Market analysis, trade reviews, and real-time Q&A with GaxTon and senior members."
    },
    {
      icon: PlayCircle,
      title: "Video Modules",
      description: "Comprehensive trading education. From risk frameworks to psychological mastery — structured learning at your own pace."
    },
    {
      icon: Radio,
      title: "Live Commentary",
      description: "Real-time market insights during key sessions. Understand the 'why' behind moves as they happen."
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />
      
      <div className="container px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs font-medium text-primary uppercase tracking-widest mb-4">
            The Foundation
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            Four pillars of edge
          </h2>
        </div>

        {/* Pillars grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.title}
              className="glass-card-glow p-10 md:p-12 group min-h-[280px] flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
