import React from 'react';
import { LANDING_CONFIG } from '../config/landingConfig';
import { ArrowRight, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenCheckout: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#FFF5F7] via-[#FAF5FF] to-white border-b border-[#E7E3FF] relative overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-pink-300/20 via-purple-300/20 to-amber-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        {/* Warm Joyful Photo of Mother with kids */}
        <div className="relative mx-auto max-w-lg mb-10">
          <div className="absolute -inset-4 bg-gradient-to-tr from-pink-400/30 via-rose-300/30 to-amber-300/30 rounded-[36px] blur-xl pointer-events-none" />
          
          <div className="relative rounded-3xl overflow-hidden aspect-[16/10] border-4 border-white shadow-2xl">
            <img
              src="/assets/images/hero_latina_mom_1794353621447.jpg"
              alt="Mamá latina sonriente abrazando a sus dos hijos con ternura y tranquilidad"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center justify-center gap-1.5 text-rose-300 mb-1">
                <Heart className="w-4 h-4 fill-rose-300" />
                <span className="text-xs font-black uppercase tracking-wider">Tu familia en primer lugar</span>
              </div>
              <p className="text-sm font-bold drop-shadow-sm">
                Recupera tiempo de calidad para lo que realmente importa.
              </p>
            </div>
          </div>
        </div>

        {/* Headline with vibrant gradient */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#28234B] tracking-tight leading-tight mb-4 text-balance">
          Tu mundo es grande. <br />
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
            Organizarlo puede ser más sencillo.
          </span>
        </h2>

        {/* Text */}
        <p className="text-base sm:text-lg text-[#68677F] max-w-2xl mx-auto font-medium leading-relaxed mb-8 text-balance">
          No tienes que recordarlo todo, ni resolverlo todo de memoria. Empieza a organizar tus compromisos, tu familia, tu trabajo y también tus propios momentos con Mamá 360.
        </p>

        {/* Central Logo Box */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="bg-white px-5 py-3 rounded-2xl border-2 border-purple-100 shadow-md inline-flex items-center gap-3">
            <img
              src="/assets/aistudio/Logotipo_Mam__360_con_coraz_n_f05d5014.png"
              alt="Logotipo Mamá 360"
              className="h-11 sm:h-13 w-auto object-contain"
            />
          </div>
          <span className="text-xs font-black text-[#6554C9] tracking-wider uppercase mt-2 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            Todo tu mundo en un solo lugar.
          </span>
        </div>

        {/* CTA Button Block with vibrant multi-color gradient */}
        <div className="max-w-md mx-auto">
          <button
            onClick={onOpenCheckout}
            className="w-full py-4 px-6 text-center text-lg sm:text-xl font-black text-white bg-gradient-to-r from-[#6554C9] via-[#EC4899] to-[#F59E0B] hover:from-[#5644BA] hover:to-[#D97706] rounded-2xl shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-pink-500/35 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Quiero mi Mini Aplicación</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
          
          <div className="mt-3.5 flex items-center justify-center gap-3 text-xs text-[#68677F] font-bold">
            <span className="text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">{LANDING_CONFIG.PRICE_TEXT} Pago único</span>
            <span>·</span>
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Garantía de {LANDING_CONFIG.GUARANTEE_DAYS} días</span>
            <span>·</span>
            <span className="text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full">Acceso de por vida</span>
          </div>
        </div>

      </div>
    </section>
  );
};
