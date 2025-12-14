import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gaxtonAvatar from "@/assets/gaxton-avatar.png";
const XIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>;
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />

      <div className="container relative z-10 px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Social Proof - X Profile */}
          <a href="https://x.com/GaxTon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-border/50 bg-card/40 backdrop-blur-sm mb-10 animate-fade-up hover:border-primary/30 hover:bg-card/60 transition-all duration-300 group">
            <div className="relative">
              <img alt="GaxTon" className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300" src="/lovable-uploads/0b077417-17d2-480a-9221-bd2764ca69cf.jpg" />
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                <XIcon />
              </div>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold text-foreground">GaxTon</span>
                <svg viewBox="0 0 22 22" className="w-4 h-4 text-primary" fill="currentColor">
                  <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
                </svg>
              </div>
              <span className="text-xs text-muted-foreground">@GaxTon_Official</span>
            </div>
            <div className="ml-2 text-xs text-muted-foreground border-l border-border/50 pl-3">
              <span className="text-foreground font-medium">1.5K</span> followers
            </div>
          </a>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 animate-fade-up animation-delay-200">
            <span className="text-foreground">Master Trading Through</span>
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
              View Pricing
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>;
};
export default Hero;