import SEOHead from '../components/ui/SEOHead'
import HeroSection from '../components/sections/HeroSection'
import StatsSection from '../components/sections/StatsSection'
import ServicesPreview from '../components/sections/ServicesPreview'
import AboutSection from '../components/sections/AboutSection'
import Contact from "./Contact";


export default function Home() {
  return (
    <div style={{ background: 'var(--color-bg)' }}>
      <SEOHead pathname="/" />
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <AboutSection />
      <Contact />
      
    
    </div>
  )
}