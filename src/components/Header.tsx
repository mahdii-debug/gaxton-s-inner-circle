import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-semibold tracking-tight text-foreground">
          GaxTon
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#philosophy" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
            Philosophy
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
            Pricing
          </a>
          <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
            Process
          </a>
        </nav>

        <Button variant="heroOutline" size="sm">
          Request Access
        </Button>
      </div>
    </header>
  );
};

export default Header;
