import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import ScrollReveal from '../animations/ScrollReveal'
import SlideIn from '../animations/SlideIn'

export default function AboutSection() {
  return (
    <section className="relative py-32 overflow-hidden" style={{ background: 'var(--color-surface)' }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual panel */}
          <SlideIn from="left">
            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/10">
              {/* Layered depth cards */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-emerald-400" />
              <div
                className="absolute top-8 left-8 right-8 bottom-8 rounded-2xl glass flex items-center justify-center animate-breathe"
              >
                <div className="text-center">
                  <div className="text-7xl font-bold text-gradient mb-2">5+</div>
                  <div className="text-emerald-700 font-medium">Years of Excellence</div>
                </div>
              </div>
              {/* Floating stat cards */}
              <div className="absolute top-4 right-4 glass rounded-2xl px-4 py-3 animate-float-medium" style={{ animationDelay: '0.5s' }}>
                <div className="text-emerald-900 font-bold text-lg">150+</div>
                <div className="text-emerald-600 text-xs">Projects</div>
              </div>
              <div className="absolute bottom-4 left-4 glass rounded-2xl px-4 py-3 animate-float-medium" style={{ animationDelay: '1s' }}>
                <div className="text-emerald-900 font-bold text-lg">98%</div>
                <div className="text-emerald-600 text-xs">Satisfaction</div>
              </div>
            </div>
          </SlideIn>

          {/* Text */}
          <SlideIn from="right">
            <SectionHeading
              eyebrow="About Us"
              title="Passionate About Digital Excellence"
              align="left"
            />
            <p className="mt-4 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              We're a team of designers, developers, and strategists who believe every business deserves a website that works as hard as they do.
            </p>
            <p className="mt-3 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Since 2019, we've helped 40+ businesses across industries transform their online presence and drive measurable results.
            </p>
            <Button as={Link} to="/about" variant="outline" className="mt-8">
              Our Story <ArrowRight size={16} />
            </Button>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}