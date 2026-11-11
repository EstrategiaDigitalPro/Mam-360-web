import React from 'react';
import { LANDING_CONFIG } from '../config/landingConfig';
import { 
  Users, 
  Home, 
  Briefcase, 
  Heart, 
  ShieldCheck, 
  Lock, 
  Infinity as InfinityIcon, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Smile,
  Star
} from 'lucide-react';

interface HeroSectionProps {
  onOpenCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout }) => {
  const categoryPills = [
    { 
      label: "Familia", 
      icon: <Users className="w-4 h-4 text-rose-600" />, 
      bg: "bg-rose-50 hover:bg-rose-100/80 border-rose-200 text-rose-800 shadow-rose-100" 
    },
    { 
      label: "Hogar", 
      icon: <Home className="w-4 h-4 text-amber-600" />, 
      bg: "bg-amber-50 hover:bg-amber-100/80 border-amber-200 text-amber-900 shadow-amber-100" 
    },
    { 
      label: "Trabajo", 
      icon: <Briefcase className="w-4 h-4 text-blue-600" />, 
      bg: "bg-blue-50 hover:bg-blue-100/80 border-blue-200 text-blue-900 shadow-blue-100" 
    },
    { 
      label: "Vida personal", 
      icon: <Heart className="w-4 h-4 text-fuchsia-600 fill-fuchsia-600" />, 
      bg: "bg-fuchsia-50 hover:bg-fuchsia-100/80 border-fuchsia-200 text-fuchsia-900 shadow-fuchsia-100" 
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF5F5] via-[#FAF5FF] to-white pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-[#E7E3FF]">
      {/* Vibrant glowing background orbs */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-gradient-to-br from-[#EC4899]/20 via-[#8B5CF6]/20 to-[#3B82F6]/20 rounded-full blur-3xl pointer-events-none -mt-16" />
      <div className="absolute bottom-0 left-5 w-96 h-96 bg-gradient-to-tr from-[#F59E0B]/20 via-[#10B981]/15 to-[#6554C9]/20 rounded-full blur-3xl pointer-events-none -mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Visual storytelling and main conversion elements (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Official Logo Display + Cheerful Sparkle Badge */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <div className="bg-white/95 px-4 py-2 rounded-2xl border-2 border-purple-100 shadow-sm inline-flex items-center gap-3">
                <img
                  src="/assets/aistudio/Logotipo_Mam__360_con_coraz_n_f05d5014.png"
                  alt="Mamá 360 Logo Oficial"
                  className="h-11 sm:h-13 w-auto object-contain"
                />
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-black text-rose-700 bg-rose-50 border border-rose-200 px-3.5 py-2 rounded-xl shadow-2xs">
                <span className="text-base">🌸</span>
                <span>¡Tu vida en orden y con alegría!</span>
              </div>
            </div>

            {/* Main Headline with vibrant gradient */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#28234B] tracking-tight leading-[1.12] mb-4 text-balance">
              Tu vida tiene muchos mundos. <br />
              <span className="bg-gradient-to-r from-[#6554C9] via-[#EC4899] to-[#F59E0B] bg-clip-text text-transparent">
                Organízalos desde un solo lugar.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#28234B]/85 font-semibold leading-relaxed mb-6 max-w-2xl text-balance">
              Familia, hijos, trabajo, hogar y tiempo personal. <strong>Mamá 360</strong> te ayuda a organizar todo lo que importa, de una manera sencilla, alegre, visual y sin estrés.
            </p>

            {/* 4 Interactive Category Pills with Rich Colors */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full mb-7">
              {categoryPills.map((pill) => (
                <div
                  key={pill.label}
                  className={`border-2 rounded-2xl p-2.5 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs hover:scale-102 ${pill.bg}`}
                >
                  <span className="text-sm">{pill.icon}</span>
                  <span className="text-xs font-black whitespace-nowrap">
                    {pill.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Vibrant Visible Offer Box */}
            <div className="w-full bg-gradient-to-br from-[#342B72] via-[#6554C9] to-[#E11D48] text-white rounded-3xl p-6 sm:p-7 shadow-2xl shadow-purple-900/25 mb-5 relative overflow-hidden border-2 border-white/20">
              
              {/* Decorative top right burst */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full blur-2xl opacity-40 pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/20 pb-5 mb-5 relative">
                <div>
                  <span className="text-xs uppercase font-black tracking-widest text-amber-300 flex items-center gap-1.5">
                    <span>✨</span> OFERTA ESPECIAL DE LANZAMIENTO
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-5xl sm:text-6xl font-black font-display tracking-tight text-white drop-shadow-md">
                      {LANDING_CONFIG.PRICE_TEXT}
                    </span>
                    <span className="text-xs font-extrabold text-amber-900 bg-amber-300 px-3 py-1 rounded-full shadow-xs">
                      {LANDING_CONFIG.PAYMENT_TYPE}
                    </span>
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-purple-100 font-bold space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>Acceso de por vida garantizado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>2 eBooks de regalo familiar incluidos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>Garantía incondicional de 7 días</span>
                  </div>
                </div>
              </div>

              {/* Main CTA Button with energetic gradient and bounce hover */}
              <button
                onClick={onOpenCheckout}
                className="w-full py-4 px-6 text-center text-base sm:text-lg font-black text-[#28234B] bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 hover:from-amber-200 hover:to-yellow-100 rounded-2xl shadow-xl hover:shadow-2xl active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <span>Quiero mi Mini Aplicación</span>
                <ArrowRight className="w-5 h-5 text-[#6554C9] group-hover:translate-x-1.5 transition-transform" />
              </button>

              {/* 3 Trust Markers under CTA */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/20 text-center text-[11px] sm:text-xs text-purple-100 font-semibold">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1">
                  <InfinityIcon className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Acceso de por vida</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 border-x border-white/20">
                  <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Garantía de 7 días</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1">
                  <Lock className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Compra 100% segura</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Joyful Mother and Kids Image with Colorful Frame (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Vibrant colorful gradient backdrop halo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#EC4899]/30 via-[#F59E0B]/30 to-[#6554C9]/30 rounded-[36px] blur-xl pointer-events-none" />

              <div className="relative bg-white rounded-3xl p-3.5 shadow-2xl border-3 border-purple-200/80">
                
                {/* Mom and kids joyful photo */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/12]">
                  <img
                    src="/src/assets/images/hero_latina_mom_1794353621447.jpg"
                    alt="Mamá latina alegre con sus hijos compartiendo en casa con Mamá 360"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs sm:text-sm font-bold drop-shadow-sm leading-snug">
                      "Pasé de la saturación mental a disfrutar cada momento con mis hijos."
                    </p>
                    <span className="text-[11px] text-amber-300 font-bold">
                      Mamá de 2 hijos y emprendedora
                    </span>
                  </div>
                </div>

                {/* Overlaid App Preview Card with colorful background */}
                <div className="mt-3 bg-gradient-to-r from-purple-50 via-pink-50 to-amber-50 border border-purple-200 rounded-2xl p-3.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="h-10 px-2.5 rounded-xl bg-white border border-[#E7E3FF] flex items-center justify-center shadow-xs shrink-0">
                      <img
                        src="/assets/aistudio/Logotipo_Mam__360_con_coraz_n_f05d5014.png"
                        alt="Logo Mamá 360"
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-[#28234B]">Mamá 360 Mini App</h4>
                      <p className="text-[11px] text-[#6554C9] font-bold">9 módulos listos en tu celular</p>
                    </div>
                  </div>
                  <a
                    href="#modulos"
                    className="text-xs font-black text-white bg-gradient-to-r from-[#6554C9] to-[#EC4899] px-3 py-1.5 rounded-xl shadow-xs hover:shadow-md transition-all whitespace-nowrap"
                  >
                    Ver módulos ↓
                  </a>
                </div>

              </div>

              {/* Floating Joyful Stickers */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-400 to-orange-400 text-white font-black text-xs px-3.5 py-1.5 rounded-full shadow-lg border-2 border-white flex items-center gap-1 -rotate-3">
                <span>☀️</span>
                <span>¡Paz mental diaria!</span>
              </div>

              <div className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-4 bg-white border-2 border-pink-200 shadow-xl rounded-2xl p-3 flex items-center gap-2.5">
                <span className="text-2xl">💖</span>
                <div>
                  <div className="flex items-center gap-0.5 text-amber-500 text-xs font-bold">
                    {"★★★★★"}
                  </div>
                  <span className="text-[11px] font-black text-[#28234B]">Hecha para mamás reales</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
