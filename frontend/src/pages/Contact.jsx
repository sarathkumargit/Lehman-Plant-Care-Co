import SEOHead from '../components/ui/SEOHead'
import SectionHeading from '../components/ui/SectionHeading'
import ContactForm from '../components/forms/ContactForm'
import ScrollReveal from '../components/animations/ScrollReveal'
import { siteConfig } from '../data/siteConfig'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  { Icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { Icon: Phone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { Icon: MapPin, label: 'Address', value: siteConfig.address },
  { Icon: Clock, label: 'Hours', value: 'Mon–Fri, 9am–6pm EST' },
]

export default function Contact() {
  return (
    <>
      <SEOHead title="Contact" pathname="/contact" description="Get in touch with KD Websites to start your project." />

      <section className="pt-40 pb-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Contact Us"
              title="Let's Build Something Together"
              description="Tell us about your project and we'll get back to you within 24 hours."
            />
          </ScrollReveal>

          <div className="mt-16 grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <ScrollReveal className="lg:col-span-2 space-y-6">
              {contactInfo.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-neutral-500 text-xs font-medium uppercase tracking-wide">{label}</p>
                    {href ? (
                      <a href={href} className="text-white hover:text-amber-400 transition-colors text-sm mt-0.5 block">
                        {value}
                      </a>
                    ) : (
                      <p className="text-white text-sm mt-0.5">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={100} className="lg:col-span-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8">
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}