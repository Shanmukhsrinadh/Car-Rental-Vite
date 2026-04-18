import heroBg from "@/assets/hero-bg.jpg";
import { MapPin, Calendar, Car, Search } from "lucide-react";
import { contactInfo } from "@/data/content";

export function Hero() {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=Hello, I am looking for a vehicle rental from the website search.`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background z-10" />
        <img
          src={heroBg}
          alt="Premium luxury car driving"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary text-sm font-semibold tracking-wider uppercase mb-6">
            Premium Vehicle Rentals
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Drive Your Journey with <br className="hidden md:block" />
            <span className="text-gradient-gold">Comfort &amp; Style</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light">
            Experience luxury driver-assisted rentals, seamless airport transfers, and reliable outstation trips with our premium fleet.
          </p>

          <div className="glass-panel p-2 rounded-2xl md:rounded-full max-w-5xl mx-auto w-full shadow-2xl">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center gap-2">

              <div className="flex-1 flex items-center w-full px-4 py-3 md:py-2 md:border-r border-white/10 group">
                <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <div className="flex flex-col items-start w-full">
                  <span className="text-[10px] uppercase text-white/50 font-bold tracking-wider">Pickup Location</span>
                  <input
                    type="text"
                    placeholder="Enter city or airport"
                    className="bg-transparent border-none outline-none text-white w-full text-sm placeholder:text-white/30 focus:ring-0 p-0"
                    required
                  />
                </div>
              </div>

              <div className="flex-1 flex items-center w-full px-4 py-3 md:py-2 md:border-r border-white/10 group">
                <Calendar className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <div className="flex flex-col items-start w-full">
                  <span className="text-[10px] uppercase text-white/50 font-bold tracking-wider">Date &amp; Time</span>
                  <input
                    type="datetime-local"
                    className="bg-transparent border-none outline-none text-white w-full text-sm focus:ring-0 p-0 [color-scheme:dark]"
                    required
                  />
                </div>
              </div>

              <div className="flex-1 flex items-center w-full px-4 py-3 md:py-2 group">
                <Car className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <div className="flex flex-col items-start w-full">
                  <span className="text-[10px] uppercase text-white/50 font-bold tracking-wider">Vehicle Type</span>
                  <select className="bg-transparent border-none outline-none text-white w-full text-sm focus:ring-0 p-0 appearance-none">
                    <option value="any" className="bg-background">Any Category</option>
                    <option value="sedan" className="bg-background">Sedan</option>
                    <option value="suv" className="bg-background">SUV</option>
                    <option value="mpv" className="bg-background">MPV</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground p-4 md:px-8 md:py-4 rounded-xl md:rounded-full font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105"
              >
                <Search className="w-5 h-5" />
                <span className="md:hidden">Search Vehicles</span>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
