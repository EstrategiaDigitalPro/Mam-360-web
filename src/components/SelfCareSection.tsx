import React from 'react';
import { Heart, Coffee, Sun, Smile, Sparkles } from 'lucide-react';

export const SelfCareSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#FFFBEB]/50 via-[#FFF1F2]/60 to-[#FAF5FF] border-b border-[#E7E3FF] relative overflow-hidden">
      {/* Warm sunny ambient blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-300/25 via-pink-300/20 to-purple-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Narrative (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 text-xs font-black text-rose-700 bg-rose-100 border border-rose-200 px-4 py-1.5 rounded-full mb-3 shadow-2xs">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>Autocuidado y Bienestar</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#28234B] tracking-tight leading-tight mb-4 text-balance">
              Mamá, tú también eres <br />
              <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
                parte de tu agenda.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#28234B]/85 font-semibold leading-relaxed mb-6">
              Organizar tu vida también significa hacer espacio para ti. En <strong>Mamá 360</strong> puedes incluir tus propias actividades, citas, intereses y momentos de descanso que tantas veces se posponen.
            </p>

            {/* Micro value badges with vibrant colors */}
            <div className="space-y-3 w-full">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200/80 rounded-2xl p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-purple-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Coffee className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-purple-950">
                  30 minutos de café o té caliente en calma y sin prisas
                </span>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200/80 rounded-2xl p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Sun className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-amber-950">
                  Tus chequeos de salud, ejercicio favorito y proyectos propios
                </span>
              </div>

              <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200/80 rounded-2xl p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Smile className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-rose-950">
                  Estar bien contigo es el primer paso para cuidar de los tuyos
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Serene Mom enjoying coffee photo (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-300/40 via-rose-300/30 to-purple-300/30 rounded-[36px] blur-xl pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border-3 border-amber-200 shadow-2xl">
                <img
                  src="/src/assets/images/mom_relaxing_coffee_1794354773321.jpg"
                  alt="Mamá latina sonriente y relajada disfrutando de una taza de café caliente junto a la ventana"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-bold leading-snug drop-shadow-sm">
                    "Agendar tiempo para mí dejó de hacerme sentir culpable."
                  </p>
                  <span className="text-[11px] text-amber-300 font-extrabold flex items-center gap-1 mt-0.5">
                    <span>✨</span> Módulo Mi Vida · Mamá 360
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
