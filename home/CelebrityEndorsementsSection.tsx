import React from 'react';
import { ArrowRight, Armchair, Sparkles } from 'lucide-react';

interface CelebrityEndorsementsSectionProps {
  lang: 'tr' | 'en' | 'fr' | 'de';
  onSelectCategory?: (catId: string) => void;
  bgColor?: string;
}

export const CelebrityEndorsementsSection: React.FC<CelebrityEndorsementsSectionProps> = ({
  lang,
  onSelectCategory,
  bgColor = '#FAF8F5',
}) => {
  const endorsements = [
    {
      id: 'gorkem',
      name: 'Görkem Sevindik',
      roleTr: 'Oyuncu',
      roleEn: 'Actor',
      highlightTr: 'Görkem Sevindik',
      quoteTr: ' ile modern, sade ve iskandinav imzalı çağdaş tasarımlar',
      quoteEn: ' with modern, minimal and scandinavian signature contemporary designs',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      furnitureImage: '/images/home/corner_sofa_collection_1785663365024.jpg',
      catId: 'living',
    },
    {
      id: 'gul',
      name: 'Gül Erçetingöz',
      roleTr: 'Celebrity & Designer',
      roleEn: 'Celebrity & Designer',
      highlightTr: 'Gül Erçetingöz’ün',
      quoteTr: ' lüks ve elegan seçimlerinden oluşan ürünler',
      quoteEn: ' curated with luxury and elegant high-end choices',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      furnitureImage: '/images/home/living_collection_1785663351556.jpg',
      catId: 'sectional',
    },
    {
      id: 'toygan',
      name: 'Toygan Avanoğlu',
      roleTr: 'Oyuncu',
      roleEn: 'Actor',
      highlightTr: 'Toygan Avanoğlu’ndan',
      quoteTr: ' evinize yıldızlı dokunuşlar katacak seçimler',
      quoteEn: ' selections that add star touches to your home',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      furnitureImage: '/images/home/table_chair_collection_1785663406658.jpg',
      catId: 'dining',
    },
  ];

  return (
    <section 
      style={{ backgroundColor: bgColor }}
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-10 w-full border-b border-[#ebdcc4]/40" 
      id="celebrity-endorsements-section"
    >
      <div className="w-full max-w-[1880px] mx-auto text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight font-normal text-[#151515] mb-3">
            <span className="text-[#6b7b37] font-serif">Yıldızların</span> Seçimleri
          </h2>

          <div className="flex items-center justify-center gap-2 my-3 text-[#788f22]">
            <div className="w-8 h-[1px] bg-[#788f22]/40"></div>
            <Sparkles className="w-4 h-4 fill-current" />
            <div className="w-8 h-[1px] bg-[#788f22]/40"></div>
          </div>

          <p className="text-xs sm:text-sm text-[#706657] font-medium tracking-wide">
            {lang === 'tr' 
              ? 'Seçkin mimarlar ve ünlülerin hazırladığı özel konseptler' 
              : 'Exclusive concepts curated by elite architects and celebrities'}
          </p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
          {endorsements.map((item) => (
            <div 
              key={item.id}
              onClick={() => onSelectCategory && onSelectCategory(item.catId)}
              className="bg-[#f6f0e6] border border-[#e8ded1] rounded-[2.5rem] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group cursor-pointer shadow-2xs hover:shadow-2xl transition-all duration-500 min-h-[520px]"
            >
              {/* Top Armchair Icon */}
              <div className="w-11 h-11 rounded-full bg-[#eee5d8] border border-[#e2d6c5] flex items-center justify-center text-[#6b7b37] mb-5 shadow-2xs">
                <Armchair className="w-5 h-5 stroke-[1.8]" />
              </div>

              {/* Quote Headline */}
              <h3 className="text-xl sm:text-2xl font-serif text-[#2a241c] leading-snug font-normal mb-6">
                <span className="text-[#6b7b37] font-medium">{item.highlightTr}</span>
                {lang === 'tr' ? item.quoteTr : item.quoteEn}
              </h3>

              {/* Person Info & Avatar Row */}
              <div className="flex items-center justify-between mb-6 z-10 relative">
                <div className="flex items-center gap-3.5">
                  <img 
                    src={item.avatar} 
                    alt={item.name}
                    className="w-12 h-12 rounded-full border-2 border-[#6b7b37] object-cover shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#151515] font-serif tracking-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#786d5e] font-medium">
                      {lang === 'tr' ? item.roleTr : item.roleEn}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mb-6 z-10 relative">
                <button className="bg-[#6b7b37] hover:bg-[#58672c] text-white font-bold text-xs tracking-wider px-6 py-2.5 rounded-full flex items-center gap-2 shadow-xs transition-all transform group-hover:translate-x-1">
                  <span>{lang === 'tr' ? 'Koleksiyonu İncele' : 'Explore Collection'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Bottom Furniture Image */}
              <div className="w-full h-56 overflow-hidden rounded-2xl border border-[#e5dacb] bg-[#ede4d7] relative z-10 mt-2">
                <img 
                  src={item.furnitureImage} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Background Plant Branch Shadow Overlay */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none w-36 h-full bg-contain bg-no-repeat bg-right" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=300&q=80')" }}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
