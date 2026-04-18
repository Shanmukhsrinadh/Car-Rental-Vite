import { contactInfo } from "@/data/content";
import { Phone, MapPin, Mail, MessageCircle, Map as MapIcon } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative flex min-h-[720px] items-center overflow-hidden bg-background py-24 text-white">
      <iframe
        src={contactInfo.mapUrl}
        className="absolute inset-0 h-full w-full scale-105 opacity-65 saturate-90 contrast-110"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Padma Priya Enterprises map location"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/78 to-background/12" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-transparent to-background/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(229,177,0,0.16),transparent_32%)]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.36em] text-primary">Book Instantly</p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Your ride is one <span className="text-gradient-gold">message away</span>
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white/65 md:text-base">
              Get in touch today to book your ride, confirm availability, or ask any travel questions.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}`, "_blank")}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#20bd5a]"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </button>
              <a
                href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-background/60 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
              >
                <Phone className="h-5 w-5" />
                Call {contactInfo.phone}
              </a>
            </div>
          </div>

          <div className="ml-auto w-full max-w-2xl rounded-[2rem] border border-white/10 bg-background/50 p-6 shadow-2xl shadow-black/30 backdrop-blur-md md:p-8">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">Actual Location</p>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  The map behind this section shows our pickup and contact location. Use the button to open directions in Google Maps.
                </p>
              </div>
              <a
                href={contactInfo.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-background transition hover:-translate-y-0.5 hover:bg-primary"
              >
                <MapIcon className="h-4 w-4" />
                Open in Maps
              </a>
            </div>

            <div className="mt-7 divide-y divide-white/10 border-y border-white/10">
              <div className="flex gap-4 py-5">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h4 className="text-sm font-bold text-white">Location</h4>
                  <p className="mt-1 text-sm leading-6 text-white/65">{contactInfo.address}</p>
                </div>
              </div>
              <div className="flex gap-4 py-5">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h4 className="text-sm font-bold text-white">Email</h4>
                  <p className="mt-1 text-sm text-white/65">{contactInfo.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
