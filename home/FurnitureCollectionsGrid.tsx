import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const bedroomImg = '/images/home/bedroom_collection_1785663320319.jpg';
const diningImg = '/images/home/dining_collection_1785663338182.jpg';
const livingImg = '/images/home/living_collection_1785663351556.jpg';
const cornerSofaImg = '/images/home/corner_sofa_collection_1785663365024.jpg';
const tvUnitImg = '/images/home/tv_unit_collection_1785663377402.jpg';
const bedBaseImg = '/images/home/bed_base_collection_1785663393200.jpg';
const tableChairImg = '/images/home/table_chair_collection_1785663406658.jpg';
const babyRoomImg = '/images/home/baby_room_collection_1785663421107.jpg';
const kidsRoomImg = '/images/home/kids_room_collection_1785663436179.jpg';
const teenRoomImg = '/images/home/teen_room_collection_1785663449123.jpg';

interface FurnitureCollectionsGridProps {
  lang: 'tr' | 'en' | 'fr' | 'de';
  onSelectCategory?: (catId: string) => void;
  bgColor?: string;
}

export const FurnitureCollectionsGrid: React.FC<FurnitureCollectionsGridProps> = ({
  lang,
  onSelectCategory,
  bgColor = '#FAF8F5',
}) => {
  const collections = [
    {
      id: 'bed',
      titleTr: 'YATAK ODASI',
      titleEn: 'BEDROOM',
      subtitleTr: 'Zamansız Konfor & Şıklık',
      subtitleEn: 'Timeless Comfort & Style',
      image: bedroomImg,
    },
    {
      id: 'dining',
      titleTr: 'YEMEK ODASI',
      titleEn: 'DINING ROOM',
      subtitleTr: 'Estetik & Doğal Dokular',
      subtitleEn: 'Aesthetics & Natural Textures',
      image: diningImg,
    },
    {
      id: 'living',
      titleTr: 'OTURMA ODASI',
      titleEn: 'LIVING ROOM',
      subtitleTr: 'Lüks & Modern Çizgiler',
      subtitleEn: 'Luxury & Modern Lines',
      image: livingImg,
    },
    {
      id: 'sectional',
      titleTr: 'KÖŞE KOLTUK',
      titleEn: 'SECTIONALS',
      subtitleTr: 'Geniş & Modüler Rahatlık',
      subtitleEn: 'Spacious & Modular Comfort',
      image: cornerSofaImg,
    },
    {
      id: 'tv_unit',
      titleTr: 'TV ÜNİTESİ',
      titleEn: 'TV UNITS',
      subtitleTr: 'Fonksiyonel & Minimalist',
      subtitleEn: 'Functional & Minimalist',
      image: tvUnitImg,
    },
    {
      id: 'bed_base',
      titleTr: 'BAZA & BAŞLIK',
      titleEn: 'BED BASE & HEADBOARD',
      subtitleTr: 'Ergonomik & Dayanıklı Yapı',
      subtitleEn: 'Ergonomic & Durable Design',
      image: bedBaseImg,
    },
    {
      id: 'table_chair',
      titleTr: 'MASA & SANDALYE',
      titleEn: 'TABLES & CHAIRS',
      subtitleTr: 'Zarif İşçilik & Detaylar',
      subtitleEn: 'Refined Craftsmanship & Details',
      image: tableChairImg,
    },
    {
      id: 'baby_room',
      titleTr: 'BEBEK ODASI',
      titleEn: 'NURSERY ROOM',
      subtitleTr: 'Huzurlu & Güvenli Alanlar',
      subtitleEn: 'Peaceful & Safe Spaces',
      image: babyRoomImg,
    },
    {
      id: 'kids_room',
      titleTr: 'ÇOCUK ODASI',
      titleEn: 'KIDS ROOM',
      subtitleTr: 'Eğlenceli & Neşeli Dünyalar',
      subtitleEn: 'Playful & Joyful Worlds',
      image: kidsRoomImg,
    },
    {
      id: 'teen_room',
      titleTr: 'GENÇ ODASI',
      titleEn: 'TEEN ROOM',
      subtitleTr: 'Dinamik & Yaratıcı Tasarımlar',
      subtitleEn: 'Dynamic & Creative Designs',
      image: teenRoomImg,
    },
  ];

  return (
    <section 
      style={{ backgroundColor: bgColor }}
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 w-full border-b border-[#ebdcc4]/40" 
      id="furniture-collections-section"
    >
      <div className="max-w-[1700px] mx-auto text-center">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#151515] font-medium tracking-tight mb-2">
            {lang === 'tr' ? (
              <>
                Mobilya <span className="text-[#A7C239]">Koleksiyonları</span>
              </>
            ) : (
              <>
                Furniture <span className="text-[#A7C239]">Collections</span>
              </>
            )}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide">
            {lang === 'tr' 
              ? 'Evinizin her köşesi için özel olarak tasarlanmış koleksiyonlarımızı keşfedin' 
              : 'Explore our collections designed for every corner of your home'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 text-left">
          {collections.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onSelectCategory && onSelectCategory(item.id)}
              className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xs hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
            >
              <img 
                src={item.image} 
                alt={lang === 'tr' ? item.titleTr : item.titleEn}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-95 group-hover:brightness-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 flex flex-col justify-end transition-opacity duration-300">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-serif text-white tracking-wide leading-tight group-hover:text-[#A7C239] transition-colors">
                      {lang === 'tr' ? item.titleTr : item.titleEn}
                    </h3>
                    <p className="text-xs text-gray-300 font-light mt-1 opacity-90 group-hover:opacity-100">
                      {lang === 'tr' ? item.subtitleTr : item.subtitleEn}
                    </p>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur group-hover:bg-[#A7C239] text-white flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="w-4 h-4" />
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
