import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Heart,
  Lock,
  Mail,
  Plus,
  ShieldCheck,
  X,
} from 'lucide-react';
import {
  COMBOS_OFERTA,
  ComboOferta,
  DEPOIMENTOS,
  POSTRES_GALERIA,
  PREGUNTAS_FRECUENTES,
  PRODUCT_IMAGES,
} from './data/courseData';
import {
  BrandLogo,
  MarqueeRibbon,
  RotatingSeal,
  WaveDivider,
} from './components/BrandElements';

const SPARKLES_HERO = [
  { left: '8%', size: 6, duration: '11s', delay: '-2s', kind: 'star' },
  { left: '18%', size: 5, duration: '14s', delay: '-7s', kind: 'pink' },
  { left: '29%', size: 7, duration: '12s', delay: '-4s', kind: 'white' },
  { left: '42%', size: 6, duration: '15s', delay: '-9s', kind: 'star' },
  { left: '58%', size: 5, duration: '10s', delay: '-1s', kind: 'pink' },
  { left: '71%', size: 6, duration: '13s', delay: '-5s', kind: 'white' },
  { left: '83%', size: 7, duration: '11s', delay: '-8s', kind: 'star' },
  { left: '92%', size: 5, duration: '16s', delay: '-3s', kind: 'pink' },
];

export default function App() {
  const [showStickyTopbar, setShowStickyTopbar] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeDepoSlide, setActiveDepoSlide] = useState(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedCombo, setSelectedCombo] = useState<ComboOferta>(COMBOS_OFERTA[1]);
  const [checkoutSubmitted, setCheckoutSubmitted] = useState(false);
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');

  const heroRef = useRef<HTMLElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const depoCarouselRef = useRef<HTMLDivElement | null>(null);

  const scrollToOffer = () => {
    const target = document.getElementById('oferta');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setShowStickyTopbar(rect.bottom < 140);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goToSlide = (index: number) => {
    const wrapped = (index + POSTRES_GALERIA.length) % POSTRES_GALERIA.length;
    setActiveSlide(wrapped);
    const track = carouselRef.current;
    if (track) {
      const child = track.children[wrapped] as HTMLElement | undefined;
      if (child) {
        const left = child.offsetLeft - (track.clientWidth - child.offsetWidth) / 2;
        track.scrollTo({ left, behavior: 'smooth' });
      }
    }
  };

  const goToDepoSlide = (index: number) => {
    const wrapped = (index + DEPOIMENTOS.length) % DEPOIMENTOS.length;
    setActiveDepoSlide(wrapped);
    const track = depoCarouselRef.current;
    if (track) {
      const child = track.children[wrapped] as HTMLElement | undefined;
      if (child) {
        const left = child.offsetLeft - (track.clientWidth - child.offsetWidth) / 2;
        track.scrollTo({ left, behavior: 'smooth' });
      }
    }
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerName.trim() || !buyerEmail.trim()) return;
    setCheckoutSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FFFAF5] text-[#4A2B1C] overflow-x-clip">
      {/* Barra superior fija (contrato de 3 zonas en una sola línea) */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          showStickyTopbar
            ? 'translate-y-0 opacity-100 bg-[#FFFAF5]/95 backdrop-blur-md border-b border-[#E9D6CA] shadow-sm'
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-left whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C9316E]"
          >
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#733C1D]">
              Postres <span className="text-[#C9316E]">en Bandeja</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#733C1D]/85">
            <a
              href="#postres"
              className="hover:text-[#C9316E] transition-colors whitespace-nowrap shrink-0"
            >
              Postres
            </a>
            <a
              href="#bonos"
              className="hover:text-[#C9316E] transition-colors whitespace-nowrap shrink-0"
            >
              Bonos
            </a>
            <a
              href="#preguntas"
              className="hover:text-[#C9316E] transition-colors whitespace-nowrap shrink-0"
            >
              Preguntas
            </a>
          </nav>
        </div>
      </header>

      {/* 1. HERO */}
      <section
        ref={heroRef}
        className="relative pb-16 sm:pb-20 pt-6 sm:pt-8 overflow-hidden text-center"
        style={{
          background:
            'radial-gradient(60% 40% at 0% 30%, rgba(196,170,255,.5), rgba(196,170,255,0) 70%), radial-gradient(60% 40% at 100% 20%, rgba(242,136,184,.48), rgba(242,136,184,0) 70%), radial-gradient(70% 35% at 100% 75%, rgba(242,136,184,.32), rgba(242,136,184,0) 70%), radial-gradient(60% 30% at 0% 85%, rgba(196,170,255,.32), rgba(196,170,255,0) 70%), #FFF8FA',
        }}
      >
        {/* Destellos decorativos suaves */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {SPARKLES_HERO.map((sp, i) => (
            <span
              key={i}
              style={{
                left: sp.left,
                width: sp.kind === 'star' ? 'auto' : `${sp.size}px`,
                height: sp.kind === 'star' ? 'auto' : `${sp.size}px`,
                animation: `snt-fall ${sp.duration} linear ${sp.delay} infinite`,
              }}
              className={`absolute -top-5 ${
                sp.kind === 'star'
                  ? 'text-[#E8B4C9] text-sm'
                  : sp.kind === 'pink'
                  ? 'rounded-full bg-[#F288B8]'
                  : 'rounded-full bg-white'
              }`}
            >
              {sp.kind === 'star' ? '✦' : null}
            </span>
          ))}
        </div>

        <div className="relative max-w-3xl mx-auto px-4 z-10">
          <div className="rounded-3xl overflow-hidden shadow-[0_18px_48px_rgba(115,60,29,0.16)] bg-[#F5EEE8] border-4 border-white">
            <img
              src={PRODUCT_IMAGES.panorama}
              alt="Selección de postres navideños en fuentes de vidrio sobre mesa navideña"
              referrerPolicy="no-referrer"
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>

        <div className="relative z-20 max-w-2xl mx-auto px-5 mt-8">
          <div className="mb-4 flex justify-center">
            <BrandLogo />
          </div>

          <h1
            className="text-3xl sm:text-5xl font-bold text-[#733C1D] leading-tight tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            ¡Postres prácticos para preparar y{' '}
            <span className="text-[#C9316E] bg-gradient-to-t from-[#F288B8]/35 via-[#F288B8]/35 to-transparent bg-[length:100%_38%] bg-no-repeat bg-bottom">
              vender mucho esta Navidad!
            </span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-[#4A2B1C]/90 leading-relaxed max-w-xl mx-auto">
            Convierte la Navidad en una oportunidad para aumentar tus pedidos con postres
            prácticos, hermosos e irresistibles.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={scrollToOffer}
              className="btn-sheen inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#C9316E] hover:bg-[#A8255A] text-white font-black text-base sm:text-lg tracking-wide shadow-[0_14px_30px_rgba(201,49,110,0.38)] transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>QUIERO MI RECETARIO</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#733C1D]/80">
              <Lock className="w-4 h-4 text-[#C9316E]" aria-hidden="true" />
              <span>Compra segura</span>
              <span aria-hidden="true">·</span>
              <span>7 días de garantía</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cintas cruzadas */}
      <div className="relative h-28 sm:h-32 -mt-8 -mb-6 z-20 pointer-events-none overflow-hidden">
        <div className="absolute -left-[8%] w-[116%] top-3 -rotate-3">
          <MarqueeRibbon
            variant="pink"
            items={[
              'POSTRES DE NAVIDAD',
              'RECETAS PROBADAS',
              'MONTAJE PASO A PASO',
              'HASTA 20 RECETAS',
            ]}
          />
        </div>
        <div className="absolute -left-[8%] w-[116%] top-14 rotate-2">
          <MarqueeRibbon
            variant="lilac"
            items={[
              'FRESAS CON CREMA',
              'TRES CHOCOLATES',
              'CARLOTA DE LIMÓN',
              'MARACUYÁ CON GANACHE',
              'DULCE DE LECHE',
            ]}
          />
        </div>
      </div>

      {/* 2. PRESENTACIÓN DE LAS RECETAS */}
      <section
        id="postres"
        className="relative bg-gradient-to-b from-[#E07BA8] to-[#E68AB3] text-white pt-20 pb-24"
      >
        <div className="max-w-5xl mx-auto px-5 text-center">
          <h2
            className="text-2xl sm:text-4xl font-bold text-white leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Descubre los postres que podrás preparar
          </h2>
        </div>

        {/* Galería visual con todas las recetas y sus imágenes representativas */}
        <div className="relative max-w-6xl mx-auto mt-8 px-4">
          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 sm:px-14 py-4 scrollbar-hide"
          >
            {POSTRES_GALERIA.map((item, idx) => {
              const isActive = idx === activeSlide;
              return (
                <figure
                  key={item.id}
                  onClick={() => goToSlide(idx)}
                  className={`snap-center shrink-0 w-[82%] sm:w-[46%] lg:w-[36%] bg-white rounded-3xl p-3.5 pb-5 shadow-[0_14px_34px_rgba(74,36,16,0.22)] transition-all duration-300 cursor-pointer ${
                    isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-85 hover:opacity-100'
                  }`}
                >
                  <div className="rounded-2xl overflow-hidden bg-[#F5EEE8]">
                    <img
                      src={item.imagen}
                      alt={item.alt}
                      referrerPolicy="no-referrer"
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                  <figcaption className="pt-4 text-center px-2">
                    <span className="inline-block text-xs font-extrabold tracking-widest text-[#C9316E] tabular-nums">
                      OPCIÓN {item.numero}
                    </span>
                    <div className="mt-1 text-base sm:text-lg font-extrabold text-[#733C1D]">
                      {item.nombre}
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          <div className="flex items-center justify-between pointer-events-none absolute inset-y-0 left-2 right-2 sm:left-4 sm:right-4">
            <button
              type="button"
              onClick={() => goToSlide(activeSlide - 1)}
              aria-label="Postre anterior"
              className="pointer-events-auto w-11 h-11 rounded-full bg-[#733C1D] hover:bg-[#4A2410] text-white grid place-items-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => goToSlide(activeSlide + 1)}
              aria-label="Siguiente postre"
              className="pointer-events-auto w-11 h-11 rounded-full bg-[#733C1D] hover:bg-[#4A2410] text-white grid place-items-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-1.5 max-w-md mx-auto mt-4">
            {POSTRES_GALERIA.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Ir a ${item.nombre}`}
                onClick={() => goToSlide(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === activeSlide ? 'w-7 bg-white' : 'w-2.5 bg-white/55 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-8 text-center">
          <p className="text-base sm:text-lg text-white leading-relaxed">
            Desde los sabores más clásicos hasta los más irresistibles, tendrás opciones para armar
            un <strong className="font-extrabold text-[#FFF4B0]">menú variado</strong> y complacer{' '}
            <strong className="font-extrabold text-[#FFF4B0]">
              todos los gustos de la mesa navideña.
            </strong>
          </p>

          <button
            type="button"
            onClick={scrollToOffer}
            className="btn-sheen mt-7 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white hover:bg-[#FFF8FA] text-[#C9316E] font-black text-base tracking-wide shadow-[0_10px_24px_rgba(74,36,16,0.2)] transition-transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>ELEGIR MI COMBO</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="absolute bottom-0 inset-x-0">
          <WaveDivider fill="#FFFAF5" />
        </div>
      </section>

      {/* 3. PROBLEMA Y SOLUCIÓN */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-5 grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative pb-4 pr-4">
            <div
              className="absolute top-3 left-3 right-0 bottom-0 rounded-[28px] border-2 border-dashed border-[#F288B8] pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative rounded-[28px] overflow-hidden shadow-[0_12px_34px_rgba(115,60,29,0.14)] bg-[#F5EEE8]">
              <img
                src={PRODUCT_IMAGES.panorama}
                alt="Postres en bandeja listos para servir en la mesa de Navidad"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="hidden sm:block absolute -right-2 -bottom-4 z-10">
              <RotatingSeal />
            </div>
          </div>

          <div className="space-y-4">
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#733C1D] leading-tight"
              style={{ textWrap: 'balance' }}
            >
              ¿Ya sabes qué vas a ofrecer a tus clientes?
            </h2>

            <p className="text-base sm:text-lg leading-relaxed">
              Cada fin de año ocurre lo mismo: la demanda de postres aumenta, los clientes empiezan
              a preguntar <em>“¿qué vas a tener para Navidad?”</em>, y surge la duda sobre qué
              productos ofrecer, qué sabores preparar y cuánto se alcanza a producir...
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Y si ya intentaste lograrlo por tu cuenta, sabes cómo es:{' '}
              <strong className="text-[#733C1D]">
                receta que no toma punto, crema que se corta, ingredientes desperdiciados y horas
                perdidas haciendo pruebas.
              </strong>
            </p>

            <div className="rounded-2xl bg-[#FCE9F1] border border-[#F288B8]/50 px-5 py-4">
              <p className="text-lg sm:text-xl font-bold text-[#C9316E]">
                ¡Pero a fin de año no queda tiempo para equivocarse!
              </p>
            </div>

            <p className="text-base sm:text-lg leading-relaxed">
              ¡Justamente ahí es donde los{' '}
              <strong className="text-[#C9316E]">postres en bandeja</strong> marcan la diferencia!
              Son hermosos, deliciosos, listos para llevar directo a la mesa y{' '}
              <strong className="text-[#733C1D]">
                exactamente lo que el cliente busca para servir a su familia en Navidad.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Cinta intermedia café */}
      <MarqueeRibbon
        variant="brown"
        items={[
          'RECETAS PROBADAS',
          'INGREDIENTES Y CANTIDADES',
          'MONTAJE EN CAPAS',
          'CONSERVACIÓN',
          'PRESENTACIÓN',
        ]}
      />

      {/* 4. BONOS EXCLUSIVOS DEL COMBO COMPLETO */}
      <section
        id="bonos"
        className="relative bg-gradient-to-b from-[#B7A6FF] to-[#A392FF] text-white pt-24 pb-24"
      >
        <div className="absolute top-0 inset-x-0">
          <WaveDivider fill="#733C1D" flip />
        </div>

        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto">
            <h2
              className="text-2xl sm:text-4xl font-bold text-white leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Bonos exclusivos del{' '}
              <em className="not-italic text-[#FFF4B0]">Combo Completo</em>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-white/95">
              Estos cuatro bonos adicionales se incluyen únicamente al elegir el Combo Completo.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Bono 1: Guía de envases y presentación */}
            <div className="relative bg-[#C9316E] rounded-3xl p-7 pt-10 shadow-[0_18px_40px_rgba(74,36,16,0.24)] flex flex-col items-center text-center">
              <span className="absolute -top-4 left-6 bg-[#FFF4B0] text-[#733C1D] font-black text-xs sm:text-sm tracking-wider px-4 py-1.5 rounded-xl -rotate-2 shadow-md">
                EXCLUSIVO COMBO COMPLETO
              </span>

              <div className="w-60 sm:w-64 aspect-square flex items-center justify-center animate-snt-float">
                <img
                  src={PRODUCT_IMAGES.bono1Envases}
                  alt="Bono 1: Guía de envases y presentación"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain drop-shadow-[0_18px_28px_rgba(74,36,16,0.32)]"
                />
              </div>

              <div className="mt-5 text-[11px] font-extrabold tracking-widest uppercase text-[#FFF4B0]">
                Bono 1 · Combo Completo
              </div>
              <h3 className="mt-1 text-2xl font-extrabold text-white">
                Guía de envases y presentación
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#FFE9F2] leading-relaxed">
                Orientaciones para elegir envases adecuados y cuidar la presentación de tus postres,
                con <strong className="text-white">etiquetas y tarjetas imprimibles</strong> listas
                para usar en tus entregas.
              </p>
            </div>

            {/* Bono 2: Calculadora de precios */}
            <div className="relative bg-[#733C1D] rounded-3xl p-7 pt-10 shadow-[0_18px_40px_rgba(74,36,16,0.24)] flex flex-col items-center text-center">
              <span className="absolute -top-4 left-6 bg-[#FFF4B0] text-[#733C1D] font-black text-xs sm:text-sm tracking-wider px-4 py-1.5 rounded-xl -rotate-2 shadow-md">
                EXCLUSIVO COMBO COMPLETO
              </span>

              <div className="w-60 sm:w-64 aspect-square flex items-center justify-center animate-snt-float">
                <img
                  src={PRODUCT_IMAGES.bono2Calculadora}
                  alt="Bono 2: Calculadora de precios"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain drop-shadow-[0_18px_28px_rgba(74,36,16,0.32)]"
                />
              </div>

              <div className="mt-5 text-[11px] font-extrabold tracking-widest uppercase text-[#FFF4B0]">
                Bono 2 · Combo Completo
              </div>
              <h3 className="mt-1 text-2xl font-extrabold text-white">
                Calculadora de precios
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#FFE9F2] leading-relaxed">
                Calcula tus costos, precio de venta y margen.
              </p>
              <p className="mt-1.5 text-sm font-bold text-[#FFF4B0]">
                Formato: hoja de cálculo editable.
              </p>
            </div>

            {/* Bono 3: Planner de pedidos */}
            <div className="relative bg-[#C9316E] rounded-3xl p-7 pt-10 shadow-[0_18px_40px_rgba(74,36,16,0.24)] flex flex-col items-center text-center">
              <span className="absolute -top-4 left-6 bg-[#FFF4B0] text-[#733C1D] font-black text-xs sm:text-sm tracking-wider px-4 py-1.5 rounded-xl -rotate-2 shadow-md">
                EXCLUSIVO COMBO COMPLETO
              </span>

              <div className="w-60 sm:w-64 aspect-square flex items-center justify-center animate-snt-float">
                <img
                  src={PRODUCT_IMAGES.bono3Planner}
                  alt="Bono 3: Planner de pedidos"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain drop-shadow-[0_18px_28px_rgba(74,36,16,0.32)]"
                />
              </div>

              <div className="mt-5 text-[11px] font-extrabold tracking-widest uppercase text-[#FFF4B0]">
                Bono 3 · Combo Completo
              </div>
              <h3 className="mt-1 text-2xl font-extrabold text-white">
                Planner de pedidos
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#FFE9F2] leading-relaxed">
                Organiza tus pedidos, entregas y pagos.
              </p>
              <p className="mt-1.5 text-sm font-bold text-[#FFF4B0]">
                Formato: hoja de cálculo editable.
              </p>
            </div>

            {/* Bono 4: Kit de promoción */}
            <div className="relative bg-[#733C1D] rounded-3xl p-7 pt-10 shadow-[0_18px_40px_rgba(74,36,16,0.24)] flex flex-col items-center text-center">
              <span className="absolute -top-4 left-6 bg-[#FFF4B0] text-[#733C1D] font-black text-xs sm:text-sm tracking-wider px-4 py-1.5 rounded-xl -rotate-2 shadow-md">
                EXCLUSIVO COMBO COMPLETO
              </span>

              <div className="w-60 sm:w-64 aspect-square flex items-center justify-center animate-snt-float">
                <img
                  src={PRODUCT_IMAGES.bono4KitPromocion}
                  alt="Bono 4: Kit de promoción"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain drop-shadow-[0_18px_28px_rgba(74,36,16,0.32)]"
                />
              </div>

              <div className="mt-5 text-[11px] font-extrabold tracking-widest uppercase text-[#FFF4B0]">
                Bono 4 · Combo Completo
              </div>
              <h3 className="mt-1 text-2xl font-extrabold text-white">
                Kit de promoción
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#FFE9F2] leading-relaxed">
                Menús, posts, stories y mensajes para WhatsApp.
              </p>
              <p className="mt-1.5 text-xs text-[#FBEEE6]/85">
                Plantillas editables en PPTX para importar en Canva + PNG.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0">
          <WaveDivider fill="#FFF3F8" />
        </div>
      </section>

      {/* 5B. TESTIMONIOS (QUIEN LO COMPRÓ, LO APROBÓ) */}
      <section
        id="testimonios"
        className="py-16 sm:py-24"
        style={{
          background: 'linear-gradient(180deg, #FFF3F8, #F3EEFF)',
        }}
      >
        <div className="max-w-5xl mx-auto px-5 text-center">
          <h2
            className="text-2xl sm:text-4xl font-bold text-[#733C1D] leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Quien lo compró, <em className="not-italic text-[#C9316E]">lo aprobó</em>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#733C1D]/80">
            Mira lo que opinan quienes ya preparan postres con este recetario:
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto mt-8 px-4">
          <div
            ref={depoCarouselRef}
            className="flex items-start gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 sm:px-14 py-4 scrollbar-hide"
          >
            {DEPOIMENTOS.map((item, idx) => {
              const isActive = idx === activeDepoSlide;
              const parts = item.destacado ? item.texto.split(item.destacado) : null;

              return (
                <article
                  key={item.id}
                  onClick={() => goToDepoSlide(idx)}
                  className={`snap-center shrink-0 w-[85%] sm:w-[46%] lg:w-[34%] bg-white rounded-3xl p-5 sm:p-6 shadow-[0_12px_30px_rgba(115,60,29,0.1)] border border-[#F1E2D8] transition-all duration-300 cursor-pointer ${
                    isActive ? 'scale-100 opacity-100' : 'scale-[0.97] opacity-90 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-[#E9D6CA] bg-[#FFF8FA]">
                      <img
                        src={item.avatar}
                        alt={`Foto de perfil de ${item.nombre}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 text-left">
                      <div className="text-sm font-extrabold text-[#4A2B1C] truncate">
                        {item.nombre}
                      </div>
                      <div className="text-xs font-medium text-[#733C1D]/65">
                        {item.origen} · {item.tiempo}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`mt-4 rounded-2xl p-4 text-left text-sm sm:text-[15px] leading-relaxed text-[#2D221D] ${
                      item.formato === 'instagram'
                        ? 'bg-[#FFF9FB] border border-[#F9DCE8]'
                        : 'bg-[#F4F3F6]'
                    }`}
                  >
                    {parts && parts.length === 2 ? (
                      <>
                        {parts[0]}
                        <mark className="bg-[#EADFFF] text-[#4A2B1C] px-1 rounded">
                          {item.destacado}
                        </mark>
                        {parts[1]}
                      </>
                    ) : (
                      item.texto
                    )}
                  </div>

                  <div className="mt-3.5 px-1 flex items-center justify-between text-xs font-semibold text-[#733C1D]/65">
                    <span className="inline-flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 text-[#C9316E] fill-[#C9316E]" aria-hidden="true" />
                      <span>Me gusta</span>
                    </span>
                    <span>
                      {item.formato === 'mensaje' ? 'Mensaje verificado' : 'Responder'}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="flex items-center justify-between pointer-events-none absolute inset-y-0 left-2 right-2 sm:left-4 sm:right-4">
            <button
              type="button"
              onClick={() => goToDepoSlide(activeDepoSlide - 1)}
              aria-label="Testimonio anterior"
              className="pointer-events-auto w-11 h-11 rounded-full bg-[#C9316E] hover:bg-[#A8255A] text-white grid place-items-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => goToDepoSlide(activeDepoSlide + 1)}
              aria-label="Siguiente testimonio"
              className="pointer-events-auto w-11 h-11 rounded-full bg-[#C9316E] hover:bg-[#A8255A] text-white grid place-items-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {DEPOIMENTOS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Ir al testimonio de ${item.nombre}`}
                onClick={() => goToDepoSlide(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === activeDepoSlide ? 'w-7 bg-[#C9316E]' : 'w-2.5 bg-[#E6CFC2] hover:bg-[#D5B5A3]'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. OFERTA (DOS COMBOS) */}
      <section
        id="oferta"
        className="py-16 sm:py-24"
        style={{
          background: 'radial-gradient(900px 420px at 50% 0%, #F9D3E3, #FFFAF5 70%)',
        }}
      >
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto">
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#733C1D] leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Elige tu <em className="not-italic text-[#C9316E]">combo ideal</em>
            </h2>
          </div>

          {(() => {
            const comboEsencial = COMBOS_OFERTA[0];
            const comboCompleto = COMBOS_OFERTA[1];

            return (
              <div className="mt-10 flex flex-col md:grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                {/* Combo Esencial */}
                <div className="bg-white rounded-[28px] border border-[#E9D6CA] shadow-[0_14px_34px_rgba(115,60,29,0.08)] p-6 sm:p-8 flex flex-col h-full">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#733C1D] text-center">
                    {comboEsencial.titulo}
                  </h3>

                  <ul className="mt-6 space-y-3">
                    {comboEsencial.beneficios.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-[#733C1D] text-white grid place-items-center mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" aria-hidden="true" />
                        </span>
                        <span className="font-medium text-[#4A2B1C]">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-7 border-t border-[#F1E2D8] text-center">
                    <div className="mt-4 text-3xl sm:text-4xl font-black text-[#733C1D] tabular-nums">
                      {comboEsencial.preco}
                    </div>

                    <a
                      href={comboEsencial.link}
                      onClick={(e) => {
                        if (!comboEsencial.link.startsWith('http')) {
                          e.preventDefault();
                          setSelectedCombo(comboEsencial);
                          setCheckoutSubmitted(false);
                          setCheckoutOpen(true);
                        }
                      }}
                      className="btn-sheen animate-snt-btn-pulse mt-5 w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#733C1D] hover:bg-[#4A2410] text-white font-black text-base tracking-wide shadow-[0_10px_24px_rgba(115,60,29,0.22)] transition-colors cursor-pointer"
                    >
                      <span>{comboEsencial.textoBotao}</span>
                      <ArrowRight className="w-5 h-5 shrink-0" aria-hidden="true" />
                    </a>

                    <div className="mt-4 flex items-center justify-center gap-1.5 text-xs font-medium text-[#733C1D]/85">
                      <Mail className="w-3.5 h-3.5 text-[#733C1D] shrink-0" strokeWidth={1.9} aria-hidden="true" />
                      <span>Envío automático a tu e-mail</span>
                    </div>

                    <div className="mt-3 flex flex-col items-center gap-2">
                      <div className="flex items-center justify-center gap-2">
                        <span className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#FFFDF9] border border-[#EFE3D8] px-3 py-2 text-xs font-bold text-[#733C1D] whitespace-nowrap shadow-[0_1px_2px_rgba(115,60,29,0.04)]">
                          <ShieldCheck className="w-4 h-4 text-[#733C1D] shrink-0" strokeWidth={1.9} aria-hidden="true" />
                          <span>7 días de garantía</span>
                        </span>
                        <span className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#FFFDF9] border border-[#EFE3D8] px-3 py-2 text-xs font-bold text-[#733C1D] whitespace-nowrap shadow-[0_1px_2px_rgba(115,60,29,0.04)]">
                          <Lock className="w-4 h-4 text-[#733C1D] shrink-0" strokeWidth={1.9} aria-hidden="true" />
                          <span>Pago seguro</span>
                        </span>
                      </div>
                      <span className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#FFFDF9] border border-[#EFE3D8] px-3 py-2 text-xs font-bold text-[#733C1D] whitespace-nowrap shadow-[0_1px_2px_rgba(115,60,29,0.04)]">
                        <Clock className="w-4 h-4 text-[#733C1D] shrink-0" strokeWidth={1.9} aria-hidden="true" />
                        <span>Acceso inmediato</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Combo Completo (en destaque con sello "Nuestra recomendación") */}
                <div className="rounded-[30px] p-1 bg-gradient-to-br from-[#C9316E] via-[#A392FF] to-[#F288B8] shadow-[0_24px_60px_rgba(201,49,110,0.28)] flex flex-col h-full">
                  <div className="bg-white rounded-[26px] overflow-hidden flex flex-col flex-1">
                    <div className="bg-gradient-to-r from-[#C9316E] to-[#E0508C] text-white px-6 py-2.5 text-center text-xs font-black tracking-[0.16em] uppercase">
                      {comboCompleto.selo}
                    </div>

                    <div className="bg-white px-3 pt-4 pb-1">
                      <img
                        src={PRODUCT_IMAGES.comboCompletoMockup}
                        alt="Mockup del Combo Completo con recetario de 20 recetas, menú, guía de envases y kit para vender"
                        referrerPolicy="no-referrer"
                        className="w-full aspect-[3/2] object-contain"
                      />
                    </div>

                    <div className="p-6 sm:p-8 flex flex-col flex-1">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#733C1D] text-center">
                        {comboCompleto.titulo}
                      </h3>

                      <ul className="mt-6 space-y-3">
                        {comboCompleto.beneficios.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
                            <span className="shrink-0 w-5 h-5 rounded-full bg-[#C9316E] text-white grid place-items-center mt-0.5">
                              <Check className="w-3 h-3 stroke-[3]" aria-hidden="true" />
                            </span>
                            <span className="font-semibold text-[#4A2B1C]">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-7 border-t border-[#F1E2D8] text-center">
                        <div className="mt-4 text-3xl sm:text-4xl font-black text-[#C9316E] tabular-nums">
                          {comboCompleto.preco}
                        </div>

                        <a
                          href={comboCompleto.link}
                          onClick={(e) => {
                            if (!comboCompleto.link.startsWith('http')) {
                              e.preventDefault();
                              setSelectedCombo(comboCompleto);
                              setCheckoutSubmitted(false);
                              setCheckoutOpen(true);
                            }
                          }}
                          className="btn-sheen animate-snt-btn-pulse mt-5 w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#C9316E] to-[#E0508C] hover:from-[#A8255A] hover:to-[#C9316E] text-white font-black text-base tracking-wide shadow-[0_14px_30px_rgba(201,49,110,0.4)] transition-colors cursor-pointer"
                        >
                          <span>{comboCompleto.textoBotao}</span>
                          <ArrowRight className="w-5 h-5 shrink-0" aria-hidden="true" />
                        </a>

                        <div className="mt-4 flex items-center justify-center gap-1.5 text-xs font-medium text-[#733C1D]/85">
                          <Mail className="w-3.5 h-3.5 text-[#733C1D] shrink-0" strokeWidth={1.9} aria-hidden="true" />
                          <span>Envío automático a tu e-mail</span>
                        </div>

                        <div className="mt-3 flex flex-col items-center gap-2">
                          <div className="flex items-center justify-center gap-2">
                            <span className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#FFFDF9] border border-[#EFE3D8] px-3 py-2 text-xs font-bold text-[#733C1D] whitespace-nowrap shadow-[0_1px_2px_rgba(115,60,29,0.04)]">
                              <ShieldCheck className="w-4 h-4 text-[#733C1D] shrink-0" strokeWidth={1.9} aria-hidden="true" />
                              <span>7 días de garantía</span>
                            </span>
                            <span className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#FFFDF9] border border-[#EFE3D8] px-3 py-2 text-xs font-bold text-[#733C1D] whitespace-nowrap shadow-[0_1px_2px_rgba(115,60,29,0.04)]">
                              <Lock className="w-4 h-4 text-[#733C1D] shrink-0" strokeWidth={1.9} aria-hidden="true" />
                              <span>Pago seguro</span>
                            </span>
                          </div>
                          <span className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#FFFDF9] border border-[#EFE3D8] px-3 py-2 text-xs font-bold text-[#733C1D] whitespace-nowrap shadow-[0_1px_2px_rgba(115,60,29,0.04)]">
                            <Clock className="w-4 h-4 text-[#733C1D] shrink-0" strokeWidth={1.9} aria-hidden="true" />
                            <span>Acceso inmediato</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Garantía de 7 días */}
          <div className="mt-10 max-w-3xl mx-auto rounded-3xl bg-white border border-[#E9D6CA] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-[0_10px_28px_rgba(115,60,29,0.07)] text-center sm:text-left">
            <div className="shrink-0 w-20 h-20 rounded-full bg-[#FCE9F1] text-[#C9316E] grid place-items-center border border-[#F288B8]/40">
              <ShieldCheck className="w-10 h-10" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#733C1D]">
                Garantía de 7 días
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#4A2B1C]/90 leading-relaxed">
                Descarga tu recetario digital, revisa las recetas y pruébalo en tu cocina. Si dentro
                de los 7 días sientes que no es lo que buscabas, puedes solicitar el reembolso del{' '}
                <strong className="text-[#733C1D]">100% de tu compra</strong>, sin complicaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PREGUNTAS FRECUENTES */}
      <section id="preguntas" className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#733C1D]">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {PREGUNTAS_FRECUENTES.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={faq.pergunta}
                  className={`bg-white rounded-2xl border transition-colors ${
                    isOpen ? 'border-[#F288B8]' : 'border-[#F1E2D8]'
                  } shadow-[0_4px_14px_rgba(115,60,29,0.05)]`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-[#733C1D]">
                      {faq.pergunta}
                    </span>
                    <span
                      className={`shrink-0 w-7 h-7 rounded-full bg-[#FCE9F1] text-[#C9316E] grid place-items-center transition-transform duration-200 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
                      <Plus className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm sm:text-base text-[#4A2B1C]/90 leading-relaxed">
                      {faq.resposta}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[#733C1D] text-[#FBEEE6] py-10 px-5 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <BrandLogo light />
          <p className="mt-5 text-xs sm:text-sm text-[#FBEEE6]/90">
            © Postres en Bandeja. Todos los derechos reservados.
          </p>
          <p className="mt-1.5 text-xs text-[#FBEEE6]/70">
            Material 100% digital. Los resultados dependen de la dedicación y ejecución de cada
            persona.
          </p>
        </div>
      </footer>

      {/* Modal local para vista previa de checkout cuando los enlaces aún son marcadores */}
      {checkoutOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#4A2410]/60 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-checkout-titulo"
        >
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-[#E9D6CA] relative">
            <button
              type="button"
              onClick={() => setCheckoutOpen(false)}
              aria-label="Cerrar ventana"
              className="absolute right-4 top-4 w-9 h-9 rounded-full bg-[#FCE9F1] text-[#C9316E] hover:bg-[#F288B8]/30 grid place-items-center cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {!checkoutSubmitted ? (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-wider text-[#C9316E]">
                    Resumen de tu selección
                  </div>
                  <h3
                    id="modal-checkout-titulo"
                    className="mt-1 text-xl font-extrabold text-[#733C1D]"
                  >
                    {selectedCombo.titulo}
                  </h3>
                  <p className="mt-1 text-sm text-[#4A2B1C]/80 tabular-nums">
                    {selectedCombo.preco} · {selectedCombo.link}
                  </p>
                </div>

                <div>
                  <label htmlFor="nombre-comprador" className="block text-xs font-bold text-[#733C1D] mb-1">
                    Tu nombre completo
                  </label>
                  <input
                    id="nombre-comprador"
                    type="text"
                    required
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    placeholder="Ej.: Sofía Martínez"
                    className="w-full rounded-xl border border-[#E9D6CA] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#C9316E]"
                  />
                </div>

                <div>
                  <label htmlFor="email-comprador" className="block text-xs font-bold text-[#733C1D] mb-1">
                    Correo electrónico para recibir el material
                  </label>
                  <input
                    id="email-comprador"
                    type="email"
                    required
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    placeholder="tucorreo@ejemplo.com"
                    className="w-full rounded-xl border border-[#E9D6CA] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#C9316E]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-sheen w-full py-3.5 rounded-2xl bg-[#C9316E] hover:bg-[#A8255A] text-white font-black text-sm tracking-wide shadow-md cursor-pointer"
                >
                  CONTINUAR AL PAGO
                </button>
              </form>
            ) : (
              <div className="text-center py-4 space-y-3">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#FCE9F1] text-[#C9316E] grid place-items-center">
                  <Check className="w-7 h-7 stroke-[2.5]" />
                </div>
                <h3
                  id="modal-checkout-titulo"
                  className="text-xl font-extrabold text-[#733C1D]"
                >
                  Vista previa de checkout
                </h3>
                <p className="text-sm text-[#4A2B1C]/85 leading-relaxed">
                  Hola, <strong>{buyerName}</strong>. El enlace configurado actualmente es{' '}
                  <strong>{selectedCombo.link}</strong> ({selectedCombo.titulo} —{' '}
                  {selectedCombo.preco}). No se realizó ningún cobro.
                </p>
                <button
                  type="button"
                  onClick={() => setCheckoutOpen(false)}
                  className="mt-2 px-6 py-2.5 rounded-xl bg-[#733C1D] text-white text-sm font-bold cursor-pointer"
                >
                  Volver a la página
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
