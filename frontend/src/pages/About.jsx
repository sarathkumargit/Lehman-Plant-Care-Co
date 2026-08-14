import SEOHead from '../components/ui/SEOHead'
import SectionHeading from '../components/ui/SectionHeading'
import StatsSection from '../components/sections/StatsSection'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import ScrollReveal from '../components/animations/ScrollReveal'
import tt13Img from '../assets/tt13.png'
import g3Img from '../assets/hero4.webp'

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us"
        pathname="/about"
        description="Learn about The Tree Service Clearence and our commitment to safe, professional tree care for homes and businesses."
      />

      {/* Hero */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 overflow-hidden">
        {/*
          g3.webp — full-bleed background layer, sits behind
          everything else in this section (z-0).
        */}
        <img
          src={g3Img}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        />
        {/* wash so the heading/copy stay readable over the photo */}
        <div className="absolute inset-0 bg-emerald-100/50 z-[0]" aria-hidden />

      

        <div className="container mx-auto px-4 relative z-[5]">
          <ScrollReveal>
            <SectionHeading eyebrow="About Us" title="Rooted in Craft, Grown Through Trust" />
          </ScrollReveal>

          <ScrollReveal
            delay={100}
            className=" font-bold mt-10 sm:mt-12 max-w-3xl mx-auto text-[var(--color-black)] text-base sm:text-lg leading-relaxed space-y-4"
          >
            <p>
              "What started as a single crew with a truck and a chainsaw has grown into a
              full-service tree care company trusted by homeowners and businesses across the
              area. Our approach is simple: assess honestly, work safely, and leave every
              property cleaner than we found it."
            </p>
            <p>
              Every job gets the same level of care — whether it's a single storm-damaged limb
              or a full-property clearing. We believe in upfront pricing, punctual crews, and
              work that holds up long after we've packed up the truck.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <StatsSection />
      <WhyChooseUs />
    </>
  )
}