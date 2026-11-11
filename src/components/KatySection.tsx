import React, { useState } from 'react';
import { Sparkles, Compass, Search, Lightbulb, Heart, Info } from 'lucide-react';

export const KatySection: React.FC = () => {
  const katyCapabilities = [
    {
      title: "Te guío en el uso de la app.",
      desc: "Te acompaño paso a paso para que aproveches cada módulo fácilmente.",
      icon: <Compass className="w-5 h-5 text-purple-600" />,
      bg: "bg-purple-50/90 border-purple-200 text-purple-950",
      iconBg: "bg-purple-200/70"
    },
    {
      title: "Te ayudo a encontrar lo que necesitas.",
      desc: "Acceso rápido y visual a tus listas, recetas y compromisos.",
      icon: <Search className="w-5 h-5 text-sky-600" />,
      bg: "bg-sky-50/90 border-sky-200 text-sky-950",
      iconBg: "bg-sky-200/70"
    },
    {
      title: "Te doy ideas para organizar mejor tu día.",
      desc: "Sugerencias prácticas para priorizar sin sobrecargarte.",
      icon: <Lightbulb className="w-5 h-5 text-amber-600" />,
      bg: "bg-amber-50/90 border-amber-200 text-amber-950",
      iconBg: "bg-amber-200/70"
    },
    {
      title: "Te recuerdo que también hay tiempo para ti.",
      desc: "Pequeños momentos de autocuidado para que no te olvides de ti misma.",
      icon: <Heart className="w-5 h-5 text-rose-600 fill-rose-600" />,
      bg: "bg-rose-50/90 border-rose-200 text-rose-950",
      iconBg: "bg-rose-200/70"
    }
  ];

  return (
    <section id="katy" className="py-16 lg:py-24 bg-gradient-to-b from-[#FAF5FF] via-white to-pink-50/30 border-b border-[#E7E3FF] relative overflow-hidden">
      {/* Radiant ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-tr from-pink-300/30 via-purple-300/30 to-amber-200/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-fuchsia-700 bg-fuchsia-100 border border-fuchsia-200 px-4 py-1.5 rounded-full mb-3 shadow-2xs">
            <span>Katy ♡</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#28234B] tracking-tight leading-tight">
            Tu asistente virtual en <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 bg-clip-text text-transparent">Mamá 360</span>
          </h2>
          <p className="text-base sm:text-lg text-[#68677F] mt-2 font-medium">
            Una pequeña ayuda que hace más agradable, cercano y alegre organizar tu mundo.
          </p>
        </div>

        {/* Central Presentation Card */}
        <div className="bg-gradient-to-br from-white via-purple-50/60 to-pink-50/50 rounded-3xl border-2 border-purple-200 p-6 sm:p-10 lg:p-12 shadow-xl max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* 3D Katy Illustration with Speech Bubble (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative max-w-xs w-full">
                
                {/* 3D Character Image */}
                <div className="relative rounded-3xl overflow-hidden aspect-square border-4 border-white shadow-2xl bg-gradient-to-b from-[#E7E3FF] to-pink-100">
                  <img
                    src="/src/assets/images/katy_assistant_3d_1794353623554.jpg"
                    alt="Katy asistente virtual en 3D para Mamá 360 con vestuario lavanda"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Speech Bubble with cheerful heart */}
                <div className="mt-4 bg-white border-2 border-purple-300/80 rounded-2xl p-4 shadow-lg relative">
                  <div className="absolute -top-2 left-10 w-4 h-4 bg-white border-t-2 border-l-2 border-purple-300/80 rotate-45" />
                  <p className="text-sm sm:text-base font-black text-[#342B72] leading-snug">
                    "¡Hola! Soy Katy 🌸 Estoy aquí para acompañarte en todo lo que necesitas organizar."
                  </p>
                </div>

              </div>
            </div>

            {/* 4 Katy Action Pillars with Rich Colors (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              <div className="mb-5">
                <span className="text-xs uppercase font-black text-purple-700 tracking-wider block mb-1">
                  Tu compañera dentro de la aplicación
                </span>
                <p className="text-sm text-[#28234B]/80 font-medium leading-relaxed">
                  Katy es la asistente visual que te acompaña dentro de Mamá 360. Su presencia hace que la experiencia sea más cálida, amigable y sencilla, recordándote que tu bienestar también es prioritario.
                </p>
              </div>

              {/* 4 Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
                {katyCapabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className={`border-2 rounded-2xl p-4 shadow-2xs hover:shadow-md transition-all hover:scale-102 flex items-start gap-3 ${cap.bg}`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-2xs ${cap.iconBg}`}>
                      {cap.icon}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold leading-snug">
                        {cap.title}
                      </h4>
                      <p className="text-[11px] opacity-80 mt-0.5 leading-tight font-medium">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Transparency note */}
              <div className="bg-white/90 border border-purple-200 rounded-xl p-3 flex items-start gap-2.5 text-[11px] text-[#68677F]">
                <Info className="w-4 h-4 text-[#527BDC] shrink-0 mt-0.5" />
                <span>
                  Katy es una guía visual ilustrada dentro de la mini app creada para hacer tu experiencia más humana y motivadora. No envía mensajes cuando la app está cerrada.
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
