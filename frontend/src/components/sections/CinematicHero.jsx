import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown } from 'lucide-react'
import { clamp } from '../../hooks/useCinematicScroll'
import bgImg from '../../assets/ww1.png'

import t2Img    from '../../assets/cut.png'
import t4Img    from '../../assets/tt11.png'
import tt3Img   from '../../assets/tt13.png'
import leftImg  from '../../assets/tt13.png'
import rightImg from '../../assets/tt13.png'
import fgImg    from '../../assets/t2.png'

export default function CinematicHero() {
  const containerRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => setScrollY(window.scrollY))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const h = typeof window !== 'undefined' ? window.innerHeight : 800
  const progress = clamp(scrollY / h, 0, 1)

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100vh' }}
    >

      {/* ══════════════════════════════════════
    LAYER 1 — background image
    z: 1  |  slowest parallax
══════════════════════════════════════ */}
<div
  className="absolute inset-0 z-[1]"
  style={{ transform: `translate3d(0, ${scrollY * 0.1}px, 0) scale(1.1)` }}
>
  <img
    src={bgImg}
    alt=""
    aria-hidden
    className="w-full h-full object-cover"
  />
  {/* Optional dark overlay — adjust opacity to taste */}
  <div className="absolute inset-0 bg-emerald-950/20" />
</div>

      {/* ══════════════════════════════════════
          LAYER 2a — t2 TOP-LEFT zooms IN
          Scales up toward viewer on scroll.
          Stays anchored to top-left corner.
          z: 4  (above mid trees so it reads
          as coming FORWARD past them)
      ══════════════════════════════════════ */}
      <div
        className="absolute top-0 left-0 z-[4] w-[26%] h-[58%] pointer-events-none"
        style={{
          transform: `scale(${1 + progress * 0.55})`,
          transformOrigin: 'top left',
          opacity: clamp(1 - progress * 0.15, 0, 1),
        }}
      >
    <img
  src={t2Img}
  alt=""
  aria-hidden
  className="w-full object-contain object-top"
  style={{
    transform: `rotate(-4deg) translateY(${scrollY * 1.8}px)`,
    transformOrigin: 'top left',
    height: '200%',
  }}
/>
      </div>

      {/* ══════════════════════════════════════
          LAYER 2b — t4 TOP-RIGHT zooms IN
          Mirror of t2, anchored top-right.
          z: 4
      ══════════════════════════════════════ */}
      <div
        className="absolute top-0 right-0 z-[4] w-[24%] h-[55%] pointer-events-none"
        style={{
          transform: `scale(${1 + progress * 0.55})`,
          transformOrigin: 'top right',
          opacity: clamp(1 - progress * 0.15, 0, 1),
        }}
      >
        <img
          src={t4Img}
          alt=""
          aria-hidden
          className="w-full h-full object-contain object-top"
          style={{ transform: 'rotate(3deg)', transformOrigin: 'top right' }}
        />
      </div>

      {/* ══════════════════════════════════════
          LAYER 2c — tt3 recedes (exits right)
          z: 2  |  parallax: recede away
      ══════════════════════════════════════ */}
      <div
        className="absolute bottom-[8%] left-[58%] z-[2] w-[16%] h-[42%] pointer-events-none"
        style={{
          transform: `translate3d(${scrollY * 0.2}px, ${scrollY * 0.25}px, 0) scale(${1 - progress * 0.3}) rotate(2deg)`,
          transformOrigin: 'bottom center',
          opacity: clamp(1 - progress * 0.9, 0, 1),
        }}
      >
        <img
          src={tt3Img}
          alt=""
          aria-hidden
          className="w-full h-full object-contain object-bottom"
        />
      </div>

      {/* ══════════════════════════════════════
          LAYER 3 — mid plane trees (recede)
          z: 3  |  parallax: 0.35
      ══════════════════════════════════════ */}

      {/* Left — exits left */}
      <div
        className="absolute bottom-0 left-0 z-[3] w-[38%] h-[75%]"
        style={{
          transform: `translate3d(${scrollY * -0.18}px, ${scrollY * 0.35}px, 0)`,
          opacity: clamp(1 - progress * 0.7, 0, 1),
        }}
      >
        <img src={leftImg} alt="" aria-hidden className="w-full h-full object-contain object-bottom" />
      </div>

      {/* Right — exits right */}
      <div
        className="absolute bottom-0 right-0 z-[3] w-[38%] h-[75%]"
        style={{
          transform: `translate3d(${scrollY * 0.18}px, ${scrollY * 0.35}px, 0)`,
          opacity: clamp(1 - progress * 0.7, 0, 1),
        }}
      >
        <img src={rightImg} alt="" aria-hidden className="w-full h-full object-contain object-bottom" />
      </div>

      {/* ══════════════════════════════════════
          LAYER 4 — foreground center tree
          z: 8  |  drops down fastest
      ══════════════════════════════════════ */}
      <div
        className="absolute bottom-0 left-1/2 z-[8] w-[28%] max-w-xs"
        style={{
          transform: `translate3d(-50%, ${scrollY * 0.6}px, 0) scale(${1 + progress * 0.1})`,
          opacity: clamp(1 - progress * 0.9, 0, 1),
        }}
      >
        {/* <img src={fgImg} alt="" aria-hidden className="w-full object-contain object-bottom" /> */}
      </div>

      {/* ══════════════════════════════════════
          LAYER 5 — hero text card
          z: 10
      ══════════════════════════════════════ */}
      <div
        className="absolute top-[42%] left-1/2 z-[10]"
        style={{
          transform: `translate3d(-50%, calc(-50% + ${scrollY * 0.5}px), 0)`,
          opacity: clamp(1 - progress * 1.4, 0, 1),
        }}
      >
        <HeroText />
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        style={{ opacity: clamp(1 - progress * 3, 0, 1) }}
      >
        <span className="text-emerald-800/70 text-xs font-semibold tracking-widest uppercase">Scroll</span>
        <ArrowDown size={18} className="text-emerald-700/60 animate-bounce" />
      </div>

      {/* Bottom white fade */}
      

    </section>
  )
}

function HeroText() {
  return (
    <div className="rounded-3xl px-8 py-10 md:px-12 md:py-12 text-center max-w-xl w-[90vw] shadow-2xl shadow-emerald-800">
      <span className="inline-block text-emerald-800 text-xs font-bold tracking-[0.25em] uppercase mb-3">
        Premium Tree Services
      </span>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-950 leading-tight">
        The Tree Service Clearence<br />
        
      </h1>
      <p className="mt-4 text-emerald-100 text-base md:text-lg leading-relaxed">
        Professional tree care delivered with precision, safety, and a deep respect for the environment.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-emerald-800 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/40 hover:-translate-y-0.5"
        >
          Get a Free Quote
        </Link>
        <a
          href="tel:+17165892600"
          className="inline-flex items-center gap-2 border border-emerald-500 text-3xl text-emerald-50 font-medium px-7 py-3.5 rounded-xl hover:bg-emerald-800 transition-all"
        >
          716-589-2600
        </a>
      </div>
    </div>
  )
}