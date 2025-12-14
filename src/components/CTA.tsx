import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-32 relative">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Glow effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
              Ready to get serious?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              This is for traders who are done with shortcuts and ready to put in the work. 
              If that's you, we'd like to hear from you.
            </p>
            
            <Button variant="hero" size="xl">
              Apply for Membership
              <ArrowRight className="w-4 h-4" />
            </Button>

            <p className="text-xs text-muted-foreground mt-8">
              Limited spots available. Applications reviewed weekly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
