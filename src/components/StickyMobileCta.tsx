import React from 'react';
import { LANDING_CONFIG } from '../config/landingConfig';
import { ArrowUpRight } from 'lucide-react';

interface StickyMobileCtaProps {
  onOpenCheckout: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onOpenCheckout }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t-2 border-purple-200 px-4 py-2.5 shadow-2xl">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[10px] text-purple-700 uppercase tracking-wider font-extrabold">
            {LANDING_CONFIG.PAYMENT_TYPE}
          </span>
          <span className="text-lg font-black font-display text-[#342B72] leading-none">
            {LANDING_CONFIG.PRICE_TEXT}
          </span>
        </div>

        <button
          onClick={onOpenCheckout}
          className="flex-1 py-2.5 px-4 text-xs font-black text-white bg-gradient-to-r from-[#6554C9] via-[#EC4899] to-[#F59E0B] active:scale-98 rounded-xl shadow-md shadow-pink-500/25 flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
        >
          <span>{LANDING_CONFIG.CTA_TEXT}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
