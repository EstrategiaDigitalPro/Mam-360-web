import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/landingData';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredItems = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="preguntas" className="py-16 lg:py-24 bg-white border-b border-[#E7E3FF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#6554C9] bg-[#F1EFFF] px-3.5 py-1.5 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#6554C9]" />
            <span>Transparencia y Claridad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#28234B] tracking-tight leading-tight mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-base text-[#68677F] leading-relaxed max-w-2xl mx-auto">
            Resolvemos todas tus dudas de forma directa, honesta y transparente antes de tu compra.
          </p>

          {/* Search box for FAQ */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar una duda (ej: celular, datos, pagos...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-[#FAF9FF] border border-[#E7E3FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6554C9] focus:bg-white transition-all text-[#28234B]"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredItems.length === 0 ? (
            <div className="text-center py-8 text-sm text-[#68677F] bg-purple-50/50 rounded-2xl p-6">
              No encontramos preguntas que coincidan con tu búsqueda. Puedes revisar las preguntas de la lista completa limpiando el filtro.
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`border-2 rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-purple-300 bg-gradient-to-r from-purple-50/70 via-pink-50/40 to-white shadow-md'
                      : 'border-purple-100 bg-white hover:border-purple-300'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full py-4.5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3 text-sm sm:text-base font-extrabold text-[#28234B]">
                      <span className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center shrink-0 ${isOpen ? 'bg-[#6554C9] text-white shadow-xs' : 'bg-purple-100 text-[#6554C9]'}`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span>{item.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#6554C9] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#EC4899]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-[#28234B]/85 leading-relaxed border-t border-purple-200/60 animate-fadeIn font-medium">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
