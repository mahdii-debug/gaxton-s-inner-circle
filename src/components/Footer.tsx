const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <span className="text-lg font-semibold text-foreground">GaxTon</span>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#philosophy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Philosophy
              </a>
              <a href="#membership" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Membership
              </a>
              <a href="#process" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Process
              </a>
            </nav>
          </div>
          
          <p className="text-xs text-muted-foreground">
            Trading involves risk. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
