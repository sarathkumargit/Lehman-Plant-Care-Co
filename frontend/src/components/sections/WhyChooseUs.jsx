import { ShieldCheck, Clock, BadgeDollarSign, Trees, Truck, Phone } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import FeatureCard from '../cards/FeatureCard'
import ScrollReveal from '../animations/ScrollReveal'
import ParallaxScene from './ParallaxScene'

const features = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    description: 'Fully insured crews and rigging done to industry safety standards — your property is covered.',
  },
  {
    icon: Trees,
    title: 'Certified Arborists',
    description: 'Trained eyes on every job. We assess tree health honestly and only cut what needs cutting.',
  },
  {
    icon: Clock,
    title: '24/7 Storm Response',
    description: 'Fallen limb or a tree on the roof? We answer emergency calls day or night.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Upfront Pricing',
    description: 'Free written quotes with no hidden fees. The price we quote is the price you pay.',
  },
  {
    icon: Truck,
    title: 'Full Cleanup Included',
    description: 'Chips, limbs and debris hauled away. We leave your yard cleaner than we found it.',
  },
  {
    icon: Phone,
    title: 'Punctual & Responsive',
    description: 'We show up when we say we will, and we pick up the phone when you call.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-32 overflow-hidden" style={{ background: 'var(--color-surface)' }}>
      <ParallaxScene />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Safe Hands, Clean Work, Fair Price"
            description="Tree work is heavy, technical and unforgiving of shortcuts. Here's what you get when you hire our crews."
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