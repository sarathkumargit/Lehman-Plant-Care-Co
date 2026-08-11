import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Leaf, HandCoins } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import ScrollReveal from '../animations/ScrollReveal'
import SlideIn from '../animations/SlideIn'
import t2Img    from '../../assets/cut.png'

const features = [
  {
    icon: ShieldCheck,
    title: 'Safety First',
    description: 'Every job follows strict safety protocols to protect our crew, your property, and your family.',
  },
  {
    icon: Leaf,
    title: 'Environmental Care',
    description: 'We prune and remove with the long-term health of your landscape in mind, not just the quick job.',
  },
  {
    icon: HandCoins,
    title: 'Honest Pricing',
    description: 'We believe in complete pricing transparency — what we quote is what you pay, with no hidden fees.',
  },
]

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
               <div className="absolute top-8 left-8 right-8 bottom-8 rounded-2xl glass flex items-center justify-center animate-breathe overflow-hidden">
  <img
    src={t2Img}
    alt=""
    aria-hidden
    className="w-full h-full object-cover"
  />
</div>
              </div>
              {/* Floating stat cards */}
              <div className="absolute top-4 right-4 glass rounded-2xl px-4 py-3 animate-float-medium" style={{ animationDelay: '0.5s' }}>
                <div className="text-emerald-900 font-bold text-lg">100+</div>
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
              title="Who We Are"
              align="left"
            />
            <p className="mt-4 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              The Tree Service Clearence is a full-service arboriculture company serving residential and commercial properties across the metro area. Our certified arborists combine decades of hands-on experience with modern safety standards to keep your landscape healthy, safe, and beautiful.
            </p>

            <div className="mt-8 space-y-6">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-xl glass flex items-center justify-center">
                      <Icon size={20} className="text-emerald-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold" style={{ color: 'var(--color-text)' }}>
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Button as={Link} to="/about" variant="outline" className="mt-8">
              Our Story <ArrowRight size={16} />
            </Button>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}