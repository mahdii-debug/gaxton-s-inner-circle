const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Apply",
      description: "Submit a brief application outlining your trading experience, goals, and why you're seeking mentorship. We read every submission."
    },
    {
      number: "02",
      title: "Vetting",
      description: "Selected applicants will have a short conversation to assess fit. We're looking for seriousness, not experience level."
    },
    {
      number: "03",
      title: "Access",
      description: "Accepted members receive immediate access to the private community, all resources, and ongoing mentorship."
    }
  ];

  return (
    <section id="process" className="py-32 relative">
      <div className="container px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs font-medium text-primary uppercase tracking-widest mb-4">
            Process
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
            How to join
          </h2>
          <p className="text-muted-foreground text-lg">
            We maintain a selective admission process. Not because we want to seem exclusive, 
            but because the community quality depends on who we let in.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative flex gap-8 pb-16 last:pb-0"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-16 w-px h-full bg-gradient-to-b from-border to-transparent" />
              )}
              
              {/* Number */}
              <div className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center shrink-0 relative z-10">
                <span className="text-sm font-semibold text-primary">{step.number}</span>
              </div>
              
              {/* Content */}
              <div className="pt-2">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 text-center">
          <p className="text-xs text-muted-foreground">
            Applications are reviewed weekly. Response time is typically 3-5 days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
