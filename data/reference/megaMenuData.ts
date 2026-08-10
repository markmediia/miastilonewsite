export interface MegaMenuSection {
  titleTr: string;
  titleEn: string;
  items: Array<{ tr: string; en: string }>;
}

export interface MegaMenuData {
  sections: MegaMenuSection[];
  imageUrl: string;
  featuredTr: string;
  featuredEn: string;
}

export const MEGA_MENU_DATA: Record<string, MegaMenuData> = {
  bed: {
    sections: [
      {
        titleTr: "Yataklar",
        titleEn: "Beds",
        items: [
          { tr: "Döşemeli Yataklar", en: "Upholstered Beds" },
          { tr: "Masif Ahşap Yataklar", en: "Solid Wood Beds" },
          { tr: "Hezeran Yataklar", en: "Canopy & Poster Beds" },
          { tr: "Karyolalar", en: "Platform Beds" }
        ]
      },
      {
        titleTr: "Depolama",
        titleEn: "Storage",
        items: [
          { tr: "Komodinler", en: "Bedside Tables" },
          { tr: "Şifonyerler", en: "Dressers & Chests" },
          { tr: "Gardıroplar", en: "Armoires & Wardrobes" },
          { tr: "Bench & Sandıklar", en: "Benches & Trunks" }
        ]
      },
      {
        titleTr: "Tekstil",
        titleEn: "Linen & Bedding",
        items: [
          { tr: "Organik Keten Nevresim", en: "Organic Linen Duvets" },
          { tr: "Pamuk Saten Çarşaflar", en: "Cotton Satin Sheets" },
          { tr: "Lüks Kaşmir Battaniyeler", en: "Luxury Cashmere Throws" },
          { tr: "Kaz Tüyü Yastıklar", en: "Goose Down Pillows" }
        ]
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=400&q=80",
    featuredTr: "Keten Sessizliği Yatak Odası Koleksiyonu",
    featuredEn: "Serene Linen Bedroom Collection"
  },
  dining: {
    sections: [
      {
        titleTr: "Masalar",
        titleEn: "Tables",
        items: [
          { tr: "Masif Yemek Masaları", en: "Solid Wood Dining Tables" },
          { tr: "Traverten Yemek Masaları", en: "Travertine Dining Tables" },
          { tr: "Mermer Masalar", en: "Marble Dining Tables" },
          { tr: "Konsol Masaları", en: "Console Tables" }
        ]
      },
      {
        titleTr: "Oturma Grupları",
        titleEn: "Seating",
        items: [
          { tr: "Döşemeli Yemek Sandalyeleri", en: "Upholstered Chairs" },
          { tr: "Hezeranlı Sandalyeler", en: "Caned Chairs" },
          { tr: "Bar & Tezgah Tabureleri", en: "Bar & Counter Stools" },
          { tr: "Yemek Odası Benchleri", en: "Dining Benches" }
        ]
      },
      {
        titleTr: "Büfe & Vitrinler",
        titleEn: "Sideboards & Cabinets",
        items: [
          { tr: "Masif Ahşap Büfeler", en: "Solid Wood Sideboards" },
          { tr: "Cam Kapaklı Vitrinler", en: "Glass Display Cabinets" },
          { tr: "Şarap Dolapları", en: "Wine Cabinets" },
          { tr: "Açık Raf Sistemleri", en: "Open Shelving Units" }
        ]
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=400&q=80",
    featuredTr: "Doğal Modern Yemek Odası",
    featuredEn: "Organic Modern Dining Room"
  },
  living: {
    sections: [
      {
        titleTr: "Oturma Elemanları",
        titleEn: "Seating",
        items: [
          { tr: "Döşemeli Kanepeler", en: "Upholstered Sofas" },
          { tr: "Keten Kanepeler", en: "Linen Sofas" },
          { tr: "Bouclé Kanepeler", en: "Bouclé Sofas" },
          { tr: "Lüks Berjerler", en: "Luxe Lounge Chairs" }
        ]
      },
      {
        titleTr: "Sehpalar",
        titleEn: "Tables",
        items: [
          { tr: "Traverten Orta Sehpalar", en: "Travertine Coffee Tables" },
          { tr: "Masif Ahşap Yan Sehpalar", en: "Solid Wood Side Tables" },
          { tr: "Mermer Sehpalar", en: "Marble Nesting Tables" },
          { tr: "Dresuar Modelleri", en: "Luxury Consoles" }
        ]
      },
      {
        titleTr: "Tamamlayıcılar",
        titleEn: "Accents",
        items: [
          { tr: "Kitaplıklar", en: "Bookcases & Shelving" },
          { tr: "TV Üniteleri", en: "Media Consoles" },
          { tr: "Şömine Önü Bankları", en: "Hearth Benches" },
          { tr: "Deri Puf Modelleri", en: "Leather Poufs" }
        ]
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80",
    featuredTr: "Atelier Keten Oturma Grubu",
    featuredEn: "Atelier Linen Seating Set"
  },
  sectional: {
    sections: [
      {
        titleTr: "Köşe Serileri",
        titleEn: "Sectional Series",
        items: [
          { tr: "Cloud Modüler Köşe", en: "Cloud Modular Sectional" },
          { tr: "Atelier Keten Köşe", en: "Atelier Linen Sectional" },
          { tr: "Verona Kadife Köşe", en: "Verona Velvet Sectional" },
          { tr: "İtalyan Deri Köşe", en: "Italian Leather Sectional" }
        ]
      },
      {
        titleTr: "Konfigürasyonlar",
        titleEn: "Configurations",
        items: [
          { tr: "L Tipi Köşe Takımları", en: "L-Shape Sectionals" },
          { tr: "U Tipi Geniş Köşe", en: "U-Shape Sectionals" },
          { tr: "Özel Ölçü Köşeler", en: "Custom Made Sectionals" },
          { tr: "Şezlonglu Kanepeler", en: "Sectionals with Chaise" }
        ]
      },
      {
        titleTr: "Doku & Renkler",
        titleEn: "Fabrics & Colors",
        items: [
          { tr: "İtalyan Bouclé (Fildişi)", en: "Italian Bouclé (Ivory)" },
          { tr: "%100 Belçika Keteni (Kömür)", en: "100% Belgian Linen" },
          { tr: "Pamuklu İtalyan Kadife", en: "Cotton Italian Velvet" },
          { tr: "Antik Dokulu Doğal Deriler", en: "Distressed Natural Leathers" }
        ]
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80",
    featuredTr: "Cloud Bouclé Modüler Köşe",
    featuredEn: "Cloud Bouclé Modular Sectional"
  },
  youth: {
    sections: [
      {
        titleTr: "Bebek & Çocuk",
        titleEn: "Baby & Kids",
        items: [
          { tr: "Bebek Beşikleri", en: "Baby Cribs" },
          { tr: "Montessori Yataklar", en: "Montessori Beds" },
          { tr: "Oyun Masaları", en: "Play Tables" },
          { tr: "Oyuncak Sandıkları", en: "Toy Storage Bins" }
        ]
      },
      {
        titleTr: "Genç Odası",
        titleEn: "Teen Room",
        items: [
          { tr: "Çalışma Masaları", en: "Study Desks" },
          { tr: "Genç Karyolaları", en: "Teen Platform Beds" },
          { tr: "Kitaplık Modelleri", en: "Teen Bookcases" },
          { tr: "Ergonomik Sandalyeler", en: "Ergonomic Chairs" }
        ]
      },
      {
        titleTr: "Dekorasyon",
        titleEn: "Decor",
        items: [
          { tr: "Eğlenceli Çocuk Aydınlatmaları", en: "Whimsical Lamps" },
          { tr: "Yumuşak Oyun Halıları", en: "Plush Play Rugs" },
          { tr: "Duvar Panoları", en: "Wall Decals & Art" },
          { tr: "Çocuk Nevresimleri", en: "Organic Kids Bedding" }
        ]
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=400&q=80",
    featuredTr: "Genç Odası Çalışma Alanları",
    featuredEn: "Creative Teen Workspace Studio"
  },
  'bed-bases': {
    sections: [
      {
        titleTr: "Bazalar",
        titleEn: "Bed Bases",
        items: [
          { tr: "Sandıklı Çelik Bazalar", en: "Steel Storage Bases" },
          { tr: "Döşemeli Lüks Bazalar", en: "Premium Fabric Upholstered" },
          { tr: "Masif Ahşap Baza Sistemleri", en: "Solid Wood Bed Frames" },
          { tr: "Motorlu Akıllı Bazalar", en: "Motorized Smart Bases" }
        ]
      },
      {
        titleTr: "Yataklar",
        titleEn: "Mattresses",
        items: [
          { tr: "Ortopedik Yaylı Yataklar", en: "Pocket Spring Mattresses" },
          { tr: "Doğal Lateks Yataklar", en: "Organic Latex Mattresses" },
          { tr: "Hybrid Akıllı Sünger", en: "Hybrid Smart Memory Foam" },
          { tr: "Çift Taraflı Yazlık/Kışlık", en: "Dual Season Mattresses" }
        ]
      },
      {
        titleTr: "Uyku Konforu",
        titleEn: "Sleep Enhancements",
        items: [
          { tr: "Visco Yatak Pedleri", en: "Visco Toppers" },
          { tr: "Sıvı Geçirmez Alezler", en: "Waterproof Protectors" },
          { tr: "Medikal Boyun Yastıkları", en: "Cervical Pillows" },
          { tr: "Ortopedik Bel Destekleri", en: "Lumbar Support Cushions" }
        ]
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&q=80",
    featuredTr: "Lüks Baza ve Yatak Teknolojileri",
    featuredEn: "Luxury Bed Bases & Sleeping Tech"
  },
  'wedding-package': {
    sections: [
      {
        titleTr: "Düğün Paketleri",
        titleEn: "Wedding Sets",
        items: [
          { tr: "Palazzo Lüks Çeyiz Paketi", en: "Palazzo Luxury Bridal Suite" },
          { tr: "Biarritz Modern Ev Paketi", en: "Biarritz Modern Home Set" },
          { tr: "Riviera Minimalist Düğün Seti", en: "Riviera Minimalist Set" },
          { tr: "Atelier Özel Tasarım Paketler", en: "Atelier Bespoke Wedding Packages" }
        ]
      },
      {
        titleTr: "Paket İçerikleri",
        titleEn: "Package Inclusions",
        items: [
          { tr: "Komple Yatak Odası Takımı", en: "Complete Bedroom Suite" },
          { tr: "Yemek Odası Masası & Sandalyeler", en: "Dining Table & Chair Suite" },
          { tr: "Koltuk Takımı & Sehpa", en: "Sofa Set & Coffee Table" },
          { tr: "Baza & Ortopedik Yatak", en: "Bed Base & Premium Mattress" }
        ]
      },
      {
        titleTr: "Çeyiz Ayrıcalıkları",
        titleEn: "Bridal Privileges",
        items: [
          { tr: "Ücretsiz İç Mimarlık Danışmanlığı", en: "Complimentary Interior Design Consultation" },
          { tr: "Ücretsiz Teslimat & Profesyonel Montaj", en: "Free Delivery & Professional Assembly" },
          { tr: "2 Yıl Koşulsuz Mia Stilo Garantisi", en: "2-Year Comprehensive Warranty" },
          { tr: "Düğün Tarihine Özel Erken Teslimat", en: "Scheduled Delivery on Wedding Date" }
        ]
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80",
    featuredTr: "Yeni Evlenenlere Özel Düğün Paketleri",
    featuredEn: "Exclusive Wedding Packages for Newlyweds"
  },
  studio3d: {
    sections: [
      {
        titleTr: "Tasarım Laboratuvarı",
        titleEn: "Design Lab",
        items: [
          { tr: "İnteraktif Oda Planlayıcı", en: "Interactive Room Planner" },
          { tr: "Doku & Renk Simülatörü", en: "Material Configurator" },
          { tr: "Mimarla Sanal Görüşme", en: "Virtual Consultation" },
          { tr: "Render Galeri Örnekleri", en: "Render Gallery Examples" }
        ]
      },
      {
        titleTr: "Özelleştirilebilir Ürünler",
        titleEn: "Customizable Items",
        items: [
          { tr: "Cloud Bouclé Kanepe", en: "Cloud Bouclé Sofa" },
          { tr: "Piazza Traverten Sehpa", en: "Piazza Travertine Table" },
          { tr: "Emilia Cam Avize", en: "Emilia Glass Chandelier" },
          { tr: "Atelier Yün Halı", en: "Atelier Wool Rug" }
        ]
      },
      {
        titleTr: "Özel Tasarım Hizmetleri",
        titleEn: "Bespoke Services",
        items: [
          { tr: "3D Mimari Projelendirme", en: "3D Architectural Projects" },
          { tr: "Kişiye Özel Ölçülendirme", en: "Custom Size Engineering" },
          { tr: "Kumaş Kartela Gönderimi", en: "Physical Fabric Swatches" },
          { tr: "Ücretsiz Ev Ölçümü", en: "Complimentary Home Measuring" }
        ]
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1530018607912-eff2df11a3be?auto=format&fit=crop&w=400&q=80",
    featuredTr: "3D İnteraktif Tasarım Deneyimi",
    featuredEn: "Interactive 3D Architectural Experience"
  },
  sale: {
    sections: [
      {
        titleTr: "İndirimli Kategoriler",
        titleEn: "Sale by Room",
        items: [
          { tr: "Oturma Odası Fırsatları", en: "Living Room Offers" },
          { tr: "Yemek Odası Fırsatları", en: "Dining Room Offers" },
          { tr: "Yatak Odası Fırsatları", en: "Bedroom Sanctuaries Sale" },
          { tr: "Dekorasyon Fırsatları", en: "Luxe Decor & Lighting Accents" }
        ]
      },
      {
        titleTr: "Üye Özel Kampanyası",
        titleEn: "Member Privileges",
        items: [
          { tr: "Üyelere Ekstra %30 İndirim", en: "Additional 30% Member Savings" },
          { tr: "Ücretsiz Premium Teslimat", en: "Complimentary White Glove Delivery" },
          { tr: "Öncelikli Üretim Sırası", en: "Priority Manufacturing Queue" },
          { tr: "Mimari Danışmanlık", en: "Bespoke Interior Design Services" }
        ]
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=400&q=80",
    featuredTr: "Yaz Kampanyası Fırsatlarını Keşfedin",
    featuredEn: "Discover Exclusive Summer Campaign Savings"
  },
  ecatalog: {
    sections: [
      {
        titleTr: "2026 Dijital Kataloglar",
        titleEn: "2026 Digital Catalogues",
        items: [
          { tr: "2026 Mimari Koleksiyon Kataloğu", en: "2026 Architectural Main Catalogue" },
          { tr: "Baza & Yatak Özel Sayısı", en: "Bed Bases & Mattresses Special Issue" },
          { tr: "Lüks Düğün Paketleri Rehberi", en: "Luxury Wedding Packages Lookbook" },
          { tr: "3D Stüdyo & Kumaş Kartelası", en: "3D Studio & Fabric Swatches Book" }
        ]
      },
      {
        titleTr: "Katalog Hizmetleri",
        titleEn: "Catalogue Services",
        items: [
          { tr: "PDF Olarak İndir (Yüksek Çözünürlük)", en: "Download High-Res PDF Catalogue" },
          { tr: "İnteraktif Katalog İncele", en: "View Interactive Lookbook" },
          { tr: "Basılı Katalog Talep Et", en: "Request Hardcover Edition" },
          { tr: "WhatsApp Katalog Gönderimi", en: "Receive Catalogue on WhatsApp" }
        ]
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=400&q=80",
    featuredTr: "2026 E-Katalog & Mimari Rehber",
    featuredEn: "2026 Interactive E-Catalogue & Lookbook"
  }
};
