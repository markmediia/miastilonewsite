import React from 'react';
import { ArrowRight } from 'lucide-react';

// Imported realistic room renders
const bedroomImg = '/images/home/regenerated_image_1785713443701.png';
const kidsRoomImg = '/images/home/regenerated_image_1785713459148.png';
const tableChairImg = '/images/home/regenerated_image_1785713455377.png';
const diningImg = '/images/home/regenerated_image_1785713445634.png';

interface PromoBannerGridProps {
  lang: 'tr' | 'en' | 'fr' | 'de';
  onSelectCategory?: (catId: string) => void;
  bgColor?: string;
}

export const PromoBannerGrid: React.FC<PromoBannerGridProps> = ({
  lang,
  onSelectCategory,
  bgColor = '#FAF8F5',
}) => {
  const banners = [
    {
      id: 'bed',
      categoryTr: 'YATAK ODASI',
      categoryEn: 'BEDROOM',
      titleTr: 'Yatak Odası Takımları',
      titleEn: 'Bedroom Sets',
      descTr: 'Şık ve konforlu yeni koleksiyonlar',
      descEn: 'Stylish and comfortable new collections',
      btnTr: 'YATAK ODALARINI KEŞFET',
      btnEn: 'EXPLORE BEDROOMS',
      image: bedroomImg,
    },
    {
      id: 'table_chairs',
      categoryTr: 'YEMEK ODASI',
      categoryEn: 'DINING ROOM',
      titleTr: 'Yemek Odası Takımları',
      titleEn: 'Dining Room Sets',
      descTr: 'Zarif ve konforlu yemek odaları',
      descEn: 'Elegant and comfortable dining rooms',
      btnTr: 'YEMEK ODALARINI KEŞFET',
      btnEn: 'EXPLORE DINING ROOMS',
      image: tableChairImg,
    },
    {
      id: 'living',
      categoryTr: 'OTURMA ODASI',
      categoryEn: 'LIVING ROOM',
      titleTr: 'Oturma Odası Takımları',
      titleEn: 'Living Room Sets',
      descTr: 'Konforlu ve estetik oturma odaları',
      descEn: 'Comfortable and aesthetic living rooms',
      btnTr: 'OTURMA ODALARINI KEŞFET',
      btnEn: 'EXPLORE LIVING ROOMS',
      image: diningImg,
    },
    {
      id: 'sectional',
      categoryTr: 'KÖŞE KOLTUK',
      categoryEn: 'SECTIONAL SOFA',
      titleTr: 'Köşe Takımları',
      titleEn: 'Sectional Sofa Sets',
      descTr: 'Modern ve konforlu köşe koltuklar',
      descEn: 'Modern and comfortable sectional sofas',
      btnTr: 'KÖŞE TAKIMLARINI KEŞFET',
      btnEn: 'EXPLORE SECTIONALS',
      image: kidsRoomImg,
    },
  ];

  return (
    <section 
      style={{ backgroundColor: bgColor }}
      className="pt-1 sm:pt-2 md:pt-3 pb-10 sm:pb-14 md:pb-16 px-2 sm:px-4 lg:px-8 w-full border-b border-[#ebdcc4]/40" 
      id="promo-banners-section"
    >
      <div className="max-w-[1700px] mx-auto text-center">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight font-medium mb-2">
            <span className="text-[#1f221c]">
              {lang === 'tr' ? 'Öne Çıkan ' : 'Featured '}
            </span>
            <span className="text-[#A7C239]">
              {lang === 'tr' ? 'Fırsatlar' : 'Deals & Offers'}
            </span>
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <div className="w-10 h-[1px] bg-[#A7C239]/40"></div>
            <div className="w-2 h-2 bg-[#A7C239] rotate-45"></div>
            <div className="w-10 h-[1px] bg-[#A7C239]/40"></div>
          </div>

          <p className="text-xs sm:text-sm text-[#1e2619] font-medium tracking-wide">
            {lang === 'tr' 
              ? 'Mia Stilo kalitesiyle evinize zarafet katan özel konsept tasarımlar ve avantajlar' 
              : 'Exclusive concept designs and offers adding elegance to your home with Mia Stilo quality'}
          </p>
        </div>

        {/* 2x2 Banner Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 text-left">
          {banners.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => onSelectCategory && onSelectCategory(item.id)}
              className="group bg-white border border-[#ebdcc4]/60 rounded-3xl overflow-hidden shadow-2xs hover:shadow-xl hover:border-[#A7C239]/50 transition-all duration-500 cursor-pointer flex flex-col md:flex-row min-h-[300px] sm:min-h-[340px]"
              id={`promo-banner-card-${item.id}-${idx}`}
            >
              {/* Left Text Block */}
              <div className="w-full md:w-1/2 p-6 sm:p-7 md:p-8 flex flex-col justify-between items-start bg-white z-10">
                <div>
                  <span className="text-xs font-bold tracking-widest text-[#A7C239] uppercase mb-2 block">
                    {lang === 'tr' ? item.categoryTr : item.categoryEn}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-serif text-[#1c2017] tracking-tight mb-2 leading-tight group-hover:text-[#84a325] transition-colors">
                    {lang === 'tr' ? item.titleTr : item.titleEn}
                  </h3>

                  <div className="w-10 h-[2px] bg-[#A7C239] mb-3"></div>

                  <p className="text-xs sm:text-sm text-[#2a3522] font-medium leading-relaxed mb-5 truncate max-w-full">
                    {lang === 'tr' ? item.descTr : item.descEn}
                  </p>
                </div>

                <button 
                  className="bg-[#85a420] hover:bg-[#728d1a] text-white text-xs font-bold tracking-wider px-5 py-3 rounded-full flex items-center gap-2 shadow-xs transition-all transform group-hover:translate-x-1"
                  id={`promo-btn-${item.id}`}
                >
                  <span>{lang === 'tr' ? item.btnTr : item.btnEn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right Image Block */}
              <div className="w-full md:w-1/2 p-2 sm:p-2.5 flex items-center justify-center shrink-0">
                <div className="w-full h-48 sm:h-56 md:h-full aspect-[4/3] md:aspect-auto overflow-hidden rounded-xl sm:rounded-2xl relative bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={lang === 'tr' ? item.titleTr : item.titleEn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
