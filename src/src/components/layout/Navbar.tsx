import { Link } from "wouter";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { contactInfo } from "@/data/content";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Fleet", href: "#vehicles" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=Hello! I would like to inquire about a vehicle rental.`,
      "_blank"
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md shadow-slate-200/80 py-3"
          : "bg-white/95 backdrop-blur-md py-4 border-b border-slate-100"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2.5 cursor-pointer z-50 relative">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-sm">
              <span className="font-bold text-white text-lg">P</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg leading-none text-slate-900">
                Padma Priya{" "}
                <span className="text-primary">Enterprises</span>
              </span>
              <p className="text-[10px] text-slate-400 font-medium tracking-wider uppercase mt-0.5">
                Premium Vehicle Rentals
              </p>
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-blue-50"
          >
            <Phone className="w-4 h-4 text-primary" />
            {contactInfo.phone}
          </a>
          <button
            onClick={handleWhatsApp}
            className="btn-whatsapp flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Book on WhatsApp
          </button>
        </div>

        <button
          className="lg:hidden text-slate-700 z-50 relative p-2 rounded-lg hover:bg-slate-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-semibold text-slate-800 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col items-center gap-3 mt-6 w-full px-8">
            <a
              href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-2 font-semibold text-slate-700 border border-slate-200 px-6 py-3 rounded-xl w-full justify-center"
            >
              <Phone className="w-5 h-5 text-primary" />
              {contactInfo.phone}
            </a>
            <button
              onClick={handleWhatsApp}
              className="btn-whatsapp flex items-center gap-2 px-6 py-3 rounded-xl font-semibold w-full justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Book on WhatsApp
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
