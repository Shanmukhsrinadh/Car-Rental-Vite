import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import { contactInfo } from "@/data/content";
import { MessageCircle } from "lucide-react";

const photos = [
  { src: gallery1, label: "Premium Fleet" },
  { src: gallery2, label: "Airport Transfers" },
  { src: gallery3, label: "Outstation Trips" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-primary text-sm font-bold tracking-wider uppercase mb-3 block">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            See Our <span className="text-gradient-blue">Fleet in Action</span>
          </h2>
          <p className="text-slate-500">
            A glimpse into the quality and comfort you can expect with Padma Priya Enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {photos.map(({ src, label }) => (
            <div key={label} className="relative rounded-2xl overflow-hidden shadow-sm group aspect-[4/3]">
              <img src={src} alt={label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-white font-semibold text-sm bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-primary rounded-3xl p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Experience Premium Travel?
          </h3>
          <p className="text-blue-200 mb-8 max-w-lg mx-auto">
            Book your next ride with us and enjoy a journey you'll remember. Quick response, transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}?text=Hello! I'm ready to book a vehicle. Please share availability.`, "_blank")}
              className="btn-whatsapp flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold"
            >
              <MessageCircle className="w-5 h-5" />
              Book Now on WhatsApp
            </button>
            <a
              href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-all"
            >
              Call {contactInfo.phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
