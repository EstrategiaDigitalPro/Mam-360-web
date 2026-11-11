import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBadge?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  showBadge = true,
}) => {
  const isWhite = variant === 'white';

  // Size mapping for the official logo
  const sizeClasses = {
    sm: 'h-7',
    md: 'h-9 sm:h-10',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20'
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Mamá 360 Logo Asset */}
      <div className={`relative flex items-center shrink-0 ${isWhite ? 'p-1.5 bg-white/95 rounded-xl shadow-sm' : ''}`}>
        <img
          src="/assets/aistudio/Logotipo_Mam__360_con_coraz_n_f05d5014.png"
          alt="Mamá 360 – Logotipo Oficial con corazón e infinito"
          className={`${sizeClasses[size]} w-auto object-contain transition-transform`}
          loading="eager"
        />
      </div>

      {showBadge && (
        <span
          className={`hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${
            isWhite
              ? 'bg-white/20 text-white border-white/30'
              : 'bg-[#F1EFFF] text-[#6554C9] border-[#E7E3FF]'
          }`}
        >
          Mini App
        </span>
      )}
    </div>
  );
};
