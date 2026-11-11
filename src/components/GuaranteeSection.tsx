import React from 'react';
import { ShieldCheck, Award, CheckCircle } from 'lucide-react';
import { LANDING_CONFIG } from '../config/landingConfig';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-emerald-50/20 to-amber-50/20 border-b border-[#E7E3FF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-emerald-50/60 via-white to-amber-50/60 border-3 border-emerald-200/90 rounded-3xl p-8 sm:p-12 shadow-lg flex flex-col md:flex-row items-center gap-8 lg:gap-12 relative overflow-hidden">
          
          {/* Visual Guarantee Seal with Gold & Emerald styling */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="relative w-36 h-36 rounded-full bg-gradient-to-tr from-amber-500 via-[#6554C9] to-emerald-500 p-1.5 shadow-2xl shadow-emerald-500/20 flex items-center justify-center">
              {/* Outer dashed badge edge */}
              <div className="absolute inset-1 rounded-full border-2 border-dashed border-white/60 pointer-events-none" />
              
              <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center text-center p-3 shadow-inner">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700">
                  GARANTÍA
                </span>
                <span className="text-4xl font-black font-display text-[#342B72] leading-none my-0.5">
                  7
                </span>
                <span className="text-[10px] font-black text-amber-700 uppercase tracking-wider">
                  DÍAS
                </span>
                <div className="mt-1 flex items-center gap-0.5 text-amber-500 text-[10px]">
                  {"★★★★★"}
                </div>
              </div>
            </div>
            
            <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-3 py-0.5 rounded-full mt-3 border border-emerald-300">
              100% Sin Riesgo
            </span>
          </div>

          {/* Copy Column */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-black text-emerald-800 bg-emerald-100 border border-emerald-300 px-4 py-1.5 rounded-full mb-3 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Protección al Comprador Hotmart</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#28234B] tracking-tight mb-3">
              Pruébala con <span className="text-emerald-700">absoluta tranquilidad.</span>
            </h2>

            <p className="text-base text-[#28234B]/85 font-medium leading-relaxed mb-4">
              Tu compra está respaldada por una <strong>garantía incondicional de 7 días</strong>. Si dentro de ese plazo decides que Mamá 360 no es lo que esperabas, podrás solicitar la <strong>devolución del 100% de tu dinero</strong> de acuerdo con las condiciones de garantía de Hotmart.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#28234B]/80 font-bold">
              <div className="flex items-center gap-2 bg-white/80 p-2 rounded-xl border border-emerald-100">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Reembolso directo procesado por Hotmart</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 p-2 rounded-xl border border-emerald-100">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sin preguntas complicadas ni trámites</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
