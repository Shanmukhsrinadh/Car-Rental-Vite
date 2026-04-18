import { contactInfo } from "@/data/content";
import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  const waLink = (msg: string) =>
    `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(msg)}`;

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-primary text-sm font-bold tracking-wider uppercase mb-3 block">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to <span className="text-gradient-blue">Book a Ride?</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Contact us via WhatsApp, phone, or email. We usually respond within minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Contact info + CTAs */}
          <div className="lg:col-span-2 space-y-5">

            {/* WhatsApp CTA */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-7">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">Chat on WhatsApp</h3>
              <p className="text-slate-500 text-sm mb-5">
                Fastest way to get a quote and confirm your booking. We're online most of the day.
              </p>
              <button
                onClick={() => window.open(waLink("Hello! I'd like to book a vehicle. Please share availability."), "_blank")}
                className="btn-whatsapp w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Open WhatsApp Chat
              </button>
            </div>

            {/* Call CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-7">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">Call Us Directly</h3>
              <p className="text-slate-500 text-sm mb-5">
                Prefer to speak with someone? Our team is available to answer all your questions.
              </p>
              <a
                href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm bg-primary text-white hover:bg-blue-700 transition-all"
              >
                <Phone className="w-4 h-4" />
                {contactInfo.phone}
              </a>
            </div>

            {/* Address & Email */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-0.5">Office Address</p>
                  <p className="text-slate-500 text-sm">{contactInfo.address}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-0.5">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-primary text-sm hover:underline break-all">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-slate-200 shadow-sm min-h-[450px]">
            <iframe
              src={contactInfo.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 450 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Padma Priya Enterprises Location"
              className="w-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
