import StatCard from '../cards/StatCard'
import ScrollReveal from '../animations/ScrollReveal'

const stats = [
  { value: '150', suffix: '+', label: 'Projects Delivered' },
  { value: '98', suffix: '%', label: 'Client Satisfaction' },
  { value: '5', suffix: 'yr', label: 'Years in Business' },
  { value: '40', suffix: '+', label: 'Happy Clients' },
]

export default function StatsSection() {
  return (
    <section className="py-20 border-y" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg)' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 80}>
              <StatCard {...stat} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}