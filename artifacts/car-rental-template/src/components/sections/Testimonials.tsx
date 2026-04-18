import { testimonials } from "@/data/content";
import { Star, Quote } from "lucide-react";
import { useEffect, useRef } from "react";

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  function addAnimation() {
    if (scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerRef.current?.appendChild(duplicatedItem);
      });
    }
  }

  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by our <span className="text-gradient-gold">Customers</span></h2>
        <p className="text-white/60 max-w-2xl mx-auto">Don't just take our word for it. Here is what people who have traveled with us have to say.</p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 hidden md:block"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 hidden md:block"></div>

        <div className="overflow-hidden">
          <div
            ref={scrollerRef}
            className="flex gap-6 w-max"
            style={{
              animation: 'testimonial-scroll 40s linear infinite',
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <div
                key={`${testimonial.id}-${idx}`}
                className="w-[300px] md:w-[400px] flex-shrink-0 glass-card p-8 rounded-3xl border border-white/5 relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-white/80 text-sm md:text-base mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/50 to-primary flex items-center justify-center font-bold text-background">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-white/50">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
