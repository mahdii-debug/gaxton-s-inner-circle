import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 subtle-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow animation-delay-200" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container relative z-10 px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/40 backdrop-blur-sm mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
              Application-Only Access
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 animate-fade-up animation-delay-200">
            <span className="text-foreground">Mastery Through</span>
            <br />
            <span className="gradient-text-primary">Discipline</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up animation-delay-400">
            A private community for serious traders focused on risk management, 
            psychological edge, and consistent execution. No signals. No shortcuts.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-600">
            <Button variant="hero" size="xl">
              Request Access
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Framework
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 pt-12 border-t border-border/30">
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div className="text-center animate-fade-up animation-delay-200">
                <div className="text-2xl md:text-3xl font-semibold text-foreground">4+</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">Years Trading</div>
              </div>
              <div className="text-center animate-fade-up animation-delay-400">
                <div className="text-2xl md:text-3xl font-semibold text-foreground">150</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">Members</div>
              </div>
              <div className="text-center animate-fade-up animation-delay-600">
                <div className="text-2xl md:text-3xl font-semibold text-foreground">24/7</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">Market Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
