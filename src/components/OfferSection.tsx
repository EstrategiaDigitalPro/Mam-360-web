import React, { useState } from 'react';
import { LANDING_CONFIG } from '../config/landingConfig';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Lock, 
  Smartphone, 
  Gift, 
  ArrowRight, 
  Globe,
  Coins,
  Star
} from 'lucide-react';

interface OfferSectionProps {
  onOpenCheckout: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onOpenCheckout }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<'USD' | 'MXN' | 'COP' | 'ARS' | 'CLP' | 'PEN'>('USD');

  // Approximate reference currency guides (indicative)
  const currencyEquivalents = {
    USD: { symbol: "US$", amount: "9.97", note: "Dólares Americanos" },
    MXN: { symbol: "MX$", amount: "198", note: "Pesos Mexicanos aprox." },
    COP: { symbol: "COL$", amount: "42.000", note: "Pesos Colombianos aprox." },
    ARS: { symbol: "AR$", amount: "11.500", note: "Pesos Argentinos aprox." },
    CLP: { symbol: "CLP$", amount: "9.800", note: "Pesos Chilenos aprox." },
    PEN: { symbol: "S/.", amount: "38", note: "Soles Peruanos aprox." }
  };

  const offerItems = [
    {
      title: "Mini Aplicación Mamá 360 Completa",
      desc: "Los 9 módulos interactivos para organizar cada aspecto de tu vida.",
      badge: "Producto Principal",
      badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
      iconColor: "text-rose-600"
    },
    {
      title: "Acceso de por vida garantizado",
      desc: "Disfruta de la herramienta sin pagos mensuales ni suscripciones sorpresa.",
      badge: "Permanente",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      iconColor: "text-emerald-600"
    },
    {
      title: "Guía de inicio rápido y uso",
      desc: "Instrucciones claras paso a paso para comenzar a usarla en menos de 5 minutos.",
      badge: "Paso a Paso",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      title: "eBook 1: Niños Ricos, Padres Sabios",
      desc: "Guía práctica para enseñar a tus hijos a tener una mentalidad financiera ganadora.",
      badge: "Regalo Especial",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300 font-bold",
      iconColor: "text-amber-600"
    },
    {
      title: "eBook 2: Crianza con amor y límites",
      desc: "Herramientas prácticas para educar con respeto, firmeza y armonía.",
      badge: "Regalo Especial",
      badgeColor: "bg-pink-100 text-pink-800 border-pink-200",
      iconColor: "text-pink-600"
    },
    {
      title: "Mejoras futuras contempladas",
      desc: "Actualizaciones y mejoras previstas para el producto digital.",
      badge: "Actualizaciones",
      badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
      iconColor: "text-teal-600"
    },
    {
      title: "Derecho a comercialización (Comisión del 50%)",
      desc: "Participación en el programa oficial de afiliadas de Hotmart bajo sus condiciones.",
      badge: "Comisión 50%",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300 font-black",
      iconColor: "text-amber-600"
    }
  ];

  return (
    <section id="oferta" className="py-16 lg:py-24 bg-gradient-to-b from-white via-pink-50/25 to-[#FAF5FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-black text-rose-700 bg-rose-100 border border-rose-200 px-4 py-1.5 rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>Inversión Única con Valor Total</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#28234B] tracking-tight leading-tight mb-4 text-balance">
            Todo tu mundo organizado por <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              un solo pago.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#68677F] font-medium leading-relaxed">
            Sin mensualidades ni costos ocultos. Obtienes la mini aplicación completa, los dos eBooks y la posibilidad de ganar comisiones.
          </p>
        </div>

        {/* Commercial Master Card with vibrant gradient border */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border-3 border-purple-300/80 shadow-2xl overflow-hidden">
          
          {/* Card Top Banner with Sunset multi-color gradient */}
          <div className="bg-gradient-to-r from-[#342B72] via-[#6554C9] to-[#E11D48] text-white p-6 sm:p-8 text-center flex flex-col items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />

            <div className="bg-white px-4 py-2 rounded-2xl shadow-lg mb-3">
              <img
                src="/assets/aistudio/Logotipo_Mam__360_con_coraz_n_f05d5014.png"
                alt="Mamá 360 Logotipo Oficial"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <span className="text-xs uppercase font-black tracking-widest text-amber-300 block mb-1">
              Paquete Comercial Completo
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Mamá 360 – Edición Todo Incluido
            </h3>
            <p className="text-sm text-purple-100 mt-1 max-w-xl mx-auto font-medium">
              Todo lo que necesitas para simplificar tus días, liberar tu mente y ganar tranquilidad.
            </p>
          </div>

          <div className="p-6 sm:p-10">
            
            {/* Offer Checklist with vibrant badges */}
            <div className="space-y-3.5 mb-8">
              {offerItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start justify-between gap-4 p-3.5 rounded-2xl hover:bg-purple-50/40 transition-colors border border-transparent hover:border-purple-200"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${item.iconColor}`} />
                    <div>
                      <h4 className="text-sm sm:text-base font-black text-[#28234B]">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#68677F] mt-0.5 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <span className={`hidden sm:inline-block text-[11px] font-bold px-3 py-1 rounded-full border shrink-0 shadow-2xs ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>

            {/* Price & Currency Zone with warm golden radiant styling */}
            <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border-2 border-amber-300 rounded-3xl p-6 sm:p-8 text-center mb-8 shadow-xs">
              
              <span className="text-xs uppercase font-black tracking-wider text-amber-800 block mb-1">
                PRECIO ESPECIAL DE LANZAMIENTO
              </span>

              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-5xl sm:text-6xl font-black font-display text-[#342B72] tracking-tight drop-shadow-sm">
                  {currencyEquivalents[selectedCurrency].symbol}{currencyEquivalents[selectedCurrency].amount}
                </span>
              </div>

              <div className="inline-block bg-amber-200 text-amber-950 text-xs font-black px-4 py-1 rounded-full mb-3 shadow-2xs">
                {LANDING_CONFIG.PAYMENT_TYPE} · {LANDING_CONFIG.ACCESS_TYPE}
              </div>

              <p className="text-xs text-[#68677F] max-w-md mx-auto mb-4 font-semibold">
                O su equivalente en tu moneda local procesado automáticamente por Hotmart en tu país.
              </p>

              {/* Currency Selector buttons */}
              <div className="flex items-center justify-center gap-1.5 flex-wrap">
                <span className="text-[11px] text-[#68677F] font-bold mr-1 flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-[#6554C9]" /> Ver en:
                </span>
                {(['USD', 'MXN', 'COP', 'ARS', 'CLP', 'PEN'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setSelectedCurrency(curr)}
                    className={`text-xs px-3 py-1 rounded-xl font-bold transition-all cursor-pointer ${
                      selectedCurrency === curr
                        ? 'bg-[#6554C9] text-white shadow-xs scale-105'
                        : 'bg-white text-[#28234B] border border-amber-200 hover:bg-amber-100/50'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>

            </div>

            {/* Big Action Button with vibrant energetic gradient */}
            <div className="max-w-md mx-auto">
              <button
                onClick={onOpenCheckout}
                className="w-full py-4 px-6 text-center text-lg sm:text-xl font-black text-white bg-gradient-to-r from-[#6554C9] via-[#EC4899] to-[#F59E0B] hover:from-[#5644BA] hover:to-[#D97706] rounded-2xl shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-pink-500/35 active:scale-[0.99] transition-all flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>{LANDING_CONFIG.CTA_TEXT}</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <div className="mt-4 flex flex-col items-center gap-2 text-center">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Compra 100% segura procesada a través de Hotmart</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-[11px] text-[#68677F] font-semibold">
                  <span>🔒 Encriptación SSL 256-bit</span>
                  <span>·</span>
                  <span>🛡️ Garantía de 7 días</span>
                  <span>·</span>
                  <span>⚡ Acceso instantáneo</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
