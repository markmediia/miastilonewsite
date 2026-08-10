import React from 'react';
const bannerImg = '/images/home/wedding_campaign_banner_1785805246449.jpg';

interface WeddingBannerSectionProps {
  lang: 'tr' | 'en' | 'fr' | 'de';
  onSelectCategory?: (catId: string) => void;
}

export const WeddingBannerSection: React.FC<WeddingBannerSectionProps> = ({ onSelectCategory }) => {
  const handleClick = () => {
    if (onSelectCategory) {
      onSelectCategory('wedding-package');
    } else {
      const catalogSection = document.getElementById('catalog-section');
      if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="w-full bg-[#f7f5f0] py-8 sm:py-12 px-4 sm:px-6 lg:px-12" id="wedding-banner-section">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg border border-[#e6e1d6] group cursor-pointer transition-transform duration-300 hover:shadow-xl" onClick={handleClick}>
        <img 
          src={bannerImg} 
          alt="Yeni Evler Mia Stilo'yu Seçiyor - Düğün Paketlerinde İndirim" 
          className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-[1.01]"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
};
