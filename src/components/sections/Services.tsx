import { services } from "@/data/content";
import { UserCheck, Plane, Map, Briefcase, Shield, Clock, ThumbsUp, Star } from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'UserCheck': return <UserCheck className="w-8 h-8 text-primary" />;
    case 'Plane': return <Plane className="w-8 h-8 text-primary" />;
    case 'Map': return <Map className="w-8 h-8 text-primary" />;
    case 'Briefcase': return <Briefcase className="w-8 h-8 text-primary" />;
    default: return <Star className="w-8 h-8 text-primary" />;
  }
};

const trustFeatures = [
  { icon: <Shield className="w-6 h-6" />, title: "Verified Drivers", desc: "Background checked professionals" },
  { icon: <Clock className="w-6 h-6" />, title: "24/7 Support", desc: "Always here when you need us" },
  { icon: <ThumbsUp className="w-6 h-6" />, title: "Well Maintained", desc: "Regularly serviced vehicles" },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">

        <div className="grid lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-7">
            <div className="mb-12">
              <span className="text-primary text-sm font-bold tracking-wider uppercase mb-2 block">What We Offer</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive <span className="text-gradient-gold">Travel Solutions</span></h2>
              <p className="text-white/60 text-lg">From daily commutes to special events, we provide tailored vehicle solutions with a focus on safety and comfort.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service) => (
                <div key={service.id} className="p-6 rounded-2xl bg-background border border-white/5 hover:border-primary/30 transition-colors group">
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-panel p-8 md:p-10 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-8">Why Choose Us</h3>

              <div className="space-y-8">
                {trustFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mr-4 border border-primary/20">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{feature.title}</h4>
                      <p className="text-white/60 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <p className="text-sm text-white/80 mb-4">Experience the difference of a truly premium service.</p>
                <a href="#contact" className="inline-block px-6 py-3 rounded-full bg-white text-background font-bold text-sm hover:bg-white/90 transition-colors w-full">
                  Contact Us Today
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
