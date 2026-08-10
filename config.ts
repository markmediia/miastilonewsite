
// >>> فایل تنظیمات سایت میا استیلو <<<
// راهنما:
// 1. تمام متن‌ها و تصاویر سایت از اینجا قابل تغییر هستند.
// 2. برای تغییر عکس‌ها، لینک جدید را جایگزین کنید (Vercel Blob یا لینک خارجی).

export const siteConfig = {
  // 1. تنظیمات هدر (منوی بالا)
  header: {
    logo: "https://2tru0w9j0bliunku.public.blob.vercel-storage.com/photos/logo%20main/M%C4%B0Amaincolorlight.png", // لوگوی اصلی (سفید یا رنگ روشن برای پس زمینه تیره)
    logoDark: "https://2tru0w9j0bliunku.public.blob.vercel-storage.com/photos/logo%20main/M%C4%B0Amaincolordark.png", // لوگوی دوم (تیره برای پس زمینه سفید) - لینک لوگوی مشکی خود را اینجا بگذارید
    homeLink: "/",          
    
    // منوهای جدید هدر
    menuItems: [
      { label: "Ana Sayfa", link: "/" },
      { label: "Yatak Odası", link: "/shop?ana=YATAK+ODASI" },
      { label: "Yemek Odası", link: "/shop?ana=YEMEK+ODASI" },
      { label: "Oturma Odası", link: "/shop?ana=OTURMA+ODASI" },
      { label: "Köşe Koltuk", link: "/shop?ust=K%C3%B6%C5%9Fe+Tak%C4%B1mlar%C4%B1" },
      { label: "Baza & Yatak", link: "/shop?ana=BAZA+%26+YATAK" },
      { label: "Genç & Çocuk", link: "/shop?ana=GEN%C3%87+%26+%C3%87OCUK+ODASI" },
      { label: "Outlet", link: "/shop?ana=OUTLET" },
      { label: "İNDİRİM", link: "/shop?indirim=1", isSale: true }
    ],

    // لینک‌های قدیمی برای سازگاری با فوتر
    collectionsLink: "/collections", 
    storesLink: "/stores",    
    blogLink: "/blog",        
    saleLink: "/sale",
    menuText: {
      home: "ANASAYFA",
      collections: "KOLEKSİYONLAR",
      stores: "MAĞAZA",
      blog: "BLOG",
      sale: "İNDİRİM"
    }
  },

  // 2. اسلایدر اصلی (Hero)
  hero: {
    title: "MIA COLLECTION",
    subtitle: "Zarafet ve konforun eşsiz uyumu.",
    buttonText: "Koleksiyonu İncele",
    buttonLink: "#products",
    badgeText: "Yeni Sezon 2026",
    backgroundImage: "https://2tru0w9j0bliunku.public.blob.vercel-storage.com/2%20panosuz.jpg"
  },

  // 3. دسته‌بندی‌ها (۶ مورد درخواست شده)
  categories: {
    title: "Kategoriler",
    items: [
      { 
        id: 1, 
        name: "Yatak Odası", 
        image: "https://2tru0w9j0bliunku.public.blob.vercel-storage.com/CATEGORY/hakan/2.png", 
        link: "/shop?ana=YATAK+ODASI" 
      },
      { 
        id: 2, 
        name: "Yemek Odası", 
        image: "https://2tru0w9j0bliunku.public.blob.vercel-storage.com/CATEGORY/hakan/3.png", 
        link: "/shop?ana=YEMEK+ODASI" 
      },
      { 
        id: 3, 
        name: "Oturma Odası", 
        image: "https://2tru0w9j0bliunku.public.blob.vercel-storage.com/CATEGORY/hakan/1.png", 
        link: "/shop?ana=OTURMA+ODASI" 
      },
      { 
        id: 4, 
        name: "Genç & Çocuk", 
        image: "https://2tru0w9j0bliunku.public.blob.vercel-storage.com/CATEGORY/hakan/6.png", 
        link: "/shop?ana=GEN%C3%87+%26+%C3%87OCUK+ODASI" 
      },
      { 
        id: 5, 
        name: "Baza & Yatak", 
        image: "https://2tru0w9j0bliunku.public.blob.vercel-storage.com/CATEGORY/hakan/8.png", 
        link: "/shop?ana=BAZA+%26+YATAK" 
      },
      { 
        id: 6, 
        name: "Bebek Odası", 
        image: "https://2tru0w9j0bliunku.public.blob.vercel-storage.com/CATEGORY/hakan/4.png", 
        link: "/shop?ust=Bebek+Odas%C4%B1" 
      },
      { 
        id: 7, 
        name: "Çocuk Odası", 
        image: "https://2tru0w9j0bliunku.public.blob.vercel-storage.com/CATEGORY/hakan/5.png", 
        link: "/shop?ust=%C3%87ocuk+Odas%C4%B1" 
      },
      { 
        id: 8, 
        name: "Outlet",
        image: "https://2tru0w9j0bliunku.public.blob.vercel-storage.com/CATEGORY/hakan/7.png", 
        link: "/shop?ana=OUTLET" 
      }
    ]
  },

  // 4. ویژگی‌های سایت (Features)
  features: [
    { 
      title: 'Ücretsiz Teslimat', 
      description: 'Tüm siparişleriniz ücretsiz olarak elinize ulaşır.',
      iconUrl: 'https://2tru0w9j0bliunku.public.blob.vercel-storage.com/CATEGORY/site%20ozelikler/1.png' 
    },
    { 
      title: 'Kurulum Hizmeti', 
      description: 'Teslim sonrası kurulum ekibimizce ücretsiz yapılır.',
      iconUrl: 'https://2tru0w9j0bliunku.public.blob.vercel-storage.com/CATEGORY/site%20ozelikler/2.png' 
    },
    { 
      title: '360° Mağaza Ziyareti', 
      description: 'Bakmaktan fazlasını yapın; 360° özgürce gezin.',
      iconUrl: 'https://2tru0w9j0bliunku.public.blob.vercel-storage.com/CATEGORY/site%20ozelikler/3.png' 
    },
    { 
      title: 'Kolay İade', 
      description: 'Kararınız değişirse biz buradayız. 14 gün içinde kolay iade.',
      iconUrl: 'https://2tru0w9j0bliunku.public.blob.vercel-storage.com/CATEGORY/site%20ozelikler/4.png' 
    },
    { 
      title: 'İç Mimarlık Hizmeti', 
      description: 'Yaşam alanlarınızı estetik ve fonksiyonel çözümlerle tasarlıyoruz.',
      iconUrl: 'https://2tru0w9j0bliunku.public.blob.vercel-storage.com/CATEGORY/site%20ozelikler/5.png' 
    },
    { 
      title: 'Müşteri Evleri', 
      description: 'Mobilyalarımızın gerçek evlerdeki duruşundan görüntüler.',
      iconUrl: 'https://2tru0w9j0bliunku.public.blob.vercel-storage.com/CATEGORY/site%20ozelikler/6.png' 
    },
  ],

  // >>> تنظیمات بنرهای تبلیغاتی جدید <<<
  campaignBanners: {
    banner1: {
      // مکان: زیر دسته‌بندی‌ها
      // سایز پیشنهادی دسکتاپ: 1920x500 پیکسل
      desktopImage: "https://2tru0w9j0bliunku.public.blob.vercel-storage.com/public/indirim%20banner.png",
      // سایز پیشنهادی موبایل: 800x800 پیکسل (مربع یا عمودی)
      mobileImage: "https://2tru0w9j0bliunku.public.blob.vercel-storage.com/public/mobil%20indirim%20banner%20.png",
      link: "#campaign-1",
      alt: "Kampanya 1",
      overlayText: "Koleksiyonu Keşfet" // متن روی دکمه هاور
    },
    banner2: {
      // مکان: بالای بخش 'درباره ما'
      // سایز پیشنهادی دسکتاپ: 1920x600 پیکسل
      desktopImage: "https://2tru0w9j0bliunku.public.blob.vercel-storage.com/public/indirim%20banner.png",
      // سایز پیشنهادی موبایل: 800x1000 پیکسل (عمودی بلند)
      mobileImage: "https://2tru0w9j0bliunku.public.blob.vercel-storage.com/public/mobil%20indirim%20banner%20.png",
      link: "#campaign-2",
      alt: "Kampanya 2",
      overlayText: "Fırsatları İncele" // متن روی دکمه هاور
    }
  },

  // 5. پرفروش‌ترین‌ها (Best Sellers) - 10 محصول دستی
  bestSellers: {
    title: "Çok Satanlar",
    subtitle: "Bu ayın en favori parçaları",
    seeAllText: "Tümünü Gör",
    seeAllLink: "#bestsellers",
    items: [
      {
        id: 1,
        name: "Luna Yatak Odası Takımı",
        category: "Yatak Odası",
        price: "45.000 ₺",
        image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80",
        link: "https://www.miastilo.com/urun/luna-yatak-odasi",
        badge: "Çok Satan"
      },
      {
        id: 2,
        name: "Star Genç Odası Seti",
        category: "Genç Odası",
        price: "28.500 ₺",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
        link: "https://www.miastilo.com/urun/star-genc-odasi",
        badge: "Yeni"
      },
      {
        id: 3,
        name: "Modern Yemek Odası Konsolu",
        category: "Yemek Odası",
        price: "12.000 ₺",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
        link: "https://www.miastilo.com/urun/modern-yemek-odasi"
      },
      {
        id: 4,
        name: "Avangard Oturma Grubu",
        category: "Oturma Odası",
        price: "55.000 ₺",
        image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=800&q=80",
        link: "https://www.miastilo.com/urun/avangard-oturma-grubu",
        badge: "İndirim"
      },
      {
        id: 5,
        name: "Royal Bebek Karyolası",
        category: "Bebek Odası",
        price: "18.900 ₺",
        image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=800&q=80",
        link: "https://www.miastilo.com/urun/royal-bebek-odasi"
      },
      {
        id: 6,
        name: "Zen Gardırop (6 Kapaklı)",
        category: "Yatak Odası",
        price: "22.000 ₺",
        image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
        link: "https://www.miastilo.com/urun/zen-gardirop"
      },
      {
        id: 7,
        name: "Loft Çalışma Masası",
        category: "Genç Odası",
        price: "8.500 ₺",
        image: "https://images.unsplash.com/photo-1532323544230-7191fd510c53?auto=format&fit=crop&w=800&q=80",
        link: "https://www.miastilo.com/urun/loft-calisma-masasi"
      },
      {
        id: 8,
        name: "Elegance Yemek Masası",
        category: "Yemek Odası",
        price: "15.500 ₺",
        image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=800&q=80",
        link: "https://www.miastilo.com/urun/elegance-yemek-masasi"
      },
      {
        id: 9,
        name: "Chester Köşe Koltuk",
        category: "Oturma Odası",
        price: "42.000 ₺",
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
        link: "https://www.miastilo.com/urun/chester-kose-koltuk"
      },
      {
        id: 10,
        name: "Soft Bebek Şifonyeri",
        category: "Bebek Odası",
        price: "6.000 ₺",
        image: "https://images.unsplash.com/photo-1522771753035-a0409861e3bb?auto=format&fit=crop&w=800&q=80",
        link: "https://www.miastilo.com/urun/soft-bebek-sifonyeri"
      }
    ]
  },

  // 6. بنر تبلیغاتی (Promo Banner)
  promoBanner: {
    title: "İlk Alışverişe Özel %10 İndirim",
    descriptionPart1: "", 
    couponCode: "INSTA10",
    descriptionPart2: " kodu ile sepetinizde indirim kazanın.",
    buttonText: "Kuponu Kullan",
    buttonLink: "#promo",
    image: "https://2tru0w9j0bliunku.public.blob.vercel-storage.com/public/indirim%20banner.png"
  },

  // 7. بخش اینستاگرام (Inspiration)
  inspiration: {
    title: "#MiaStiloHome",
    subtitle: "Sizin eviniz, bizim ilhamımız. Tarzınızı paylaşın.",
    instagramLink: "https://instagram.com/miastilohome",
    instagramHandle: "@miastilohome"
  },

  // 8. بخش متا (Meta Focus)
  metaSection: {
    title: "Neden Mia stilo?",
    description: "Modern hatlar, akıllı depolama çözümleri ve estetik detaylarla yaşam alanınızı yeniden tanımlayın.",
    buttonText: "Koleksiyonu Gör",
    buttonLink: "#mia",
    image: "https://2tru0w9j0bliunku.public.blob.vercel-storage.com/CATEGORY/hakan/1.png"
  },

  // 9. بخش آمار (Stats)
  stats: {
    stat1: { value: "10k+", label: "Mutlu Müşteri" },
    stat2: { value: "5000+", label: "Ürün Çeşidi" },
    stat3: { value: "100%", label: "Yerli Üretim" }
  },

  // 10. بخش ویدیو
  videoSection: {
    title: "Yaşam Alanınızı Görün",
    buttonText: "Videoyu İzle",
    thumbnail: "https://2tru0w9j0bliunku.public.blob.vercel-storage.com/CATEGORY/hakan/2.png", 
    videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1" 
  },

  // 11. نظرات مشتریان (Testimonials)
  testimonials: {
    title: "Mutlu Evler",
    items: [
      {
        name: "Elif Yılmaz",
        role: "İstanbul",
        text: "İstanbul'dan sipariş verdim, Luna Bebek Odası takımı tam söz verilen tarihte geldi. Kurulum ekibi çok titizdi, ürün kalitesi muazzam.",
        rating: 5
      },
      {
        name: "Caner Erkin",
        role: "Ankara",
        text: "Star Genç Odası takımı oğlumun odasına çok yakıştı. Ankara'ya bu kadar hızlı kargo beklemiyordum. Malzeme kalitesi fotoğraflardan bile iyi.",
        rating: 5
      },
      {
        name: "Selin Demir",
        role: "İzmir",
        text: "Yemek masası ve sandalyeler salonumuzun havasını değiştirdi. Ahşabın dokusu çok doğal. İzmir sıcağında bile kumaşlar terletmiyor.",
        rating: 5
      },
      {
        name: "Murat Kaya",
        role: "Bursa",
        text: "TV ünitesi aldık, paketleme o kadar özenliydi ki tek bir çizik bile yoktu. Kurulum şeması çok netti, kendim kolayca kurdum.",
        rating: 5
      },
      {
        name: "Ayşe Çelik",
        role: "Antalya",
        text: "Bebek beşiği çok fonksiyonel ve şık. Sallanma mekanizmesi sessiz çalışıyor. Antalya'dan sipariş verdik, çok memnunuz.",
        rating: 4
      },
      {
        name: "Zeynep Tekin",
        role: "Kocaeli",
        text: "Genç odası için çalışma masası aldık. Rengi tam istediğimiz gibi antrasit gri. Kızım bayıldı, ders çalışmak artık daha keyifli.",
        rating: 5
      },
      {
        name: "Ahmet Yılmaz",
        role: "Eskişehir",
        text: "Oturma grubu kumaşı leke tutmuyor, çocuklu aileler için ideal. Eskişehir mağazanızdaki çalışanlar da çok ilgiliydi.",
        rating: 5
      },
      {
        name: "Burcu Öz",
        role: "Gaziantep",
        text: "Gardırop iç dizaynı çok kullanışlı, tüm eşyalarımızı topladı. Sürgülü kapakları çok kaliteli, takılma yapmıyor.",
        rating: 5
      },
      {
        name: "Mehmet Demir",
        role: "Trabzon",
        text: "Trabzon'a kadar sorunsuz ulaştı. Ranza sistemi çok sağlam, merdivenleri güvenli. Çocuklarım için içim çok rahat.",
        rating: 5
      },
      {
        name: "Fatma Şahin",
        role: "Adana",
        text: "Şifonyer ve komidin takımı yatak odamıza çok yakıştı. Çekmeceler frenli sistem, sessizce kapanıyor. Kalite tesadüf değildir.",
        rating: 4
      },
      {
        name: "Emre Koç",
        role: "Samsun",
        text: "Sallanan sandalye (berjer) bebeğimi uyuturken en büyük yardımcım oldu. Bel desteği harika, saatlerce oturabilirim.",
        rating: 5
      },
      {
        name: "Derya Aslan",
        role: "Kayseri",
        text: "Baza başlık seti aldık, depolama alanı çok geniş. Kışlık yorganları rahatça kaldırdık. Kumaş kaplaması çok şık duruyor.",
        rating: 5
      },
      {
        name: "Hakan Yıldız",
        role: "Mersin",
        text: "Çocuk odası halısı çok yumuşak ve makinede yıkanabiliyor olması harika. Mersin'den sipariş verdik, hızlı geldi.",
        rating: 5
      },
      {
        name: "Gamze Arslan",
        role: "Bodrum",
        text: "Yazlığımız için köşe koltuk takımı aldık. Hem yatak olabiliyor hem de çok rahat. Misafirlerimiz de çok beğendi.",
        rating: 5
      },
      {
        name: "Serkan Bulut",
        role: "Tekirdağ",
        text: "Oyuncak kutusu tekerlekli olduğu için çok pratik. Çocuğum odasını kendi topluyor artık. Ahşap kalitesi çok iyi.",
        rating: 4
      },
      {
        name: "Pınar Güneş",
        role: "Sakarya",
        text: "Çalışma sandalyesi bel ağrılarımı bitirdi. Ergonomik tasarım ve şıklık bir arada. Sakarya'ya 2 günde teslim edildi.",
        rating: 5
      },
      {
        name: "Oğuzhan Kurt",
        role: "İstanbul",
        text: "Beylikdüzü şubenizden komple ev paketi aldık. Müşteri temsilcisi çok yardımcı oldu, her şey birbiriyle uyumlu.",
        rating: 5
      },
      {
        name: "Esra Aydın",
        role: "Çanakkale",
        text: "Kitaplık modüler yapıda, istediğimiz gibi şekil verebildik. Salonumuzun en güzel köşesi oldu. Teşekkürler Mia Stilo.",
        rating: 5
      },
      {
        name: "Kemal Öztürk",
        role: "Denizli",
        text: "Yatak örtüsü ve nevresim takımları da mobilyalar kadar kaliteliymiş. Dokusu pamuklu ve terletmiyor.",
        rating: 5
      },
      {
        name: "Seda Polat",
        role: "Manisa",
        text: "Ürünlerin boyasının kokusuz ve sertifikalı olması bizim için çok önemliydi. Bebek odası için en doğru tercih.",
        rating: 5
      }
    ]
  },

  // 12. خبرنامه (Newsletter)
  newsletter: {
    title: "Mia Club'a Katılın",
    description: "Yeni koleksiyonlardan, özel indirimlerden ve tasarım ipuçlarından ilk sizin haberiniz olsun.",
    placeholder: "E-posta adresiniz",
    buttonText: "Abone Ol",
    disclaimer: "Abone olarak, gizlilik politikamızı kabul etmiş olursunuz."
  },

  // 13. پاپ آپ (Popup) - AI Assistant Invitation
  popup: {
    image: "https://2tru0w9j0bliunku.public.blob.vercel-storage.com/photos/Gemini_said_a_2k_202602121825.jpeg", 
    title: "Sanal İç Mimarınız Sizi Bekliyor! 🤖✨",
    description: "Merhaba! Ben Mia. Hayalinizdeki odayı, sevdiğiniz renkleri veya aradığınız tarzı bana anlatın, size en uygun ürünleri saniyeler içinde önereyim.",
    buttonText: "Hemen Tavsiye Al",
    buttonLink: "#ai-assistant", 
  },

  // 14. تماس
  contact: {
    title: "Bize Ulaşın",
    phone: "0212 854 00 04",
    email: "miastilo@hotmail.com",
    address: "Eskidji Baazar AVM – İstanbul",
    mapLink: "https://goo.gl/maps/xyz", 
  },

  // 15. فوتر و شبکه اجتماعی
  footer: {
    brandDescription: "Estetik, konfor ve kaliteyi bir araya getirerek yaşam alanlarınızı sanat eserine dönüştürüyoruz.",
    corporateTitle: "Kurumsal",
    customerServiceTitle: "Müşteri Hizmetleri",
    copyright: "© 2026 Mia Stilo. Tüm hakları saklıdır."
  },
  
  social: {
    instagram: "https://instagram.com/miastilohome",
    facebook: "https://facebook.com/miastilo",
    linkedin: "https://linkedin.com/company/miastilo",
    twitter: "https://twitter.com/miastilo",
  },
  
  // پست‌های اینستاگرام (تصاویر گرید)
  instagram: {
    posts: [
      {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000&auto=format&fit=crop",
        postLink: "https://www.instagram.com/miastilo",
        type: "image"
      },
      {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop",
        postLink: "https://www.instagram.com/miastilo",
        type: "video"
      },
      {
        id: 3,
        imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop",
        postLink: "https://www.instagram.com/miastilo",
        type: "image"
      },
      {
        id: 4,
        imageUrl: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1000&auto=format&fit=crop",
        postLink: "https://www.instagram.com/miastilo",
        type: "image"
      }
    ]
  },

  // 16. بخش‌های دسته‌بندی با اسلایدر محصولات (مثل miastilo.com)
  categorySliders: [
    {
      id: "bedroom",
      bannerLayout: "2x2" as const,
      sectionTitle: "En Beğenilen",
      sectionSubtitle: "Bu sezonun en çok tercih edilen koleksiyonları",
      banners: [
        {
          image: "https://ylhurpypupvnnbxiilqn.supabase.co/storage/v1/object/public/product-images/banners/yatak-odasi.png",
          link: "/shop?ana=YATAK+ODASI",
          label: "Yatak Odası",
          sublabel: "Koleksiyon"
        },
        {
          image: "https://ylhurpypupvnnbxiilqn.supabase.co/storage/v1/object/public/product-images/banners/yemek-odasi.png",
          link: "/shop?ana=YEMEK+ODASI",
          label: "Yemek Odası",
          sublabel: "Koleksiyon"
        },
        {
          image: "https://ylhurpypupvnnbxiilqn.supabase.co/storage/v1/object/public/product-images/banners/oturma-odasi.png",
          link: "/shop?ana=OTURMA+ODASI",
          label: "Oturma Odası",
          sublabel: "Koleksiyon"
        },
        {
          image: "https://ylhurpypupvnnbxiilqn.supabase.co/storage/v1/object/public/product-images/banners/baza-yatak.png",
          link: "/shop?ana=BAZA+%26+YATAK",
          label: "Baza & Yatak",
          sublabel: "Koleksiyon"
        },
      ],
      slider: {
        title: "Yatak Odası Ürünleri",
        subtitle: "Uyku kalitenizi artıran özel tasarımlar",
        filterCategory: "YATAK ODASI",
        seeAllLink: "/shop?ana=YATAK+ODASI",
      }
    },
    {
      id: "kids",
      bannerLayout: "3col" as const,
      sectionTitle: "Şık ve Fonksiyonel",
      sectionSubtitle: "Genç ve çocuklarınız için en özel tasarımlar",
      banners: [
        {
          image: "https://ylhurpypupvnnbxiilqn.supabase.co/storage/v1/object/public/product-images/banners/bebek-odasi.png",
          link: "/shop?ust=Bebek+Odas%C4%B1",
          label: "Bebek Odası",
          sublabel: "Yeni Gelenler"
        },
        {
          image: "https://ylhurpypupvnnbxiilqn.supabase.co/storage/v1/object/public/product-images/banners/cocuk-odasi.png",
          link: "/shop?ust=%C3%87ocuk+Odas%C4%B1",
          label: "Çocuk Odası",
          sublabel: "Popüler"
        },
        {
          image: "https://ylhurpypupvnnbxiilqn.supabase.co/storage/v1/object/public/product-images/banners/genc-odasi.png",
          link: "/shop?ana=GEN%C3%87+%26+%C3%87OCUK+ODASI",
          label: "Genç Odası",
          sublabel: "Koleksiyon"
        },
      ],
      slider: {
        title: "Genç & Çocuk Koleksiyonu",
        subtitle: "Büyüyen hayallere özel alanlar",
        filterCategory: "GENÇ & ÇOCUK ODASI",
        seeAllLink: "/shop?ana=GEN%C3%87+%26+%C3%87OCUK+ODASI",
      }
    }
  ],


  legal: {
    privacyPolicy: "/privacy",
    termsOfUse: "/terms",
    kvkk: "/kvkk",
    customerService: "/support", 
  }
};
