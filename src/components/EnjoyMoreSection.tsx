import React from 'react';
import { Heart, Smile, Sparkles, Clock, Gamepad2, Sun, Coffee } from 'lucide-react';

export const EnjoyMoreSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#FAF5FF] via-pink-50/25 to-white border-b border-[#E7E3FF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Emotional Gaming photo with kids (6 cols) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              <div className="absolute -inset-4 bg-gradient-to-tr from-rose-300/30 via-purple-300/30 to-sky-300/30 rounded-[36px] blur-xl pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] border-3 border-purple-200 shadow-2xl">
                <img
                  src="/assets/images/mom_gaming_kids_1794353624771.jpg"
                  alt="Mamá latina riendo y jugando videojuegos con sus dos hijos en el suelo de la sala"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Subtle scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                    <span className="text-xs font-bold tracking-wide uppercase text-amber-300">
                      Momentos que valen oro
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-bold drop-shadow-sm leading-snug">
                    Tardes de risas, juegos y conexión real con tus hijos.
                  </p>
                </div>
              </div>

              {/* Emotional quote pill */}
              <div className="mt-4 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-4 flex items-center gap-3 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#6554C9] to-[#EC4899] text-white flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
                  ✨
                </div>
                <p className="text-xs sm:text-sm text-[#28234B] font-bold">
                  Menos tiempo preocupándote por qué olvidaste, más tiempo presente con tu familia.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Copy (6 cols) */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 text-xs font-black text-purple-700 bg-purple-100 border border-purple-200 px-4 py-1.5 rounded-full mb-3 shadow-2xs">
              <Smile className="w-3.5 h-3.5 text-purple-600" />
              <span>Tiempo de Calidad en Familia</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#28234B] tracking-tight leading-tight mb-6 text-balance">
              Organizarte mejor también significa <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
                disfrutar más.
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#28234B]/85 font-medium leading-relaxed">
              <p>
                Cuando tienes tus compromisos mejor organizados, puedes dedicar más atención a esos pequeños momentos que se convierten en grandes recuerdos.
              </p>
              <p className="text-[#68677F] text-base leading-relaxed">
                <strong>Mamá 360</strong> no pretende que hagas más cosas ni que te exijas ser una "supermamá" perfecta. Quiere ayudarte a organizar mejor las que ya forman parte de tu vida para que recuperes tiempo para ti y para los tuyos.
              </p>
            </div>

            {/* 3 Pillars strip with colorful badges */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-100/70 border-2 border-indigo-200 rounded-2xl p-4 text-center shadow-2xs hover:scale-102 transition-transform">
                <span className="text-2xl mb-1 block">☕</span>
                <span className="text-xs font-black text-indigo-950 block">Paz Mental</span>
                <span className="text-[11px] text-indigo-700 font-semibold">Cero estrés de olvidos</span>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-rose-100/70 border-2 border-pink-200 rounded-2xl p-4 text-center shadow-2xs hover:scale-102 transition-transform">
                <span className="text-2xl mb-1 block">🎮</span>
                <span className="text-xs font-black text-rose-950 block">Presencia Real</span>
                <span className="text-[11px] text-rose-700 font-semibold">Conexión familiar</span>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-100/70 border-2 border-amber-200 rounded-2xl p-4 text-center shadow-2xs hover:scale-102 transition-transform">
                <span className="text-2xl mb-1 block">🌿</span>
                <span className="text-xs font-black text-amber-950 block">Autocuidado</span>
                <span className="text-[11px] text-amber-800 font-semibold">Tu propio espacio</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
