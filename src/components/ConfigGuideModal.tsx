import React, { useState } from 'react';
import { X, Check, Copy, Settings, ExternalLink, Code2, Upload, FileText, Globe } from 'lucide-react';
import { LANDING_CONFIG } from '../config/landingConfig';

interface ConfigGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentCheckoutUrl: string;
  onUpdateCheckoutUrl: (url: string) => void;
}

export const ConfigGuideModal: React.FC<ConfigGuideModalProps> = ({
  isOpen,
  onClose,
  currentCheckoutUrl,
  onUpdateCheckoutUrl
}) => {
  const [tempUrl, setTempUrl] = useState(currentCheckoutUrl);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'checkout' | 'instructions' | 'code'>('checkout');

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateCheckoutUrl(tempUrl);
  };

  const copyConfigSnippet = () => {
    const snippet = `export const LANDING_CONFIG = {
  HOTMART_CHECKOUT_URL: "${tempUrl}",
  TERMS_URL: "#terminos",
  PRIVACY_URL: "#privacidad",
  REFUND_URL: "#garantia-legal",
  SUPPORT_EMAIL: "${LANDING_CONFIG.SUPPORT_EMAIL}",
  // ...
};`;
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#E7E3FF] flex flex-col max-h-[90vh] z-10 overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E7E3FF] flex items-center justify-between bg-[#FAF9FF]">
          <div className="flex items-center gap-3">
            <div className="h-9 px-2 bg-white rounded-xl border border-[#E7E3FF] flex items-center justify-center shadow-xs">
              <img
                src="/assets/aistudio/Logotipo_Mam__360_con_coraz_n_f05d5014.png"
                alt="Mamá 360"
                className="h-6 w-auto object-contain"
              />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#28234B]">
                Panel de Configuración de la Landing Page
              </h3>
              <p className="text-xs text-[#68677F]">
                Herramientas e instrucciones para el propietario de Mamá 360
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-[#28234B] hover:bg-[#F1EFFF] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sub-nav tabs */}
        <div className="flex border-b border-[#E7E3FF] px-6 bg-white gap-2">
          <button
            onClick={() => setActiveTab('checkout')}
            className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'checkout'
                ? 'border-[#6554C9] text-[#6554C9]'
                : 'border-transparent text-[#68677F] hover:text-[#28234B]'
            }`}
          >
            🔗 Probar / Cambiar Enlace Hotmart
          </button>
          <button
            onClick={() => setActiveTab('instructions')}
            className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'instructions'
                ? 'border-[#6554C9] text-[#6554C9]'
                : 'border-transparent text-[#68677F] hover:text-[#28234B]'
            }`}
          >
            📋 Instrucciones de Publicación
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'code'
                ? 'border-[#6554C9] text-[#6554C9]'
                : 'border-transparent text-[#68677F] hover:text-[#28234B]'
            }`}
          >
            💻 Código fuente en /src/config
          </button>
        </div>

        {/* Content area */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {activeTab === 'checkout' && (
            <div className="space-y-4">
              <div className="bg-[#FAF9FF] border border-[#E7E3FF] rounded-2xl p-4">
                <h4 className="text-sm font-bold text-[#342B72] mb-1">
                  Enlace comercial configurado actualmente:
                </h4>
                <div className="bg-white border border-[#E7E3FF] rounded-xl p-3 font-mono text-xs break-all text-[#28234B]">
                  {currentCheckoutUrl}
                </div>
              </div>

              <form onSubmit={handleSave} className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6554C9]">
                  Escribe tu enlace final de Checkout de Hotmart:
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={tempUrl}
                    onChange={(e) => setTempUrl(e.target.value)}
                    placeholder="https://pay.hotmart.com/TU_CODIGO_PRODUCTO"
                    className="flex-1 px-4 py-2.5 text-sm bg-white border border-[#E7E3FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6554C9]"
                    required
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-bold text-white bg-[#6554C9] hover:bg-[#5644BA] rounded-xl transition-colors shrink-0"
                  >
                    Guardar y Probar
                  </button>
                </div>
                <p className="text-[11px] text-[#68677F]">
                  Al guardar aquí, todos los botones de la landing page usarán este enlace durante tu sesión actual para verificar el flujo de compra.
                </p>
              </form>
            </div>
          )}

          {activeTab === 'instructions' && (
            <div className="space-y-4 text-xs sm:text-sm text-[#28234B]">
              <div className="border border-[#E7E3FF] rounded-2xl p-4 bg-[#FAF9FF]">
                <h5 className="font-bold text-[#342B72] text-sm mb-1 flex items-center gap-1.5">
                  <span>1.</span> Abrir y visualizar la página
                </h5>
                <p className="text-xs text-[#68677F]">
                  La página se ejecuta automáticamente con Vite y React en el puerto 3000. Puedes probarla en navegadores móviles y de escritorio.
                </p>
              </div>

              <div className="border border-[#E7E3FF] rounded-2xl p-4 bg-[#FAF9FF]">
                <h5 className="font-bold text-[#342B72] text-sm mb-1 flex items-center gap-1.5">
                  <span>2.</span> Reemplazar el enlace de Hotmart de forma permanente
                </h5>
                <p className="text-xs text-[#68677F]">
                  Abre el archivo <code className="bg-white px-1.5 py-0.5 rounded text-[#6554C9] font-mono">/src/config/landingConfig.ts</code> y sustituye el valor de <code className="font-mono text-[#6554C9]">HOTMART_CHECKOUT_URL</code> por tu enlace definitivo.
                </p>
              </div>

              <div className="border border-[#E7E3FF] rounded-2xl p-4 bg-[#FAF9FF]">
                <h5 className="font-bold text-[#342B72] text-sm mb-1 flex items-center gap-1.5">
                  <span>3.</span> Cambiar los enlaces legales y de soporte
                </h5>
                <p className="text-xs text-[#68677F]">
                  En el mismo archivo <code className="bg-white px-1.5 py-0.5 rounded text-[#6554C9] font-mono">/src/config/landingConfig.ts</code> puedes actualizar <code className="font-mono text-[#6554C9]">SUPPORT_EMAIL</code> con tu correo de atención oficial.
                </p>
              </div>

              <div className="border border-[#E7E3FF] rounded-2xl p-4 bg-[#FAF9FF]">
                <h5 className="font-bold text-[#342B72] text-sm mb-1 flex items-center gap-1.5">
                  <span>4.</span> Sustituir fotografías y portadas
                </h5>
                <p className="text-xs text-[#68677F]">
                  Las imágenes y fotos están alojadas en <code className="bg-white px-1.5 py-0.5 rounded text-[#6554C9] font-mono">/public/assets/images/</code> y <code className="bg-white px-1.5 py-0.5 rounded text-[#6554C9] font-mono">/public/assets/aistudio/</code>. Se sirven públicamente y se incluyen automáticamente en la carpeta de producción <code className="bg-white px-1.5 py-0.5 rounded text-[#6554C9] font-mono">dist/</code>.
                </p>
              </div>

              <div className="border border-[#E7E3FF] rounded-2xl p-4 bg-[#FAF9FF]">
                <h5 className="font-bold text-[#342B72] text-sm mb-1 flex items-center gap-1.5">
                  <span>5.</span> Publicar la página en un hosting
                </h5>
                <p className="text-xs text-[#68677F]">
                  Ejecuta <code className="bg-white px-1.5 py-0.5 rounded text-[#6554C9] font-mono">npm run build</code>. La carpeta <code className="font-mono text-[#6554C9]">dist/</code> contendrá la versión optimizada en HTML/CSS/JS estático lista para subir a cualquier hosting (Vercel, Netlify, Hostinger, cPanel, Cloudflare Pages o Cloud Run).
                </p>
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#68677F]">/src/config/landingConfig.ts</span>
                <button
                  onClick={copyConfigSnippet}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#6554C9] hover:text-[#342B72]"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? '¡Copiado!' : 'Copiar configuración'}</span>
                </button>
              </div>
              <pre className="p-4 bg-[#1e1b38] text-purple-200 rounded-2xl text-xs font-mono overflow-x-auto leading-relaxed">
{`export const LANDING_CONFIG = {
  HOTMART_CHECKOUT_URL: "${tempUrl}",
  TERMS_URL: "#terminos",
  PRIVACY_URL: "#privacidad",
  REFUND_URL: "#garantia-legal",
  SUPPORT_EMAIL: "${LANDING_CONFIG.SUPPORT_EMAIL}",
  
  PRODUCT_NAME: "Mamá 360 – Mini Aplicación",
  BRAND_OWNER: "Estrategia Digital Pro",
  SLOGAN: "Todo tu mundo en un solo lugar",
  PRICE_USD: 9.97,
  PRICE_TEXT: "US$9.97",
  AFFILIATE_COMMISSION: "50%"
};`}
              </pre>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#E7E3FF] bg-[#FAF9FF] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-[#6554C9] rounded-xl hover:bg-[#5644BA] transition-colors"
          >
            Listo, volver a la página
          </button>
        </div>

      </div>
    </div>
  );
};
