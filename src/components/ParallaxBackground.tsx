import { useEffect, useRef } from "react";

const ParallaxBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      const layers = containerRef.current.querySelectorAll('.parallax-layer');
      
      layers.forEach((layer, index) => {
        const speed = (index + 1) * 0.1;
        (layer as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="parallax-bg">
      {/* Deep background gradient */}
      <div 
        className="parallax-layer"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 20%, hsl(217 91% 60% / 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 80%, hsl(199 89% 48% / 0.06) 0%, transparent 50%),
            linear-gradient(180deg, hsl(222 20% 5%) 0%, hsl(222 25% 3%) 100%)
          `,
        }}
      />
      
      {/* Mid layer with subtle orbs */}
      <div 
        className="parallax-layer opacity-60"
        style={{
          background: `
            radial-gradient(circle 400px at 30% 30%, hsl(217 91% 60% / 0.05) 0%, transparent 70%),
            radial-gradient(circle 300px at 70% 60%, hsl(199 89% 48% / 0.04) 0%, transparent 70%)
          `,
        }}
      />

      {/* Foreground accent */}
      <div 
        className="parallax-layer opacity-40"
        style={{
          background: `
            radial-gradient(circle 200px at 60% 20%, hsl(217 91% 60% / 0.03) 0%, transparent 60%)
          `,
        }}
      />

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(hsl(220 20% 14% / 0.5) 1px, transparent 1px),
            linear-gradient(90deg, hsl(220 20% 14% / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
