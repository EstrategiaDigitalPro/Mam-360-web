import React from 'react';
import { Gift, BookCheck, ShieldCheck, Sparkles, Check, Star } from 'lucide-react';

export const BonusesSection: React.FC = () => {
  return (
    <section id="bonos" className="py-16 lg:py-24 bg-gradient-to-b from-[#FAF5FF] via-white to-amber-50/20 border-b border-[#E7E3FF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-black text-amber-800 bg-amber-100 border border-amber-300 px-4 py-1.5 rounded-full mb-3 shadow-2xs">
            <Gift className="w-3.5 h-3.5 text-amber-600" />
            <span>Regalos Exclusivos de Lanzamiento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#28234B] tracking-tight leading-tight mb-4 text-balance">
            Y además, tenemos dos <br />
            <span className="bg-gradient-to-r from-amber-600 via-rose-600 to-purple-600 bg-clip-text text-transparent">
              regalos especiales para ti.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#68677F] font-medium leading-relaxed">
            Al adquirir tu mini aplicación Mamá 360 hoy, te entregamos acceso inmediato a dos completos libros digitales de orientación familiar, valorados por separado pero <strong>100% gratuitos para ti</strong>.
          </p>
        </div>

        {/* 2 Independent eBooks Grid with vibrant cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* BONO 1 */}
          <div className="bg-gradient-to-br from-white via-purple-50/60 to-amber-50/40 border-3 border-purple-200 hover:border-purple-400 rounded-3xl p-6 sm:p-8 transition-all hover:shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            
            <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[11px] font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              🎁 Regalo 1
            </div>

            <div>
              {/* Official Vertical Cover for Niños Ricos, Padres Sabios */}
              <div className="relative mx-auto max-w-[250px] mb-6 drop-shadow-2xl group-hover:scale-103 transition-transform duration-300">
                <img
                  src="/assets/aistudio/Portada_vertical_1d1d8a11.png"
                  alt="Portada oficial del eBook Niños Ricos, Padres Sabios - Una guía práctica para enseñar a tus hijos a tener una mentalidad financiera ganadora"
                  className="w-full h-auto rounded-2xl shadow-2xl border-2 border-amber-300 object-cover"
                  loading="lazy"
                />
              </div>

              <div className="mb-2">
                <span className="text-xs font-black text-amber-800 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full uppercase tracking-wide inline-flex items-center gap-1.5 shadow-2xs">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-600" /> eBook Digital Completo
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#28234B] mt-2 leading-snug">
                  Niños Ricos, Padres Sabios
                </h3>
              </div>

              <p className="text-sm text-[#28234B]/90 font-bold leading-relaxed mb-5">
                Una guía práctica para enseñar a tus hijos a tener una mentalidad financiera ganadora.
              </p>

              <div className="space-y-2.5 mb-6">
                <div className="flex items-start gap-2.5 text-xs font-semibold text-[#28234B]/80 bg-white/80 p-2 rounded-xl border border-purple-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Enseña el valor del ahorro y el esfuerzo de forma lúdica.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs font-semibold text-[#28234B]/80 bg-white/80 p-2 rounded-xl border border-purple-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Hábitos financieros positivos para construir un futuro sólido.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs font-semibold text-[#28234B]/80 bg-white/80 p-2 rounded-xl border border-purple-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Ejemplos prácticos y conversaciones familiares recomendadas.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t-2 border-purple-100 flex items-center justify-between text-xs">
              <span className="text-[#68677F] font-bold">Valor regular: <del className="text-rose-400">$17.00 USD</del></span>
              <span className="font-black text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-xl border border-emerald-300 shadow-2xs">
                GRATIS CON MAMÁ 360
              </span>
            </div>

          </div>

          {/* BONO 2 */}
          <div className="bg-gradient-to-br from-white via-rose-50/60 to-pink-50/40 border-3 border-pink-200 hover:border-pink-400 rounded-3xl p-6 sm:p-8 transition-all hover:shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            
            <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-[11px] font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              🎁 Regalo 2
            </div>

            <div>
              {/* Official Vertical Cover for Crianza con amor y límites */}
              <div className="relative mx-auto max-w-[250px] mb-6 drop-shadow-2xl group-hover:scale-103 transition-transform duration-300">
                <img
                  src="/assets/aistudio/Crianza_con_amor_y_l_mites_c6d2967b.png"
                  alt="Portada oficial del eBook Crianza con amor y límites - Herramientas prácticas para gestionar las emociones, establecer límites sin gritos y fortalecer los vínculos familiares"
                  className="w-full h-auto rounded-2xl shadow-2xl border-2 border-emerald-400/80 object-cover"
                  loading="lazy"
                />
              </div>

              <div className="mb-2">
                <span className="text-xs font-black text-emerald-800 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-full uppercase tracking-wide inline-flex items-center gap-1.5 shadow-2xs">
                  <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-600" /> eBook Digital Completo
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#28234B] mt-2 leading-snug">
                  Crianza con amor y límites
                </h3>
              </div>

              <p className="text-sm text-[#28234B]/90 font-bold leading-relaxed mb-5">
                Herramientas prácticas para gestionar las emociones, establecer límites sin gritos y fortalecer los vínculos familiares.
              </p>

              <div className="space-y-2.5 mb-6">
                <div className="flex items-start gap-2.5 text-xs font-semibold text-[#28234B]/80 bg-white/80 p-2 rounded-xl border border-pink-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Educar con respeto, corregir con amor y crecer juntos.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs font-semibold text-[#28234B]/80 bg-white/80 p-2 rounded-xl border border-pink-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Manejo de berrinches, momentos difíciles y acuerdos sanos.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs font-semibold text-[#28234B]/80 bg-white/80 p-2 rounded-xl border border-pink-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Estrategias de comunicación respetuosa entre padres e hijos.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t-2 border-pink-100 flex items-center justify-between text-xs">
              <span className="text-[#68677F] font-bold">Valor regular: <del className="text-rose-400">$17.00 USD</del></span>
              <span className="font-black text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-xl border border-emerald-300 shadow-2xs">
                GRATIS CON MAMÁ 360
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
