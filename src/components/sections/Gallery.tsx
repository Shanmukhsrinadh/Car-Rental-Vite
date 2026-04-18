import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export function Gallery() {
  const images = [
    { src: gallery1, alt: "Chauffeur service", className: "col-span-1 row-span-2 h-[500px]" },
    { src: gallery2, alt: "Luxury interior", className: "col-span-1 row-span-1 h-[240px]" },
    { src: gallery3, alt: "Premium travel", className: "col-span-1 row-span-1 h-[240px] md:col-span-2" },
  ];

  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A Glimpse of <span className="text-gradient-gold">Luxury</span></h2>
          <p className="text-white/60">Experience the quality and comfort of our fleet before you even step inside.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`rounded-2xl overflow-hidden relative group cursor-pointer ${img.className}`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
