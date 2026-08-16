import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../cards/ServiceCard'
import ScrollReveal from '../animations/ScrollReveal'
import ParallaxScene from './ParallaxScene'
import { services } from '../../data/services'
import { clamp } from '../../hooks/useCinematicScroll'
import truckImg from '../../assets/truck.webp'
import cutImg   from '../../assets/cut.webp'
import roadImg from '../../assets/road.webp'

export default function ServicesPreview() {
  const preview = services.slice(0, 3)
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        if (!sectionRef.current) return
        const rect = sectionRef.current.getBoundingClientRect()
        const sectionH = sectionRef.current.offsetHeight
        const p = clamp(-rect.top / (sectionH - window.innerHeight), 0, 1)
        setProgress(p)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const vw = typeof window !== 'undefined' ? window.innerWidth : 1200
// ── Layer 3: truck  LEFT → RIGHT  (X only) ──
const truckStartX = -vw * 0.1
const truckEndX   = vw * 0.75
const truckX      = truckStartX + progress * (truckEndX - truckStartX)

  // ── Layer 1: cut  BOTTOM → TOP  (Y only) ──
  const cutStartY = 700
  const cutEndY   = -220
  const cutY      = cutStartY + progress * (cutEndY - cutStartY)

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      
    >
      <ParallaxScene />
      {/* ════════════════════════════════════════════
    LAYER 0 — BACKGROUND
    road.jpg  |  slow parallax drift
    z: 2  (behind everything)
════════════════════════════════════════════ */}
<div
  className="absolute inset-0 z-[0] pointer-events-none overflow-hidden"
>
  <img
    src={roadImg}
    alt=""
    aria-hidden
    width={860}
    height={484}
    loading="lazy"
    className="w-full h-full object-cover"
    style={{
      transform: `translate3d(0, ${-progress * 60}px, 0) scale(1.15)`,
      transformOrigin: 'center center',
      opacity: 0.90,
    }}
  />
</div>

      {/* ════════════════════════════════════════════
          LAYER 1 — BACK
          cut.png  |  rises BOTTOM → TOP
          X: fixed left
          Y: 700 → -220
          z: 5  (behind cards)
      ════════════════════════════════════════════ */}
      <div
        className="absolute left-[5%] z-[5] pointer-events-none"
        style={{
          top: 0,
          width: '50%',
          maxWidth: '340px',
          transform: `translate3d(0, ${cutY}px, 0)`,
          opacity: clamp(progress * 3.5, 0, 1),
        }}
      >
        <img
          src={cutImg}
          alt=""
          aria-hidden
          width={677}
          height={369}
          loading="lazy"
          className="w-full h-auto object-contain"
          style={{
            transform: `rotate(${8 - progress * 12}deg) scale(${0.85 + progress * 0.30})`,
            transformOrigin: 'bottom center',
            filter: 'drop-shadow(0 12px 28px rgba(0,0,0,0.18))',
          }}
        />
      </div>

      {/* ════════════════════════════════════════════
          LAYER 2 — CENTER
          Existing cards — untouched
          z: 10
      ════════════════════════════════════════════ */}
      <div className="container mx-auto px-4 relative z-[10]">
        <ScrollReveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Services Built for Growth"
          />
        </ScrollReveal>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {preview.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 100}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center">
          <Link
            to="/services"
            className="border px-5 py-2.5 rounded-xl text-xl inline-flex items-center gap-2 text-emerald-950 hover:text-emerald-100 font-extrabold transition-colors group"
          >
            View all services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>

      {/* ════════════════════════════════════════════
          LAYER 3 — FRONT
          truck.png  |  travels RIGHT → LEFT
          X: 75vw → -10vw
          Y: fixed at bottom
          z: 50
      ════════════════════════════════════════════ */}
      <div
        className="absolute bottom-0 z-[50] pointer-events-none"
        style={{
          left: 0,
          width: '44%',
          maxWidth: '580px',
          transform: `translate3d(${truckX}px, 0, 0)`,
          opacity: clamp(progress * 2.5, 0, 1),
        }}
      >
        <img
          src={truckImg}
          alt=""
          aria-hidden
          width={330}
          height={180}
          loading="lazy"
          className="w-full h-auto object-contain"
          style={{
            transform: `scale(${1 + progress * 0.1})`,
            transformOrigin: 'bottom center',
            filter: 'drop-shadow(-8px 0 24px rgba(0,0,0,0.25))',
          }}
        />
      </div>

    </section>
  )
}