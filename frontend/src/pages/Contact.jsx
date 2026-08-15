import { useEffect, useRef, useState } from 'react'
import SEOHead from '../components/ui/SEOHead'
import SectionHeading from '../components/ui/SectionHeading'
import GHLOptInForm from '../components/forms/GHLOptInForm'
import LocationMap from '../components/forms/LocationMap'
import cutImg from '../assets/cut.webp'
import { clamp } from '../hooks/useCinematicScroll'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import ww1 from '../assets/ww1.webp'

import { siteConfig } from '../data/siteConfig'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  { Icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { Icon: Phone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { Icon: MapPin, label: 'Address', value: siteConfig.address },
  { Icon: Clock, label: 'Hours', value: 'Mon–Sat, 8am–6pm EST' },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [sectionHeight, setSectionHeight] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)
  const rafRef = useRef(null)

  // The map iframe and the GHL form widget (and everything it pulls in —
  // LeadConnector's CDN, Google Maps' JS SDK, the Facebook pixel) are the
  // heaviest things on this page. Don't mount either until this block is
  // actually scrolled near, instead of paying for them on first paint.
  const { ref: formAreaRef, hasIntersected: formAreaVisible } = useIntersectionObserver({
    rootMargin: '400px 0px',
  })

  // Only mount/animate the decorative image on desktop — on mobile it's
  // skipped entirely so the browser never even downloads cut.png.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        if (!sectionRef.current) return
        const rect = sectionRef.current.getBoundingClientRect()
        // Animates over one screen-height as the section's top edge
        // travels from the bottom of the viewport to the top — independent
        // of how tall the section itself is, so it never "snaps".
        const p = clamp(1 - rect.top / window.innerHeight, 0, 1)
        setProgress(p)
        setSectionHeight(sectionRef.current.offsetHeight)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [isDesktop])

  // cut.png travels TOP → BOTTOM as the section scrolls through the viewport,
  // landing near the bottom of the section (derived from real section height).
  const cutStartY = -200
  const cutEndY = Math.max(1150, sectionHeight - 280)
  const cutY = cutStartY + progress * (cutEndY - cutStartY)

  return (
    <>
      <SEOHead title="Contact" pathname="/contact" description="Get in touch with KD Websites to start your project." />
         <section className="relative pt-40 pb-10 overflow-hidden">
        <img
                 src={ww1}
                 alt=""
                 aria-hidden
                 width={2225}
                 height={1353}
                 fetchPriority="high"
                 className="absolute inset-0 w-full h-full object-cover"
               />
          </section>
             
      <section ref={sectionRef} className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        {/* cut.png — desktop only, travels top → bottom, fades in as it moves */}
        {isDesktop && (
          <div
            className="absolute left-[5%] z-[100] pointer-events-none"
            style={{
              top: 0,
              width: '32%',
              maxWidth: '200px',
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
                transform: `rotate(${8 - progress * 12}deg) scale(${0.85 + progress * 1})`,
                transformOrigin: 'bottom center',
                filter: 'drop-shadow(0 12px 28px rgba(0,0,0,0.18))',
              }}
            />
          </div>
        )}

        <div className="container mx-auto px-2 relative z-10">
          <SectionHeading
            eyebrow="Contact Us"
            title="Let's Build Something Together"
            description="Tell us about your project and we'll get back to you within 24 hours."
          />

          <div className="mt-5 lg:mt-16 grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-300 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-emerald-950" />
                  </div>
                  <div>
                    <p className="text-neutral-500 text-xs font-medium uppercase tracking-wide">{label}</p>
                    {href ? (
                      <a href={href} className="text-emerald-950 hover:text-emerald-700 transition-colors text-sm mt-0.5 block">
                        {value}
                      </a>
                    ) : (
                      <p className="text-emerald-950 text-sm mt-0.5">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Map — mounted lazily below */}
              <div ref={formAreaRef} className="min-h-[300px]">
                {formAreaVisible ? (
                  <LocationMap />
                ) : (
                  <div className="w-full h-[300px] animate-pulse rounded-3xl bg-black/10" />
                )}
              </div>
            </div>

            {/* Form — only mounts (and only then loads the GHL widget's
                JS/CDN dependencies) once this area is scrolled near */}
            <div className="lg:col-span-3 bg-[var(--color-text)] border border-[var(--color-border)] rounded-2xl p-5 sm:p-8 min-h-[600px] lg:h-[800px]">
              {formAreaVisible ? (
                <GHLOptInForm />
              ) : (
                <div className="w-full h-full min-h-[600px] lg:min-h-0 animate-pulse rounded-xl bg-black/10" />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
