import React from 'react';
import { 
  ArrowRight, 
  Star, 
  Tag, 
  ShieldCheck, 
  Truck,
  Sparkles
} from 'lucide-react';

const sofaImg = '/images/home/living_collection_1785663351556.jpg';
const chairsImg = '/images/home/table_chair_collection_1785663406658.jpg';
const scandiChairImg = '/images/home/corner_sofa_collection_1785663365024.jpg';
const decorImg = '/images/home/dining_collection_1785663338182.jpg';

interface FurniturePromoSectionProps {
  lang: 'tr' | 'en' | 'fr' | 'de';
  onSelectCategory?: (catId: string) => void;
  bgColor?: string;
}

export const FurniturePromoSection: React.FC<FurniturePromoSectionProps> = ({
  lang,
  onSelectCategory,
  bgColor = '#FAF8F5',
}) => {
  return (
    <section 
      style={{ backgroundColor: bgColor }}
      className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-10 w-full border-b border-[#ebdcc4]/40" 
      id="bento-promo-section"
    >
      {/* FULL-WIDTH CONTAINER */}
      <div className="w-full max-w-[1880px] mx-auto text-left">
        
        {/* BENTO ASYMMETRIC GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* LEFT LARGE TALL CARD (Span 6 out of 12) */}
          <div 
            onClick={() => onSelectCategory && onSelectCategory('sectional')}
            className="lg:col-span-6 bg-[#f6f0e6] border border-[#e8ded1] rounded-[2.5rem] p-7 sm:p-9 md:p-11 flex flex-col justify-between relative overflow-hidden group cursor-pointer shadow-2xs hover:shadow-2xl transition-all duration-500 min-h-[580px] lg:min-h-[720px]"
          >
            {/* Top Text & Action */}
            <div className="relative z-10 max-w-lg">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight font-normal text-[#1c1c1c] mb-3 leading-tight">
                Koltuk <span className="text-[#6b7b37] font-serif">Takımları</span>
              </h2>

              {/* Accent Star */}
              <div className="flex items-center gap-2 my-4 text-[#788f22]">
                <div className="w-8 h-[1px] bg-[#788f22]/40"></div>
                <Sparkles className="w-4 h-4 fill-current" />
                <div className="w-8 h-[1px] bg-[#788f22]/40"></div>
              </div>

              <p className="text-sm sm:text-base text-[#6e6557] font-medium leading-relaxed mb-8">
                Sezonun en yeni koltuk takımları<br />
                <strong className="text-[#3d362a] text-base sm:text-lg">Mia Stilo&apos;da</strong>
              </p>

              <button className="bg-[#6b7b37] hover:bg-[#58672c] text-white font-bold text-xs sm:text-sm tracking-wider px-7 py-3.5 rounded-full flex items-center gap-2.5 shadow-md transition-all transform group-hover:translate-x-1.5">
                <span>{lang === 'tr' ? 'Koleksiyonu İncele' : 'Explore Collection'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom Large Image (3-Seater Sofa) */}
            <div className="w-full mt-8 relative z-10 overflow-hidden rounded-3xl border border-[#e5dacb] shadow-sm bg-[#ede4d7]">
              <img 
                src={sofaImg} 
                alt="Koltuk Takımları Mia Stilo" 
                className="w-full h-72 sm:h-96 lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Background Decorative Soft Arch Gradient */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-[#ebdcc7]/50 to-transparent rounded-full pointer-events-none -mr-24 -mt-24"></div>
          </div>

          {/* RIGHT COLUMN (Span 6 out of 12) - Contains Top Wide Card & Bottom 2 Split Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6 md:gap-8">
            
            {/* RIGHT TOP WIDE CARD ("Düğün Paketleri") */}
            <div 
              onClick={() => onSelectCategory && onSelectCategory('wedding-package')}
              className="bg-[#f6f0e6] border border-[#e8ded1] rounded-[2.5rem] p-7 sm:p-9 flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden group cursor-pointer shadow-2xs hover:shadow-2xl transition-all duration-500 min-h-[300px] lg:min-h-[340px]"
            >
              {/* Left Info */}
              <div className="w-full sm:w-1/2 relative z-10">
                <h3 className="text-3xl sm:text-4xl font-serif text-[#1c1c1c] tracking-tight mb-3 font-normal">
                  Düğün Paketleri
                </h3>

                <div className="flex items-center gap-2 my-3 text-[#788f22]">
                  <div className="w-6 h-[1px] bg-[#788f22]/40"></div>
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                </div>

                <p className="text-sm text-[#6e6557] font-medium leading-relaxed mb-6">
                  Düğün paketlerine özel indirimler
                </p>

                <button className="border border-[#6b7b37] text-[#6b7b37] hover:bg-[#6b7b37] hover:text-white font-bold text-xs sm:text-sm tracking-wider px-6 py-3 rounded-full flex items-center gap-2 transition-all group-hover:translate-x-1.5">
                  <span>{lang === 'tr' ? 'Paketleri İnceleyin' : 'Explore Packages'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right Image (Wooden Chairs) */}
              <div className="w-full sm:w-1/2 h-56 sm:h-64 lg:h-72 overflow-hidden rounded-3xl border border-[#e5dacb] bg-[#ede4d7] shrink-0">
                <img 
                  src={chairsImg} 
                  alt="Düğün Paketleri" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* RIGHT BOTTOM 2 SPLIT CARDS (2 equal columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 flex-1">
              
              {/* CARD 3: "İskandinav Mobilya Modelleri" */}
              <div 
                onClick={() => onSelectCategory && onSelectCategory('living')}
                className="bg-[#f6f0e6] border border-[#e8ded1] rounded-[2.5rem] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group cursor-pointer shadow-2xs hover:shadow-2xl transition-all duration-500 min-h-[340px] lg:min-h-[360px]"
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#1c1c1c] tracking-tight leading-snug font-normal">
                    İskandinav<br />
                    <span className="text-[#6b7b37]">Mobilya Modelleri</span>
                  </h3>

                  <div className="flex items-center gap-2 my-3 text-[#788f22]">
                    <div className="w-5 h-[1px] bg-[#788f22]/40"></div>
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                  </div>

                  <button className="border border-[#6b7b37] text-[#6b7b37] hover:bg-[#6b7b37] hover:text-white font-bold text-xs tracking-wider px-5 py-2.5 rounded-full flex items-center gap-1.5 transition-all mt-3 group-hover:translate-x-1">
                    <span>{lang === 'tr' ? 'Modelleri İnceleyin' : 'Explore Models'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Bottom Image (Scandinavian Chair) */}
                <div className="w-full h-48 sm:h-52 lg:h-56 overflow-hidden rounded-2xl border border-[#e5dacb] bg-[#ede4d7] mt-5">
                  <img 
                    src={scandiChairImg} 
                    alt="İskandinav Mobilya Modelleri" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* CARD 4: "Kampanyalı Ürünler" */}
              <div 
                onClick={() => onSelectCategory && onSelectCategory('sale')}
                className="bg-[#f6f0e6] border border-[#e8ded1] rounded-[2.5rem] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group cursor-pointer shadow-2xs hover:shadow-2xl transition-all duration-500 min-h-[340px] lg:min-h-[360px]"
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#1c1c1c] tracking-tight leading-snug font-normal">
                    Kampanyalı<br />
                    <span className="text-[#6b7b37]">Ürünler</span>
                  </h3>

                  <div className="flex items-center gap-2 my-3 text-[#788f22]">
                    <div className="w-5 h-[1px] bg-[#788f22]/40"></div>
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                  </div>

                  <button className="border border-[#6b7b37] text-[#6b7b37] hover:bg-[#6b7b37] hover:text-white font-bold text-xs tracking-wider px-5 py-2.5 rounded-full flex items-center gap-1.5 transition-all mt-3 group-hover:translate-x-1">
                    <span>{lang === 'tr' ? 'Ürünleri İnceleyin' : 'Explore Sale'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Bottom Image (Decor Vases) */}
                <div className="w-full h-48 sm:h-52 lg:h-56 overflow-hidden rounded-2xl border border-[#e5dacb] bg-[#ede4d7] mt-5">
                  <img 
                    src={decorImg} 
                    alt="Kampanyalı Ürünler" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM FEATURE BADGES BAR (WHITE FULL-WIDTH CARD WITH 4 BADGES) */}
        <div className="mt-10 bg-white border border-[#e6ded2] rounded-3xl py-5 px-8 sm:px-12 shadow-xs flex flex-wrap items-center justify-around gap-6 text-sm font-semibold text-[#3d362a]">
          
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-[#f4eee6] border border-[#e5dacb] flex items-center justify-center text-[#6b7b37]">
              <Star className="w-5 h-5 stroke-[1.8]" />
            </div>
            <span className="text-sm font-medium">{lang === 'tr' ? 'Özel Seçim Ürünler' : 'Curated Products'}</span>
          </div>

          <div className="hidden sm:block h-7 w-[1px] bg-[#e5dacb]"></div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-[#f4eee6] border border-[#e5dacb] flex items-center justify-center text-[#6b7b37]">
              <Tag className="w-5 h-5 stroke-[1.8]" />
            </div>
            <span className="text-sm font-medium">{lang === 'tr' ? 'Avantajlı İndirimler' : 'Exclusive Discounts'}</span>
          </div>

          <div className="hidden sm:block h-7 w-[1px] bg-[#e5dacb]"></div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-[#f4eee6] border border-[#e5dacb] flex items-center justify-center text-[#6b7b37]">
              <ShieldCheck className="w-5 h-5 stroke-[1.8]" />
            </div>
            <span className="text-sm font-medium">{lang === 'tr' ? 'Güvenli Alışveriş' : 'Secure Shopping'}</span>
          </div>

          <div className="hidden sm:block h-7 w-[1px] bg-[#e5dacb]"></div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-[#f4eee6] border border-[#e5dacb] flex items-center justify-center text-[#6b7b37]">
              <Truck className="w-5 h-5 stroke-[1.8]" />
            </div>
            <span className="text-sm font-medium">{lang === 'tr' ? 'Ücretsiz Teslimat' : 'Free Delivery'}</span>
          </div>

        </div>

      </div>
    </section>
  );
};
