import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { vehicles, contactInfo } from "@/data/content";
import {
  Users, Fuel, Settings2, Calendar, Palette, Gauge, Car, CheckCircle2,
  MessageCircle, Phone, ArrowLeft, ChevronRight,
} from "lucide-react";

export function VehicleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const vehicle = vehicles.find((v) => v.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!vehicle) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 bg-white">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Vehicle Not Found</h2>
        <p className="text-slate-500 mb-8">We couldn't find the vehicle you were looking for.</p>
        <Link href="/#vehicles">
          <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all">
            Browse All Vehicles
          </button>
        </Link>
      </div>
    );
  }

  const waMessage = `Hello! I'm interested in booking the ${vehicle.name} (₹${vehicle.pricePerDay}/day). Please share availability.`;
  const waLink = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(waMessage)}`;
  const callLink = `tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`;

  const related = vehicles.filter((v) => v.id !== vehicle.id && v.category === vehicle.category).slice(0, 3);
  const fallbackRelated = vehicles.filter((v) => v.id !== vehicle.id).slice(0, 3);
  const relatedVehicles = related.length > 0 ? related : fallbackRelated;

  const overviewRows = [
    { label: "Car Type", value: vehicle.category, icon: <Car className="w-4 h-4" /> },
    { label: "Seating", value: `${vehicle.seats} Persons`, icon: <Users className="w-4 h-4" /> },
    { label: "Transmission", value: vehicle.transmission, icon: <Settings2 className="w-4 h-4" /> },
    { label: "Fuel Type", value: vehicle.fuel, icon: <Fuel className="w-4 h-4" /> },
    { label: "Mileage", value: vehicle.mileage, icon: <Gauge className="w-4 h-4" /> },
    { label: "Year", value: String(vehicle.year), icon: <Calendar className="w-4 h-4" /> },
    { label: "Color", value: vehicle.color, icon: <Palette className="w-4 h-4" /> },
    { label: "Engine", value: vehicle.engine, icon: <Car className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb header */}
      <div className="bg-slate-900 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <Link href="/">
              <span className="hover:text-white transition-colors cursor-pointer">Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/#vehicles">
              <span className="hover:text-white transition-colors cursor-pointer">Fleet</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">{vehicle.name}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="inline-block text-xs font-bold bg-primary/20 text-blue-300 border border-primary/30 px-3 py-1 rounded-full mb-3">
                {vehicle.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{vehicle.name}</h1>
              <p className="text-slate-400 mt-2 text-sm">
                {vehicle.year} &middot; {vehicle.color} &middot; {vehicle.engine} &middot; {vehicle.seats} Seats
              </p>
            </div>
            <div className="text-right">
              <p className="text-slate-400 text-sm">Starting from</p>
              <p className="text-4xl font-bold text-white">
                ₹{vehicle.pricePerDay.toLocaleString()}
                <span className="text-slate-400 text-lg font-normal"> /day</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back link */}
      <div className="container mx-auto px-4 md:px-6 py-4">
        <Link href="/#vehicles">
          <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Fleet
          </button>
        </Link>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 md:px-6 py-6 pb-20">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT — images + details */}
          <div className="lg:col-span-2 space-y-8">

            {/* Main image */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-72 md:h-96 object-cover"
              />
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl border border-slate-200 p-7">
              <h2 className="text-xl font-bold text-slate-900 mb-4">About This Vehicle</h2>
              <p className="text-slate-600 leading-relaxed">{vehicle.description}</p>
            </div>

            {/* Highlights */}
            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-7">
              <h2 className="text-xl font-bold text-slate-900 mb-5">Why Choose This Car?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {vehicle.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-slate-700 text-sm font-medium leading-relaxed">{h}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl border border-slate-200 p-7">
              <h2 className="text-xl font-bold text-slate-900 mb-5">Included Features</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {vehicle.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Engine specs table */}
            <div className="bg-white rounded-2xl border border-slate-200 p-7">
              <h2 className="text-xl font-bold text-slate-900 mb-5">Engine &amp; Specs</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Engine", value: vehicle.engine },
                  { label: "Fuel", value: vehicle.fuel },
                  { label: "Mileage", value: vehicle.mileage },
                  { label: "Transmission", value: vehicle.transmission },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">{label}</p>
                    <p className="font-bold text-slate-900 text-sm">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden flex flex-col gap-3">
              <a href={waLink} target="_blank" rel="noreferrer" className="btn-whatsapp flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base">
                <MessageCircle className="w-5 h-5" /> Book on WhatsApp
              </a>
              <a href={callLink} className="flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">
                <Phone className="w-5 h-5" /> Call to Book
              </a>
            </div>
          </div>

          {/* RIGHT — sticky sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-5">

              {/* Price + CTA */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-7">
                <div className="flex items-end justify-between mb-6 pb-5 border-b border-slate-100">
                  <div>
                    <p className="text-slate-400 text-sm">Starting from</p>
                    <p className="text-3xl font-bold text-slate-900">
                      ₹{vehicle.pricePerDay.toLocaleString()}
                    </p>
                  </div>
                  <span className="text-slate-400 text-sm font-medium">per day</span>
                </div>

                <div className="space-y-3 mb-6">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-whatsapp w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book on WhatsApp
                  </a>
                  <a
                    href={callLink}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    Call to Book
                  </a>
                </div>

                <p className="text-slate-400 text-xs text-center">
                  Driver included &middot; AC &middot; No hidden charges
                </p>
              </div>

              {/* Car Overview */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Car Overview</h3>
                <div className="space-y-3">
                  {overviewRows.map(({ label, value, icon }) => (
                    <div key={label} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <span className="text-primary">{icon}</span>
                        {label}
                      </div>
                      <span className="text-slate-800 text-sm font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact box */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <p className="text-slate-500 text-sm mb-3">Have questions? Contact us:</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href={callLink} className="hover:text-primary transition-colors">{contactInfo.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Vehicles */}
        {relatedVehicles.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-900">You May Also Like</h2>
              <Link href="/#vehicles">
                <button className="text-sm text-primary font-semibold hover:underline flex items-center gap-1">
                  View All <ChevronRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedVehicles.map((v) => (
                <Link key={v.id} href={`/vehicles/${v.slug}`}>
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                    <div className="bg-slate-50 overflow-hidden">
                      <img src={v.image} alt={v.name} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-xs font-bold text-primary bg-blue-50 px-2 py-0.5 rounded-full">{v.category}</span>
                          <h4 className="font-bold text-slate-900 mt-2 text-base">{v.name}</h4>
                          <p className="text-xs text-slate-400 mt-0.5">{v.seats} seats &middot; {v.transmission}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary text-lg">₹{v.pricePerDay.toLocaleString()}</p>
                          <p className="text-xs text-slate-400">/day</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom call-to-action banner */}
        <div className="mt-16 bg-slate-900 rounded-3xl p-10 md:p-14 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Book the {vehicle.name}?
          </h3>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Contact us now for a quick quote. No hidden charges — transparent, fixed pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={waLink} target="_blank" rel="noreferrer" className="btn-whatsapp flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold">
              <MessageCircle className="w-5 h-5" /> Book on WhatsApp
            </a>
            <a href={callLink} className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold border border-slate-700 text-white hover:bg-white/10 transition-all">
              <Phone className="w-5 h-5" /> {contactInfo.phone}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
