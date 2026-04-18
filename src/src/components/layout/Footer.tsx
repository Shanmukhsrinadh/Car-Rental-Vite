import { contactInfo } from "@/data/content";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-bold text-white text-lg">P</span>
              </div>
              <div>
                <span className="font-bold text-lg text-white leading-none">Padma Priya <span className="text-blue-400">Enterprises</span></span>
                <p className="text-[10px] text-slate-400 font-medium tracking-wider uppercase mt-0.5">Premium Vehicle Rentals</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm max-w-sm mb-6 leading-relaxed">
              Premium vehicle rental services with professional drivers — daily rides, airport transfers, outstation trips, and corporate travel across Bangalore and South India.
            </p>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-primary" /> {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-primary" /> {contactInfo.email}
              </a>
              <span className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> {contactInfo.address}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {[
                { label: "Home", href: "#home" },
                { label: "Our Fleet", href: "#vehicles" },
                { label: "Services", href: "#services" },
                { label: "Gallery", href: "#gallery" },
                { label: "Contact", href: "#contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="hover:text-white hover:text-primary transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Book Now */}
          <div>
            <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-xs">Book a Ride</h4>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
              Ready to travel? Get in touch for a quick quote and confirmation.
            </p>
            <button
              onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}?text=Hello! I'd like to book a vehicle.`, "_blank")}
              className="btn-whatsapp w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm mb-3"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </button>
            <a
              href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm border border-slate-700 text-slate-300 hover:border-primary hover:text-white transition-all"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Padma Priya Enterprises. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
