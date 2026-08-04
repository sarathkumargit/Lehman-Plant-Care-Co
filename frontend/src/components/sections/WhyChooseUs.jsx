import { Zap, Shield, Palette, Headphones, TrendingUp, Code } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import FeatureCard from '../cards/FeatureCard'
import ScrollReveal from '../animations/ScrollReveal'
import ParallaxScene from './ParallaxScene'

const features = [
  { icon: Palette, title: 'Design-First', description: 'Every pixel is intentional — we obsess over UX and visual detail.' },
  { icon: Zap, title: 'Lightning Fast', description: 'Performance-optimized builds that score 90+ on Core Web Vitals.' },
  { icon: Shield, title: 'Secure & Reliable', description: 'Best-practice security and 99.9% uptime hosting solutions.' },
  { icon: TrendingUp, title: 'Built to Convert', description: 'Strategic layouts and CTAs designed to turn visitors into leads.' },
  { icon: Code, title: 'Clean Code', description: 'Maintainable, scalable codebases you or your team can manage.' },
  { icon: Headphones, title: 'Ongoing Support', description: "We don't disappear after launch — we're here when you need us." },
]

export default function WhyChooseUs() {
  return (
    <section className="relative py-32 overflow-hidden" style={{ background: 'var(--color-bg)' }}>
      <ParallaxScene />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The Difference Is in the Details"
            description="We combine design excellence with technical mastery to deliver websites that actually perform."
          />
        </ScrollReveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feat, i) => (
            <ScrollReveal key={feat.title} delay={i * 80}>
              <FeatureCard {...feat} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}