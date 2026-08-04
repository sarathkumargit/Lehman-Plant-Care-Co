import SEOHead from '../components/ui/SEOHead'
import SectionHeading from '../components/ui/SectionHeading'
import ServiceCard from '../components/cards/ServiceCard'
import ScrollReveal from '../components/animations/ScrollReveal'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <SEOHead title="Services" pathname="/services" description="Web design, development, e-commerce, SEO, branding, and maintenance services from KD Websites." />

      <section className="pt-40 pb-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Services"
              title="Everything You Need to Succeed Online"
              description="A complete suite of digital services delivered by a team that genuinely cares about your results."
            />
          </ScrollReveal>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 80} id={service.id}>
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

     
    </>
  )
}