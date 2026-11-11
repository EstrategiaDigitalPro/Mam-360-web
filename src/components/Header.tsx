import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { LANDING_CONFIG } from '../config/landingConfig';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenCheckout: () => void;
  onOpenConfigGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout, onOpenConfigGuide }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E7E3FF] transition-all">
      {/* Top multi-color joyful micro-banner */}
      <div className="bg-gradient-to-r from-[#6554C9] via-[#EC4899] to-[#F59E0B] text-white text-xs py-2 px-4 text-center font-bold tracking-wide shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span>✨ ¡Oferta Especial! Acceso completo de por vida por solo <strong className="underline decoration-white/80 font-black text-amber-200 text-sm ml-1">{LANDING_CONFIG.PRICE_TEXT}</strong></span>
          <span className="opacity-80">·</span>
          <span className="hidden sm:inline bg-white/20 px-2 py-0.5 rounded-full text-[11px]">🛡️ 7 Días de Garantía 100% Protegida</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single Brand element */}
          <a href="#" className="whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6554C9] rounded-lg">
            <BrandLogo />
          </a>

          {/* Zone 2: 4-5 clean single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-bold text-[#28234B]/80">
            <a 
              href="#problema" 
              className="whitespace-nowrap shrink-0 hover:text-[#EC4899] transition-colors py-1"
            >
              El Reto
            </a>
            <a 
              href="#modulos" 
              className="whitespace-nowrap shrink-0 hover:text-[#6554C9] transition-colors py-1"
            >
              Módulos 360
            </a>
            <a 
              href="#katy" 
              className="whitespace-nowrap shrink-0 hover:text-[#8B5CF6] transition-colors py-1"
            >
              Katy Asistente
            </a>
            <a 
              href="#bonos" 
              className="whitespace-nowrap shrink-0 hover:text-[#F59E0B] transition-colors py-1"
            >
              Regalos Especiales
            </a>
            <a 
              href="#afiliadas" 
              className="whitespace-nowrap shrink-0 hover:text-[#10B981] transition-colors py-1 text-[#6554C9] font-extrabold flex items-center gap-1"
            >
              <span>Comisión 50%</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.2 rounded-full">HOT</span>
            </a>
            <a 
              href="#preguntas" 
              className="whitespace-nowrap shrink-0 hover:text-[#6554C9] transition-colors py-1"
            >
              Preguntas
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Owner config helper button */}
            <button
              onClick={onOpenConfigGuide}
              title="Ajustar enlace de Hotmart o ver instrucciones"
              className="hidden lg:inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold text-[#6554C9] bg-purple-50 hover:bg-purple-100 rounded-xl border border-purple-200 transition-colors"
            >
              ⚙️ Enlace Hotmart
            </button>

            <button
              onClick={onOpenCheckout}
              className="px-5 py-2.5 text-xs sm:text-sm font-black text-white bg-gradient-to-r from-[#6554C9] via-[#8B5CF6] to-[#EC4899] hover:from-[#5644BA] hover:to-[#DB2777] rounded-xl shadow-md shadow-purple-500/25 hover:shadow-lg hover:shadow-pink-500/35 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <span>{LANDING_CONFIG.CTA_TEXT}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#28234B] hover:text-[#6554C9] rounded-lg hover:bg-[#F1EFFF] transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E7E3FF] px-6 py-5 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-4 text-base font-semibold text-[#28234B]">
            <a 
              href="#problema" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#6554C9]"
            >
              El Reto de Mamá
            </a>
            <a 
              href="#modulos" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#6554C9]"
            >
              Módulos de la Aplicación
            </a>
            <a 
              href="#katy" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#6554C9]"
            >
              Katy, tu Asistente Virtual
            </a>
            <a 
              href="#cocina" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#6554C9]"
            >
              Mi Cocina
            </a>
            <a 
              href="#bonos" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#6554C9]"
            >
              2 Bonos de Regalo
            </a>
            <a 
              href="#afiliadas" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[#6554C9] flex items-center justify-between"
            >
              <span>Oportunidad de Afiliadas (50%)</span>
              <span className="text-xs bg-[#E7E3FF] text-[#342B72] px-2 py-0.5 rounded-full font-bold">50%</span>
            </a>
            <a 
              href="#preguntas" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#6554C9]"
            >
              Preguntas Frecuentes
            </a>

            <div className="pt-4 border-t border-[#E7E3FF] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCheckout();
                }}
                className="w-full py-3 text-center text-sm font-bold text-white bg-gradient-to-r from-[#6554C9] to-[#527BDC] rounded-xl shadow-md"
              >
                {LANDING_CONFIG.CTA_TEXT} — {LANDING_CONFIG.PRICE_TEXT}
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConfigGuide();
                }}
                className="w-full py-2 text-center text-xs font-semibold text-[#6554C9] bg-[#F1EFFF] rounded-lg"
              >
                ⚙️ Configurar Enlace Hotmart
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
