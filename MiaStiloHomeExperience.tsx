import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MiaStiloLogo } from './home/reference/MiaStiloLogo';
import { 
  Menu, 
  Search, 
  User, 
  Heart, 
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  Lock,
  UserCheck,
  X, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  ArrowUpRight, 
  Check, 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles, 
  Info,
  Calendar,
  Share2,
  BookOpen,
  Download,
  CheckCircle2,
  Truck
} from 'lucide-react';
import { 
  TRANSLATIONS, 
  NAVIGATION_ITEMS, 
  HERO_SLIDES, 
  PRODUCTS, 
  CURATED_COLLECTIONS, 
  Product, 
  TranslationStrings 
} from '../data/reference/data';
import { MEGA_MENU_DATA } from '../data/reference/megaMenuData';
import ThreeDStudio from './home/reference/ThreeDStudio';
import { FurnitureCollectionsGrid } from './home/reference/FurnitureCollectionsGrid';
import { FeaturedProductsGrid } from './home/reference/FeaturedProductsGrid';
import { PromoBannerGrid } from './home/reference/PromoBannerGrid';
import { FurniturePromoSection } from './home/FurniturePromoSection';
import { CelebrityEndorsementsSection } from './home/CelebrityEndorsementsSection';
import { Footer } from './Footer';

// SVG Flag Components for Languages
const FlagTR = ({ className = "w-4 h-3" }: { className?: string }) => (
  <svg className={`${className} rounded-[2px] shrink-0 inline-block border border-black/10`} viewBox="0 0 30 20">
    <rect width="30" height="20" fill="#E30A17"/>
    <circle cx="11" cy="10" r="5" fill="#ffffff"/>
    <circle cx="12.2" cy="10" r="4" fill="#E30A17"/>
    <path d="M15.5 8.2 L16.3 9.6 L17.8 9 L17 10.4 L18.3 11.2 L16.7 11.2 L16.3 12.7 L15.5 11.4 L14.2 12.2 L14.9 10.7 Z" fill="#ffffff"/>
  </svg>
);

const FlagEN = ({ className = "w-4 h-3" }: { className?: string }) => (
  <svg className={`${className} rounded-[2px] shrink-0 inline-block border border-black/10`} viewBox="0 0 60 30">
    <clipPath id="uk-flag-clip"><rect width="60" height="30"/></clipPath>
    <g clipPath="url(#uk-flag-clip)">
      <rect width="60" height="30" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2"/>
      <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
);

const FlagFR = ({ className = "w-4 h-3" }: { className?: string }) => (
  <svg className={`${className} rounded-[2px] shrink-0 inline-block border border-black/10`} viewBox="0 0 30 20">
    <rect x="0" width="10" height="20" fill="#002395"/>
    <rect x="10" width="10" height="20" fill="#FFFFFF"/>
    <rect x="20" width="10" height="20" fill="#ED2939"/>
  </svg>
);

const FlagDE = ({ className = "w-4 h-3" }: { className?: string }) => (
  <svg className={`${className} rounded-[2px] shrink-0 inline-block border border-black/10`} viewBox="0 0 30 20">
    <rect y="0" width="30" height="6.67" fill="#000000"/>
    <rect y="6.67" width="30" height="6.67" fill="#DD0000"/>
    <rect y="13.34" width="30" height="6.67" fill="#FFCE00"/>
  </svg>
);

const LangFlag = ({ code, className = "w-4 h-3" }: { code: 'tr' | 'en' | 'fr' | 'de'; className?: string }) => {
  switch (code) {
    case 'tr': return <FlagTR className={className} />;
    case 'en': return <FlagEN className={className} />;
    case 'fr': return <FlagFR className={className} />;
    case 'de': return <FlagDE className={className} />;
  }
};

const CATALOG_PAGES = [
  {
    id: 1,
    shortLabel: "Living",
    tagline: "2026 ARCHITECTURAL MAIN ISSUE",
    titleTr: "Palazzo & Biarritz Oturma Grubu",
    titleEn: "Palazzo & Biarritz Living Suite",
    descTr: "İtalyan Bouclé dokusu ve ham traverten taş detaylarının harmonisi. Mimari çizgilere sahip oturma odası sistemleri.",
    descEn: "Harmony of Italian Bouclé textures and raw travertine stone details for contemporary architectural living spaces.",
    collection: "Palazzo 2026",
    material: "Bouclé, Travertine, Walnut",
    categoryTarget: "living",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    shortLabel: "Bedroom",
    tagline: "MASTER BEDROOM SANCTUARY",
    titleTr: "Biarritz Baza & Yatak Koleksiyonu",
    titleEn: "Biarritz Bed Base & Mattress Collection",
    descTr: "Keten başlık dokuları, ergonomik lüks bazalar ve vücut destekli hibrid yatak teknolojileri.",
    descEn: "Linen headboard weaves, ergonomic storage bases and body-support hybrid sleeping tech.",
    collection: "Biarritz Sleep",
    material: "Belgian Linen, Pocket Spring",
    categoryTarget: "bed-bases",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    shortLabel: "Wedding",
    tagline: "BRIDAL & NEWLYWED BUNDLES",
    titleTr: "2026 Lüks Düğün Paketleri",
    titleEn: "2026 Luxury Wedding Packages",
    descTr: "Yeni ev kuran çiftler için özel olarak tasarlanan Yatak Odası, Yemek Odası ve Koltuk Takımı çeyiz serisi.",
    descEn: "Curated suite bundles for newlyweds comprising master bedroom, dining room and living room items.",
    collection: "Wedding Exclusive",
    material: "Natural Wood & Textiles",
    categoryTarget: "wedding-package",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    shortLabel: "Dining",
    tagline: "STONE & TIMBER DINING",
    titleTr: "Piazza Traverten Yemek Odası",
    titleEn: "Piazza Travertine Dining Suite",
    descTr: "Doğal traverten mermer blokları ve fırınlanmış masif gürgen sandalyelerin zamansız buluşması.",
    descEn: "Timeless fusion of natural travertine marble blocks with handcrafted solid wood dining chairs.",
    collection: "Piazza Dining",
    material: "Natural Travertine, Oak",
    categoryTarget: "dining",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    shortLabel: "Sectional",
    tagline: "MODULAR COMFORT SYSTEMS",
    titleTr: "Cloud Modüler Köşe Koltuk",
    titleEn: "Cloud Modular Sectional Sofas",
    descTr: "Genişleyebilir modüler yapı, kaz tüyü dolgu konforu ve leke tutmaz premium kumaş serisi.",
    descEn: "Expandable modular structure, feather fill comfort and stain-resistant premium textile palette.",
    collection: "Cloud Modular",
    material: "Goose Feather, Weaved Textile",
    categoryTarget: "sectional",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    shortLabel: "Swatches",
    tagline: "FABRIC & MATERIAL LIBRARY",
    titleTr: "3D Kumaş & Malzeme Kartelası",
    titleEn: "3D Fabric & Material Palette",
    descTr: "Mia Stilo atölyelerinde işlenen 40'tan fazla lüks dokuma kumaş, mermer ve masif cila numunesi.",
    descEn: "Over 40 luxury woven fabrics, marble tiles and solid wood finish swatches crafted in Mia Stilo ateliers.",
    collection: "Atelier Swatches",
    material: "Velvet, Bouclé, Marble, Wood",
    categoryTarget: "studio3d",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
  }
];

export function MiaStiloHomeExperience() {
  // Localization & Custom UI State
  const [lang, setLang] = useState<'tr' | 'en' | 'fr' | 'de'>('tr');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const [currency, setCurrency] = useState<'TL' | 'USD' | 'EUR'>('TL');
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const currencyRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState<'login' | 'register'>('login');
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [authSuccessMsg, setAuthSuccessMsg] = useState('');
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [isECatalogOpen, setIsECatalogOpen] = useState(false);
  const [catalogPage, setCatalogPage] = useState(1);
  const [pdfDownloaded, setPdfDownloaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCargoOpen, setIsCargoOpen] = useState(false);
  const [trackingCode, setTrackingCode] = useState('');
  const [trackingResult, setTrackingResult] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [promoOpen, setPromoOpen] = useState(true);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Consultation Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [consultationForm, setConsultationForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    notes: ''
  });

  const isWhiteHeader = scrolled || isHeaderHovered || hoveredCategory !== null;
  const t: TranslationStrings = TRANSLATIONS[lang];

  const formatPrice = (amount: number) => {
    if (currency === 'USD') {
      return `$${amount.toLocaleString('en-US')}`;
    } else if (currency === 'EUR') {
      return `€${Math.round(amount * 0.92).toLocaleString('de-DE')}`;
    } else {
      return `${Math.round(amount * 36).toLocaleString('tr-TR')} TL`;
    }
  };

  // Load wishlist from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('miastilo_wishlist');
    if (saved) {
      try {
        setWishlist(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Load cart from LocalStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('miastilo_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('miastilo_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateCartQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as { product: Product; quantity: number }[]
    );
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Close currency and language dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (currencyRef.current && !currencyRef.current.contains(event.target as Node)) {
        setIsCurrencyOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Update scrolled state on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-play hero slider slowly
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Toggle wishlist item
  const toggleWishlist = (productId: string) => {
    let updated: string[];
    if (wishlist.includes(productId)) {
      updated = wishlist.filter(id => id !== productId);
    } else {
      updated = [...wishlist, productId];
    }
    setWishlist(updated);
    localStorage.setItem('miastilo_wishlist', JSON.stringify(updated));
  };

  // Handle consultation submit
  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsConsultationOpen(false);
      setConsultationForm({ name: '', email: '', phone: '', date: '', notes: '' });
    }, 4000);
  };

  // Helper to scroll to catalog section and set category
  const navigateToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    setIsMenuOpen(false);
    const element = document.getElementById('catalog-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Filter products based on active category and search query
  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = p.nameTr.toLowerCase().includes(searchLower) || 
                          p.nameEn.toLowerCase().includes(searchLower) ||
                          p.materialTr.toLowerCase().includes(searchLower) ||
                          p.materialEn.toLowerCase().includes(searchLower);
    return matchesCategory && matchesSearch;
  });

  const activeWishlistProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  // Copy Curation / Wishlist text to share
  const copyCurationToClipboard = () => {
    const listText = activeWishlistProducts.map(p => 
      `- ${lang === 'tr' ? p.nameTr : p.nameEn} (${t.price}: ${formatPrice(p.price)})`
    ).join('\n');
    const shareMessage = `${lang === 'tr' ? 'Mia Stilo Kürasyonlarım' : 'My Mia Stilo Curations'}:\n\n${listText}\n\nTotal: ${formatPrice(activeWishlistProducts.reduce((sum, p) => sum + p.price, 0))}`;
    
    navigator.clipboard.writeText(shareMessage).then(() => {
      alert(lang === 'tr' ? 'Kürasyon listeniz kopyalandı! Tasarımcımızla WhatsApp veya E-posta yoluyla paylaşabilirsiniz.' : 'Curation list copied to clipboard! You can share it with our designer.');
    });
  };

  return (
    <div className="min-h-screen bg-[#151515] text-[#f4f1ea] font-sans selection:bg-[#c5a880] selection:text-[#151515] relative overflow-x-hidden">
      
      {/* 2. DUAL MODE HEADER */}
      <header 
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => {
          setIsHeaderHovered(false);
          setHoveredCategory(null);
        }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 top-0 ${
          isWhiteHeader 
            ? 'bg-white border-b border-gray-200 py-3 shadow-md text-[#151515]' 
            : scrolled 
              ? 'bg-[#151515]/95 backdrop-blur-md border-b border-[#252525] py-3' 
              : 'bg-gradient-to-b from-black/60 to-transparent py-5'
        }`}
        id="main-header"
      >
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 flex flex-col gap-4 relative">
          
          {/* Main Bar */}
          <div className="flex items-center justify-between">
            
            {/* Left Icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className={`w-9 h-9 rounded-full transition-colors cursor-pointer flex items-center justify-center ${
                  isWhiteHeader ? 'text-gray-800 hover:bg-gray-100 hover:text-[#c5a880]' : 'text-gray-300 hover:bg-white/10 hover:text-[#c5a880]'
                }`}
                aria-label="Open Menu"
                id="menu-toggle-btn"
              >
                <Menu className="w-5 h-5 stroke-[1.5]" />
              </button>

              {/* Language Switcher & Currency */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* Language Dropdown Menu */}
                <div className="relative flex items-center" ref={langRef} id="lang-dropdown-container">
                  <button 
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className={`h-9 px-2 rounded-full font-semibold text-xs tracking-wider transition-colors cursor-pointer flex items-center gap-1 ${
                      isWhiteHeader ? 'text-gray-800 hover:bg-gray-100 hover:text-[#c5a880]' : 'text-gray-300 hover:bg-white/10 hover:text-[#c5a880]'
                    }`}
                    id="lang-toggle-btn"
                    title="Dil Değiştir / Select Language"
                  >
                    <span>{lang.toUpperCase()}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isLangOpen ? 'rotate-180 text-[#c5a880]' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isLangOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className={`absolute top-full left-0 mt-2 w-28 py-1 rounded shadow-2xl z-50 overflow-hidden border ${
                          isWhiteHeader 
                            ? 'bg-white/95 backdrop-blur-md border-gray-200 text-gray-800' 
                            : 'bg-[#181818]/95 backdrop-blur-md border-gray-800 text-gray-200'
                        }`}
                        id="lang-dropdown-menu"
                      >
                        {[
                          { code: 'tr', label: 'TR' },
                          { code: 'en', label: 'EN' },
                          { code: 'fr', label: 'FR' },
                          { code: 'de', label: 'DE' },
                        ].map((item) => (
                          <button
                            key={item.code}
                            onClick={() => {
                              setLang(item.code as 'tr' | 'en' | 'fr' | 'de');
                              setIsLangOpen(false);
                            }}
                            className={`w-full text-left px-3 py-1.5 text-xs tracking-wider transition-all flex items-center justify-between cursor-pointer ${
                              lang === item.code
                                ? 'bg-[#c5a880]/20 text-[#c5a880] font-bold'
                                : (isWhiteHeader ? 'hover:bg-gray-100 hover:text-black' : 'hover:bg-[#282828] hover:text-white')
                            }`}
                            id={`lang-option-${item.code}`}
                          >
                            <div className="flex items-center gap-2">
                              <LangFlag code={item.code as 'tr' | 'en' | 'fr' | 'de'} className="w-4 h-3" />
                              <span>{item.label}</span>
                            </div>
                            {lang === item.code && <Check className="w-3 h-3 text-[#c5a880]" />}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <span className={`text-[10px] select-none ${isWhiteHeader ? 'text-gray-400' : 'text-gray-600'}`}>|</span>
                
                {/* Currency Dropdown Menu */}
                <div className="relative flex items-center" ref={currencyRef} id="currency-dropdown-container">
                  <button 
                    onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                    className={`h-9 px-2 rounded-full font-semibold text-xs tracking-wider transition-colors cursor-pointer flex items-center gap-1 ${
                      isWhiteHeader ? 'text-gray-800 hover:bg-gray-100 hover:text-[#c5a880]' : 'text-gray-300 hover:bg-white/10 hover:text-[#c5a880]'
                    }`}
                    id="currency-toggle-btn"
                    title="Para Birimi Değiştir"
                  >
                    <span>{currency}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isCurrencyOpen ? 'rotate-180 text-[#c5a880]' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isCurrencyOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 1 }}
                        transition={{ duration: 0.15 }}
                        className={`absolute top-full left-0 mt-2 w-28 py-1 rounded shadow-2xl z-50 overflow-hidden border ${
                          isWhiteHeader 
                            ? 'bg-white/95 backdrop-blur-md border-gray-200 text-gray-800' 
                            : 'bg-[#181818]/95 backdrop-blur-md border-gray-800 text-gray-200'
                        }`}
                        id="currency-dropdown-menu"
                      >
                        {[
                          { code: 'TL', label: 'TL (₺)' },
                          { code: 'EUR', label: 'EUR (€)' },
                          { code: 'USD', label: 'USD ($)' },
                        ].map((item) => (
                          <button
                            key={item.code}
                            onClick={() => {
                              setCurrency(item.code as 'TL' | 'USD' | 'EUR');
                              setIsCurrencyOpen(false);
                            }}
                            className={`w-full text-left px-3 py-1.5 text-xs tracking-wider transition-all flex items-center justify-between cursor-pointer ${
                              currency === item.code
                                ? 'bg-[#c5a880]/20 text-[#c5a880] font-bold'
                                : (isWhiteHeader ? 'hover:bg-gray-100 hover:text-black' : 'hover:bg-[#282828] hover:text-white')
                            }`}
                            id={`currency-option-${item.code.toLowerCase()}`}
                          >
                            <span>{item.code}</span>
                            <span className="text-[10px] opacity-60 font-medium">{item.label.split(' ')[1]}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Brand Logo & Tagline (RH Centered Style) */}
            <div className="text-center flex flex-col items-center select-none">
              <div 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="cursor-pointer group flex flex-col items-center py-0.5"
                id="brand-logo"
              >
                <MiaStiloLogo 
                  isWhiteHeader={isWhiteHeader} 
                  className="h-9 sm:h-11 md:h-[54px] w-auto hover:opacity-90 transition-opacity"
                />
              </div>
            </div>

            {/* Right Header Icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Icon & Expandable Input */}
              <div className="relative flex items-center" id="search-container">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className={`w-9 h-9 rounded-full transition-colors cursor-pointer flex items-center justify-center ${
                    isWhiteHeader ? 'text-gray-800 hover:bg-gray-100 hover:text-[#788f22]' : 'text-gray-300 hover:bg-white/10 hover:text-[#788f22]'
                  }`}
                  aria-label="Search"
                  title={lang === 'tr' ? 'Arama Yap' : 'Search'}
                  id="search-toggle-btn"
                >
                  <Search className="w-5 h-5 stroke-[1.5]" />
                </button>
                
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: '180px' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden ml-1"
                    >
                      <input
                        type="text"
                        placeholder={t.searchPlaceholder}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoFocus
                        className={`w-full bg-transparent border-b text-xs outline-none py-1 px-1 font-light transition-colors ${
                          isWhiteHeader ? 'border-gray-800 text-gray-900 placeholder-gray-400' : 'border-[#788f22] text-[#f4f1ea] placeholder-gray-500'
                        }`}
                        id="search-input-header"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Member / User Profile Icon */}
              <button 
                onClick={() => setIsAuthOpen(true)}
                className={`w-9 h-9 rounded-full transition-colors cursor-pointer flex items-center justify-center relative ${
                  isWhiteHeader ? 'text-gray-800 hover:bg-gray-100 hover:text-[#788f22]' : 'text-gray-300 hover:bg-white/10 hover:text-[#788f22]'
                }`}
                title={userLoggedIn ? (lang === 'tr' ? 'Hesabım' : 'My Account') : (lang === 'tr' ? 'Üye Girişi' : 'Member Sign In')}
                aria-label="User Account"
                id="user-auth-btn"
              >
                <User className="w-5 h-5 stroke-[1.5]" />
                {userLoggedIn && (
                  <span className="w-2 h-2 rounded-full bg-[#788f22] absolute top-1.5 right-1.5" />
                )}
              </button>

              {/* Shopping Cart Icon */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className={`w-9 h-9 rounded-full transition-colors cursor-pointer flex items-center justify-center relative ${
                  isWhiteHeader ? 'text-gray-800 hover:bg-gray-100 hover:text-[#788f22]' : 'text-gray-300 hover:bg-white/10 hover:text-[#788f22]'
                }`}
                aria-label="Shopping Cart"
                id="cart-toggle-btn"
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#788f22] text-[#151515] text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* 3. PRIMARY NAVIGATION BAR (RH Luxury category listing) */}
          <nav className={`hidden lg:flex items-center justify-between border-t pt-2 transition-colors ${
            isWhiteHeader ? 'border-gray-100' : 'border-[#252525]'
          }`}>
            <ul className="w-full flex items-center justify-between text-[11px] tracking-[0.10em] xl:tracking-[0.14em] font-medium text-gray-300">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = item.id === 'home' 
                  ? activeCategory === 'all' 
                  : activeCategory === item.id;
                return (
                  <li 
                    key={item.id}
                    onMouseEnter={() => setHoveredCategory((item.id !== 'home' && item.id !== 'interior-design') ? item.id : null)}
                  >
                    <button
                      id={item.id === 'interior-design' ? 'interior-design-btn' : `nav-item-${item.id}`}
                      onClick={() => {
                        if (item.id === 'home') {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                          setActiveCategory('all');
                        } else if (item.id === 'studio3d') {
                          setIsStudioOpen(true);
                        } else if (item.id === 'interior-design') {
                          setIsConsultationOpen(true);
                        } else if (item.id === 'ecatalog') {
                          setIsECatalogOpen(true);
                        } else {
                          navigateToCategory(item.id === 'sale' ? 'living' : item.id);
                        }
                      }}
                      className={`transition-colors relative pb-1 group cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                        item.isSale 
                          ? (isWhiteHeader ? 'text-[#151515] font-normal hover:text-[#788f22]' : 'text-white font-normal hover:text-[#788f22]') 
                          : item.isCatalog
                            ? 'text-[#788f22] font-semibold hover:text-[#b0dc38]'
                            : isActive
                              ? 'text-[#788f22] font-semibold' 
                              : isWhiteHeader
                                ? 'text-gray-700 hover:text-[#788f22]'
                                : 'text-gray-300 hover:text-[#788f22]'
                      }`}
                    >
                      {item.isCatalog && <BookOpen className="w-3.5 h-3.5 text-[#788f22]" />}
                      <span>{lang === 'tr' ? item.tr : (lang === 'fr' ? item.fr || item.en : lang === 'de' ? item.de || item.en : item.en)}</span>
                      <span className={`absolute left-0 bottom-0 h-[1px] bg-[#788f22] transition-all duration-300 w-0 group-hover:w-full ${
                        isActive || item.isCatalog ? 'w-full' : ''
                      }`} />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* 3.1 MEGA MENU DROPDOWN PANE */}
          <AnimatePresence>
            {hoveredCategory && MEGA_MENU_DATA[hoveredCategory] && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute left-0 right-0 top-full bg-white text-[#151515] border-t border-gray-100 shadow-2xl overflow-hidden z-50 py-10 px-12"
                onMouseEnter={() => setHoveredCategory(hoveredCategory)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="grid grid-cols-4 gap-8">
                  {MEGA_MENU_DATA[hoveredCategory].sections.map((section, idx) => (
                    <div key={idx} className="space-y-4 text-left">
                      <h4 className="text-[10px] tracking-[0.25em] font-bold text-gray-900 uppercase">
                        {lang === 'tr' ? section.titleTr : section.titleEn}
                      </h4>
                      <ul className="space-y-2.5">
                        {section.items.map((subItem, sIdx) => (
                          <li key={sIdx}>
                            <button
                              onClick={() => {
                                setHoveredCategory(null);
                                if (hoveredCategory === 'studio3d') {
                                  setIsStudioOpen(true);
                                } else {
                                  navigateToCategory(hoveredCategory === 'sale' ? 'living' : hoveredCategory);
                                }
                              }}
                              className="text-xs text-gray-500 hover:text-[#788f22] transition-colors tracking-wide text-left block w-full"
                            >
                              {lang === 'tr' ? subItem.tr : subItem.en}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  
                  {/* Featured Card */}
                  <div className="flex flex-col gap-3 text-left">
                    <div className="aspect-[16/10] overflow-hidden bg-gray-100 border border-gray-100">
                      <img 
                        src={MEGA_MENU_DATA[hoveredCategory].imageUrl} 
                        alt="Featured archive" 
                        className="w-full h-full object-cover grayscale-[30%] hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <span className="text-[9px] tracking-[0.2em] text-[#788f22] font-bold block uppercase mb-1">
                        {lang === 'tr' ? 'ÖNE ÇIKAN KOLEKSİYON' : 'FEATURED ARCHIVE'}
                      </span>
                      <h5 className="text-[11px] font-medium tracking-wide text-gray-900">
                        {lang === 'tr' ? MEGA_MENU_DATA[hoveredCategory].featuredTr : MEGA_MENU_DATA[hoveredCategory].featuredEn}
                      </h5>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </header>

      {/* 4. HERO SECTION WITH "SHOP THE LOOK" HOTSPOTS */}
      <section className="relative h-screen min-h-[600px] w-full" id="hero-carousel">
        <AnimatePresence mode="wait">
          {HERO_SLIDES.map((slide, idx) => {
            if (idx !== activeSlide) return null;
            return (
              <motion.div 
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(to top, rgba(21,21,21,1) 0%, rgba(21,21,21,0.2) 50%, rgba(0,0,0,0.6) 100%), url(${slide.image})` }}
              >
                {/* Floating Content Overlays */}
                <div className="absolute inset-0 flex flex-col justify-end items-center pb-8 sm:pb-12 md:pb-16 pt-36 md:pt-48 px-4 text-center z-10 pointer-events-none">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="max-w-4xl pointer-events-auto"
                  >
                    {/* Subtitle / Category Label */}
                    <p className="text-[11px] md:text-sm tracking-[0.35em] text-[#788f22] font-semibold mb-2 uppercase drop-shadow-sm">
                      {lang === 'tr' ? slide.subtitleTr : slide.subtitleEn}
                    </p>

                    {/* The Summer Sale */}
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-[0.2em] text-[#f4f1ea] mb-2 leading-tight">
                      {lang === 'tr' ? slide.titleTr : slide.titleEn}
                    </h2>

                    {/* SAVE UP TO 70% (RH signature ultra-thin text) */}
                    <h3 className="text-3xl sm:text-5xl md:text-7xl font-serif font-thin tracking-[0.08em] text-[#f4f1ea] leading-tight mb-2">
                      {lang === 'tr' ? slide.accentTr : slide.accentEn}
                    </h3>

                    {/* Member benefits subtext */}
                    <div className="h-[1px] w-20 bg-[#788f22]/60 mx-auto my-3 sm:my-4" />
                    <p className="text-[11px] md:text-xs tracking-[0.2em] text-[#788f22] font-medium max-w-xl mx-auto leading-relaxed">
                      {lang === 'tr' ? slide.subtextTr : slide.subtextEn}
                    </p>
                  </motion.div>
                </div>

                {/* INTERACTIVE HOTSPOTS overlay */}
                {slide.hotspots.map((hotspot, hIdx) => {
                  const product = PRODUCTS.find(p => p.id === hotspot.productId);
                  if (!product) return null;
                  return (
                    <div 
                      key={hIdx}
                      className="absolute group z-20"
                      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                    >
                      {/* Pulse circle */}
                      <button 
                        onClick={() => setSelectedProduct(product)}
                        className="relative flex h-8 w-8 items-center justify-center cursor-pointer"
                        aria-label={`Hotspot ${hIdx + 1}: ${lang === 'tr' ? product.nameTr : product.nameEn}`}
                        id={`hotspot-${slide.id}-${product.id}`}
                      >
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#788f22] opacity-40"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#788f22] border border-white"></span>
                      </button>

                      {/* Tooltip on hover */}
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-10 w-48 bg-[#1e1e1e]/95 backdrop-blur border border-[#788f22]/30 p-3 rounded-none shadow-2xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none text-center">
                        <span className="text-[9px] tracking-[0.2em] text-gray-400 block mb-1 uppercase">
                          {lang === 'tr' ? product.category : product.category.toUpperCase()}
                        </span>
                        <h4 className="text-[11px] font-medium tracking-wide text-[#f4f1ea] truncate">
                          {lang === 'tr' ? product.nameTr : product.nameEn}
                        </h4>
                        <p className="text-[10px] text-[#788f22] tracking-wider mt-1 font-semibold">
                          {formatPrice(product.price)}
                        </p>
                        <span className="text-[8px] text-gray-500 block mt-1 tracking-widest uppercase">
                          {t.hotspotLabel} →
                        </span>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Carousel controls */}
        <div className="absolute bottom-10 left-6 lg:left-12 flex items-center gap-4 z-30">
          <button 
            onClick={() => setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
            className="w-10 h-10 border border-[#f4f1ea]/20 rounded-full flex items-center justify-center hover:bg-[#788f22] hover:text-[#151515] hover:border-[#788f22] transition-all cursor-pointer text-[#f4f1ea]"
            aria-label="Previous Slide"
            id="prev-slide-btn"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
            className="w-10 h-10 border border-[#f4f1ea]/20 rounded-full flex items-center justify-center hover:bg-[#788f22] hover:text-[#151515] hover:border-[#788f22] transition-all cursor-pointer text-[#f4f1ea]"
            aria-label="Next Slide"
            id="next-slide-btn"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel indicator lines */}
        <div className="absolute bottom-12 right-6 lg:right-12 flex items-center gap-2 z-30">
          {HERO_SLIDES.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className="group flex flex-col justify-center py-2 cursor-pointer"
              aria-label={`Go to slide ${idx + 1}`}
              id={`slide-indicator-${idx}`}
            >
              <div className={`h-[2px] transition-all duration-500 ${
                idx === activeSlide ? 'w-16 bg-[#788f22]' : 'w-8 bg-[#f4f1ea]/30'
              }`} />
            </button>
          ))}
        </div>
      </section>

      {/* MOBİLYA KOLEKSİYONLARI GRID */}
      <FurnitureCollectionsGrid 
        lang={lang} 
        bgColor="#faf8f5"
        onSelectCategory={(catId) => {
          setActiveCategory(catId);
          setIsECatalogOpen(false);
          const el = document.getElementById('catalog-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* FURNITURE PROMO (BENTO GRID) - Replaces PromoBannerGrid */}
      <FurniturePromoSection 
        lang={lang} 
        onSelectCategory={(catId) => {
          setActiveCategory(catId);
          setIsECatalogOpen(false);
          const el = document.getElementById('catalog-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* SİZİN İÇİN SEÇTİKLERİMİZ SHOWCASE GRID */}
      <FeaturedProductsGrid 
        lang={lang} 
        onSelectCategory={(catId) => {
          setActiveCategory(catId);
          setIsECatalogOpen(false);
          const el = document.getElementById('catalog-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* CELEBRITY ENDORSEMENTS / TESTIMONIALS */}
      <CelebrityEndorsementsSection lang={lang} />







      {/* --- FLOATING OVERLAY MENUS / SLIDEOUT DRAWERS --- */}

      {/* A. PRODUCT DETAIL MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 lg:p-12"
            onClick={() => setSelectedProduct(null)}
            id="product-detail-modal"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-[#151515] border border-[#252525] max-w-5xl w-full max-h-[90vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 border border-[#252525] hover:border-white transition-colors z-10 cursor-pointer"
                id="close-detail-modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Image Column */}
              <div className="h-[300px] md:h-full min-h-[300px] md:min-h-[500px] bg-black">
                <img 
                  src={selectedProduct.image} 
                  alt={lang === 'tr' ? selectedProduct.nameTr : selectedProduct.nameEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Content Column */}
              <div className="p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.3em] text-[#788f22] block mb-2 font-medium uppercase">
                    {selectedProduct.category}
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-serif tracking-[0.1em] text-[#f4f1ea] mb-4">
                    {lang === 'tr' ? selectedProduct.nameTr : selectedProduct.nameEn}
                  </h3>

                  <p className="text-2xl font-serif text-[#788f22] tracking-wide mb-6">
                    {formatPrice(selectedProduct.price)}
                  </p>

                  <div className="h-[1px] bg-[#252525] my-6" />

                  {/* Core description */}
                  <p className="text-xs md:text-sm text-gray-400 font-light tracking-wide leading-relaxed mb-6">
                    {lang === 'tr' ? selectedProduct.descriptionTr : selectedProduct.descriptionEn}
                  </p>

                  {/* Specs */}
                  <div className="flex flex-col gap-3 text-xs font-light text-gray-300">
                    <div className="flex border-b border-[#252525] pb-2">
                      <span className="w-24 text-gray-500 uppercase tracking-widest text-[9px]">{t.dimensions}</span>
                      <span className="flex-1 tracking-wide">{lang === 'tr' ? selectedProduct.dimensionsTr : selectedProduct.dimensionsEn}</span>
                    </div>
                    <div className="flex border-b border-[#252525] pb-2">
                      <span className="w-24 text-gray-500 uppercase tracking-widest text-[9px]">{t.material}</span>
                      <span className="flex-1 tracking-wide">{lang === 'tr' ? selectedProduct.materialTr : selectedProduct.materialEn}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 mt-10">
                  <button 
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="w-full py-3.5 bg-[#788f22] text-[#151515] hover:bg-[#61741b] text-xs tracking-[0.2em] font-extrabold flex items-center justify-center gap-2 border border-[#788f22] transition-all duration-300 cursor-pointer uppercase shadow-lg"
                    id={`modal-cart-btn-${selectedProduct.id}`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{lang === 'tr' ? 'SEPETE EKLE' : 'ADD TO CART'}</span>
                  </button>

                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => toggleWishlist(selectedProduct.id)}
                      className={`w-full py-3 text-xs tracking-[0.15em] font-semibold flex items-center justify-center gap-2 border transition-all duration-300 cursor-pointer ${
                        wishlist.includes(selectedProduct.id) 
                          ? 'bg-[#252525] text-[#788f22] border-[#788f22]' 
                          : 'bg-transparent border-[#333] text-gray-300 hover:border-white hover:text-white'
                      }`}
                      id={`modal-fav-btn-${selectedProduct.id}`}
                    >
                      <Heart className="w-3.5 h-3.5 stroke-[2]" fill={wishlist.includes(selectedProduct.id) ? "currentColor" : "none"} />
                      <span>{wishlist.includes(selectedProduct.id) ? (lang === 'tr' ? 'KÜRASYONDA' : 'IN CURATIONS') : (lang === 'tr' ? 'FAVORİ' : 'FAVORITE')}</span>
                    </button>

                    <button 
                      onClick={() => {
                        setSelectedProduct(null);
                        setIsConsultationOpen(true);
                      }}
                      className="w-full py-3 bg-transparent border border-[#333] hover:border-white text-gray-300 hover:text-white text-xs tracking-[0.15em] font-medium transition-all cursor-pointer flex items-center justify-center gap-1.5"
                      id="modal-consult-btn"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#788f22]" />
                      <span>{lang === 'tr' ? 'TEKLİF AL' : 'GET QUOTE'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* B. WISHLIST / CURATIONS SLIDE-OVER DRAWER (Right aligned) */}
      <AnimatePresence>
        {isWishlistOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden" id="wishlist-drawer-wrapper">
            <div className="absolute inset-0 overflow-hidden">
              {/* Overlay Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsWishlistOpen(false)}
                className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
              />

              {/* Drawer Content */}
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <motion.div 
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="pointer-events-auto w-screen max-w-md"
                >
                  <div className="flex h-full flex-col bg-[#151515] border-l border-[#252525] shadow-2xl">
                    
                    {/* Header */}
                    <div className="px-6 py-6 border-b border-[#252525] flex items-center justify-between">
                      <h3 className="text-sm font-serif tracking-[0.2em] uppercase text-[#f4f1ea] flex items-center gap-2">
                        <Heart className="w-4.5 h-4.5 text-[#788f22] fill-[#788f22]" />
                        {t.wishlistTitle} ({wishlist.length})
                      </h3>
                      <button 
                        onClick={() => setIsWishlistOpen(false)}
                        className="text-gray-400 hover:text-white p-1"
                        id="close-wishlist-drawer"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Product List */}
                    <div className="flex-1 overflow-y-auto px-6 py-6">
                      {activeWishlistProducts.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center">
                          <Heart className="w-12 h-12 text-[#252525] mb-4" />
                          <p className="text-gray-500 font-light text-xs tracking-wider">
                            {t.emptyWishlist}
                          </p>
                          <button 
                            onClick={() => { setIsWishlistOpen(false); navigateToCategory('all'); }}
                            className="mt-4 text-xs tracking-[0.2em] text-[#788f22] underline font-medium"
                            id="wishlist-start-curating"
                          >
                            {lang === 'tr' ? 'Kürasyona Başla' : 'Start Curating'}
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          {activeWishlistProducts.map(p => (
                            <div key={p.id} className="flex gap-4 border-b border-[#252525] pb-6">
                              <div className="w-20 h-20 bg-neutral-900 shrink-0">
                                <img 
                                  src={p.image} 
                                  alt={lang === 'tr' ? p.nameTr : p.nameEn}
                                  referrerPolicy="no-referrer"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1 flex flex-col justify-between">
                                <div>
                                  <h4 className="text-xs font-serif tracking-[0.1em] text-[#f4f1ea]">
                                    {lang === 'tr' ? p.nameTr : p.nameEn}
                                  </h4>
                                  <p className="text-[10px] text-gray-500 tracking-wide truncate mt-0.5 max-w-[200px]">
                                    {lang === 'tr' ? p.materialTr : p.materialEn}
                                  </p>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                  <span className="text-xs font-serif text-[#788f22] font-light">
                                    {formatPrice(p.price)}
                                  </span>
                                  <button 
                                    onClick={() => toggleWishlist(p.id)}
                                    className="text-[10px] text-rose-500 tracking-wider hover:underline"
                                    id={`remove-fav-${p.id}`}
                                  >
                                    {lang === 'tr' ? 'Kaldır' : 'Remove'}
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Footer Summary / Consultation trigger */}
                    {activeWishlistProducts.length > 0 && (
                      <div className="border-t border-[#252525] bg-[#0d0d0d] px-6 py-6 space-y-4">
                        <div className="flex items-center justify-between text-xs tracking-wider">
                          <span className="text-gray-400 font-light">{lang === 'tr' ? 'TOPLAM DEĞER' : 'TOTAL VALUE'}</span>
                          <span className="font-serif text-[#788f22] text-lg font-bold">
                            {formatPrice(activeWishlistProducts.reduce((sum, p) => sum + p.price, 0))}
                          </span>
                        </div>
                        
                        <p className="text-[10px] text-gray-500 text-center tracking-wide leading-relaxed">
                          {lang === 'tr' 
                            ? "*Kürasyon listenizi kopyalayarak iç mimarlarımıza gönderebilir veya doğrudan fiyat teklifi isteyebilirsiniz." 
                            : "*You can copy your curation details to share directly with our architectural consulting division."}
                        </p>

                        <div className="grid grid-cols-2 gap-3">
                          <button 
                            onClick={copyCurationToClipboard}
                            className="py-3 bg-transparent border border-[#788f22] text-[#788f22] text-[10px] tracking-widest font-semibold flex items-center justify-center gap-1.5 hover:bg-[#788f22] hover:text-[#151515] transition-all cursor-pointer"
                            id="copy-curation-btn"
                          >
                            <Share2 className="w-3.5 h-3.5" />
                            {lang === 'tr' ? 'LİSTEYİ KOPYALA' : 'COPY LIST'}
                          </button>
                          
                          <button 
                            onClick={() => {
                              setIsWishlistOpen(false);
                              setIsConsultationOpen(true);
                            }}
                            className="py-3 bg-[#788f22] text-[#151515] text-[10px] tracking-widest font-bold text-center hover:bg-[#61741b] transition-all cursor-pointer"
                            id="consultation-from-wishlist-btn"
                          >
                            {lang === 'tr' ? 'TEKLİF AL' : 'GET QUOTE'}
                          </button>
                        </div>
                      </div>
                    )}

                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>


      {/* C. CATEGORY DRAWER / MOBILE SIDEBAR (Left aligned) */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden" id="category-drawer-wrapper">
            <div className="absolute inset-0 overflow-hidden">
              {/* Overlay Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
              />

              {/* Drawer Content */}
              <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="pointer-events-auto w-screen max-w-sm"
                >
                  <div className="flex h-full flex-col bg-white border-r border-gray-100 shadow-2xl">
                    
                    {/* Header */}
                    <div className="px-6 py-6 border-b border-gray-100 flex items-center justify-between">
                      <div className="flex flex-col text-left">
                        <h3 className="text-md font-serif tracking-[0.2em] uppercase text-gray-900 font-semibold">MİA STİLO</h3>
                        <span className="text-[9px] tracking-[0.25em] text-[#788f22] uppercase font-bold mt-0.5">HOME LİVİNG</span>
                      </div>
                      <button 
                        onClick={() => setIsMenuOpen(false)}
                        className="text-gray-400 hover:text-gray-900 p-1"
                        id="close-category-drawer"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Menu items */}
                    <div className="flex-1 overflow-y-auto px-6 py-8 text-left">
                      <span className="text-[9px] tracking-[0.3em] text-[#788f22] font-bold block mb-4 uppercase">
                        {lang === 'tr' ? 'KOLEKSİYONLARIMIZ' : 'OUR ARCHIVES'}
                      </span>
                      <ul className="space-y-4 text-sm tracking-[0.15em] font-medium">
                        <li>
                          <button 
                            onClick={() => {
                              setIsMenuOpen(false);
                              navigateToCategory('all');
                            }}
                            className="text-gray-800 hover:text-[#788f22] transition-colors block text-left w-full"
                          >
                            {lang === 'tr' ? 'TÜM KOLEKSİYON' : 'ALL COLLECTIONS'}
                          </button>
                        </li>
                        {NAVIGATION_ITEMS.map((item) => (
                          <li key={item.id} className="border-t border-gray-100 pt-4">
                            <button 
                              onClick={() => {
                                if (item.id === 'studio3d') {
                                  setIsMenuOpen(false);
                                  setIsStudioOpen(true);
                                } else if (item.id === 'ecatalog') {
                                  setIsMenuOpen(false);
                                  setIsECatalogOpen(true);
                                } else {
                                  setIsMenuOpen(false);
                                  navigateToCategory(item.id === 'sale' ? 'living' : item.id === 'estates' ? 'all' : item.id);
                                }
                              }}
                              className={`hover:text-[#788f22] transition-colors text-left w-full flex items-center justify-between ${
                                item.isSale 
                                  ? 'text-gray-900 font-normal hover:text-[#788f22]' 
                                  : item.isCatalog
                                    ? 'text-[#788f22] font-bold'
                                    : 'text-gray-800'
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                {item.isCatalog && <BookOpen className="w-4 h-4 text-[#788f22]" />}
                                {lang === 'tr' ? item.tr : (lang === 'fr' ? item.fr || item.en : lang === 'de' ? item.de || item.en : item.en)}
                              </span>
                              <span className="text-[9px] text-gray-400">→</span>
                            </button>
                          </li>
                        ))}
                      </ul>

                      <div className="h-[1px] bg-gray-100 my-8" />

                      {/* Contact & Info */}
                      <span className="text-[9px] tracking-[0.3em] text-[#788f22] font-bold block mb-4 uppercase">
                        {lang === 'tr' ? 'MİMARLIK & İLETİŞİM' : 'DESIGN & ENQUIRIES'}
                      </span>
                      <ul className="space-y-3 text-xs font-light text-gray-500 tracking-wider">
                        <li>
                          <button 
                            onClick={() => { setIsMenuOpen(false); setIsConsultationOpen(true); }}
                            className="text-gray-700 hover:text-[#788f22] transition-colors text-left"
                          >
                            {t.requestConsultation}
                          </button>
                        </li>
                        <li>Nispetiye Mah. Bebek Yokuşu No:24</li>
                        <li>Beşiktaş, İstanbul</li>
                        <li>miastilohome@gmail.com</li>
                        <li>+90 (212) 282 34 00</li>
                      </ul>
                    </div>

                    <div className="p-6 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
                      <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">DİL / LANGUAGE</span>
                      <div className="flex gap-1.5 text-xs">
                        {[
                          { code: 'tr', label: 'TR' },
                          { code: 'en', label: 'EN' },
                          { code: 'fr', label: 'FR' },
                          { code: 'de', label: 'DE' }
                        ].map((item) => (
                          <button
                            key={item.code}
                            onClick={() => setLang(item.code as 'tr' | 'en' | 'fr' | 'de')}
                            className={`px-2 py-1 text-[11px] font-bold rounded transition-colors cursor-pointer flex items-center gap-1.5 ${
                              lang === item.code ? 'bg-[#788f22] text-white' : 'text-gray-600 hover:text-black hover:bg-gray-200'
                            }`}
                          >
                            <LangFlag code={item.code as 'tr' | 'en' | 'fr' | 'de'} className="w-3.5 h-2.5" />
                            <span>{item.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>


      {/* D. WHITE-GLOVE CONSULTATION APPOINTMENT FORM MODAL */}
      <AnimatePresence>
        {isConsultationOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setIsConsultationOpen(false)}
            id="consultation-modal"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#151515] border border-[#252525] max-w-lg w-full p-8 lg:p-10 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsConsultationOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white p-2"
                id="close-consultation-modal"
              >
                <X className="w-5 h-5" />
              </button>

              {formSubmitted ? (
                <div className="text-center py-8 flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#788f22]/10 flex items-center justify-center text-[#788f22] mb-2 border border-[#788f22]/30">
                    <Check className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <h3 className="text-xl font-serif tracking-[0.1em] text-[#f4f1ea]">
                    {lang === 'tr' ? 'Talebiniz Alındı' : 'Request Received'}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed max-w-sm tracking-wide">
                    {t.requestSuccess}
                  </p>
                  <p className="text-[10px] text-[#788f22] tracking-widest animate-pulse pt-4">
                    {lang === 'tr' ? 'MIA STILO HOME ATÖLYE' : 'MIA STILO HOME DESIGN TEAM'}
                  </p>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-[#788f22]" />
                    <span className="text-[9px] tracking-[0.35em] text-[#788f22] font-bold uppercase">
                      {lang === 'tr' ? 'KİŞİYE ÖZEL İÇ MİMARLIK' : 'PRIVATE ARCHITECTURAL DESIGNS'}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-serif tracking-[0.1em] text-[#f4f1ea] mb-3">
                    {t.bookTitle}
                  </h3>
                  <p className="text-xs text-gray-400 tracking-wide font-light leading-relaxed mb-6">
                    {t.bookDesc}
                  </p>

                  <form onSubmit={handleConsultationSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest text-gray-500 uppercase block font-semibold">{t.fullName}</label>
                      <input 
                        required
                        type="text" 
                        value={consultationForm.name}
                        onChange={(e) => setConsultationForm({...consultationForm, name: e.target.value})}
                        className="w-full bg-[#1e1e1e] border border-[#252525] focus:border-[#788f22] rounded-none px-4 py-2.5 text-xs text-[#f4f1ea] outline-none tracking-wide"
                        placeholder="John Doe"
                        id="form-input-name"
                      />
                    </div>

                    {/* Email and Phone Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[9px] tracking-widest text-gray-500 uppercase block font-semibold">{t.email}</label>
                        <input 
                          required
                          type="email" 
                          value={consultationForm.email}
                          onChange={(e) => setConsultationForm({...consultationForm, email: e.target.value})}
                          className="w-full bg-[#1e1e1e] border border-[#252525] focus:border-[#788f22] rounded-none px-4 py-2.5 text-xs text-[#f4f1ea] outline-none tracking-wide"
                          placeholder="john@example.com"
                          id="form-input-email"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] tracking-widest text-gray-500 uppercase block font-semibold">{t.phone}</label>
                        <input 
                          required
                          type="tel" 
                          value={consultationForm.phone}
                          onChange={(e) => setConsultationForm({...consultationForm, phone: e.target.value})}
                          className="w-full bg-[#1e1e1e] border border-[#252525] focus:border-[#788f22] rounded-none px-4 py-2.5 text-xs text-[#f4f1ea] outline-none tracking-wide"
                          placeholder="+90 (555) 000 00 00"
                          id="form-input-phone"
                        />
                      </div>
                    </div>

                    {/* Preferred Date */}
                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest text-gray-500 uppercase block font-semibold flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#788f22]" />
                        {t.preferredDate}
                      </label>
                      <input 
                        required
                        type="date" 
                        value={consultationForm.date}
                        onChange={(e) => setConsultationForm({...consultationForm, date: e.target.value})}
                        className="w-full bg-[#1e1e1e] border border-[#252525] focus:border-[#788f22] rounded-none px-4 py-2.5 text-xs text-[#f4f1ea] outline-none tracking-wide"
                        id="form-input-date"
                      />
                    </div>

                    {/* Special notes */}
                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest text-gray-500 uppercase block font-semibold">{t.notes}</label>
                      <textarea 
                        rows={3}
                        value={consultationForm.notes}
                        onChange={(e) => setConsultationForm({...consultationForm, notes: e.target.value})}
                        className="w-full bg-[#1e1e1e] border border-[#252525] focus:border-[#788f22] rounded-none px-4 py-2.5 text-xs text-[#f4f1ea] outline-none tracking-wide resize-none"
                        placeholder={t.notesPlaceholder}
                        id="form-input-notes"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3.5 bg-[#788f22] hover:bg-[#61741b] text-[#151515] text-xs tracking-[0.2em] font-extrabold transition-all duration-300 mt-6 cursor-pointer"
                      id="form-submit-btn"
                    >
                      {t.submitRequest.toUpperCase()}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* E. 3D STUDIO COMPONENT MODAL */}
      <ThreeDStudio 
        isOpen={isStudioOpen}
        onClose={() => setIsStudioOpen(false)}
        lang={lang}
        currency={currency}
        toggleWishlist={toggleWishlist}
        wishlist={wishlist}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* F. E-KATALOG DIGITAL LOOKBOOK MODAL */}
      <AnimatePresence>
        {isECatalogOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between overflow-hidden"
            id="ecatalog-modal-wrapper"
          >
            {/* Top Bar Header */}
            <div className="px-6 py-4 border-b border-[#252525] bg-[#141414] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-[#788f22]" />
                <div>
                  <h3 className="text-xs md:text-sm font-serif tracking-[0.2em] uppercase text-[#f4f1ea] font-semibold">
                    MİA STİLO | {lang === 'tr' ? '2026 MİMARİ E-KATALOG' : '2026 ARCHITECTURAL E-CATALOGUE'}
                  </h3>
                  <span className="text-[9px] tracking-[0.2em] text-[#788f22] uppercase font-bold block mt-0.5">
                    {lang === 'tr' ? `SAYFA ${catalogPage} / ${CATALOG_PAGES.length}` : `PAGE ${catalogPage} / ${CATALOG_PAGES.length}`}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Download PDF Button */}
                <button 
                  onClick={() => {
                    setPdfDownloaded(true);
                    setTimeout(() => setPdfDownloaded(false), 3000);
                  }}
                  className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#1e1e1e] hover:bg-[#252525] border border-[#333] text-gray-200 text-xs tracking-wider rounded-none transition-all cursor-pointer"
                  id="download-catalog-pdf-btn"
                >
                  {pdfDownloaded ? <CheckCircle2 className="w-4 h-4 text-[#788f22]" /> : <Download className="w-4 h-4 text-[#788f22]" />}
                  <span>{pdfDownloaded ? (lang === 'tr' ? 'İNDİRİLDİ (PDF)' : 'DOWNLOADED (PDF)') : (lang === 'tr' ? 'PDF İNDİR (24 MB)' : 'DOWNLOAD PDF (24 MB)')}</span>
                </button>

                {/* Consultation Button */}
                <button 
                  onClick={() => {
                    setIsECatalogOpen(false);
                    setIsConsultationOpen(true);
                  }}
                  className="hidden md:flex items-center gap-1.5 px-4 py-2 bg-[#788f22] hover:bg-[#61741b] text-[#151515] text-xs font-bold tracking-wider rounded-none transition-all cursor-pointer"
                  id="catalog-consult-btn"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === 'tr' ? 'TEKLİF AL' : 'GET QUOTE'}</span>
                </button>

                {/* Close Modal */}
                <button 
                  onClick={() => setIsECatalogOpen(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  id="close-ecatalog-modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Main Interactive Page Area */}
            <div className="flex-1 relative flex items-center justify-center p-4 md:p-8 overflow-y-auto">
              {/* Previous Arrow */}
              <button 
                onClick={() => setCatalogPage(prev => Math.max(1, prev - 1))}
                disabled={catalogPage === 1}
                className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/80 border border-[#333] text-white transition-all cursor-pointer ${
                  catalogPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:border-[#788f22] hover:text-[#788f22]'
                }`}
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Page Container */}
              <div className="w-full max-w-4xl bg-[#181818] border border-[#282828] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[460px]">
                {/* Catalog Image */}
                <div className="w-full md:w-3/5 relative min-h-[280px] md:min-h-[460px] bg-black">
                  <img 
                    src={CATALOG_PAGES[catalogPage - 1].image} 
                    alt={CATALOG_PAGES[catalogPage - 1].titleTr}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 border border-[#333] text-[10px] tracking-widest text-[#788f22] uppercase font-bold">
                    PAGE 0{catalogPage} / 06
                  </div>
                </div>

                {/* Catalog Page Content */}
                <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between bg-[#151515]">
                  <div>
                    <span className="text-[10px] tracking-[0.3em] text-[#788f22] font-bold block mb-2 uppercase">
                      {CATALOG_PAGES[catalogPage - 1].tagline}
                    </span>
                    <h4 className="text-xl md:text-2xl font-serif text-[#f4f1ea] tracking-wide mb-3 leading-snug">
                      {lang === 'tr' ? CATALOG_PAGES[catalogPage - 1].titleTr : CATALOG_PAGES[catalogPage - 1].titleEn}
                    </h4>
                    <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                      {lang === 'tr' ? CATALOG_PAGES[catalogPage - 1].descTr : CATALOG_PAGES[catalogPage - 1].descEn}
                    </p>

                    <div className="space-y-3 border-t border-[#252525] pt-4 text-xs font-light text-gray-300">
                      <div className="flex justify-between">
                        <span className="text-gray-500 uppercase tracking-widest text-[9px]">KOLEKSİYON:</span>
                        <span className="text-[#788f22] font-medium">{CATALOG_PAGES[catalogPage - 1].collection}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 uppercase tracking-widest text-[9px]">MALZEME:</span>
                        <span>{CATALOG_PAGES[catalogPage - 1].material}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 uppercase tracking-widest text-[9px]">MİMARİ YIL:</span>
                        <span>2026 EDITION</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#252525] mt-6 flex flex-col gap-2">
                    <button 
                      onClick={() => {
                        setIsECatalogOpen(false);
                        setActiveCategory(CATALOG_PAGES[catalogPage - 1].categoryTarget);
                        const el = document.getElementById('catalog-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full py-3 bg-[#788f22] text-[#151515] text-xs tracking-widest font-extrabold uppercase hover:bg-[#61741b] transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>{lang === 'tr' ? 'KOLEKSİYONU İNCELERİM' : 'EXPLORE COLLECTION'}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Next Arrow */}
              <button 
                onClick={() => setCatalogPage(prev => Math.min(6, prev + 1))}
                disabled={catalogPage === 6}
                className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/80 border border-[#333] text-white transition-all cursor-pointer ${
                  catalogPage === 6 ? 'opacity-30 cursor-not-allowed' : 'hover:border-[#788f22] hover:text-[#788f22]'
                }`}
                aria-label="Next Page"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Page Thumbnails Bar */}
            <div className="px-6 py-4 border-t border-[#252525] bg-[#141414] flex items-center justify-center gap-2 md:gap-4 overflow-x-auto no-scrollbar">
              {CATALOG_PAGES.map((page, index) => (
                <button
                  key={page.id}
                  onClick={() => setCatalogPage(index + 1)}
                  className={`px-3 py-1.5 text-[11px] font-mono tracking-wider transition-all cursor-pointer flex items-center gap-2 border ${
                    catalogPage === index + 1 
                      ? 'bg-[#788f22] text-[#151515] border-[#788f22] font-bold shadow-md' 
                      : 'bg-[#1e1e1e] text-gray-400 border-[#2b2b2b] hover:text-white hover:border-gray-500'
                  }`}
                >
                  <span>0{index + 1}</span>
                  <span className="hidden sm:inline text-[10px] uppercase font-sans">{page.shortLabel}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* G. CART SLIDE-OVER DRAWER (Right aligned) */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden" id="cart-drawer-wrapper">
            <div className="absolute inset-0 overflow-hidden">
              {/* Overlay Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsCartOpen(false)}
                className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
              />

              {/* Drawer Content */}
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <motion.div 
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="pointer-events-auto w-screen max-w-md bg-[#151515] text-[#f4f1ea] border-l border-[#252525] flex flex-col justify-between shadow-2xl"
                >
                  {/* Drawer Header */}
                  <div className="p-6 border-b border-[#252525] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5 text-[#788f22]" />
                      <h2 className="text-sm font-serif tracking-[0.2em] uppercase font-semibold">
                        {lang === 'tr' ? 'ALIŞVERİŞ SEPETİ' : 'SHOPPING CART'} ({cartCount})
                      </h2>
                    </div>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="p-1 text-gray-400 hover:text-white transition-colors cursor-pointer"
                      id="close-cart-drawer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Drawer Cart Items */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {cart.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-center py-16">
                        <ShoppingBag className="w-12 h-12 text-[#333] mb-4 stroke-[1]" />
                        <p className="text-sm font-serif text-gray-400 mb-2">
                          {lang === 'tr' ? 'Sepetiniz henüz boş.' : 'Your shopping cart is empty.'}
                        </p>
                        <p className="text-xs text-gray-500 font-light max-w-xs mb-6">
                          {lang === 'tr' ? 'Mimari koleksiyonlarımızı ve düğün paketlerimizi keşfederek sepetinize ekleyebilirsiniz.' : 'Explore our architectural collection and add items to your cart.'}
                        </p>
                        <button 
                          onClick={() => setIsCartOpen(false)}
                          className="px-6 py-2.5 bg-[#788f22] text-[#151515] text-xs font-bold tracking-widest uppercase rounded-none hover:bg-[#61741b] transition-all cursor-pointer"
                        >
                          {lang === 'tr' ? 'KOLEKSİYONU KEŞFET' : 'EXPLORE COLLECTION'}
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {cart.map((item) => (
                          <div 
                            key={item.product.id}
                            className="flex gap-4 p-3 bg-[#1a1a1a] border border-[#252525] relative group"
                          >
                            <img 
                              src={item.product.image} 
                              alt={lang === 'tr' ? item.product.nameTr : item.product.nameEn}
                              referrerPolicy="no-referrer"
                              className="w-20 h-20 object-cover bg-black"
                            />
                            <div className="flex-1 flex flex-col justify-between">
                              <div>
                                <h4 className="text-xs font-serif text-[#f4f1ea] tracking-wide mb-1">
                                  {lang === 'tr' ? item.product.nameTr : item.product.nameEn}
                                </h4>
                                <span className="text-[10px] text-[#788f22] font-mono block mb-2">
                                  {formatPrice(item.product.price)}
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center border border-[#333] bg-[#121212]">
                                  <button 
                                    onClick={() => updateCartQuantity(item.product.id, -1)}
                                    className="px-2 py-0.5 text-gray-400 hover:text-white text-xs cursor-pointer"
                                  >
                                    -
                                  </button>
                                  <span className="px-2.5 text-xs font-mono text-[#788f22]">{item.quantity}</span>
                                  <button 
                                    onClick={() => updateCartQuantity(item.product.id, 1)}
                                    className="px-2 py-0.5 text-gray-400 hover:text-white text-xs cursor-pointer"
                                  >
                                    +
                                  </button>
                                </div>
                                <button 
                                  onClick={() => removeFromCart(item.product.id)}
                                  className="text-gray-500 hover:text-rose-400 text-xs transition-colors cursor-pointer"
                                  title="Sil"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Drawer Footer */}
                  {cart.length > 0 && (
                    <div className="p-6 border-t border-[#252525] bg-[#121212] space-y-4">
                      {checkoutSuccess ? (
                        <div className="p-4 bg-[#788f22]/10 border border-[#788f22]/30 text-[#788f22] text-xs text-center space-y-2">
                          <CheckCircle2 className="w-6 h-6 mx-auto text-[#788f22]" />
                          <p className="font-semibold">{lang === 'tr' ? 'Sipariş Talebiniz Alındı!' : 'Order Request Received!'}</p>
                          <p className="font-light text-[11px] text-[#788f22]">
                            {lang === 'tr' ? 'Mimari danışmanımız sizinle en kısa sürede iletişime geçecektir.' : 'Our architectural consultant will contact you shortly.'}
                          </p>
                        </div>
                      ) : (
                        <>
                          <div className="space-y-2 text-xs">
                            <div className="flex justify-between text-gray-400">
                              <span>{lang === 'tr' ? 'Ara Toplam:' : 'Subtotal:'}</span>
                              <span className="font-mono text-gray-200">{formatPrice(cartTotal)}</span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                              <span>{lang === 'tr' ? 'Mimari Teslimat:' : 'Architectural Delivery:'}</span>
                              <span className="text-[#788f22] font-medium">{lang === 'tr' ? 'ÜCRETSİZ' : 'FREE'}</span>
                            </div>
                            <div className="flex justify-between text-sm font-serif font-bold text-[#f4f1ea] border-t border-[#252525] pt-2">
                              <span>{lang === 'tr' ? 'Toplam Tutar:' : 'Total Amount:'}</span>
                              <span className="text-[#788f22]">{formatPrice(cartTotal)}</span>
                            </div>
                          </div>
                          <button 
                            onClick={() => {
                              setCheckoutSuccess(true);
                              setTimeout(() => {
                                setCheckoutSuccess(false);
                                setCart([]);
                                setIsCartOpen(false);
                              }, 3500);
                            }}
                            className="w-full py-3.5 bg-[#788f22] text-[#151515] text-xs font-bold tracking-widest uppercase hover:bg-[#61741b] transition-all cursor-pointer flex items-center justify-center gap-2"
                            id="checkout-btn"
                          >
                            <Lock className="w-3.5 h-3.5" />
                            <span>{lang === 'tr' ? 'SİPARİŞİ TAMAMLA' : 'COMPLETE ORDER'}</span>
                          </button>
                        </>
                      )}
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* H. MEMBER AUTH / LOGIN MODAL */}
      <AnimatePresence>
        {isAuthOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsAuthOpen(false)}
            id="auth-modal"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#151515] border border-[#252525] max-w-md w-full p-8 relative shadow-2xl text-[#f4f1ea]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsAuthOpen(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white p-1 cursor-pointer"
                id="close-auth-modal"
              >
                <X className="w-5 h-5" />
              </button>

              {userLoggedIn ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#788f22]/10 border border-[#788f22] mx-auto flex items-center justify-center">
                    <UserCheck className="w-8 h-8 text-[#788f22]" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.25em] text-[#788f22] font-bold uppercase block mb-1">
                      HOŞ GELDİNİZ
                    </span>
                    <h3 className="text-xl font-serif text-[#f4f1ea]">{userEmail || 'Mia Stilo Üyesi'}</h3>
                  </div>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    Özel mimari koleksiyon ayrıcalıklarınız ve VIP danışmanlık kaydınız aktiftir.
                  </p>
                  <div className="pt-4 border-t border-[#252525] flex flex-col gap-2">
                    <button 
                      onClick={() => {
                        setIsAuthOpen(false);
                        setIsConsultationOpen(true);
                      }}
                      className="w-full py-2.5 bg-[#788f22] text-[#151515] text-xs font-bold tracking-widest uppercase hover:bg-[#61741b] transition-all cursor-pointer"
                    >
                      MİMARİ RANDEVULARIM
                    </button>
                    <button 
                      onClick={() => {
                        setUserLoggedIn(false);
                        setUserEmail('');
                        setAuthSuccessMsg('');
                      }}
                      className="w-full py-2 bg-transparent text-gray-400 hover:text-rose-400 text-xs tracking-wider transition-colors cursor-pointer"
                    >
                      ÇIKIŞ YAP
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  {/* Auth Header & Tabs */}
                  <div className="text-center mb-6">
                    <span className="text-[10px] tracking-[0.3em] text-[#788f22] uppercase font-bold block mb-1">
                      MİA STİLO ATELIER
                    </span>
                    <h3 className="text-xl font-serif tracking-wide text-[#f4f1ea] mb-4">
                      {lang === 'tr' ? 'Üyelik & İmtiyazlar' : 'Member Privileges'}
                    </h3>

                    <div className="flex border-b border-[#252525]">
                      <button 
                        onClick={() => setAuthTab('login')}
                        className={`flex-1 py-2.5 text-xs tracking-widest uppercase font-semibold transition-all cursor-pointer border-b-2 ${
                          authTab === 'login' 
                            ? 'border-[#788f22] text-[#788f22]' 
                            : 'border-transparent text-gray-400 hover:text-white'
                        }`}
                      >
                        {lang === 'tr' ? 'GİRİŞ YAP' : 'LOG IN'}
                      </button>
                      <button 
                        onClick={() => setAuthTab('register')}
                        className={`flex-1 py-2.5 text-xs tracking-widest uppercase font-semibold transition-all cursor-pointer border-b-2 ${
                          authTab === 'register' 
                            ? 'border-[#788f22] text-[#788f22]' 
                            : 'border-transparent text-gray-400 hover:text-white'
                        }`}
                      >
                        {lang === 'tr' ? 'ÜYE OL' : 'SIGN UP'}
                      </button>
                    </div>
                  </div>

                  {authSuccessMsg && (
                    <div className="mb-4 p-3 bg-[#788f22]/10 border border-[#788f22]/30 text-[#788f22] text-xs text-center font-light">
                      {authSuccessMsg}
                    </div>
                  )}

                  {/* Form */}
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      setUserLoggedIn(true);
                      setAuthSuccessMsg(lang === 'tr' ? 'Giriş başarılı. Hoş geldiniz!' : 'Signed in successfully.');
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">
                        {lang === 'tr' ? 'E-POSTA ADRESİ' : 'EMAIL ADDRESS'}
                      </label>
                      <input 
                        type="email" 
                        required
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="ornek@miastilo.com"
                        className="w-full bg-[#1a1a1a] border border-[#2b2b2b] focus:border-[#788f22] px-3 py-2.5 text-xs text-white outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">
                        {lang === 'tr' ? 'ŞİFRE' : 'PASSWORD'}
                      </label>
                      <input 
                        type="password" 
                        required
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-[#1a1a1a] border border-[#2b2b2b] focus:border-[#788f22] px-3 py-2.5 text-xs text-white outline-none transition-colors"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3 bg-[#788f22] text-[#151515] text-xs font-bold tracking-widest uppercase hover:bg-[#61741b] transition-all cursor-pointer mt-2"
                    >
                      {authTab === 'login' ? (lang === 'tr' ? 'GİRİŞ YAP' : 'SIGN IN') : (lang === 'tr' ? 'ÜYELİĞİ TAMAMLA' : 'CREATE ACCOUNT')}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* I. CARGO & SHIPPING TRACKING MODAL */}
      <AnimatePresence>
        {isCargoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsCargoOpen(false)}
            id="cargo-modal"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#151515] border border-[#252525] max-w-lg w-full p-8 relative shadow-2xl text-[#f4f1ea]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsCargoOpen(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white p-1 cursor-pointer"
                id="close-cargo-modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#788f22]/10 border border-[#788f22] mx-auto flex items-center justify-center mb-3">
                  <Truck className="w-6 h-6 text-[#788f22]" />
                </div>
                <span className="text-[10px] tracking-[0.25em] text-[#788f22] font-bold uppercase block mb-1">
                  MİA STİLO LOJİSTİK
                </span>
                <h3 className="text-xl font-serif tracking-wide text-[#f4f1ea]">
                  {lang === 'tr' ? 'Kargo & Sipariş Takibi' : 'Cargo & Order Tracking'}
                </h3>
                <p className="text-xs text-gray-400 font-light mt-1">
                  {lang === 'tr' ? 'Özel sigortalı mimari sevkiyat ve kurumsal teslimat durumu' : 'Insured white-glove architectural delivery status'}
                </p>
              </div>

              {/* Tracking Form */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (trackingCode.trim()) {
                    setTrackingResult(trackingCode);
                  } else {
                    setTrackingResult('MS-88392-TR');
                  }
                }}
                className="space-y-4 mb-6"
              >
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={trackingCode}
                    onChange={(e) => setTrackingCode(e.target.value)}
                    placeholder={lang === 'tr' ? 'Takip no veya Sipariş no (Örn: MS-9982)' : 'Tracking code (e.g. MS-9982)'}
                    className="flex-1 bg-[#1a1a1a] border border-[#2b2b2b] focus:border-[#788f22] px-3.5 py-2.5 text-xs text-white outline-none transition-colors"
                  />
                  <button 
                    type="submit"
                    className="px-5 py-2.5 bg-[#788f22] text-[#151515] text-xs font-bold tracking-widest uppercase hover:bg-[#61741b] transition-all cursor-pointer"
                  >
                    {lang === 'tr' ? 'SORGULA' : 'TRACK'}
                  </button>
                </div>
              </form>

              {/* Cargo Status Result or Info Cards */}
              {trackingResult ? (
                <div className="bg-[#1a1a1a] border border-[#252525] p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#2a2a2a] pb-3">
                    <div>
                      <span className="text-[10px] text-[#788f22] font-mono uppercase block">SİPARİŞ NO: {trackingResult.toUpperCase()}</span>
                      <h4 className="text-xs font-semibold text-[#f4f1ea] mt-0.5">Özel Kurulumlu Mimari Mobilya Sevkiyatı</h4>
                    </div>
                    <span className="px-2.5 py-1 bg-[#788f22]/10 text-[#788f22] border border-[#788f22]/30 text-[10px] font-bold tracking-wider rounded-none uppercase">
                      YOLDA
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-[#141414] p-2.5 border border-[#222]">
                      <span className="text-[10px] text-gray-500 uppercase block">TAHMİNİ TESLİMAT</span>
                      <span className="text-xs font-bold text-[#788f22]">Bugün, 14:00 - 17:00</span>
                    </div>
                    <div className="bg-[#141414] p-2.5 border border-[#222]">
                      <span className="text-[10px] text-gray-500 uppercase block">KURYENİZ / LOJİSTİK</span>
                      <span className="text-xs font-bold text-[#f4f1ea]">Borusan VIP Lojistik</span>
                    </div>
                  </div>

                  {/* Shipment Steps */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-3">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#788f22] flex items-center justify-center text-[9px] text-black font-bold">✓</div>
                      <div className="text-xs">
                        <span className="text-[#f4f1ea] font-medium block">Sipariş & Üretim Onayı</span>
                        <span className="text-[10px] text-gray-500">Atölye kalite kontrolünden başarıyla geçti</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#788f22] flex items-center justify-center text-[9px] text-black font-bold">✓</div>
                      <div className="text-xs">
                        <span className="text-[#f4f1ea] font-medium block">Özel Ahşap Sandıklama</span>
                        <span className="text-[10px] text-gray-500">Zırhlı koruma ambalajı tamamlandı</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#788f22] animate-pulse flex items-center justify-center text-[9px] text-black font-bold">•</div>
                      <div className="text-xs">
                        <span className="text-[#788f22] font-bold block">Dağıtım Aracında (Yolda)</span>
                        <span className="text-[10px] text-gray-400">İstanbul Bölge Lojistik Merkezinden Çıktı</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 text-xs text-gray-400 font-light">
                  <div className="p-3 bg-[#1a1a1a] border border-[#252525] flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#788f22] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-[#f4f1ea] text-xs">Ücretsiz Türkiye Geneli Mimari Teslimat</h5>
                      <p className="text-[11px] text-gray-400 mt-0.5">Tüm ürünlerimiz özel lojistik ekibimiz tarafından adrese teslim edilip mimari montajı ücretsiz yapılır.</p>
                    </div>
                  </div>
                  <div className="p-3 bg-[#1a1a1a] border border-[#252525] flex items-start gap-3">
                    <Info className="w-5 h-5 text-[#788f22] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-[#f4f1ea] text-xs">Uluslararası Sigortalı Sevkiyat</h5>
                      <p className="text-[11px] text-gray-400 mt-0.5">Avrupa, Orta Doğu ve Amerika gönderileriniz özel mobilya sandıklama standartlarında sevk edilir.</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}
