import SEOHead from '../components/ui/SEOHead'
import SectionHeading from '../components/ui/SectionHeading'
import StatsSection from '../components/sections/StatsSection'
import AboutSection from '../components/sections/AboutSection'
import ScrollReveal from '../components/animations/ScrollReveal'
import tt13Img from '../assets/tt13.png'


export default function About() {
  return (
    <>
      <SEOHead title="About Us" pathname="/about" description="Learn about The Tree Service Clearence and our commitment to safe, professional tree care for homes and businesses." />

      {/* Hero */}
     <section className="relative pt-40 pb-20 bg-emerald-100 overflow-hidden">
        {/* tt13.png — decorative top layer, sits above every image/card in this section */}
        <img
          src={tt13Img}
          alt=""
          aria-hidden
          className="absolute  right-[4%] w-40 md:w-56 h-auto object-contain pointer-events-none z-[999]"
        />

        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              eyebrow="About Us"
              title="Rooted in Craft, Grown Through Trust"
            />
          </ScrollReveal>

          <ScrollReveal delay={100} className="mt-12 prose prose-invert max-w-3xl mx-auto text-black text-lg leading-relaxed space-y-4">
            <p>
              What started as a single crew with a truck and a chainsaw has grown into a full-service tree care company trusted by homeowners and businesses across the area. Our approach is simple: assess honestly, work safely, and leave every property cleaner than we found it.
            </p>
            <p>
              Every job gets the same level of care — whether it's a single storm-damaged limb or a full-property clearing. We believe in upfront pricing, punctual crews, and work that holds up long after we've packed up the truck.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <StatsSection />
      <AboutSection />
      
     
    </>
  )
}