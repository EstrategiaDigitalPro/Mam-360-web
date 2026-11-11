import React from 'react';
import { DollarSign, Share2, Sparkles, TrendingUp, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { LANDING_CONFIG } from '../config/landingConfig';

interface IncomeOpportunitySectionProps {
  onOpenCheckout: () => void;
}

export const IncomeOpportunitySection: React.FC<IncomeOpportunitySectionProps> = ({ onOpenCheckout }) => {
  const steps = [
    {
      step: "01",
      title: "Adquiere Mamá 360",
      desc: "Accede a la mini aplicación por el pago único de US$9.97 y experimenta sus beneficios en tu vida.",
      badge: "bg-rose-500 text-white"
    },
    {
      step: "02",
      title: "Activa tu afiliación",
      desc: "Solicita tu registro en el programa oficial de afiliados en Hotmart de manera rápida y guiada.",
      badge: "bg-purple-500 text-white"
    },
    {
      step: "03",
      title: "Comparte tu enlace",
      desc: "Recomienda Mamá 360 a amigas, mamás del colegio, o en tus redes sociales con tu link personal.",
      badge: "bg-blue-500 text-white"
    },
    {
      step: "04",
      title: "Gana 50% de comisión",
      desc: "Por cada venta atribuida a tu enlace, recibes el 50% de comisión directa en tu cuenta de Hotmart.",
      badge: "bg-emerald-500 text-white"
    }
  ];

  return (
    <section id="afiliadas" className="py-16 lg:py-24 bg-gradient-to-br from-[#20184D] via-[#342B72] to-[#120D2C] text-white relative overflow-hidden">
      {/* Radiant colorful glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/25 via-purple-500/25 to-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-400/20 via-emerald-400/20 to-purple-500/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-black text-amber-300 bg-amber-400/15 border border-amber-300/30 px-4 py-1.5 rounded-full mb-3 backdrop-blur-xs shadow-xs">
            <TrendingUp className="w-3.5 h-3.5 text-amber-300" />
            <span>Diferenciador Comercial Exclusivo</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 text-balance">
            ¡Mamá 360 también puede convertirse en una <br />
            <span className="bg-gradient-to-r from-amber-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
              oportunidad para generar ingresos!
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-purple-200 font-semibold leading-relaxed text-balance">
            Comparte la mini aplicación y gana el <strong className="text-amber-300 font-black underline decoration-amber-400/60">50% de comisión</strong> por cada venta que realices.
          </p>
        </div>

        {/* Big Commission Highlight Banner with glowing multi-color styling */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#6554C9]/60 via-[#EC4899]/40 to-[#F59E0B]/50 border-3 border-amber-300/40 rounded-3xl p-6 sm:p-8 text-center backdrop-blur-md mb-12 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="text-center sm:text-left">
              <span className="text-xs uppercase font-black tracking-widest text-amber-300 block">
                Comisión Directa Hotmart
              </span>
              <span className="text-4xl sm:text-6xl font-black font-display text-white tracking-tight drop-shadow-md">
                50% DE COMISIÓN
              </span>
              <span className="text-sm font-bold text-amber-200 block mt-1">
                Por cada venta concretada con tu enlace personal
              </span>
            </div>
            
            <div className="h-14 w-px bg-white/25 hidden sm:block" />

            <div className="bg-white/15 border-2 border-white/30 px-6 py-3.5 rounded-2xl text-center shadow-inner">
              <span className="text-xs text-amber-300 uppercase font-black tracking-wider block">
                Fórmula Simple
              </span>
              <span className="text-base sm:text-lg font-black text-white block mt-0.5">
                Compra, utiliza y comparte Mamá 360
              </span>
            </div>
          </div>
        </div>

        {/* Content with Entrepreneur photo and 4 Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          
          {/* Photo Column: Entrepreneur mom (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 bg-gradient-to-tr from-cyan-400/30 via-pink-500/30 to-amber-400/30 rounded-3xl blur-lg pointer-events-none" />
              
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border-3 border-white/30 shadow-2xl">
                <img
                  src="/src/assets/images/entrepreneur_latina_mom_1794353625695.jpg"
                  alt="Madre emprendedora latina trabajando feliz desde su laptop y celular en casa"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-black text-amber-300 uppercase tracking-wide flex items-center gap-1">
                    <span>💼</span> Mamás que inspiran y emprenden
                  </span>
                  <p className="text-sm font-bold text-white leading-snug mt-1">
                    "Organizo mi hogar y al mismo tiempo genero ingresos recomendando una herramienta útil."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Steps Column (7 cols) with colorful step cards */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="mb-6 text-base text-purple-100 font-medium leading-relaxed space-y-3">
              <p>
                Al adquirir Mamá 360 también obtienes el derecho de comercializar la mini aplicación y participar en su <strong>programa de afiliados oficial en Hotmart</strong>.
              </p>
              <p className="text-sm text-purple-200">
                Podrás recomendarla a otras mamás, emprendedoras, profesionales y personas que necesiten organizar mejor su vida. Por cada venta efectivamente atribuida a tu enlace personal de afiliada, podrás recibir una <strong className="text-amber-300">comisión del 50%</strong>.
              </p>
            </div>

            {/* 4 Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {steps.map((s) => (
                <div 
                  key={s.step}
                  className="bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-amber-300/60 rounded-2xl p-4 transition-all duration-200"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs shadow-xs ${s.badge}`}>
                      {s.step}
                    </span>
                    <h4 className="text-sm font-extrabold text-white">{s.title}</h4>
                  </div>
                  <p className="text-xs text-purple-200 leading-relaxed font-medium">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button for Affiliate Section */}
            <div className="mt-6">
              <button
                onClick={onOpenCheckout}
                className="w-full sm:w-auto py-3.5 px-7 bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500 hover:from-amber-300 hover:to-purple-400 text-white font-black text-sm rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <span>QUIERO MAMÁ 360 Y ACCEDER AL 50% DE COMISIÓN</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Hotmart clarification note */}
            <div className="mt-4 text-[11px] text-purple-200/90 bg-black/30 rounded-xl p-3 border border-white/15">
              * La afiliación, atribución y liquidación de comisiones corresponden a la configuración y normativas oficiales de Hotmart.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
