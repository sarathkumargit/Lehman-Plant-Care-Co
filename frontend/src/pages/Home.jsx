import { Link } from 'react-router-dom'
import SEOHead from '../components/ui/SEOHead'
import HeroSection from '../components/sections/HeroSection'
import StatsSection from '../components/sections/StatsSection'
import ServicesPreview from '../components/sections/ServicesPreview'
import AboutSection from '../components/sections/AboutSection'
import Button from '../components/ui/Button'

export default function Home() {
  return (
    <div style={{ background: 'var(--color-bg)' }}>
      <SEOHead pathname="/" />
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <AboutSection />

      {/*
        Lightweight CTA instead of embedding the full Contact page.
        The homepage used to render <Contact /> in full here, which
        silently pulled the Google Maps SDK, the GHL/LeadConnector
        form widget, and a second set of SEO <head> tags into every
        homepage load even though nobody had asked to see the form
        yet. Those heavy embeds now only load on /contact, and only
        once the form scrolls into view there.
      */}
      <section className="py-20 text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-950">
          Ready to get started?
        </h2>
        <p className="mt-3 text-emerald-700 max-w-md mx-auto">
          Tell us about your project and we'll get back to you within 24 hours.
        </p>
        <div className="mt-6">
          <Button as={Link} to="/contact" size="lg">
            Get a Free Quote
          </Button>
        </div>
      </section>
    </div>
  )
}