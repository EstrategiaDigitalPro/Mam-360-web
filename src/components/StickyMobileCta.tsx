import React from 'react';
import { LANDING_CONFIG } from '../config/landingConfig';
import { ArrowUpRight } from 'lucide-react';

interface StickyMobileCtaProps {
  onOpenCheckout: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onOpenCheckout }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t-2 border-purple-200 px-3 py-2.5 shadow-2xl">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <div className="flex flex-col shrink-0">
          <span className="text-[9px] text-purple-700 uppercase tracking-tight font-extrabold leading-tight">
            Precio lanzamiento
          </span>
          <span className="text-base sm:text-lg font-black font-display text-[#342B72] leading-none">
            {LANDING_CONFIG.PRICE_TEXT}
          </span>
        </div>

        <button
          onClick={onOpenCheckout}
          className="flex-1 min-w-0 py-2.5 px-3 text-[11px] sm:text-xs font-black text-white bg-gradient-to-r from-[#6554C9] via-[#EC4899] to-[#F59E0B] active:scale-98 rounded-xl shadow-md shadow-pink-500/25 flex items-center justify-center gap-1 whitespace-nowrap cursor-pointer"
        >
          <span className="truncate">{LANDING_CONFIG.CTA_TEXT}</span>
          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
        </button>
      </div>
    </div>
  );
};
