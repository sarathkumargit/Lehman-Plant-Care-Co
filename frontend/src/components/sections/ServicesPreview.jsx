import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../cards/ServiceCard'
import ScrollReveal from '../animations/ScrollReveal'
import ParallaxScene from './ParallaxScene'
import { services } from '../../data/services'

export default function ServicesPreview() {
  const preview = services.slice(0, 3)

  return (
    <section className="relative py-32 overflow-hidden" style={{ background: 'var(--color-surface)' }}>
      <ParallaxScene />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Services Built for Growth"
            description="Everything your business needs to succeed online — designed, built, and optimized by experts."
          />
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {preview.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 100}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors group"
          >
            View all services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}