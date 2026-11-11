import React from 'react';
import { ShoppingCart, Mail, Smartphone, Info } from 'lucide-react';

export const StepsSection: React.FC = () => {
  const steps = [
    {
      num: "1",
      title: "Realizas tu compra",
      desc: "Haz el pago seguro y protegido a través de la plataforma Hotmart.",
      icon: <ShoppingCart className="w-6 h-6 text-rose-600" />,
      bg: "bg-gradient-to-br from-rose-50 to-pink-100/60 border-rose-200",
      numBg: "bg-rose-500"
    },
    {
      num: "2",
      title: "Recibes el acceso",
      desc: "Hotmart envía las instrucciones y tu enlace personal directo a tu correo electrónico.",
      icon: <Mail className="w-6 h-6 text-indigo-600" />,
      bg: "bg-gradient-to-br from-indigo-50 to-purple-100/60 border-indigo-200",
      numBg: "bg-indigo-500"
    },
    {
      num: "3",
      title: "Comienzas a organizarte",
      desc: "Accede a Mamá 360 desde tu celular, tableta o computador y disfruta de todas sus herramientas.",
      icon: <Smartphone className="w-6 h-6 text-emerald-600" />,
      bg: "bg-gradient-to-br from-emerald-50 to-teal-100/60 border-emerald-200",
      numBg: "bg-emerald-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white via-purple-50/20 to-white border-b border-[#E7E3FF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-100 border border-purple-200 px-4 py-1.5 rounded-full inline-block mb-2 shadow-2xs">
            Proceso Rápido y Claro
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#28234B] tracking-tight">
            Comienza en <span className="bg-gradient-to-r from-rose-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">tres sencillos pasos.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {steps.map((s) => (
            <div 
              key={s.num}
              className={`border-2 rounded-3xl p-6 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center relative ${s.bg}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-white border border-white flex items-center justify-center shadow-md mb-4 relative">
                {s.icon}
                <span className={`absolute -top-2 -right-2 w-7 h-7 rounded-full text-white text-xs font-black flex items-center justify-center shadow-md ${s.numBg}`}>
                  {s.num}
                </span>
              </div>
              <h4 className="text-lg font-black text-[#28234B] mb-1.5">
                {s.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#28234B]/80 font-medium leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Local Storage Notice Callout */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-4 flex items-start gap-3 max-w-2xl mx-auto text-xs text-purple-950 font-medium shadow-xs">
          <Info className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#342B72]">Privacidad garantizada:</strong> Tu información se guarda localmente en tu dispositivo o navegador. No existe sincronización automática entre dispositivos sin tu copia de respaldo.
          </p>
        </div>

      </div>
    </section>
  );
};
