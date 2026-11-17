import React from 'react';

export function BrandLogo({ light = false, className = '' }: { light?: boolean; className?: string }) {
  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <span
        style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        className={`text-[36px] sm:text-[46px] font-bold uppercase tracking-[-0.02em] leading-[0.88] ${
          light ? 'text-white' : 'text-[#733C1D]'
        }`}
      >
        POSTRES
      </span>
      <span
        style={{ fontFamily: '"Great Vibes", cursive' }}
        className={`relative z-10 -mt-2.5 sm:-mt-3 text-[36px] sm:text-[46px] font-normal leading-none ${
          light ? 'text-[#F89EC6]' : 'text-[#DF196C]'
        }`}
      >
        en Bandeja
      </span>
    </div>
  );
}

export function RotatingSeal({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`w-24 h-24 sm:w-28 sm:h-28 drop-shadow-lg select-none ${className}`}
      viewBox="0 0 200 200"
      aria-hidden="true"
    >
      <g className="animate-snt-spin origin-center">
        <path
          d="M100 6l11 9 14-4 7 13 15 2 1 15 12 9-5 14 7 13-10 11 1 15-14 5-5 14-15-1-11 10-13-7-14 5-9-12-15-1-2-15-13-7 4-14-9-12 9-12-4-14 13-7 2-15 15-1 9-12 14 5 13-7 11 10 15-1 5 14 14 5-1 15 10 11-7 13 5 14-12 9-1 15-15 2-7 13-14-4z"
          fill="#733C1D"
        />
        <circle cx="100" cy="100" r="76" fill="#733C1D" stroke="#F7DCC9" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="44" fill="none" stroke="#F7DCC9" strokeWidth="1" />
        <defs>
          <path
            id="snt-seal-circle"
            d="M100,100 m-60,0 a60,60 0 1,1 120,0 a60,60 0 1,1 -120,0"
            fill="none"
          />
        </defs>
        <text fontFamily="Montserrat, sans-serif" fontSize="12" fontWeight="700" fill="#F7DCC9">
          <textPath href="#snt-seal-circle" startOffset="0" textLength="368" lengthAdjust="spacing">
            POSTRES EN BANDEJA • EDICIÓN NAVIDAD •
          </textPath>
        </text>
      </g>
      <text
        x="100"
        y="112"
        textAnchor="middle"
        fontFamily="Montserrat, sans-serif"
        fontSize="36"
        fontWeight="800"
        fill="#F288B8"
      >
        PB
      </text>
    </svg>
  );
}

export function WaveDivider({
  fill = '#FFFAF5',
  flip = false,
  className = '',
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={`w-full h-10 sm:h-14 block pointer-events-none ${flip ? 'rotate-180' : ''} ${className}`}
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0,30 C120,60 240,0 360,30 C480,60 600,0 720,30 C840,60 960,0 1080,30 C1200,60 1320,0 1440,30 L1440,60 L0,60 Z"
        fill={fill}
      />
    </svg>
  );
}

export function MarqueeRibbon({
  items,
  variant = 'pink',
  className = '',
}: {
  items: string[];
  variant?: 'pink' | 'lilac' | 'brown';
  className?: string;
}) {
  const bg =
    variant === 'pink'
      ? 'bg-[#C9316E]'
      : variant === 'lilac'
      ? 'bg-[#A392FF]'
      : 'bg-[#733C1D]';
  const trackClass = variant === 'lilac' ? 'animate-snt-marq-rev' : 'animate-snt-marq';

  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className={`w-full overflow-hidden py-2.5 shadow-md select-none ${bg} ${className}`}>
      <div className={`inline-flex whitespace-nowrap will-change-transform ${trackClass}`}>
        {repeated.map((label, idx) => (
          <span
            key={`${label}-${idx}`}
            className="inline-flex items-center gap-4 px-4 text-sm sm:text-base font-black tracking-wider text-white uppercase"
          >
            <span>{label}</span>
            <span className="text-[#FFF4B0] text-sm" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
