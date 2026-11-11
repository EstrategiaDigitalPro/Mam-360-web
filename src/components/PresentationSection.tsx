import React, { useState } from 'react';
import { MODULES_DATA, ModuleItem } from '../data/landingData';
import { 
  Baby, 
  PawPrint, 
  Heart, 
  Home, 
  Users, 
  Briefcase, 
  Sparkles, 
  UtensilsCrossed, 
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Smartphone,
  Layers,
  FolderKanban,
  Bell,
  MonitorSmartphone,
  Eye
} from 'lucide-react';

export const PresentationSection: React.FC = () => {
  const [activeModuleId, setActiveModuleId] = useState<string>('hijos');

  const activeModule: ModuleItem = 
    MODULES_DATA.find((m) => m.id === activeModuleId) || MODULES_DATA[0];

  const getModuleIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case 'Baby': return <Baby className={className} />;
      case 'PawPrint': return <PawPrint className={className} />;
      case 'Heart': return <Heart className={className} />;
      case 'Home': return <Home className={className} />;
      case 'Users': return <Users className={className} />;
      case 'Briefcase': return <Briefcase className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      case 'UtensilsCrossed': return <UtensilsCrossed className={className} />;
      case 'CalendarDays': return <CalendarDays className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  const featurePillars = [
    { title: "Organización centralizada", desc: "Todo reunido en una única aplicación.", icon: <Layers className="w-4 h-4 text-[#6554C9]" /> },
    { title: "Perfiles y categorías", desc: "Espacios dedicados para cada área.", icon: <FolderKanban className="w-4 h-4 text-[#527BDC]" /> },
    { title: "Calendario y pendientes", desc: "Visualiza tu semana con claridad.", icon: <CalendarDays className="w-4 h-4 text-[#9333EA]" /> },
    { title: "Recordatorios visuales", desc: "Tarjetas intuitivas sin estrés.", icon: <Bell className="w-4 h-4 text-amber-600" /> },
    { title: "Acceso multidispositivo", desc: "Celular, tableta o computador.", icon: <MonitorSmartphone className="w-4 h-4 text-emerald-600" /> },
  ];

  return (
    <section id="modulos" className="py-16 lg:py-24 bg-[#FAF9FF] border-b border-[#E7E3FF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Block 1: Conoce Mamá 360 */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#6554C9] bg-white border border-[#E7E3FF] px-3.5 py-1.5 rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#6554C9]" />
            <span>Fácil, Visual y Práctica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#28234B] tracking-tight leading-tight mb-4">
            Conoce Mamá 360: <br />
            <span className="text-[#6554C9]">todo tu mundo en un solo lugar.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#68677F] leading-relaxed text-balance max-w-2xl mx-auto">
            Una mini aplicación diseñada para ayudarte a organizar tus responsabilidades personales, familiares y laborales desde un solo espacio, de manera práctica, visual y sencilla.
          </p>
        </div>

        {/* Interactive Phone Mockup with 5 Feature Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20">
          
          {/* Phone Frame Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* Phone Body */}
            <div className="relative w-full max-w-[340px] bg-[#28234B] p-3 rounded-[42px] shadow-2xl border-4 border-[#342B72]">
              {/* Speaker Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#1e1b38] rounded-full flex items-center justify-center z-20">
                <div className="w-3 h-3 rounded-full bg-[#121024] mr-2" />
                <div className="w-10 h-1.5 rounded-full bg-[#28234B]" />
              </div>

              {/* Inner Screen */}
              <div className="relative bg-white rounded-[34px] overflow-hidden border border-slate-100 flex flex-col h-[580px]">
                
                {/* Status Bar */}
                <div className="bg-[#6554C9] text-white pt-6 pb-2.5 px-5 flex items-center justify-between text-[11px] font-semibold">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span>5G</span>
                    <div className="w-4 h-2 border border-white rounded-xs p-0.5">
                      <div className="w-full h-full bg-white rounded-2xs" />
                    </div>
                  </div>
                </div>

                {/* Header with Official Logo */}
                <div className="bg-[#6554C9] text-white px-5 pb-4 pt-1 shadow-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-purple-200 uppercase tracking-wider font-semibold block">
                        Mini Aplicación Oficial
                      </span>
                      <h4 className="text-base font-extrabold flex items-center gap-1 mt-0.5">
                        <span>¡Hola, Mamá!</span>
                        <span>✨</span>
                      </h4>
                    </div>
                    <div className="h-8 px-2.5 bg-white rounded-xl flex items-center justify-center shadow-xs">
                      <img
                        src="/assets/aistudio/Logotipo_Mam__360_con_coraz_n_f05d5014.png"
                        alt="Logo Mamá 360"
                        className="h-5.5 w-auto object-contain"
                      />
                    </div>
                  </div>

                  <div className="mt-3 bg-white/15 backdrop-blur-xs rounded-xl px-3 py-1.5 text-xs text-purple-100 flex items-center justify-between">
                    <span>¿Qué vamos a organizar hoy?</span>
                    <span className="text-[10px] bg-white text-[#6554C9] font-bold px-2 py-0.5 rounded-md">
                      {activeModule.name}
                    </span>
                  </div>
                </div>

                {/* Phone Scroll Content */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
                  
                  {/* Active Module Card */}
                  <div 
                    className="p-4 rounded-2xl border transition-all duration-300 shadow-2xs"
                    style={{ 
                      backgroundColor: activeModule.bgLight, 
                      borderColor: `${activeModule.color}40` 
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div 
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-xs"
                        style={{ backgroundColor: activeModule.color }}
                      >
                        {getModuleIcon(activeModule.iconName, "w-4 h-4")}
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-[#28234B]">{activeModule.name}</h5>
                        <p className="text-[11px] text-[#68677F]">{activeModule.tagline}</p>
                      </div>
                    </div>
                    <p className="text-xs text-[#28234B]/80 leading-relaxed">
                      {activeModule.description}
                    </p>
                  </div>

                  {/* Feature Tasks Mockup */}
                  <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-2xs">
                    <span className="text-[10px] uppercase font-bold text-[#68677F] tracking-wider block mb-2">
                      {activeModule.mockData.title}
                    </span>
                    <div className="space-y-2">
                      {activeModule.mockData.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#28234B] bg-slate-50 p-2.5 rounded-xl">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#6554C9] shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Katy's In-App Message */}
                  <div className="bg-[#FAF5FF] border border-[#E9D5FF] rounded-2xl p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#6554C9] text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-xs">
                      K
                    </div>
                    <div className="text-[11px] text-[#342B72] leading-tight">
                      <strong className="font-bold">Katy:</strong> "¡Excelente! Ya liberaste espacio en tu mente para hoy."
                    </div>
                  </div>

                </div>

                {/* Bottom Navigation inside Phone */}
                <div className="bg-white border-t border-slate-200 py-2.5 px-4 flex items-center justify-around text-[10px] text-[#68677F]">
                  <div className="flex flex-col items-center text-[#6554C9] font-bold">
                    <Smartphone className="w-4 h-4" />
                    <span>Inicio</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <CalendarDays className="w-4 h-4" />
                    <span>Agenda</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Heart className="w-4 h-4" />
                    <span>Bienestar</span>
                  </div>
                </div>

              </div>
            </div>

            <p className="mt-3 text-xs text-[#68677F] text-center flex items-center gap-1 font-medium">
              <Eye className="w-3.5 h-3.5 text-[#6554C9]" />
              <span>Toca un módulo para verlo en la pantalla del celular</span>
            </p>
          </div>

          {/* 5 Feature Pillars Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-3.5">
            <span className="text-xs uppercase font-extrabold text-[#6554C9] tracking-wider block mb-1">
              Ventajas Clave de Mamá 360
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#28234B] tracking-tight mb-4">
              Diseñada para la agilidad de tu día
            </h3>

            {featurePillars.map((p, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#E7E3FF] rounded-2xl p-4 shadow-2xs hover:shadow-xs transition-shadow flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F1EFFF] flex items-center justify-center shrink-0">
                  {p.icon}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#28234B]">{p.title}</h4>
                  <p className="text-xs sm:text-sm text-[#68677F] mt-0.5">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Block 2: Cada parte de tu vida tiene su propio espacio (3x3 Grid) */}
        <div className="pt-12 border-t border-[#E7E3FF]">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-black text-[#28234B] tracking-tight leading-tight">
              Cada parte de tu vida tiene su propio espacio.
            </h3>
            <p className="text-base text-[#68677F] mt-2">
              Organiza fácilmente todo lo que hace parte de tu día a día.
            </p>
          </div>

          {/* 3x3 Modules Grid with rich individual color styling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MODULES_DATA.map((mod) => {
              const isSelected = mod.id === activeModuleId;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModuleId(mod.id)}
                  style={{
                    backgroundColor: isSelected ? '#FFFFFF' : mod.bgLight,
                    borderColor: isSelected ? mod.color : `${mod.color}40`
                  }}
                  className={`text-left p-5 rounded-3xl border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:scale-102 hover:shadow-xl ${
                    isSelected
                      ? 'shadow-xl ring-3 -translate-y-1'
                      : 'shadow-xs hover:border-current'
                  }`}
                >
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-3.5">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform"
                        style={{ backgroundColor: mod.color }}
                      >
                        {getModuleIcon(mod.iconName, "w-6 h-6")}
                      </div>
                      <span 
                        className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-2xs border"
                        style={{ 
                          backgroundColor: `${mod.color}15`, 
                          color: mod.color,
                          borderColor: `${mod.color}30` 
                        }}
                      >
                        Módulo 360
                      </span>
                    </div>

                    <h4 className="text-lg font-black text-[#28234B] mb-1">
                      {mod.name}
                    </h4>

                    <p className="text-xs text-[#28234B]/80 font-medium leading-relaxed mb-3">
                      <strong style={{ color: mod.color }}>{mod.tagline}.</strong> {mod.description}
                    </p>
                  </div>

                  <div 
                    className="pt-3 border-t flex items-center justify-between text-xs font-bold w-full transition-colors"
                    style={{ 
                      borderColor: `${mod.color}25`,
                      color: mod.color 
                    }}
                  >
                    <span>{isSelected ? '📱 Mostrando en el móvil' : 'Tocar para previsualizar'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
