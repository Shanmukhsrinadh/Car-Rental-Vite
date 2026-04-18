import { Link } from "wouter";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { contactInfo } from "@/data/content";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Vehicles", href: "#vehicles" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=Hello, I would like to inquire about a vehicle rental.`, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-panel py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer z-50 relative">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="font-bold text-primary-foreground text-lg">P</span>
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block text-white">
              Padma Priya <span className="text-primary">Enterprises</span>
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            {contactInfo.phone}
          </a>
          <button
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(234,179,8,0.3)]"
          >
            Book on WhatsApp
          </button>
        </div>

        <button
          className="lg:hidden text-white z-50 relative p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-white hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col items-center gap-4 mt-8">
            <a
              href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-2 font-medium text-white"
            >
              <Phone className="w-5 h-5" />
              {contactInfo.phone}
            </a>
            <button
              onClick={handleWhatsAppClick}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold mt-4"
            >
              Book on WhatsApp
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
