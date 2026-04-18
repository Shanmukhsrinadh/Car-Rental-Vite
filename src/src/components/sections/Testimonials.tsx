import { testimonials } from "@/data/content";
import { Star, Quote } from "lucide-react";
import { useEffect, useRef } from "react";

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animId: number;
    let pos = 0;
    const speed = 0.4;
    const half = el.scrollWidth / 2;

    const step = () => {
      pos += speed;
      if (pos >= half) pos = 0;
      el.scrollLeft = pos;
      animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);

  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-14">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary text-sm font-bold tracking-wider uppercase mb-3 block">
            Customer Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Our Customers <span className="text-gradient-blue">Say</span>
          </h2>
          <div className="flex justify-center items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 font-bold text-slate-900">4.9</span>
            <span className="text-slate-400 text-sm ml-1">from 100+ reviews</span>
          </div>
          <p className="text-slate-500">
            Real experiences from our happy customers across Bangalore.
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-hidden select-none"
        style={{ cursor: "grab" }}
      >
        {doubled.map((t, i) => (
          <div
            key={`${t.id}-${i}`}
            className="flex-shrink-0 w-80 bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-6 h-6 text-blue-100" />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">"{t.content}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {t.name[0]}
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                <p className="text-slate-400 text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
