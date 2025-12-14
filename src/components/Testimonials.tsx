const Testimonials = () => {
  const testimonials = [
    {
      quote: "The frameworks around position sizing alone paid for years of membership. Changed how I think about risk entirely.",
      author: "Member since 2022",
      detail: "Options trader"
    },
    {
      quote: "No hype, no promises. Just a room of serious traders and someone who actually understands market psychology.",
      author: "Member since 2023",
      detail: "Futures trader"
    },
    {
      quote: "I came for the trade ideas. I stayed because GaxTon taught me to stop needing them.",
      author: "Member since 2021",
      detail: "Swing trader"
    }
  ];

  return (
    <section className="py-32 relative bg-gradient-to-b from-transparent via-muted/10 to-transparent">
      <div className="container px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium text-primary uppercase tracking-widest mb-4">
            From Members
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            What they say
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-8"
            >
              <p className="text-foreground/90 text-sm leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border/50 pt-4">
                <p className="text-xs text-muted-foreground">
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground/60 mt-1">
                  {testimonial.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
