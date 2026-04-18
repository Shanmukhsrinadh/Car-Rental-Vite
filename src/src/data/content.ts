export const contactInfo = {
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "bookings@padmapriyaenterprises.com",
  address: "12, MG Road, Bangalore, Karnataka 560001",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0082607407617!2d77.59456031534598!3d12.97194379085523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sMahatma%20Gandhi%20Rd%2C%20Bangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1618225300000!5m2!1sen!2sin",
  mapsLink: "https://www.google.com/maps/search/MG+Road+Bangalore",
};

export interface Vehicle {
  id: number;
  slug: string;
  name: string;
  category: string;
  image: string;
  pricePerDay: number;
  seats: number;
  transmission: string;
  fuel: string;
  year: number;
  color: string;
  mileage: string;
  engine: string;
  ac: boolean;
  features: string[];
  description: string;
  highlights: string[];
}

export const vehicles: Vehicle[] = [
  {
    id: 1,
    slug: "toyota-innova-crysta",
    name: "Toyota Innova Crysta",
    category: "SUV",
    image: "/vehicles/innova.jpg",
    pricePerDay: 2499,
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    year: 2023,
    color: "Pearl White",
    mileage: "14 km/l",
    engine: "2.4L Diesel",
    ac: true,
    features: [
      "Professional Driver Included",
      "Air Conditioning",
      "GPS Navigation",
      "Spacious Boot",
      "Music System",
      "USB Charging Ports",
    ],
    description:
      "The Toyota Innova Crysta is the most trusted choice for families and business travelers across India. With its powerful 2.4L diesel engine and spacious 7-seater cabin, it delivers a smooth and comfortable ride on city roads as well as long outstation routes. The vehicle is well-maintained, regularly serviced, and comes with a professional, verified chauffeur.",
    highlights: [
      "Best choice for outstation trips",
      "Spacious 7-seater with luggage space",
      "Fuel-efficient diesel engine",
      "Verified professional driver",
    ],
  },
  {
    id: 2,
    slug: "honda-city",
    name: "Honda City",
    category: "Sedan",
    image: "/vehicles/sedan.jpg",
    pricePerDay: 1499,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    year: 2023,
    color: "Lunar Silver",
    mileage: "17 km/l",
    engine: "1.5L Petrol",
    ac: true,
    features: [
      "Professional Driver Included",
      "Air Conditioning",
      "Premium Music System",
      "USB Charging Ports",
      "Sunroof",
      "Rear Camera",
    ],
    description:
      "The Honda City is the perfect executive sedan for business travel, airport transfers, and daily city commutes. Known for its stylish design, smooth ride quality, and premium cabin, the City offers a first-class travel experience at an affordable price. Ideal for solo or couple travel.",
    highlights: [
      "Executive sedan for city travel",
      "Premium cabin with sunroof",
      "Smooth automatic transmission",
      "Perfect for airport transfers",
    ],
  },
  {
    id: 3,
    slug: "maruti-swift-dzire",
    name: "Maruti Swift Dzire",
    category: "Sedan",
    image: "/vehicles/compact.jpg",
    pricePerDay: 1199,
    seats: 5,
    transmission: "Manual",
    fuel: "CNG",
    year: 2022,
    color: "Magma Grey",
    mileage: "31 km/kg",
    engine: "1.2L Petrol/CNG",
    ac: true,
    features: [
      "Professional Driver Included",
      "Air Conditioning",
      "USB Charging Ports",
      "CNG + Petrol (Dual Fuel)",
      "Central Locking",
      "Power Windows",
    ],
    description:
      "The Maruti Swift Dzire is our most economical option for daily city rides and short outstation trips. Running on CNG, it is extremely cost-effective and eco-friendly. The compact sedan is ideal for 2-4 passengers who want a reliable, no-fuss travel experience without compromising on comfort.",
    highlights: [
      "Most affordable sedan option",
      "Eco-friendly CNG + Petrol dual fuel",
      "Compact — easy for city navigation",
      "Great for daily office commutes",
    ],
  },
  {
    id: 4,
    slug: "mahindra-scorpio-n",
    name: "Mahindra Scorpio N",
    category: "SUV",
    image: "/vehicles/suv-dark.jpg",
    pricePerDay: 2999,
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    year: 2023,
    color: "Galaxy Grey",
    mileage: "13 km/l",
    engine: "2.2L mHawk Diesel",
    ac: true,
    features: [
      "Professional Driver Included",
      "4WD Capability",
      "Air Conditioning",
      "GPS Navigation",
      "Premium Sound System",
      "LED Headlights",
    ],
    description:
      "The Mahindra Scorpio N is built for those who demand power and presence. With its rugged 4WD drivetrain and high ground clearance, it handles mountain roads, hill stations, and long highway drives with ease. A favourite for group outstation trips and adventure travel across South India.",
    highlights: [
      "4WD — perfect for hill stations",
      "High ground clearance for rough roads",
      "Powerful mHawk diesel engine",
      "Rugged and spacious",
    ],
  },
  {
    id: 5,
    slug: "toyota-fortuner",
    name: "Toyota Fortuner",
    category: "SUV",
    image: "/vehicles/fortuner.jpg",
    pricePerDay: 3999,
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    year: 2024,
    color: "Phantom Brown",
    mileage: "12 km/l",
    engine: "2.8L Diesel",
    ac: true,
    features: [
      "Professional Driver Included",
      "Leather Seats",
      "Panoramic Sunroof",
      "GPS Navigation",
      "360° Camera System",
      "Ventilated Front Seats",
    ],
    description:
      "The Toyota Fortuner is our flagship premium SUV — an icon of luxury and capability. Featuring a powerful 2.8L diesel engine, leather seating, panoramic sunroof, and advanced safety tech, the Fortuner is the vehicle of choice for VIP travel, corporate events, and special occasions. Experience travel the way it should be.",
    highlights: [
      "Our premium flagship vehicle",
      "Leather seats with sunroof",
      "360° camera for maximum safety",
      "Ideal for VIP and corporate travel",
    ],
  },
  {
    id: 6,
    slug: "maruti-ertiga",
    name: "Maruti Ertiga",
    category: "MPV",
    image: "/vehicles/mpv.jpg",
    pricePerDay: 1799,
    seats: 7,
    transmission: "Automatic",
    fuel: "CNG",
    year: 2023,
    color: "Oxford Blue",
    mileage: "26 km/kg",
    engine: "1.5L Petrol/CNG",
    ac: true,
    features: [
      "Professional Driver Included",
      "Air Conditioning",
      "Spacious Boot",
      "CNG + Petrol (Dual Fuel)",
      "Flat-fold 3rd Row",
      "Power Windows",
    ],
    description:
      "The Maruti Ertiga is the ideal MPV for large families and group travel. With three rows of comfortable seating and generous boot space, the Ertiga can accommodate up to 7 passengers and their luggage with ease. The dual-fuel CNG setup makes it highly economical for both city and outstation trips.",
    highlights: [
      "Best MPV for large families",
      "Flat-fold seats for extra luggage",
      "CNG + Petrol — very economical",
      "Comfortable for long trips",
    ],
  },
];

export const services = [
  {
    id: 1,
    title: "Daily City Rides",
    description:
      "Reliable, comfortable rides across the city for your daily commute, meetings, or errands — all with a professional chauffeur.",
    icon: "UserCheck",
  },
  {
    id: 2,
    title: "Airport Transfers",
    description:
      "On-time pick-up and drop to all major airports. Flight tracking included so we're always there, even if your flight is delayed.",
    icon: "Plane",
  },
  {
    id: 3,
    title: "Outstation Trips",
    description:
      "Weekend getaways, pilgrimage tours, or hill-station escapes — we cover long-distance routes across South India.",
    icon: "Map",
  },
  {
    id: 4,
    title: "Corporate Travel",
    description:
      "Dedicated vehicles for executive travel, client pick-ups, and corporate events with invoices and GST billing.",
    icon: "Briefcase",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Business Traveler",
    rating: 5,
    content:
      "Outstanding service! The driver was punctual, professional, and the Innova Crysta was spotless. Perfect for my client meetings.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Family Trip",
    rating: 5,
    content:
      "Booked a Fortuner for our Coorg trip. The driver was knowledgeable about the routes and the vehicle was in excellent condition. Highly recommend!",
  },
  {
    id: 3,
    name: "Rohan Das",
    role: "Airport Transfer",
    rating: 5,
    content:
      "My flight was delayed by 2 hours but the driver waited without any extra charge. That level of commitment is rare. Will book again.",
  },
  {
    id: 4,
    name: "Meena Krishnan",
    role: "Corporate Client",
    rating: 5,
    content:
      "We use Padma Priya Enterprises for all our executive transfers. The vehicles are immaculate, drivers are courteous, and billing is always accurate.",
  },
  {
    id: 5,
    name: "Vijay Nair",
    role: "Wedding Guest",
    rating: 5,
    content:
      "Hired 3 vehicles for our family wedding. The coordination was flawless. Every car arrived on time and the drivers were smartly dressed.",
  },
  {
    id: 6,
    name: "Deepa Rao",
    role: "Solo Traveler",
    rating: 5,
    content:
      "As a woman traveling alone, I felt completely safe. The driver was respectful and professional throughout my outstation trip.",
  },
];
