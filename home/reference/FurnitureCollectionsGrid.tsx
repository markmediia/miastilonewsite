import React from 'react';
import { 
  Leaf, 
  Armchair, 
  Bed, 
  Utensils, 
  Sofa, 
  Tv, 
  Baby, 
  User,
  BedDouble,
  Smile,
  ArrowRight,
  Settings
} from 'lucide-react';

// Imported generated realistic luxury room images
const bedroomImg = '/images/home/regenerated_image_1785713443701.png';
const diningImg = '/images/home/regenerated_image_1785713445634.png';
const livingImg = '/images/home/regenerated_image_1785713447765.png';
const cornerSofaImg = '/images/home/regenerated_image_1785713449965.png';
const bedBaseImg = '/images/home/regenerated_image_1785713452066.png';
const tvUnitImg = '/images/home/regenerated_image_1785713453740.png';
const tableChairImg = '/images/home/regenerated_image_1785713455377.png';
const babyRoomImg = '/images/home/regenerated_image_1785713457373.png';
const kidsRoomImg = '/images/home/regenerated_image_1785713459148.png';
const teenRoomImg = '/images/home/regenerated_image_1785713460924.png';

interface FurnitureCollectionsGridProps {
  lang: 'tr' | 'en' | 'fr' | 'de';
  onSelectCategory?: (catId: string) => void;
  bgColor?: string;
}

export const FurnitureCollectionsGrid: React.FC<FurnitureCollectionsGridProps> = ({
  lang,
  onSelectCategory,
  bgColor = '#faf8f5',
}) => {
  const collections = [
    {
      id: 'bed',
      tr: "Yatak Odası",
      en: "Bedroom",
      image: bedroomImg,
      icon: Bed
    },
    {
      id: 'dining',
      tr: "Yemek Odası",
      en: "Dining Room",
      image: diningImg,
      icon: Utensils
    },
    {
      id: 'living',
      tr: "Oturma Odası",
      en: "Living Room",
      image: livingImg,
      icon: Sofa
    },
    {
      id: 'sectional',
      tr: "Köşe Koltuk",
      en: "Sectional",
      image: cornerSofaImg,
      icon: Armchair
    },
    {
      id: 'bed-bases',
      tr: "Baza & Yatak",
      en: "Bed & Base",
      image: bedBaseImg,
      icon: BedDouble
    },
    {
      id: 'tv_unit',
      tr: "Tv Ünite",
      en: "TV Units",
      image: tvUnitImg,
      icon: Tv
    },
    {
      id: 'table_chairs',
      tr: "Masa Sandalye",
      en: "Table & Chairs",
      image: tableChairImg,
      icon: Armchair
    },
    {
      id: 'baby_room',
      tr: "Bebek Odası",
      en: "Baby Room",
      image: babyRoomImg,
      icon: Baby
    },
    {
      id: 'kids_room',
      tr: "Çocuk Odası",
      en: "Kids Room",
      image: kidsRoomImg,
      icon: Smile
    },
    {
      id: 'teen_room',
      tr: "Genç Odası",
      en: "Teen Room",
      image: teenRoomImg,
      icon: User
    }
  ];

  return (
    <section 
      style={{ backgroundColor: bgColor }}
      className="pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8 md:pb-10 px-2 sm:px-4 lg:px-8 text-center relative w-full border-y border-[#ebdcc4]/40 overflow-hidden" 
      id="collections-grid-section"
    >


      <div className="max-w-[1920px] mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight font-medium mb-3">
            <span className="text-[#1f221c]">Mobilya </span>
            <span className="text-[#A7C239]">Koleksiyonları</span>
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <div className="w-12 h-[1px] bg-[#A7C239]/40"></div>
            <div className="w-2 h-2 bg-[#A7C239] rotate-45"></div>
            <div className="w-12 h-[1px] bg-[#A7C239]/40"></div>
          </div>

          <p className="text-sm sm:text-base text-[#1e2619] font-medium tracking-wide">
            {lang === 'tr' 
              ? 'Yılın en moda trendlerine sahip özel koleksiyonlarımızı inceleyin' 
              : "Explore our exclusive collections with the season's most fashionable trends"}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-6">
            <div className="flex items-center gap-2 bg-[#ffffff]/80 backdrop-blur border border-[#e5decb] px-4 py-2 rounded-full shadow-2xs hover:border-[#A7C239] group/badge transition-all cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-[#f2edd8] flex items-center justify-center text-[#A7C239] group-hover/badge:bg-[#A7C239] group-hover/badge:text-white transition-colors">
                <Leaf className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-[#2d3a28] group-hover/badge:text-[#A7C239] transition-colors">
                {lang === 'tr' ? 'Modern Tasarım' : 'Modern Design'}
              </span>
            </div>

            <div className="flex items-center gap-2 bg-[#ffffff]/80 backdrop-blur border border-[#e5decb] px-4 py-2 rounded-full shadow-2xs hover:border-[#A7C239] group/badge transition-all cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-[#f2edd8] flex items-center justify-center text-[#A7C239] group-hover/badge:bg-[#A7C239] group-hover/badge:text-white transition-colors">
                <Settings className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-[#2d3a28] group-hover/badge:text-[#A7C239] transition-colors">
                {lang === 'tr' ? 'Premium Kalite' : 'Premium Quality'}
              </span>
            </div>

            <div className="flex items-center gap-2 bg-[#ffffff]/80 backdrop-blur border border-[#e5decb] px-4 py-2 rounded-full shadow-2xs hover:border-[#A7C239] group/badge transition-all cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-[#f2edd8] flex items-center justify-center text-[#A7C239] group-hover/badge:bg-[#A7C239] group-hover/badge:text-white transition-colors">
                <Armchair className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-[#2d3a28] group-hover/badge:text-[#A7C239] transition-colors">
                {lang === 'tr' ? 'Zarafet & Konfor' : 'Elegance & Comfort'}
              </span>
            </div>
          </div>
        </div>

        {/* Grid of 10 categories, 5 columns on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 text-left">
          {collections.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <div 
                key={idx}
                onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                className="group relative flex flex-col justify-between bg-[#ffffff] border border-[#e8dfcf] rounded-[16px] p-2 sm:p-2.5 cursor-pointer transition-all duration-300 hover:shadow-md hover:border-[#A7C239] shadow-2xs"
                id={`collection-card-${cat.id}-${idx}`}
              >
                {/* Image Container */}
                <div className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden rounded-[10px] sm:rounded-[12px] mb-2 sm:mb-2.5 bg-[#EFE8E1] relative">
                  <img 
                    src={cat.image} 
                    alt={lang === 'tr' ? cat.tr : cat.en}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Footer Row */}
                <div className="flex items-center justify-between w-full px-1 py-0.5 mt-auto">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#f4f0e2] border border-[#e8e0cc] flex items-center justify-center text-[#A7C239] shrink-0 group-hover:bg-[#A7C239] group-hover:border-[#A7C239] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.8]" />
                    </div>
                    <h4 className="font-sans text-xs sm:text-sm font-medium text-[#2a2e25] tracking-wide group-hover:text-[#A7C239] transition-colors truncate">
                      {lang === 'tr' ? cat.tr : cat.en}
                    </h4>
                  </div>
                  <span className="text-[#A7C239] group-hover:text-[#A7C239] font-light text-base sm:text-lg group-hover:translate-x-1 transition-transform duration-300 shrink-0 ml-1 leading-none">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
