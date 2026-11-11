import React from 'react';
import { X, Shield, FileText, RefreshCw, Mail } from 'lucide-react';
import { LEGAL_TEXTS } from '../data/landingData';
import { LANDING_CONFIG } from '../config/landingConfig';

export type LegalDocType = 'terms' | 'privacy' | 'refund' | 'support' | null;

interface LegalModalProps {
  activeDoc: LegalDocType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ activeDoc, onClose }) => {
  if (!activeDoc) return null;

  const getTitleAndIcon = () => {
    switch (activeDoc) {
      case 'terms':
        return {
          title: 'Términos y Condiciones de Uso',
          icon: <FileText className="w-5 h-5 text-[#6554C9]" />,
          content: LEGAL_TEXTS.terms
        };
      case 'privacy':
        return {
          title: 'Política de Privacidad',
          icon: <Shield className="w-5 h-5 text-[#6554C9]" />,
          content: LEGAL_TEXTS.privacy
        };
      case 'refund':
        return {
          title: 'Garantía y Devoluciones',
          icon: <RefreshCw className="w-5 h-5 text-[#6554C9]" />,
          content: LEGAL_TEXTS.refund
        };
      case 'support':
        return {
          title: 'Contacto de Soporte',
          icon: <Mail className="w-5 h-5 text-[#6554C9]" />,
          content: `
            <h3>Canal Oficial de Atención a Clientas</h3>
            <p>Si tienes alguna consulta sobre tu acceso, requieres asistencia para utilizar la mini aplicación o deseas información sobre el programa de afiliadas, nuestro equipo de soporte está para ayudarte.</p>
            <div style="background: #F1EFFF; padding: 16px; border-radius: 12px; margin: 16px 0; border: 1px solid #E7E3FF;">
              <p><strong>Correo electrónico de soporte:</strong></p>
              <p style="font-size: 16px; font-weight: bold; color: #342B72;">${LANDING_CONFIG.SUPPORT_EMAIL}</p>
              <p style="font-size: 12px; color: #68677F; margin-top: 4px;">Tiempo estimado de respuesta: menos de 24 horas hábiles.</p>
            </div>
            <p>Para consultas directamente relacionadas con cargos bancarios o facturación, puedes gestionar tu transacción directamente en el portal de compradores de Hotmart.</p>
          `
        };
      default:
        return { title: '', icon: null, content: '' };
    }
  };

  const { title, icon, content } = getTitleAndIcon();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      {/* Click outside to close backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E7E3FF] flex flex-col max-h-[85vh] z-10 overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-[#E7E3FF] flex items-center justify-between bg-[#FAF9FF]">
          <div className="flex items-center gap-3">
            <div className="h-9 px-2 bg-white border border-[#E7E3FF] rounded-xl flex items-center justify-center shadow-2xs">
              <img
                src="/assets/aistudio/Logotipo_Mam__360_con_coraz_n_f05d5014.png"
                alt="Mamá 360"
                className="h-6 w-auto object-contain"
              />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#28234B]">{title}</h3>
              <span className="text-[11px] text-[#68677F]">{LANDING_CONFIG.BRAND_OWNER} · {LANDING_CONFIG.PRODUCT_NAME}</span>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-[#28234B] hover:bg-[#F1EFFF] transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div 
          className="p-6 sm:p-8 overflow-y-auto space-y-4 text-sm text-[#28234B]/90 leading-relaxed legal-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#E7E3FF] bg-[#FAF9FF] flex items-center justify-between">
          <span className="text-xs text-[#68677F]">
            Marca registrada por {LANDING_CONFIG.BRAND_OWNER}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-[#6554C9] hover:bg-[#5644BA] rounded-xl shadow-xs transition-colors"
          >
            Entendido, cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
