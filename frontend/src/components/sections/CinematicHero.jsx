import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown } from 'lucide-react'
import { clamp, mapRange } from '../../hooks/useCinematicScroll'

/**
 * Cinematic 3D hero with layered parallax depth.
 * Each layer moves at a different speed creating a 3D scene effect.
 */
export default function CinematicHero() {
  const containerRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)
  const rafRef = useRef(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const h = typeof window !== 'undefined' ? window.innerHeight : 800
  const progress = clamp(scrollY / h, 0, 1)

  // Layer transforms — each layer has unique depth response
  const layers = [
    // sky / background — slowest, scales up slightly
    {
      id: 'sky',
      style: {
        transform: `translate3d(0, ${scrollY * 0.15}px, 0) scale(${1 + progress * 0.08})`,
        opacity: 1 - progress * 0.3,
        zIndex: 1,
      },
      className: 'absolute inset-0 w-full h-full',
      content: (
        <div className="w-full h-full bg-gradient-to-b from-emerald-100 via-emerald-50 to-white" />
      ),
    },
    // far background trees — slow
    {
      id: 'bg-trees',
      style: {
        transform: `translate3d(${scrollY * -0.03}px, ${scrollY * 0.25}px, 0) scale(${1 + progress * 0.05})`,
        opacity: 1 - progress * 0.5,
        zIndex: 2,
      },
      className: 'absolute bottom-0 left-0 right-0 h-[70%]',
      content: <BackgroundTrees />,
    },
    // mid layer — medium speed
    {
      id: 'mid',
      style: {
        transform: `translate3d(${scrollY * 0.04}px, ${scrollY * 0.4}px, 0) scale(${1 - progress * 0.03})`,
        opacity: 1 - progress * 0.6,
        zIndex: 3,
      },
      className: 'absolute bottom-0 left-0 right-0 h-[60%]',
      content: <MidTrees />,
    },
    // hero text card — stays centered, fades & rises
    {
      id: 'text',
      style: {
        transform: `translate3d(-50%, calc(-50% + ${scrollY * 0.6}px), 0)`,
        opacity: 1 - progress * 1.4,
        zIndex: 10,
      },
      className: 'absolute top-[42%] left-1/2',
      content: <HeroText />,
    },
    // foreground trunk — fastest, moves down to exit
    {
      id: 'fg-trunk',
      style: {
        transform: `translate3d(-50%, ${scrollY * 0.7}px, 0) scale(${1 + progress * 0.1})`,
        opacity: 1 - progress * 0.8,
        zIndex: 8,
      },
      className: 'absolute bottom-[-5%] left-1/2',
      content: <ForegroundTrunk />,
    },
    // foreground left leaves — fastest, exits left
    {
      id: 'fg-left',
      style: {
        transform: `translate3d(${scrollY * -0.25}px, ${scrollY * 0.5}px, 0) scale(${1 + progress * 0.12})`,
        opacity: 1 - progress * 0.9,
        zIndex: 9,
      },
      className: 'absolute bottom-0 left-[-5%] w-[45%] h-[55%]',
      content: <ForegroundLeaves side="left" />,
    },
    // foreground right leaves — exits right
    {
      id: 'fg-right',
      style: {
        transform: `translate3d(${scrollY * 0.25}px, ${scrollY * 0.5}px, 0) scale(${1 + progress * 0.12})`,
        opacity: 1 - progress * 0.9,
        zIndex: 9,
      },
      className: 'absolute bottom-0 right-[-5%] w-[45%] h-[55%]',
      content: <ForegroundLeaves side="right" />,
    },
  ]

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100vh' }}
    >
      {/* 3D perspective wrapper */}
      <div className="absolute inset-0 scene-3d">
        {layers.map((layer) => (
          <div
            key={layer.id}
            className={`parallax-layer ${layer.className}`}
            style={layer.style}
          >
            {layer.content}
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        style={{ opacity: 1 - progress * 3 }}
      >
        <span className="text-emerald-700 text-xs font-semibold tracking-widest uppercase">Scroll</span>
        <ArrowDown size={18} className="text-emerald-600 animate-bounce" />
      </div>
    </section>
  )
}

/* ── Sub-components (SVG/CSS stand-ins until real PNGs are added) ── */

function BackgroundTrees() {
  return (
    <svg viewBox="0 0 1440 600" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
      {/* Far left tree cluster */}
      <ellipse cx="120" cy="520" rx="90" ry="130" fill="#6ee7b7" opacity="0.5" />
      <ellipse cx="200" cy="480" rx="110" ry="160" fill="#34d399" opacity="0.45" />
      {/* Far right tree cluster */}
      <ellipse cx="1320" cy="510" rx="90" ry="140" fill="#6ee7b7" opacity="0.5" />
      <ellipse cx="1230" cy="480" rx="110" ry="150" fill="#34d399" opacity="0.45" />
      {/* Center far canopy */}
      <ellipse cx="720" cy="400" rx="300" ry="220" fill="#a7f3d0" opacity="0.35" />
      {/* Ground mist */}
      <ellipse cx="720" cy="600" rx="760" ry="80" fill="#d1fae5" opacity="0.6" />
    </svg>
  )
}

function MidTrees() {
  return (
    <svg viewBox="0 0 1440 500" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
      <ellipse cx="300" cy="420" rx="160" ry="200" fill="#10b981" opacity="0.4" />
      <ellipse cx="1140" cy="430" rx="150" ry="190" fill="#10b981" opacity="0.4" />
      <ellipse cx="680" cy="380" rx="200" ry="240" fill="#059669" opacity="0.3" />
      <rect x="660" y="380" width="40" height="120" fill="#065f46" opacity="0.4" rx="4" />
      <rect x="280" y="440" width="30" height="80" fill="#065f46" opacity="0.35" rx="3" />
      <rect x="1120" y="450" width="30" height="70" fill="#065f46" opacity="0.35" rx="3" />
    </svg>
  )
}

function ForegroundTrunk() {
  return (
    <svg
      viewBox="0 0 300 500"
      className="w-[260px] md:w-[340px]"
      style={{ marginLeft: '-50%' }}
    >
      {/* Main trunk */}
      <path
        d="M120 500 C115 400 100 320 130 250 C150 200 140 150 150 100 C160 150 155 200 170 250 C200 320 185 400 180 500Z"
        fill="#065f46"
        opacity="0.85"
      />
      {/* Left branch */}
      <path d="M135 280 C100 260 60 250 30 230" stroke="#064e3b" strokeWidth="18" fill="none" strokeLinecap="round" opacity="0.75" />
      {/* Right branch */}
      <path d="M165 260 C200 240 240 235 270 215" stroke="#064e3b" strokeWidth="16" fill="none" strokeLinecap="round" opacity="0.75" />
      {/* Canopy cluster */}
      <ellipse cx="150" cy="90" rx="110" ry="100" fill="#059669" opacity="0.8" />
      <ellipse cx="100" cy="110" rx="70" ry="80" fill="#10b981" opacity="0.7" />
      <ellipse cx="200" cy="105" rx="75" ry="75" fill="#10b981" opacity="0.7" />
      <ellipse cx="30" cy="220" rx="60" ry="65" fill="#059669" opacity="0.65" />
      <ellipse cx="270" cy="205" rx="65" ry="60" fill="#059669" opacity="0.65" />
    </svg>
  )
}

function ForegroundLeaves({ side }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full"
      style={{ transform: side === 'right' ? 'scaleX(-1)' : 'none' }}
    >
      <ellipse cx="50" cy="350" rx="200" ry="180" fill="#059669" opacity="0.7" />
      <ellipse cx="150" cy="280" rx="180" ry="160" fill="#10b981" opacity="0.65" />
      <ellipse cx="80" cy="200" rx="140" ry="130" fill="#34d399" opacity="0.5" />
      <ellipse cx="220" cy="320" rx="120" ry="120" fill="#059669" opacity="0.6" />
    </svg>
  )
}

function HeroText() {
  return (
    <div className="glass rounded-3xl px-8 py-10 md:px-12 md:py-12 text-center max-w-xl w-[90vw] shadow-2xl shadow-emerald-900/10">
      <span className="inline-block text-emerald-600 text-xs font-bold tracking-[0.25em] uppercase mb-3">
        Premium Tree Services
      </span>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-900 leading-tight">
        Where Nature<br />
        <span className="text-gradient">Meets Expertise</span>
      </h1>
      <p className="mt-4 text-emerald-700 text-base md:text-lg leading-relaxed">
        Professional tree care delivered with precision, safety, and a deep respect for the environment.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/40 hover:-translate-y-0.5"
        >
          Get a Free Quote
        </Link>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 border border-emerald-300 text-emerald-700 font-medium px-7 py-3.5 rounded-xl hover:bg-emerald-100 transition-all"
        >
          Our Services
        </Link>
      </div>
    </div>
  )
}