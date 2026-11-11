import React from 'react';
import { UtensilsCrossed, Apple, BookOpen, ShoppingBag, CheckCircle2 } from 'lucide-react';

export const KitchenSection: React.FC = () => {
  return (
    <section id="cocina" className="py-16 lg:py-24 bg-gradient-to-b from-white via-emerald-50/20 to-orange-50/30 border-b border-[#E7E3FF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Cheerful Mom and Daughter Cooking Photo (6 cols) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-300/30 via-amber-300/30 to-orange-300/30 rounded-[36px] blur-xl pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border-3 border-emerald-200 shadow-2xl">
                <img
                  src="/src/assets/images/mom_daughter_cooking_1794354773542.jpg"
                  alt="Mamá latina y su hija pequeña riendo y cocinando juntas en una cocina moderna"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-black text-amber-300 uppercase tracking-wide flex items-center gap-1">
                    <span>🥗</span> Cocinar con alegría, no con estrés
                  </span>
                  <p className="text-sm font-bold leading-snug drop-shadow-sm mt-0.5">
                    Menús organizados y compras inteligentes para toda la semana.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Copy & Kitchen Module Highlights (6 cols) */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 text-xs font-black text-emerald-800 bg-emerald-100 border border-emerald-200 px-4 py-1.5 rounded-full mb-3 shadow-2xs">
              <UtensilsCrossed className="w-3.5 h-3.5 text-emerald-600" />
              <span>Módulo Mi Cocina</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#28234B] tracking-tight leading-tight mb-4 text-balance">
              También puedes organizar <br />
              <span className="bg-gradient-to-r from-emerald-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                lo que llega a tu mesa.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#28234B]/85 font-semibold leading-relaxed mb-6">
              En <strong>Mi cocina</strong> puedes registrar ingredientes, consultar ideas prácticas de recetas y crear tus listas de compras de forma ágil, visual y deliciosa.
            </p>

            {/* 3 Kitchen Feature Cards with fresh colorful themes */}
            <div className="space-y-3.5 w-full mb-4">
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200/80 rounded-2xl p-4 flex items-start gap-3.5 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Apple className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-orange-950">Despensa e Ingredientes en Casa</h4>
                  <p className="text-xs text-[#68677F] mt-0.5 font-medium">
                    Anota lo que tienes disponible para evitar compras duplicadas y desperdicios.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200/80 rounded-2xl p-4 flex items-start gap-3.5 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-emerald-950">Ideas Prácticas de Recetas</h4>
                  <p className="text-xs text-[#68677F] mt-0.5 font-medium">
                    Opciones caseras y saludables pensadas para el gusto de toda la familia.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200/80 rounded-2xl p-4 flex items-start gap-3.5 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-blue-950">Listas de Compras por Pasillos</h4>
                  <p className="text-xs text-[#68677F] mt-0.5 font-medium">
                    Haz tus compras del supermercado en la mitad de tiempo y sin olvidar nada.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
