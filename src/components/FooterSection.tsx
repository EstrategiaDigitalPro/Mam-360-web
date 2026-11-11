import React from 'react';
import { BrandLogo } from './BrandLogo';
import { LANDING_CONFIG } from '../config/landingConfig';
import { LegalDocType } from './LegalModal';
import { Shield, Mail, Heart, Lock, ExternalLink } from 'lucide-react';

interface FooterSectionProps {
  onOpenLegal: (doc: LegalDocType) => void;
  onOpenConfigGuide: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenLegal, onOpenConfigGuide }) => {
  return (
    <footer className="bg-[#FAF9FF] border-t border-[#E7E3FF] text-[#28234B] pt-14 pb-20 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#E7E3FF]">
          
          {/* Brand & Mission (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <BrandLogo />
            <p className="text-xs sm:text-sm text-[#68677F] mt-3 leading-relaxed max-w-sm">
              {LANDING_CONFIG.VALUE_PROPOSITION} Diseñada con empatía para aliviar la carga mental diaria de las madres contemporáneas.
            </p>
            <div className="mt-4 text-xs font-semibold text-[#342B72]">
              Marca responsable: <span className="font-bold">{LANDING_CONFIG.BRAND_OWNER}</span>
            </div>
          </div>

          {/* Legal and Support Links (4 cols) */}
          <div className="md:col-span-4 flex flex-col">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#6554C9] mb-3">
              Información Legal y Soporte
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#28234B]">
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-[#6554C9] transition-colors cursor-pointer text-left font-medium"
                >
                  Términos de Uso y Licencia
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-[#6554C9] transition-colors cursor-pointer text-left font-medium"
                >
                  Política de Privacidad
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('refund')}
                  className="hover:text-[#6554C9] transition-colors cursor-pointer text-left font-medium"
                >
                  Garantía y Devoluciones (7 Días)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('support')}
                  className="hover:text-[#6554C9] transition-colors cursor-pointer text-left font-medium flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#527BDC]" />
                  <span>Contacto de Soporte: {LANDING_CONFIG.SUPPORT_EMAIL}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Commercial & Affiliation note (3 cols) */}
          <div className="md:col-span-3 flex flex-col items-start">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#6554C9] mb-3">
              Plataforma y Pagos
            </span>
            <div className="bg-white border border-[#E7E3FF] rounded-xl p-3 w-full shadow-2xs text-xs text-[#68677F] space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-[#28234B]">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Transacciones por Hotmart</span>
              </div>
              <p className="text-[11px] leading-tight">
                Pago único de {LANDING_CONFIG.PRICE_TEXT} con protección al consumidor y liquidación de afiliadas oficial.
              </p>
            </div>

            <button
              onClick={onOpenConfigGuide}
              className="mt-3 text-[11px] font-semibold text-[#6554C9] hover:underline flex items-center gap-1"
            >
              <span>⚙️ Zona de configuración para el dueño</span>
            </button>
          </div>

        </div>

        {/* Official Privacy & Local Storage Disclaimer (Required by Section 14) */}
        <div className="py-6 border-b border-[#E7E3FF] text-[11px] text-[#68677F] leading-relaxed text-center sm:text-left bg-white/60 p-4 rounded-xl mt-6">
          <p>
            <strong className="text-[#28234B]">Aviso de privacidad y almacenamiento de datos:</strong> Mamá 360 no vende los datos personales de sus usuarias ni almacena la información introducida en la aplicación en servidores remotos propios. La información se conserva localmente en el dispositivo o navegador de la usuaria. El procesamiento de datos realizado por plataformas externas, como Hotmart, se rige por sus respectivas políticas de privacidad.
          </p>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#68677F]">
          <p>
            © {new Date().getFullYear()} {LANDING_CONFIG.BRAND_OWNER}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>para las mamás de Latinoamérica</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
