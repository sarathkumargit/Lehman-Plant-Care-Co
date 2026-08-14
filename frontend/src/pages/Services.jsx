import { useEffect, useRef, useState } from 'react'
import SEOHead from '../components/ui/SEOHead'
import SectionHeading from '../components/ui/SectionHeading'
import ServiceCard from '../components/cards/ServiceCard'
import ScrollReveal from '../components/animations/ScrollReveal'
import { services } from '../data/services'
import ParallaxScene from '../components/sections/ParallaxScene'
import { clamp } from '../hooks/useCinematicScroll'
import truckImg from '../assets/truck.png'
import cutImg   from '../assets/cut.png'
import roadImg  from '../assets/road.jpg'

export default function Services() {
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
  const cutStartY = -220
  const cutEndY   = 700
  const cutY      = cutStartY + progress * (cutEndY - cutStartY)

  return (
    <>
      <SEOHead title="Services" pathname="/services" />

      <section
        ref={sectionRef}
        className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 md:pb-32 overflow-hidden"
      >
        <ParallaxScene />

        {/* LAYER 0 — road.jpg background */}
        <div className="absolute inset-0 z-[0] pointer-events-none overflow-hidden">
          <img
            src={roadImg}
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            style={{
              transform: `translate3d(0, ${-progress * 60}px, 0) scale(1.15)`,
              transformOrigin: 'center center',
              opacity: 0.90,
            }}
          />
        </div>

        {/*
          LAYER 1 — cut.png rises BOTTOM → TOP.
          Hidden on phones (per the pattern used on the Hero/About
          pages) — decorative only, and cramped screens don't have
          room for it without overlapping the service cards.
        */}
        <div
          className="hidden sm:block absolute left-[5%] z-[5] pointer-events-none w-[42%] sm:w-[38%] md:w-1/2"
          style={{
            top: 0,
            maxWidth: '340px',
            transform: `translate3d(0, ${cutY}px, 0)`,
            opacity: clamp(progress * 3.5, 0, 1),
          }}
        >
          <img
            src={cutImg}
            alt=""
            aria-hidden
            className="w-full h-auto object-contain"
            style={{
              transform: `rotate(${8 - progress * 12}deg) scale(${0.85 + progress * 0.30})`,
              transformOrigin: 'bottom center',
              filter: 'drop-shadow(0 12px 28px rgba(0,0,0,0.18))',
            }}
          />
        </div>

        {/* LAYER 2 — services grid */}
        <div className="container mx-auto px-4 relative z-[10]">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Services"
              title="Everything You Need to Succeed Online"
              description="A complete suite of digital services delivered by a team that genuinely cares about your results."
            />
          </ScrollReveal>

          <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 80} id={service.id}>
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/*
          LAYER 3 — truck travels LEFT → RIGHT.
          Also hidden on phones — same reasoning as the cut layer,
          and its animated X-translate is wide enough to cause
          horizontal overflow on narrow viewports.
        */}
        <div
          className="hidden sm:block absolute bottom-0 z-[50] pointer-events-none w-[38%] sm:w-[42%] md:w-[44%]"
          style={{
            left: 0,
            maxWidth: '580px',
            transform: `translate3d(${truckX}px, 0, 0)`,
            opacity: clamp(progress * 2.5, 0, 1),
          }}
        >
          <img
            src={truckImg}
            alt=""
            aria-hidden
            className="w-full h-auto object-contain"
            style={{
              transform: `scale(${1 + progress * 0.1})`,
              transformOrigin: 'bottom center',
              filter: 'drop-shadow(-8px 0 24px rgba(0,0,0,0.25))',
            }}
          />
        </div>
      </section>
    </>
  )
}