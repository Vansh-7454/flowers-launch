export interface BrandConfig {
  name: string;
  tagline: string;
  shortName: string;
  tradeSubtitle: string;
  city: string;
  serviceArea: string;
}

export interface ContactConfig {
  phoneDisplay: string;
  phoneTel: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  emailDisplay: string;
  address: string;
  cityArea: string;
  mapQueryUrl: string;
  openingHoursDisplay: string;
  openTime24: string; // e.g. "05:30"
  closeTime24: string; // e.g. "21:00"
  daysOpen: string;
  morningNote: string;
  pickupPolicy: string;
  advanceNoticePolicy: string;
}

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface OccasionItem {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  keyFlowers: string[];
  advanceNotice: string;
  whatsappPrefill: string;
  iconName: "Flower2" | "Sparkles" | "Gift" | "Car" | "HeartHandshake";
  image: {
    src: string;
    alt: string;
    ratio: "4:3" | "4:5" | "16:9";
    focalPoint: string;
    isStock: boolean;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FlowerCareGuideItem {
  title: string;
  description: string;
  icon: string;
}

export interface SiteContent {
  brand: BrandConfig;
  contact: ContactConfig;
  nav: NavLink[];
  trustStrip: string[];
  occasions: OccasionItem[];
  faqs: FAQItem[];
  flowerCareGuide: FlowerCareGuideItem[];
  aboutContent: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    bulletPoints: string[];
  };
}

export const siteContent: SiteContent = {
  brand: {
    name: "Shree Ganesh Flowers",
    tagline: "Fresh temple garlands and daily pooja flowers",
    shortName: "Ganesh Flowers",
    tradeSubtitle: "Pune · Temple Florist",
    city: "Pune",
    serviceArea: "Pune Temple Precinct & Surrounding Localities",
  },

  contact: {
    phoneDisplay: "+91 98000 00000 [ADD PHONE NUMBER]",
    phoneTel: "+919800000000",
    whatsappNumber: "919800000000",
    whatsappDisplay: "+91 98000 00000 [ADD WHATSAPP NUMBER]",
    emailDisplay: "orders@shreeganeshflowers.local [ADD EMAIL]",
    address: "Near Temple, Pune, Maharashtra 411001 [ADD EXACT TEMPLE & STREET ADDRESS]",
    cityArea: "Temple Road, Pune",
    mapQueryUrl: "https://www.google.com/maps/search/?api=1&query=Shree+Ganesh+Flowers+Pune",
    openingHoursDisplay: "5:30 AM – 9:00 PM",
    openTime24: "05:30",
    closeTime24: "21:00",
    daysOpen: "Open Daily (Monday through Sunday)",
    morningNote: "We open early at 5:30 AM so devotees can collect fresh flowers before early temple darshan.",
    pickupPolicy: "Orders are confirmed directly on WhatsApp and paid upon pickup at the shop counter.",
    advanceNoticePolicy: "Please order handcrafted garlands one day in advance so we can procure fresh stems at the dawn wholesale flower market.",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Flowers & Occasions", href: "/flowers-and-occasions" },
    { label: "Contact", href: "/contact" },
  ],

  trustStrip: [
    "Fresh morning temple stock daily",
    "Order garlands 1 day in advance",
    "Confirm on WhatsApp, pay at pickup",
    "Open 5:30 AM for morning pooja",
  ],

  occasions: [
    {
      id: "pooja-flowers",
      title: "Pooja Flowers",
      subtitle: "Daily temple darshan & home rituals",
      summary: "Freshly sorted morning temple offerings including fragrant marigolds, sacred red hibiscus for Lord Ganesha, green durva grass, and pure mogra jasmine strings.",
      keyFlowers: ["Fresh Marigold (Zendu)", "Sacred Durva Grass", "Red Hibiscus (Jaswand)", "Mogra Jasmine Veni"],
      advanceNotice: "Available daily from 5:30 AM. Walk in or message on WhatsApp to reserve packets.",
      whatsappPrefill: "Hi Shree Ganesh Flowers, I'd like to order: Pooja flowers",
      iconName: "Flower2",
      image: {
        src: "/images/occasions/pooja-flowers.webp",
        alt: "Fresh daily pooja flowers including marigolds, red hibiscus, and durva grass arranged on a brass plate",
        ratio: "4:3",
        focalPoint: "center",
        isStock: true,
      },
    },
    {
      id: "wedding-garlands",
      title: "Wedding Garlands",
      subtitle: "Handcrafted ceremonial varmala & reception sets",
      summary: "Traditional royal wedding garlands crafted with fresh rose petals, sweet-scented tuberose (gulchadi), and jasmine, finished with delicate gold zari touches.",
      keyFlowers: ["Deep Red Rose Petals", "White Tuberose & Mogra", "Carnation Accents", "Gold Zari Bordering"],
      advanceNotice: "Order garlands one day in advance so custom weaving can be completed before your ceremony.",
      whatsappPrefill: "Hi Shree Ganesh Flowers, I'd like to order: Wedding garlands",
      iconName: "Sparkles",
      image: {
        src: "/images/occasions/wedding-garlands.webp",
        alt: "Pair of handcrafted red rose and jasmine Indian wedding varmala garlands on silk cloth",
        ratio: "4:3",
        focalPoint: "center",
        isStock: true,
      },
    },
    {
      id: "bouquets",
      title: "Bouquets",
      subtitle: "Celebrations, felicitations & gifting",
      summary: "Hand-tied flower bunches assembled with vibrant fresh roses, cheerful gerberas, and crisp greenery, wrapped neatly in natural textured brown Kraft paper.",
      keyFlowers: ["Dutch Roses", "Vibrant Gerberas", "Green Foliage", "Eco-friendly Kraft Wrap"],
      advanceNotice: "Order on WhatsApp 2 to 3 hours ahead or reserve the previous evening for custom color requests.",
      whatsappPrefill: "Hi Shree Ganesh Flowers, I'd like to order: Bouquets",
      iconName: "Gift",
      image: {
        src: "/images/occasions/bouquets.webp",
        alt: "Fresh hand-tied presentation bouquet of roses and gerberas wrapped in brown Kraft paper",
        ratio: "4:3",
        focalPoint: "center",
        isStock: true,
      },
    },
    {
      id: "car-decoration",
      title: "Car Decoration",
      subtitle: "Wedding arrivals & festive celebrations",
      summary: "Tasteful floral styling for wedding and celebratory cars, featuring bonnet garland cascades, door handle corsages, and durable ribbon fastenings.",
      keyFlowers: ["Red & White Roses", "Carnation Sprays", "Gypsophila (Baby's Breath)", "Satin Ribbons"],
      advanceNotice: "Order garlands one day in advance so we can prepare your flowers and reserve a fitting slot.",
      whatsappPrefill: "Hi Shree Ganesh Flowers, I'd like to order: Car decoration",
      iconName: "Car",
      image: {
        src: "/images/occasions/car-decoration.webp",
        alt: "Wedding car bonnet decorated with fresh red and white rose garlands and festive ribbon",
        ratio: "4:3",
        focalPoint: "center",
        isStock: true,
      },
    },
    {
      id: "funeral-wreaths",
      title: "Funeral Wreaths",
      subtitle: "Dignified condolence & remembrance",
      summary: "Solemn and respectful memorial wreaths and condolence garlands woven with pristine white chrysanthemums, white roses, and fresh laurel greens.",
      keyFlowers: ["White Chrysanthemums", "White Rose Stems", "Laurel Foliage", "Soft Ivory Ribbon"],
      advanceNotice: "Urgent orders prioritized. Message on WhatsApp for expedited morning preparation.",
      whatsappPrefill: "Hi Shree Ganesh Flowers, I'd like to order: Funeral wreaths",
      iconName: "HeartHandshake",
      image: {
        src: "/images/occasions/funeral-wreaths.webp",
        alt: "Handcrafted white chrysanthemum and rose memorial condolence wreath on natural linen",
        ratio: "4:3",
        focalPoint: "center",
        isStock: true,
      },
    },
  ],

  aboutContent: {
    eyebrow: "TEMPLE-SIDE TRADITION IN PUNE",
    heading: "Fresh dawn blooms, sacred rituals, and handcrafted garlands",
    paragraphs: [
      "Shree Ganesh Flowers is a dedicated neighborhood flower stall situated steps from the temple in Pune. Every single morning before dawn, our flowers are sourced directly from regional growers so that temple visitors and neighborhood families receive crisp, fragrant blooms.",
      "Because our stock arrives fresh every day, varieties and sizes adjust with the morning harvest. Customers frequently call or message us on WhatsApp to verify today's blooms, check garland lengths, or place advance orders for upcoming family functions.",
      "As a humble local shop, we keep the process straightforward and personal: review our flower types online, confirm your custom order via WhatsApp, and pick up your fresh order directly at our stall counter.",
    ],
    bulletPoints: [
      "Daily fresh arrival at 5:00 AM from local wholesale flower markets",
      "Traditional needle-woven garlands for temples, weddings, and home altars",
      "Direct WhatsApp confirmation with payment settled upon shop pickup",
    ],
  },

  flowerCareGuide: [
    {
      title: "Keep Garlands Fresh",
      description: "Store fresh garlands wrapped gently in damp cotton or banana leaf in a cool, ventilated room until your ceremony.",
      icon: "Sparkles",
    },
    {
      title: "Morning Pooja Readiness",
      description: "Pick up pooja packets right after 5:30 AM to take advantage of the crispest morning dew and peak jasmine fragrance.",
      icon: "Flower2",
    },
    {
      title: "One-Day Advance Notice",
      description: "Hand-strung garlands require careful flower selection. Giving us one day advance notice ensures our weavers prepare your exact requirements.",
      icon: "Gift",
    },
  ],

  faqs: [
    {
      question: "How do I place an order for garlands or flowers?",
      answer: "Select the occasion card you need and click the 'Order on WhatsApp' button. Your message will automatically specify the occasion. We will confirm availability and have your flowers ready for pickup.",
    },
    {
      question: "Why should I order wedding and function garlands one day in advance?",
      answer: "We source our flowers every morning at dawn. Booking one day ahead allows us to procure the exact quantity and grade of rose petals, jasmine, or tuberose required for your custom garland weaving.",
    },
    {
      question: "What time do you open in the morning?",
      answer: "We open every day at 5:30 AM. This early opening allows devotees to collect fresh pooja flowers and garlands before attending early morning temple rituals.",
    },
    {
      question: "How do I pay for my flowers?",
      answer: "Orders are settled in person at the shop counter when you pick them up. We accept cash and standard UPI payment at pickup.",
    },
    {
      question: "Can I find out what loose flowers are available today?",
      answer: "Yes. Feel free to click our WhatsApp button or call us in the morning to ask what varieties of fresh marigolds, roses, or jasmine arrived with today's dawn delivery.",
    },
    {
      question: "Where is the flower shop located in Pune?",
      answer: "We are located right near the temple on Temple Road in Pune [ADD EXACT TEMPLE & STREET ADDRESS]. Click the 'Get directions to shop' button for Google Maps navigation.",
    },
  ],
};

/**
 * Helper function to build WhatsApp click-to-chat URL
 */
export function getWhatsAppUrl(prefillMessage: string): string {
  const number = siteContent.contact.whatsappNumber.replace(/[^0-9]/g, "");
  const encoded = encodeURIComponent(prefillMessage);
  return `https://wa.me/${number}?text=${encoded}`;
}
