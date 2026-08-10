import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Sparkles, 
  RotateCcw, 
  Info, 
  Check, 
  Heart, 
  Share2, 
  Grid, 
  Eye, 
  ChevronRight,
  ShieldCheck,
  Compass
} from 'lucide-react';

interface ThreeDStudioProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'tr' | 'en' | 'fr' | 'de';
  currency?: string;
  toggleWishlist: (id: string) => void;
  wishlist: string[];
  onOpenConsultation: () => void;
}

interface CustomizationOption {
  id: string;
  nameTr: string;
  nameEn: string;
  price: number;
  image: string;
  materialTr: string;
  materialEn: string;
  productId?: string; // Links to main product if available
}

interface CustomizationCategory {
  id: string;
  titleTr: string;
  titleEn: string;
  options: CustomizationOption[];
}

export default function ThreeDStudio({
  isOpen,
  onClose,
  lang,
  toggleWishlist,
  wishlist,
  onOpenConsultation
}: ThreeDStudioProps) {
  // Option categories for customizer
  const categories: CustomizationCategory[] = [
    {
      id: 'sofa',
      titleTr: 'KANAPE & KOLTUK',
      titleEn: 'SOFA & SEATING',
      options: [
        {
          id: 'sofa-boucle',
          nameTr: 'Cloud Bouclé Kanepe (Fildişi)',
          nameEn: 'Cloud Bouclé Sofa (Ivory)',
          price: 6750,
          image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
          materialTr: 'İtalyan Bouclé, Kaz Tüyü Dolgulu',
          materialEn: 'Italian Bouclé, Goose Down Fill',
          productId: 's-01'
        },
        {
          id: 'sofa-charcoal',
          nameTr: 'Atelier Keten Kanepe (Kömür)',
          nameEn: 'Atelier Linen Sofa (Charcoal)',
          price: 5900,
          image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80',
          materialTr: '%100 Belçika Keteni, Masif Gürgen',
          materialEn: '100% Belgian Linen, Solid Hornbeam',
          productId: 's-01'
        },
        {
          id: 'sofa-terracotta',
          nameTr: 'Verona Kadife Kanepe (Kiremit)',
          nameEn: 'Verona Velvet Sofa (Terracotta)',
          price: 7200,
          image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80',
          materialTr: 'Pamuklu İtalyan Kadife, Pirinç Ayaklar',
          materialEn: 'Cotton Italian Velvet, Brass Feet',
          productId: 's-01'
        }
      ]
    },
    {
      id: 'table',
      titleTr: 'YEMEK & ORTA SEHPA',
      titleEn: 'TABLE & SURFACES',
      options: [
        {
          id: 'table-travertine',
          nameTr: 'Piazza Traverten Sehpa',
          nameEn: 'Piazza Travertine Table',
          price: 5200,
          image: 'https://images.unsplash.com/photo-1530018607912-eff2df11a3be?auto=format&fit=crop&w=1200&q=80',
          materialTr: 'Gözenekli İtalyan Traverten Taşı',
          materialEn: 'Porous Italian Travertine Stone',
          productId: 't-01'
        },
        {
          id: 'table-oak',
          nameTr: 'Strasbourg Ham Meşe Sehpa',
          nameEn: 'Strasbourg Raw Oak Table',
          price: 3400,
          image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
          materialTr: 'Sertifikalı Masif Fransız Meşesi',
          materialEn: 'Certified Solid French Oak',
          productId: 'c-01'
        }
      ]
    },
    {
      id: 'lighting',
      titleTr: 'AYDINLATMA TASARIMI',
      titleEn: 'LIGHTING DESIGN',
      options: [
        {
          id: 'light-chandelier',
          nameTr: 'Emilia Nervürlü Cam Avize',
          nameEn: 'Emilia Ribbed Glass Chandelier',
          price: 3450,
          image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80',
          materialTr: 'Fırçalanmış Pirinç, Üfleme Cam',
          materialEn: 'Brushed Brass, Hand-Blown Glass',
          productId: 'l-01'
        },
        {
          id: 'light-lamp',
          nameTr: 'Milos Keten Abajur',
          nameEn: 'Milos Linen Table Lamp',
          price: 780,
          image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80',
          materialTr: 'Traverten Taban, Organik Keten',
          materialEn: 'Travertine Base, Organic Linen',
          productId: 'l-02'
        }
      ]
    },
    {
      id: 'rug',
      titleTr: 'HALI & DOKULAR',
      titleEn: 'RUG & TEXTURES',
      options: [
        {
          id: 'rug-wool',
          nameTr: 'Atelier Örgü Yün Halı',
          nameEn: 'Atelier Hand-Knotted Wool Rug',
          price: 2900,
          image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80',
          materialTr: '%100 Yeni Zelanda Yünü',
          materialEn: '100% New Zealand Wool',
          productId: 'r-01'
        }
      ]
    }
  ];

  // Selected option state for each category
  const [selections, setSelections] = useState<Record<string, CustomizationOption>>({
    sofa: categories[0].options[0],
    table: categories[1].options[0],
    lighting: categories[2].options[0],
    rug: categories[3].options[0]
  });

  const [activeTab, setActiveTab] = useState<string>('sofa');
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [addedNotification, setAddedNotification] = useState<boolean>(false);

  // Calculate combined price of current selections
  const totalPrice = (Object.values(selections) as CustomizationOption[]).reduce((sum, opt) => sum + opt.price, 0);

  // Update selection
  const handleSelect = (categoryId: string, option: CustomizationOption) => {
    setSelections(prev => ({
      ...prev,
      [categoryId]: option
    }));
  };

  // Reset all selections to default
  const handleReset = () => {
    setSelections({
      sofa: categories[0].options[0],
      table: categories[1].options[0],
      lighting: categories[2].options[0],
      rug: categories[3].options[0]
    });
    setActiveTab('sofa');
  };

  // Add all selections to Wishlist/Curation
  const handleAddAllToCuration = () => {
    (Object.values(selections) as CustomizationOption[]).forEach(opt => {
      if (opt.productId && !wishlist.includes(opt.productId)) {
        toggleWishlist(opt.productId);
      }
    });
    setAddedNotification(true);
    setTimeout(() => setAddedNotification(false), 3000);
  };

  const activeCategoryData = categories.find(c => c.id === activeTab);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-[#0d0d0d] text-[#f4f1ea] font-sans overflow-y-auto lg:overflow-hidden flex flex-col" id="three-d-studio-root">
        
        {/* HEADER BAR */}
        <header className="px-6 py-4 border-b border-[#252525] flex items-center justify-between shrink-0 bg-[#0d0d0d]">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#c5a880] animate-pulse" />
            <div>
              <span className="text-[8px] tracking-[0.4em] text-gray-400 uppercase font-mono block">
                MIA STILO INTERACTIVE VIRTUAL LAB v2.4
              </span>
              <h2 className="text-lg md:text-xl font-serif font-light tracking-[0.15em] text-[#f4f1ea]">
                {lang === 'tr' ? '3D TASARIM STÜDYOSU' : '3D DESIGN STUDIO'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={handleReset}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 border border-[#252525] hover:border-[#c5a880] text-[10px] tracking-wider text-gray-400 hover:text-[#c5a880] transition-all cursor-pointer uppercase"
              title="Reset configuration"
            >
              <RotateCcw className="w-3 h-3" />
              {lang === 'tr' ? 'SIFIRLA' : 'RESET'}
            </button>
            <button 
              onClick={onClose}
              className="p-2 border border-[#252525] hover:border-[#c5a880]/50 text-gray-400 hover:text-white transition-all cursor-pointer"
              aria-label="Close Studio"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* WORKSPACE AREA */}
        <div className="flex-1 flex flex-col lg:flex-row min-h-0 relative">
          
          {/* LEFT PANEL: 3D VIEWPORT */}
          <div className="flex-1 bg-[#121212] relative overflow-hidden flex flex-col justify-between p-6 border-r border-[#252525]">
            
            {/* Viewport controls bar */}
            <div className="flex items-center justify-between z-10 relative">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setShowGrid(!showGrid)}
                  className={`p-2 border rounded-none transition-all cursor-pointer ${
                    showGrid ? 'bg-[#c5a880] text-[#151515] border-[#c5a880]' : 'border-[#252525] text-gray-400 hover:text-white'
                  }`}
                  title="Toggle perspective grid"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <div className="hidden sm:flex items-center gap-2 bg-[#0d0d0d]/80 backdrop-blur px-3 py-1.5 border border-[#252525] text-[9px] text-gray-400 font-mono tracking-widest">
                  <Compass className="w-3.5 h-3.5 text-[#c5a880] animate-spin-slow" />
                  <span>CAM: ORBITAL_ACTIVE_360</span>
                </div>
              </div>

              <div className="bg-[#0d0d0d]/80 backdrop-blur px-3 py-1.5 border border-[#252525] text-[9px] text-[#c5a880] font-mono tracking-wider">
                REAL-TIME RENDERING ENGINE
              </div>
            </div>

            {/* MAIN PERSPECTIVE VIEWPORT STAGE */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              
              {/* Perspective grid overlay */}
              {showGrid && (
                <div 
                  className="absolute inset-0 pointer-events-none opacity-[0.04]"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle, #f4f1ea 1px, transparent 1px),
                      linear-gradient(to right, #f4f1ea 1px, transparent 1px),
                      linear-gradient(to bottom, #f4f1ea 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px, 40px 40px, 40px 40px',
                    perspective: '1000px',
                    transform: 'rotateX(60deg) scale(1.5)',
                    transformOrigin: 'center bottom'
                  }}
                />
              )}

              {/* Central Immersive Composite Visualizer */}
              <div className="relative w-full max-w-2xl aspect-[16/10] overflow-hidden bg-[#181818] border border-[#252525] shadow-2xl group">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={selections[activeTab].id}
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.98, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img 
                      src={selections[activeTab].image} 
                      alt="3D Render" 
                      className="w-full h-full object-cover brightness-[0.8] contrast-[1.05] transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Simulated Floating CAD Markers / Focus Labels */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
                  {/* Top corner metrics */}
                  <div className="flex justify-between items-start text-white/50 font-mono text-[9px] tracking-widest">
                    <div>
                      <p>PERSPECTIVE: ACTIVE</p>
                      <p className="text-[#c5a880]">FOCUS: {activeTab.toUpperCase()}</p>
                    </div>
                    <div className="text-right">
                      <p>SENSITIVITY: HIGH</p>
                      <p>FOV: 45°</p>
                    </div>
                  </div>

                  {/* Hotspots for customizer overlay */}
                  <div className="absolute inset-0">
                    {/* Sofa Hotspot */}
                    <button 
                      onClick={() => setActiveTab('sofa')}
                      className={`absolute left-[45%] top-[55%] pointer-events-auto flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-all ${
                        activeTab === 'sofa' ? 'scale-125 bg-[#c5a880] text-[#151515]' : 'bg-black/60 text-[#c5a880] hover:bg-black'
                      } border border-[#c5a880] shadow-lg`}
                      style={{ transform: 'translate(-50%, -50%)' }}
                    >
                      <span className="text-[10px] font-mono font-bold">1</span>
                    </button>

                    {/* Table Hotspot */}
                    <button 
                      onClick={() => setActiveTab('table')}
                      className={`absolute left-[30%] top-[70%] pointer-events-auto flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-all ${
                        activeTab === 'table' ? 'scale-125 bg-[#c5a880] text-[#151515]' : 'bg-black/60 text-[#c5a880] hover:bg-black'
                      } border border-[#c5a880] shadow-lg`}
                      style={{ transform: 'translate(-50%, -50%)' }}
                    >
                      <span className="text-[10px] font-mono font-bold">2</span>
                    </button>

                    {/* Lighting Hotspot */}
                    <button 
                      onClick={() => setActiveTab('lighting')}
                      className={`absolute left-[52%] top-[25%] pointer-events-auto flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-all ${
                        activeTab === 'lighting' ? 'scale-125 bg-[#c5a880] text-[#151515]' : 'bg-black/60 text-[#c5a880] hover:bg-black'
                      } border border-[#c5a880] shadow-lg`}
                      style={{ transform: 'translate(-50%, -50%)' }}
                    >
                      <span className="text-[10px] font-mono font-bold">3</span>
                    </button>

                    {/* Rug Hotspot */}
                    <button 
                      onClick={() => setActiveTab('rug')}
                      className={`absolute left-[70%] top-[80%] pointer-events-auto flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-all ${
                        activeTab === 'rug' ? 'scale-125 bg-[#c5a880] text-[#151515]' : 'bg-black/60 text-[#c5a880] hover:bg-black'
                      } border border-[#c5a880] shadow-lg`}
                      style={{ transform: 'translate(-50%, -50%)' }}
                    >
                      <span className="text-[10px] font-mono font-bold">4</span>
                    </button>
                  </div>

                  {/* Focused details card (bottom-left overlay) */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-[#0b0b0b]/90 border border-[#252525] p-4 max-w-xs pointer-events-auto"
                  >
                    <span className="text-[8px] font-mono text-[#c5a880] tracking-widest block uppercase mb-1">
                      {lang === 'tr' ? 'ODAKLANILAN ÜRÜN' : 'FOCUSED ELEMENT'}
                    </span>
                    <h4 className="text-xs font-serif text-[#f4f1ea] tracking-wider mb-1">
                      {lang === 'tr' ? selections[activeTab].nameTr : selections[activeTab].nameEn}
                    </h4>
                    <p className="text-[10px] text-gray-400 font-light mb-2">
                      {lang === 'tr' ? selections[activeTab].materialTr : selections[activeTab].materialEn}
                    </p>
                    <p className="text-xs font-mono font-bold text-[#c5a880]">
                      ${selections[activeTab].price.toLocaleString()}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Bottom summary and room description */}
            <div className="z-10 relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
              <div className="max-w-md">
                <p className="text-xs text-[#c5a880] font-medium tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {lang === 'tr' ? 'KİŞİSELLEŞTİRİLMİŞ YAŞAM ALANI' : 'CUSTOMIZED VIRTUAL ESCAPE'}
                </p>
                <p className="text-[10px] text-gray-400 leading-relaxed font-light">
                  {lang === 'tr' 
                    ? 'Mia Stilo özel tasarım stüdyosu sayesinde oda bileşenlerini ve organik malzemeleri eşleştirebilir, mekandaki uyumu anlık olarak izleyebilirsiniz.' 
                    : 'Our proprietary studio allows you to curate organic stone textures and luxury textiles to compose your private architectural sanctuary.'}
                </p>
              </div>

              <div className="flex gap-2 text-[10px] text-gray-500 font-mono tracking-widest text-right">
                <div>[X: 184.22]</div>
                <div>[Y: 902.15]</div>
                <div>[Z: 334.00]</div>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: CONFIGURATOR SLIDER */}
          <div className="w-full lg:w-[420px] bg-[#0b0b0b] flex flex-col justify-between border-t lg:border-t-0 border-[#252525]">
            
            {/* CONFIGURATOR MAIN */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
              
              {/* Category tabs */}
              <div>
                <span className="text-[9px] tracking-[0.3em] text-[#c5a880] font-bold block mb-4 uppercase">
                  {lang === 'tr' ? '1. MODÜLER BİLEŞEN SEÇİN' : '1. SELECT MODULAR ELEMENT'}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((cat) => (
                    <button 
                      key={cat.id}
                      onClick={() => setActiveTab(cat.id)}
                      className={`px-4 py-3 border text-left transition-all relative flex flex-col justify-between cursor-pointer ${
                        activeTab === cat.id 
                          ? 'border-[#c5a880] bg-[#151515]' 
                          : 'border-[#222] hover:border-gray-700 bg-transparent'
                      }`}
                      id={`studio-tab-${cat.id}`}
                    >
                      <span className="text-[8px] font-mono text-gray-500 tracking-wider">
                        {cat.id.toUpperCase()}
                      </span>
                      <span className="text-[10px] tracking-wider font-semibold text-[#f4f1ea] mt-1">
                        {lang === 'tr' ? cat.titleTr : cat.titleEn}
                      </span>
                      {activeTab === cat.id && (
                        <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material/Style Selector */}
              {activeCategoryData && (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[9px] tracking-[0.3em] text-[#c5a880] font-bold block uppercase">
                      {lang === 'tr' ? '2. MALZEME & DOKU SEÇİN' : '2. SELECT MATERIAL & TEXTURE'}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">
                      {activeCategoryData.options.length} {lang === 'tr' ? 'Seçenek' : 'Options'}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {activeCategoryData.options.map((opt) => {
                      const isSelected = selections[activeTab].id === opt.id;
                      return (
                        <button 
                          key={opt.id}
                          onClick={() => handleSelect(activeTab, opt)}
                          className={`w-full text-left border p-4 transition-all flex gap-4 cursor-pointer relative ${
                            isSelected 
                              ? 'border-[#c5a880] bg-[#121212]' 
                              : 'border-[#1f1f1f] hover:border-[#2a2a2a]'
                          }`}
                          id={`studio-opt-${opt.id}`}
                        >
                          <div className="w-16 h-16 bg-neutral-900 overflow-hidden shrink-0">
                            <img 
                              src={opt.image} 
                              alt={opt.nameEn} 
                              className="w-full h-full object-cover grayscale-[20%]"
                              referrerPolicy="no-referrer"
                            />
                          </div>

                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <h4 className="text-xs font-medium tracking-wide text-[#f4f1ea]">
                                {lang === 'tr' ? opt.nameTr : opt.nameEn}
                              </h4>
                              <p className="text-[10px] text-gray-400 font-light mt-0.5">
                                {lang === 'tr' ? opt.materialTr : opt.materialEn}
                              </p>
                            </div>
                            <div className="flex items-center justify-between mt-1">
                              <span className="text-xs font-semibold text-[#c5a880] font-mono">
                                ${opt.price.toLocaleString()}
                              </span>
                              {isSelected && (
                                <span className="text-[9px] tracking-wider text-[#c5a880] flex items-center gap-1">
                                  <Check className="w-3 h-3 stroke-[3]" />
                                  {lang === 'tr' ? 'SEÇİLİ' : 'SELECTED'}
                                </span>
                              )}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Current build summary details list */}
              <div className="border-t border-[#1f1f1f] pt-6">
                <span className="text-[9px] tracking-[0.3em] text-gray-500 font-bold block mb-4 uppercase">
                  {lang === 'tr' ? 'AKTİF KOMBİNASYON ÖZETİ' : 'CURRENT SPECIFICATION SUMMARY'}
                </span>
                
                <div className="space-y-3">
                  {categories.map((cat) => {
                    const selected = selections[cat.id];
                    return (
                      <div key={cat.id} className="flex justify-between items-start text-xs border-b border-[#121212] pb-2">
                        <div>
                          <span className="text-[9px] text-gray-500 font-mono block uppercase">
                            {cat.id}
                          </span>
                          <span className="text-gray-300 font-light">
                            {lang === 'tr' ? selected.nameTr : selected.nameEn}
                          </span>
                        </div>
                        <span className="font-mono text-[#c5a880] font-semibold text-[11px]">
                          ${selected.price.toLocaleString()}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* CONFIGURATOR SUMMARY BOTTOM PANEL */}
            <div className="border-t border-[#252525] bg-[#0d0d0d] p-6 md:p-8 space-y-4">
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.3em] text-gray-500 uppercase block">
                    {lang === 'tr' ? 'KOMBİNASYON TOPLAMI' : 'COMBINED ESTIMATE'}
                  </span>
                  <span className="text-[9px] text-[#c5a880] tracking-widest block font-mono">
                    (4 {lang === 'tr' ? 'Ürün Dahil' : 'Items Included'})
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xl md:text-2xl font-serif font-bold text-[#c5a880]">
                    ${totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Added notification banner */}
              <AnimatePresence>
                {addedNotification && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-[#c5a880]/10 border border-[#c5a880]/30 py-2.5 px-4 flex items-center justify-center gap-2 text-xs text-[#c5a880]"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
                    <span>
                      {lang === 'tr' 
                        ? 'Tüm kombinasyon kürasyonunuza eklendi!' 
                        : 'Entire room set added to your curation list!'}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button 
                  onClick={handleAddAllToCuration}
                  className="py-3.5 bg-transparent border border-[#c5a880] hover:bg-[#c5a880]/5 hover:text-white transition-all text-xs tracking-widest font-bold text-[#c5a880] flex items-center justify-center gap-1.5 cursor-pointer"
                  id="studio-add-all-btn"
                >
                  <Heart className="w-4 h-4" />
                  {lang === 'tr' ? 'KÜRASYONA EKLE' : 'ADD TO CURATION'}
                </button>
                <button 
                  onClick={() => {
                    onClose();
                    onOpenConsultation();
                  }}
                  className="py-3.5 bg-[#c5a880] hover:bg-[#b0936b] text-[#151515] transition-all text-xs tracking-widest font-bold text-center cursor-pointer"
                  id="studio-consult-btn"
                >
                  {lang === 'tr' ? 'MİMARLA GÖRÜŞ' : 'CONSULT DESIGNER'}
                </button>
              </div>

              <p className="text-[9px] text-gray-500 leading-relaxed tracking-wide text-center">
                {lang === 'tr' 
                  ? '*Kişiselleştirilmiş kombinasyonunuzu kaydetmek için Kürasyona Ekle butonuyla listenize kaydedebilir ve tasarım ekibimizle anlık paylaşabilirsiniz.' 
                  : '*Save this configuration to your curation dashboard or discuss materials with our interior designer via virtual consultation.'}
              </p>

            </div>

          </div>

        </div>

      </div>
    </AnimatePresence>
  );
}
