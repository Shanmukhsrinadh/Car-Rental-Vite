import { services, contactInfo } from "@/data/content";
import {
  UserCheck, Plane, Map, Briefcase, Shield, Clock, ThumbsUp, Star, MessageCircle, Phone,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="w-7 h-7 text-primary" />,
  Plane: <Plane className="w-7 h-7 text-primary" />,
  Map: <Map className="w-7 h-7 text-primary" />,
  Briefcase: <Briefcase className="w-7 h-7 text-primary" />,
};

const trustItems = [
  { icon: <Shield className="w-5 h-5 text-primary" />, title: "Verified Drivers", desc: "All drivers are background-checked, licensed, and trained for professional service." },
  { icon: <Clock className="w-5 h-5 text-primary" />, title: "24/7 Availability", desc: "Round-the-clock support for bookings, changes, and emergency assistance." },
  { icon: <ThumbsUp className="w-5 h-5 text-primary" />, title: "Well Maintained Fleet", desc: "Every vehicle is regularly serviced and cleaned before every ride." },
  { icon: <Star className="w-5 h-5 text-primary" />, title: "4.9 ★ Rated", desc: "Consistently top-rated by hundreds of satisfied customers across Bangalore." },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-bold tracking-wider uppercase mb-3 block">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive <span className="text-gradient-blue">Travel Solutions</span>
          </h2>
          <p className="text-slate-500 text-lg">
            From daily commutes to special occasions, we provide tailored vehicle solutions focused on safety, comfort, and punctuality.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:border-primary transition-colors">
                <span className="group-hover:[&>svg]:text-white">{iconMap[service.icon] ?? <Star className="w-7 h-7 text-primary" />}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-14">
              <span className="text-primary text-sm font-bold tracking-wider uppercase mb-3 block">Why Choose Us</span>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Trusted by Hundreds of Customers Across Bangalore
              </h3>
              <p className="text-slate-500 mb-8 leading-relaxed">
                With years of experience in premium vehicle rentals, Padma Priya Enterprises has built a reputation for reliability, safety, and exceptional service.
              </p>
              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                {trustItems.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{item.title}</p>
                      <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}?text=Hello! I'd like to know more about your services.`, "_blank")} className="btn-whatsapp flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm">
                  <MessageCircle className="w-4 h-4" /> Enquire on WhatsApp
                </button>
                <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`} className="flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">
                  <Phone className="w-4 h-4" /> Call Us Now
                </a>
              </div>
            </div>

            <div className="bg-primary p-10 lg:p-14 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { num: "500+", label: "Happy Customers" },
                  { num: "6", label: "Premium Vehicles" },
                  { num: "4.9★", label: "Average Rating" },
                  { num: "24/7", label: "Support Available" },
                ].map(({ num, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-4xl font-bold text-white mb-1">{num}</div>
                    <div className="text-blue-200 text-sm font-medium">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-blue-100 text-sm leading-relaxed italic">
                  "Padma Priya Enterprises has been our go-to for all corporate travel. Reliable, professional, and always on time."
                </p>
                <p className="text-white font-semibold text-sm mt-3">— Meena Krishnan, Corporate Client</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
