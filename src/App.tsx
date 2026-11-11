/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LANDING_CONFIG } from './config/landingConfig';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { PresentationSection } from './components/PresentationSection';
import { KatySection } from './components/KatySection';
import { SelfCareSection } from './components/SelfCareSection';
import { EnjoyMoreSection } from './components/EnjoyMoreSection';
import { KitchenSection } from './components/KitchenSection';
import { BonusesSection } from './components/BonusesSection';
import { StepsSection } from './components/StepsSection';
import { IncomeOpportunitySection } from './components/IncomeOpportunitySection';
import { OfferSection } from './components/OfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { FooterSection } from './components/FooterSection';
import { LegalModal, LegalDocType } from './components/LegalModal';
import { ConfigGuideModal } from './components/ConfigGuideModal';
import { StickyMobileCta } from './components/StickyMobileCta';

export default function App() {
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>(null);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState<string>(LANDING_CONFIG.HOTMART_CHECKOUT_URL);
  const [isCheckoutNoticeOpen, setIsCheckoutNoticeOpen] = useState(false);

  const handleOpenCheckout = () => {
    // If the Hotmart URL is still placeholder, show friendly notice modal to configure
    if (checkoutUrl.includes('PENDIENTE_CONFIGURAR_HOTMART')) {
      setIsCheckoutNoticeOpen(true);
      return;
    }
    // Safely navigate to Hotmart checkout in a fresh tab to avoid iframe embedding restrictions
    const link = document.createElement('a');
    link.href = checkoutUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white text-[#28234B] flex flex-col font-sans selection:bg-[#E7E3FF] selection:text-[#342B72]">
      {/* Top Navigation */}
      <Header
        onOpenCheckout={handleOpenCheckout}
        onOpenConfigGuide={() => setIsConfigOpen(true)}
      />

      <main className="flex-grow">
        {/* SECCIÓN 1: HERO (Tu vida tiene muchos mundos + 4 categorías + foto alegre + oferta) */}
        <HeroSection onOpenCheckout={handleOpenCheckout} />

        {/* SECCIÓN 2: EL PROBLEMA (¿Sientes que tienes que recordarlo todo? + foto mamá abrumada + 6 puntos) */}
        <ProblemSection />

        {/* SECCIÓN 3 & 4: CONOCE MAMÁ 360 & CADA PARTE TIENE SU ESPACIO (Mockup celular + 9 módulos 3x3) */}
        <PresentationSection />

        {/* SECCIÓN 5: KATY ASISTENTE VIRTUAL (3D + bocadillo de voz + 4 acciones) */}
        <KatySection />

        {/* SECCIÓN BIENESTAR: MAMÁ, TÚ TAMBIÉN ERES PARTE DE TU AGENDA (Foto mamá relajada con café) */}
        <SelfCareSection />

        {/* SECCIÓN 6: ORGANIZA PARA DISFRUTAR MÁS (Foto videojuegos en familia) */}
        <EnjoyMoreSection />

        {/* SECCIÓN 7: MI COCINA (También puedes organizar lo que llega a tu mesa + foto mamá e hija cocinando) */}
        <KitchenSection />

        {/* SECCIÓN 8: DOS REGALOS PARA TU FAMILIA (2 eBooks 3D) */}
        <BonusesSection />

        {/* SECCIÓN PASOS: COMIENZA EN TRES SENCILLOS PASOS */}
        <StepsSection />

        {/* SECCIÓN 9: OPORTUNIDAD DE AFILIADAS 50% COMISIÓN */}
        <IncomeOpportunitySection onOpenCheckout={handleOpenCheckout} />

        {/* SECCIÓN 10: TODO TU MUNDO POR UN SOLO PAGO (Oferta comercial completa) */}
        <OfferSection onOpenCheckout={handleOpenCheckout} />

        {/* SECCIÓN 11: GARANTÍA 7 DÍAS */}
        <GuaranteeSection />

        {/* SECCIÓN 12: PREGUNTAS FRECUENTES (Acordeón interactivo) */}
        <FaqSection />

        {/* SECCIÓN 13: TU MUNDO ES GRANDE (Cierre emocional + foto abrazando hijos + CTA) */}
        <FinalCtaSection onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* SECCIÓN 14: PIE DE PÁGINA Y LEGALIDAD */}
      <FooterSection
        onOpenLegal={(doc) => setActiveLegalDoc(doc)}
        onOpenConfigGuide={() => setIsConfigOpen(true)}
      />

      {/* Barra móvil adhesiva */}
      <StickyMobileCta onOpenCheckout={handleOpenCheckout} />

      {/* Modales */}
      <LegalModal
        activeDoc={activeLegalDoc}
        onClose={() => setActiveLegalDoc(null)}
      />

      <ConfigGuideModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        currentCheckoutUrl={checkoutUrl}
        onUpdateCheckoutUrl={(newUrl) => {
          setCheckoutUrl(newUrl);
          setIsConfigOpen(false);
        }}
      />

      {/* Modal aviso de configuración Hotmart */}
      {isCheckoutNoticeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="absolute inset-0" onClick={() => setIsCheckoutNoticeOpen(false)} />
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#E7E3FF] z-10 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white p-2 rounded-2xl border border-[#E7E3FF] shadow-xs inline-flex">
                <img
                  src="/assets/aistudio/Logotipo_Mam__360_con_coraz_n_f05d5014.png"
                  alt="Mamá 360"
                  className="h-9 w-auto object-contain"
                />
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#28234B] mb-2">
              Enlace de Hotmart Pendiente de Configurar
            </h3>
            <p className="text-xs sm:text-sm text-[#68677F] leading-relaxed mb-6">
              El botón comercial está listo para conectar con tu checkout de Hotmart. Para cambiar el enlace temporal <code className="bg-slate-100 px-1 py-0.5 rounded text-[#6554C9] text-xs">PENDIENTE_CONFIGURAR_HOTMART</code>, ingresa tu URL oficial.
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={() => {
                  setIsCheckoutNoticeOpen(false);
                  setIsConfigOpen(true);
                }}
                className="flex-1 py-2.5 px-4 text-xs font-bold text-white bg-[#6554C9] hover:bg-[#5644BA] rounded-xl shadow-xs"
              >
                Abrir Configurador
              </button>
              <button
                onClick={() => setIsCheckoutNoticeOpen(false)}
                className="py-2.5 px-4 text-xs font-semibold text-[#68677F] bg-slate-100 hover:bg-slate-200 rounded-xl"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
