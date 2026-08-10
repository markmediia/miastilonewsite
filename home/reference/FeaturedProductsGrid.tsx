import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

// Imported realistic room images
const bedroomImg = '/images/home/regenerated_image_1785713443701.png';
const diningImg = '/images/home/regenerated_image_1785713445634.png';
const livingImg = '/images/home/regenerated_image_1785713447765.png';
const cornerSofaImg = '/images/home/regenerated_image_1785713449965.png';
const bedBaseImg = '/images/home/regenerated_image_1785713452066.png';
const tvUnitImg = '/images/home/regenerated_image_1785713453740.png';
const tableChairImg = '/images/home/regenerated_image_1785713455377.png';
const babyRoomImg = '/images/home/regenerated_image_1785713457373.png';
const kidsRoomImg = '/images/home/regenerated_image_1785713459148.png';

interface FeaturedProductsGridProps {
  lang: 'tr' | 'en' | 'fr' | 'de';
  onSelectCategory?: (catId: string) => void;
  bgColor?: string;
}

export const FeaturedProductsGrid: React.FC<FeaturedProductsGridProps> = ({
  lang,
  onSelectCategory,
  bgColor = '#FAF8F5',
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', tr: 'TÜMÜ', en: 'ALL' },
    { id: 'bed', tr: 'YATAK ODASI', en: 'BEDROOM' },
    { id: 'dining', tr: 'YEMEK ODASI', en: 'DINING ROOM' },
    { id: 'living', tr: 'OTURMA ODASI', en: 'LIVING ROOM' },
    { id: 'sectional', tr: 'KÖŞE KOLTUK', en: 'SECTIONAL' },
    { id: 'teen_room', tr: 'GENÇ & ÇOCUK ODASI', en: 'TEEN & KIDS' },
    { id: 'bed-bases', tr: 'BAZA & YATAK', en: 'BED & BASE' },
  ];

  const items = [
    {
      id: 'living',
      categoryTr: 'OTURMA ODASI',
      categoryEn: 'LIVING ROOM',
      nameTr: 'Verra Koltuk Takımı',
      nameEn: 'Verra Living Set',
      price: '54.999₺',
      descTr: 'Sadelikle uyumlu, zarif ve konforlu oturma takımları.',
      descEn: 'Elegant and comfortable living sets matching simplicity.',
      image: livingImg,
    },
    {
      id: 'dining',
      categoryTr: 'YEMEK ODASI',
      categoryEn: 'DINING ROOM',
      nameTr: 'Lara Yemek Odası',
      nameEn: 'Lara Dining Room',
      price: '47.999₺',
      descTr: 'Doğal tonların zarafeti sofranıza kalite, evinize şıklık katar.',
      descEn: 'Elegance of natural tones brings quality to your dining room.',
      image: diningImg,
    },
    {
      id: 'sectional',
      categoryTr: 'KÖŞE KOLTUK',
      categoryEn: 'SECTIONAL',
      nameTr: 'Lena Köşe Koltuk',
      nameEn: 'Lena Sectional Sofa',
      price: '56.999₺',
      descTr: 'Modüler köşe koltuk, yüksek mekanizması ile daha kullanışlı rahat.',
      descEn: 'Modular sectional sofa with high back mechanism for maximum comfort.',
      image: cornerSofaImg,
    },
    {
      id: 'bed-bases',
      categoryTr: 'BAZA & YATAK',
      categoryEn: 'BED & BASE',
      nameTr: 'Stilo Sandıklı Lüks Çift Kişi Baza',
      nameEn: 'Stilo Luxury Double Storage Bed Base',
      price: '28.999₺',
      descTr: 'Ergonomik başlık, geniş depolama alanı, güçlü piston sistemi.',
      descEn: 'Ergonomic headboard, spacious storage, durable hydraulic system.',
      image: bedBaseImg,
    },
    {
      id: 'bed',
      categoryTr: 'YATAK ODASI',
      categoryEn: 'BEDROOM',
      nameTr: 'Bianca Yatak Odası Takımı',
      nameEn: 'Bianca Bedroom Set',
      price: '54.999₺',
      descTr: 'Şıklık ve fonksiyon bir arada. Zamansız tasarım, kusursuz detaylar.',
      descEn: 'Elegance and function combined. Timeless design, flawless details.',
      image: bedroomImg,
    },
    {
      id: 'teen_room',
      categoryTr: 'GENÇ & ÇOCUK ODASI',
      categoryEn: 'TEEN & KIDS ROOM',
      nameTr: 'Stilo Genç Odası Takımı',
      nameEn: 'Stilo Youth Room Set',
      price: '33.999₺',
      descTr: 'Çalışmaya, dinlenmeye ve büyümeye uygun fonksiyonel tasarım.',
      descEn: 'Functional design suited for study, relaxation, and growth.',
      image: kidsRoomImg,
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? items 
    : items.filter(item => item.id === activeFilter);

  return (
    <section 
      style={{ backgroundColor: bgColor }}
      className="pt-0 sm:pt-0.5 md:pt-1 pb-10 sm:pb-14 px-2 sm:px-4 lg:px-8 w-full border-b border-[#ebdcc4]/30" 
      id="featured-products-section"
    >
      <div className="max-w-[1700px] mx-auto">
        {/* Top Header Row with Title & Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 sm:mb-8 text-left">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight text-[#1a1e16]">
            {lang === 'tr' ? (
              <>
                Sizin İçin <span className="text-[#A7C239]">Seçtiklerimiz</span>
              </>
            ) : (
              <>
                Selected <span className="text-[#A7C239]">For You</span>
              </>
            )}
          </h2>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-all cursor-pointer whitespace-nowrap shadow-2xs ${
                    isActive
                      ? 'bg-[#A7C239] text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-black border border-gray-100'
                  }`}
                  id={`filter-pill-${tab.id}`}
                >
                  {lang === 'tr' ? tab.tr : tab.en}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3x2 Grid of 6 Featured Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
          {filteredItems.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => onSelectCategory && onSelectCategory(item.id)}
              className="group bg-white rounded-2xl p-2 sm:p-2.5 border border-gray-100 shadow-2xs hover:shadow-xl hover:border-[#A7C239]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              id={`featured-card-${item.id}-${idx}`}
            >
              {/* Image Box */}
              <div className="w-full aspect-[16/10] overflow-hidden rounded-xl bg-gray-100 mb-2.5 relative">
                <img 
                  src={item.image} 
                  alt={lang === 'tr' ? item.nameTr : item.nameEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Card Footer Info */}
              <div className="px-2 pb-1 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold tracking-widest text-[#1a1e16] uppercase">
                      {lang === 'tr' ? item.categoryTr : item.categoryEn}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#A7C239] font-mono">
                      {item.price}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-medium text-gray-800 tracking-wide mb-1 group-hover:text-[#A7C239] transition-colors">
                    {lang === 'tr' ? item.nameTr : item.nameEn}
                  </h3>

                  <p className="text-xs text-[#2a3522] font-medium leading-relaxed">
                    {lang === 'tr' ? item.descTr : item.descEn}
                  </p>
                </div>

                <div className="flex justify-end pt-3">
                  <div className="w-8 h-8 rounded-full bg-[#FAF8F5] group-hover:bg-[#A7C239] text-[#A7C239] group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
