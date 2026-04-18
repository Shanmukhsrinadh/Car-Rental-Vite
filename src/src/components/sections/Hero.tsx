import heroBg from "@/assets/hero-bg.jpg";
import { MapPin, Calendar, Car, Search, Phone, MessageCircle, Star } from "lucide-react";
import { contactInfo } from "@/data/content";

export function Hero() {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=Hello! I found you on your website and want to book a vehicle.`,
      "_blank"
    );
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=Hello! I would like to book a vehicle rental.`,
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/60 z-10" />
        <img
          src={heroBg}
          alt="Premium car fleet"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-primary/20 border border-primary/30 text-blue-300 text-sm font-semibold backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Premium Vehicle Rentals — Bangalore
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Travel in{" "}
            <span className="text-primary">Comfort</span>
            <br />
            Arrive in{" "}
            <span className="text-primary">Style</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-4 font-light leading-relaxed">
            Driver-assisted premium rentals for city rides, airport transfers, and outstation trips across South India.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            {[
              { icon: <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />, label: "4.9 Rating" },
              { icon: <span className="w-2 h-2 rounded-full bg-green-400" />, label: "500+ Trips Completed" },
              { icon: <span className="w-2 h-2 rounded-full bg-blue-400" />, label: "Verified Drivers" },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 text-slate-300 text-sm"
              >
                {icon}
                <span>{label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <button
              onClick={handleWhatsApp}
              className="btn-whatsapp flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Book on WhatsApp
            </button>
            <a
              href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="#vehicles"
              className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold bg-primary text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30"
            >
              View Fleet
            </a>
          </div>

          {/* Search form */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 p-2 rounded-2xl shadow-2xl max-w-3xl">
            <form
              onSubmit={handleSearch}
              className="flex flex-col md:flex-row items-center gap-2"
            >
              <div className="flex-1 flex items-center w-full px-4 py-3 md:border-r border-white/15 gap-3">
                <MapPin className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <div className="flex flex-col items-start w-full">
                  <span className="text-[10px] uppercase text-white/50 font-bold tracking-wider">
                    Pickup Location
                  </span>
                  <input
                    type="text"
                    placeholder="Enter city or airport"
                    className="bg-transparent border-none outline-none text-white w-full text-sm placeholder:text-white/30 p-0"
                    required
                  />
                </div>
              </div>

              <div className="flex-1 flex items-center w-full px-4 py-3 md:border-r border-white/15 gap-3">
                <Calendar className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <div className="flex flex-col items-start w-full">
                  <span className="text-[10px] uppercase text-white/50 font-bold tracking-wider">
                    Date &amp; Time
                  </span>
                  <input
                    type="datetime-local"
                    className="bg-transparent border-none outline-none text-white w-full text-sm p-0 [color-scheme:dark]"
                    required
                  />
                </div>
              </div>

              <div className="flex-1 flex items-center w-full px-4 py-3 gap-3">
                <Car className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <div className="flex flex-col items-start w-full">
                  <span className="text-[10px] uppercase text-white/50 font-bold tracking-wider">
                    Vehicle Type
                  </span>
                  <select className="bg-transparent border-none outline-none text-white w-full text-sm p-0 appearance-none">
                    <option value="any" className="bg-slate-900 text-white">Any Category</option>
                    <option value="sedan" className="bg-slate-900 text-white">Sedan</option>
                    <option value="suv" className="bg-slate-900 text-white">SUV</option>
                    <option value="mpv" className="bg-slate-900 text-white">MPV</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-primary hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
