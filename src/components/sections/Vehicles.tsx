import { useState } from "react";
import { vehicles, contactInfo } from "@/data/content";
import { Users, Fuel, Settings2, CheckCircle2 } from "lucide-react";

export function Vehicles() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(vehicles.map(v => v.category)))];

  const filteredVehicles = activeCategory === "All"
    ? vehicles
    : vehicles.filter(v => v.category === activeCategory);

  const handleBook = (vehicleName: string) => {
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=Hello, I am interested in renting the ${vehicleName}.`, '_blank');
  };

  return (
    <section id="vehicles" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium <span className="text-gradient-gold">Fleet</span></h2>
          <p className="text-white/60">Choose from our wide range of well-maintained vehicles for your specific needs, all available with professional drivers.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(234,179,8,0.2)]"
                  : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:border-primary/30">

              <div className="relative h-56 p-6 flex items-center justify-center bg-gradient-to-b from-white/5 to-transparent">
                <div className="absolute top-4 left-4 bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/20">
                  {vehicle.category}
                </div>
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 pt-0">
                <div className="flex justify-between items-start mb-4 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{vehicle.name}</h3>
                    <p className="text-sm text-white/50">Starts from</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary">₹{vehicle.pricePerDay}</span>
                    <span className="text-sm text-white/50 block">/ day</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-white/5 text-white/70 text-xs">
                    <Users className="w-4 h-4 mb-1 text-primary/70" />
                    {vehicle.seats} Seats
                  </div>
                  <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-white/5 text-white/70 text-xs">
                    <Settings2 className="w-4 h-4 mb-1 text-primary/70" />
                    {vehicle.transmission}
                  </div>
                  <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-white/5 text-white/70 text-xs">
                    <Fuel className="w-4 h-4 mb-1 text-primary/70" />
                    {vehicle.fuel}
                  </div>
                </div>

                <ul className="mb-6 space-y-2">
                  {vehicle.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-white/70">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleBook(vehicle.name)}
                  className="w-full py-3 rounded-xl border border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all flex justify-center items-center gap-2"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
