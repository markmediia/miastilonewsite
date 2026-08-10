import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#050505] border-t border-white/5 pt-20 pb-8 text-sm overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#a7c139] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#a7c139] opacity-[0.02] blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <div className="text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-[#a7c139] uppercase">
                MIA STILO
              </div>
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed font-light text-base pr-4">
              Estetik, konfor ve kaliteyi bir araya getirerek yaşam alanlarınızı sanat eserine dönüştürüyoruz. Geleceğin odaları burada tasarlanıyor.
            </p>
            
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: siteConfig.social.instagram },
                { icon: Facebook, href: siteConfig.social.facebook },
                { icon: Linkedin, href: siteConfig.social.linkedin },
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  className="group relative w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 overflow-hidden transition-all duration-300 hover:border-[#a7c139]/50 hover:shadow-[0_0_20px_rgba(167,193,57,0.2)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#a7c139]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <social.icon size={20} className="relative z-10 group-hover:text-[#a7c139] group-hover:scale-110 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-white font-medium text-lg mb-6 tracking-wide">Kurumsal</h3>
            <ul className="space-y-4">
              {[
                { label: 'Hakkımızda', href: '#' },
                { label: 'Sürdürülebilirlik', href: '#' },
                { label: 'Kariyer', href: '#' },
                { label: 'Mağazalarımız', href: siteConfig.header.storesLink },
                { label: 'Blog', href: siteConfig.header.blogLink },
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="group inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#a7c139] mr-0 group-hover:mr-2 transition-all duration-300 overflow-hidden" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-medium text-lg mb-6 tracking-wide">Destek</h3>
            <ul className="space-y-4">
              {[
                { label: 'Sipariş Takibi', href: siteConfig.legal.customerService },
                { label: 'İade ve Değişim', href: siteConfig.legal.customerService },
                { label: 'Montaj Hizmeti', href: siteConfig.legal.customerService },
                { label: 'SSS', href: siteConfig.legal.customerService },
                { label: 'İletişim', href: siteConfig.legal.customerService },
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="group inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#a7c139] mr-0 group-hover:mr-2 transition-all duration-300 overflow-hidden" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-medium text-lg mb-6 tracking-wide">İletişim</h3>
            <ul className="space-y-4 text-gray-400 mb-8 font-light">
              <li className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#a7c139]/50 group-hover:bg-[#a7c139]/10 transition-all duration-300 shrink-0">
                  <MapPin size={18} className="text-[#a7c139]" />
                </div>
                <span className="mt-2 group-hover:text-white transition-colors duration-300">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#a7c139]/50 group-hover:bg-[#a7c139]/10 transition-all duration-300 shrink-0">
                  <Phone size={18} className="text-[#a7c139]" />
                </div>
                <span className="group-hover:text-white transition-colors duration-300">{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#a7c139]/50 group-hover:bg-[#a7c139]/10 transition-all duration-300 shrink-0">
                  <Mail size={18} className="text-[#a7c139]" />
                </div>
                <span className="group-hover:text-white transition-colors duration-300">{siteConfig.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-light tracking-wide">
          <div className="flex items-center gap-2">
            © {new Date().getFullYear()} <span className="text-[#a7c139] font-medium">Mia Stilo</span>. Tüm hakları saklıdır.
          </div>
          <div className="flex gap-8">
            <a href={siteConfig.legal.privacyPolicy} className="hover:text-[#a7c139] transition-colors duration-300">Gizlilik Politikası</a>
            <a href={siteConfig.legal.termsOfUse} className="hover:text-[#a7c139] transition-colors duration-300">Kullanım Koşulları</a>
            <a href={siteConfig.legal.kvkk} className="hover:text-[#a7c139] transition-colors duration-300">KVKK Aydınlatma Metni</a>
          </div>
        </div>
      </div>
    </footer>
  );
};