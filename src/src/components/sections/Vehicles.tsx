import { useState } from "react";
import { Link } from "wouter";
import { vehicles, contactInfo } from "@/data/content";
import { Users, Fuel, Settings2, MessageCircle, ArrowRight } from "lucide-react";

export function Vehicles() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(vehicles.map((v) => v.category))),
  ];

  const filtered =
    activeCategory === "All"
      ? vehicles
      : vehicles.filter((v) => v.category === activeCategory);

  const handleBook = (vehicleName: string) => {
    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=Hello! I'm interested in renting the ${vehicleName}. Please share availability and pricing.`,
      "_blank"
    );
  };

  return (
    <section id="vehicles" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-primary text-sm font-bold tracking-wider uppercase mb-3 block">
            Our Fleet
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Choose Your Perfect{" "}
            <span className="text-gradient-blue">Vehicle</span>
          </h2>
          <p className="text-slate-500 text-lg">
            All vehicles are well-maintained, regularly serviced, and come with a professional, verified driver.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary shadow-md shadow-blue-200"
                  : "bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              {/* Image area */}
              <div className="relative bg-slate-50 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/20">
                  {vehicle.category}
                </div>
                <div className="absolute top-4 right-4 z-10 bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                  {vehicle.year}
                </div>
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-0.5">
                      {vehicle.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      {vehicle.color} &middot; {vehicle.mileage}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary">
                      ₹{vehicle.pricePerDay.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400 block">/day</span>
                  </div>
                </div>

                {/* Specs pills */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {[
                    { icon: <Users className="w-3.5 h-3.5" />, label: `${vehicle.seats} Seats` },
                    { icon: <Settings2 className="w-3.5 h-3.5" />, label: vehicle.transmission },
                    { icon: <Fuel className="w-3.5 h-3.5" />, label: vehicle.fuel },
                  ].map(({ icon, label }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center gap-1 bg-slate-50 border border-slate-100 rounded-lg py-2.5 text-slate-600"
                    >
                      <span className="text-primary">{icon}</span>
                      <span className="text-xs font-medium">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="mb-6 space-y-1.5 flex-1">
                  {vehicle.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-600 gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex gap-2 mt-auto">
                  <Link href={`/vehicles/${vehicle.slug}`} className="flex-1">
                    <button className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleBook(vehicle.name)}
                    className="btn-whatsapp flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-sm"
                    title="Book on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-blue-50 rounded-2xl p-10 border border-blue-100">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Can't find the right vehicle?
          </h3>
          <p className="text-slate-500 mb-6 max-w-md mx-auto">
            Contact us directly — we'll suggest the best option for your trip and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() =>
                window.open(
                  `https://wa.me/${contactInfo.whatsapp}?text=Hello! I need help choosing the right vehicle for my trip.`,
                  "_blank"
                )
              }
              className="btn-whatsapp flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </button>
            <a
              href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
            >
              Call {contactInfo.phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
