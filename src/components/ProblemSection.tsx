import React from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  HeartCrack, 
  Clock, 
  CalendarX, 
  Layers, 
  HelpCircle, 
  Briefcase 
} from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      text: "Tienes que recordar las citas y actividades de tus hijos.",
      icon: <Clock className="w-4 h-4 text-rose-600" />,
      bg: "bg-rose-50/70 border-rose-200/80 text-rose-950",
      bulletBg: "bg-rose-200 text-rose-700"
    },
    {
      text: "Se te acumulan los pendientes del hogar.",
      icon: <Layers className="w-4 h-4 text-amber-600" />,
      bg: "bg-amber-50/70 border-amber-200/80 text-amber-950",
      bulletBg: "bg-amber-200 text-amber-800"
    },
    {
      text: "Tienes compromisos laborales que no puedes olvidar.",
      icon: <Briefcase className="w-4 h-4 text-blue-600" />,
      bg: "bg-blue-50/70 border-blue-200/80 text-blue-950",
      bulletBg: "bg-blue-200 text-blue-800"
    },
    {
      text: "Quieres dedicar tiempo a tu pareja y familia.",
      icon: <CalendarX className="w-4 h-4 text-purple-600" />,
      bg: "bg-purple-50/70 border-purple-200/80 text-purple-950",
      bulletBg: "bg-purple-200 text-purple-800"
    },
    {
      text: "También necesitas espacio para ti, pero terminas dejándolo para después.",
      icon: <HeartCrack className="w-4 h-4 text-fuchsia-600" />,
      bg: "bg-fuchsia-50/70 border-fuchsia-200/80 text-fuchsia-950",
      bulletBg: "bg-fuchsia-200 text-fuchsia-800"
    },
    {
      text: "Tienes información repartida entre agendas, notas y conversaciones.",
      icon: <HelpCircle className="w-4 h-4 text-teal-600" />,
      bg: "bg-teal-50/70 border-teal-200/80 text-teal-950",
      bulletBg: "bg-teal-200 text-teal-800"
    }
  ];

  return (
    <section id="problema" className="py-16 lg:py-24 bg-gradient-to-b from-white via-rose-50/30 to-purple-50/20 border-b border-[#E7E3FF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Headline */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-rose-700 bg-rose-100 border border-rose-200 px-3.5 py-1.5 rounded-full mb-3 shadow-2xs">
            <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
            <span>La carga mental de mamá</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#28234B] tracking-tight leading-tight text-balance">
            ¿Sientes que tienes que <br />
            <span className="bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              recordarlo absolutamente todo?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#68677F] mt-3 font-medium">
            Mamá, sabemos que tu día está lleno de responsabilidades, horarios y tareas invisibles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Overwhelmed Mom Photo (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 bg-gradient-to-tr from-rose-300/40 via-purple-300/30 to-amber-300/30 rounded-3xl blur-md pointer-events-none" />
              
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border-3 border-rose-200 shadow-xl">
                <img
                  src="/assets/images/mom_stressed_papers_1794354773530.jpg"
                  alt="Mamá latina abrumada con papeles del colegio y pendientes en la mesa"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-black text-amber-300 uppercase tracking-wide">
                    La realidad cotidiana
                  </span>
                  <p className="text-sm font-bold leading-snug drop-shadow-sm">
                    "Tener todo en la cabeza desgasta y genera ansiedad diaria."
                  </p>
                </div>
              </div>

              {/* Stress metric sticker with warm colors */}
              <div className="mt-3.5 bg-gradient-to-r from-rose-100 to-amber-100 border border-rose-300/80 rounded-2xl p-3.5 flex items-center gap-3 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <HeartCrack className="w-5 h-5" />
                </div>
                <p className="text-xs text-rose-950 font-bold leading-tight">
                  La sobrecarga mental materna es real: libérate de intentar memorizarlo todo.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: 6 Colorful Checklist Points & Highlight Box (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="space-y-3 mb-6">
              {problems.map((item, index) => (
                <div
                  key={index}
                  className={`border-2 rounded-2xl p-4 transition-all duration-200 shadow-2xs hover:shadow-xs flex items-start gap-3.5 hover:translate-x-1 ${item.bg}`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 shadow-2xs ${item.bulletBg}`}>
                    {item.icon}
                  </div>
                  <span className="text-sm sm:text-base font-bold leading-snug">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Radiant Highlight Banner matching design */}
            <div className="bg-gradient-to-r from-[#342B72] via-[#7C3AED] to-[#EC4899] text-white rounded-2xl p-5 sm:p-6 shadow-xl flex items-center gap-4 border-2 border-white/20">
              <div className="w-13 h-13 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0 text-3xl shadow-inner">
                💡
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-black leading-snug text-white">
                  No tienes que cargar con todo en tu memoria.
                </h4>
                <p className="text-xs sm:text-sm text-purple-100 mt-1 font-medium">
                  Necesitas un lugar ordenado, visual y alegre donde vaciar tus pendientes y respirar con alivio.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
