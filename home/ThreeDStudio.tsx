import React, { useState } from 'react';
import { X, Sparkles, Move, RotateCcw, Check, RefreshCw } from 'lucide-react';

interface ThreeDStudioProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'tr' | 'en' | 'fr' | 'de';
}

export const ThreeDStudio: React.FC<ThreeDStudioProps> = ({ isOpen, onClose, lang }) => {
  const [selectedRoom, setSelectedRoom] = useState<'living' | 'bedroom' | 'dining'>('living');
  const [selectedFabric, setSelectedFabric] = useState<string>('boucle-cream');
  const [selectedWood, setSelectedWood] = useState<string>('raw-oak');

  if (!isOpen) return null;

  const fabrics = [
    { id: 'boucle-cream', nameTr: 'Lüks Krem Buklet', nameEn: 'Luxury Cream Bouclé', color: '#F5F2EB' },
    { id: 'linen-beige', nameTr: 'Belçika Keteni Bej', nameEn: 'Belgian Linen Beige', color: '#E3D7C5' },
    { id: 'velvet-olive', nameTr: 'Kadife Zeytin Yeşili', nameEn: 'Velvet Olive Green', color: '#5B6838' },
    { id: 'leather-cognac', nameTr: 'Hakiki Deri Konyak', nameEn: 'Genuine Leather Cognac', color: '#8C5332' },
  ];

  const woods = [
    { id: 'raw-oak', nameTr: 'Ham Doğal Meşe', nameEn: 'Raw Natural Oak', color: '#C8B293' },
    { id: 'smoked-walnut', nameTr: 'Füme Ceviz Dokusu', nameEn: 'Smoked Walnut', color: '#4A3B32' },
    { id: 'travertine-marble', nameTr: 'İtalyan Traverten Mermer', nameEn: 'Italian Travertine Stone', color: '#E8DEC8' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 lg:p-8 animate-fadeIn">
      <div className="w-full max-w-7xl h-[90vh] bg-[#181818] border border-[#252525] rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#A7C239] text-white hover:text-black flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 3D Viewport Simulation */}
        <div className="flex-1 bg-[#101010] relative flex items-center justify-center overflow-hidden group">
          <img 
            src={
              selectedRoom === 'living' 
                ? '/images/home/living_collection_1785663351556.jpg' 
                : selectedRoom === 'bedroom' 
                ? '/images/home/bedroom_collection_1785663320319.jpg' 
                : '/images/home/dining_collection_1785663338182.jpg'
            } 
            alt="3D Spatial Studio View"
            className="w-full h-full object-cover transition-all duration-700 brightness-95 group-hover:scale-105"
          />

          {/* Interactive 3D Control Hints Overlay */}
          <div className="absolute top-6 left-6 z-10 bg-black/60 backdrop-blur px-4 py-2 rounded-full border border-white/10 text-xs text-white font-mono flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#A7C239] animate-pulse" />
            <span>3D CANLI MOBİLYA VE DOKU STÜDYOSU</span>
          </div>

          <div className="absolute bottom-6 left-6 z-10 flex gap-2">
            <button className="bg-black/60 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur border border-white/10 transition-colors cursor-pointer">
              <RotateCcw className="w-4 h-4" />
            </button>
            <button className="bg-black/60 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur border border-white/10 transition-colors cursor-pointer">
              <Move className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Customization Panel */}
        <div className="w-full lg:w-96 bg-[#151515] border-l border-[#222] p-6 flex flex-col justify-between overflow-y-auto text-left">
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-mono text-[#A7C239] tracking-[0.2em] uppercase block mb-1">
                MIA STILO INTERACTIVE STUDIO
              </span>
              <h3 className="text-xl font-serif text-white font-medium">3D Mekan Özelleştirici</h3>
              <p className="text-xs text-gray-400 font-light mt-1">
                Doku, kumaş ve malzeme combinations simülasyonu.
              </p>
            </div>

            {/* Room Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-wider text-gray-300 uppercase block">
                Oda Konsepti
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'living', label: 'Oturma' },
                  { id: 'bedroom', label: 'Yatak' },
                  { id: 'dining', label: 'Yemek' },
                ].map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setSelectedRoom(r.id as any)}
                    className={`py-2 text-xs font-semibold rounded transition-all cursor-pointer ${
                      selectedRoom === r.id 
                        ? 'bg-[#A7C239] text-black font-bold' 
                        : 'bg-[#222] text-gray-400 hover:bg-[#333]'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Fabric Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-wider text-gray-300 uppercase block">
                Döşemelik Kumaş Kartelası
              </label>
              <div className="space-y-2">
                {fabrics.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFabric(f.id)}
                    className={`w-full p-2.5 rounded border transition-all flex items-center justify-between cursor-pointer ${
                      selectedFabric === f.id 
                        ? 'border-[#A7C239] bg-[#A7C239]/10 text-white' 
                        : 'border-[#252525] bg-[#1a1a1a] text-gray-400 hover:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span 
                        className="w-5 h-5 rounded-full border border-white/20 shrink-0" 
                        style={{ backgroundColor: f.color }}
                      />
                      <span className="text-xs font-medium">{lang === 'tr' ? f.nameTr : f.nameEn}</span>
                    </div>
                    {selectedFabric === f.id && <Check className="w-4 h-4 text-[#A7C239]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Wood Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-wider text-gray-300 uppercase block">
                Ahşap & Mermer Cilası
              </label>
              <div className="space-y-2">
                {woods.map((w) => (
                  <button
                    key={w.id}
                    onClick={() => setSelectedWood(w.id)}
                    className={`w-full p-2.5 rounded border transition-all flex items-center justify-between cursor-pointer ${
                      selectedWood === w.id 
                        ? 'border-[#A7C239] bg-[#A7C239]/10 text-white' 
                        : 'border-[#252525] bg-[#1a1a1a] text-gray-400 hover:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span 
                        className="w-5 h-5 rounded border border-white/20 shrink-0" 
                        style={{ backgroundColor: w.color }}
                      />
                      <span className="text-xs font-medium">{lang === 'tr' ? w.nameTr : w.nameEn}</span>
                    </div>
                    {selectedWood === w.id && <Check className="w-4 h-4 text-[#A7C239]" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#222] space-y-3">
            <button
              onClick={onClose}
              className="w-full py-3.5 bg-[#A7C239] text-black font-bold text-xs tracking-widest uppercase hover:bg-white transition-colors rounded shadow-lg cursor-pointer"
            >
              Tasarımı Kaydet & Randevu Al
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ThreeDStudio;
