import SEOHead from '../components/ui/SEOHead'
import SectionHeading from '../components/ui/SectionHeading'
import StatsSection from '../components/sections/StatsSection'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import ScrollReveal from '../components/animations/ScrollReveal'


export default function About() {
  return (
    <>
      <SEOHead title="About Us" pathname="/about" description="Learn about the KD Websites team and our mission to build world-class web experiences." />

      {/* Hero */}
      <section className="pt-40 pb-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              eyebrow="About KD Websites"
              title="We Turn Ideas Into Digital Reality"
              description="Founded in 2019, we're a passionate team of designers and developers who believe great websites are a business's most powerful asset."
            />
          </ScrollReveal>

          <ScrollReveal delay={100} className="mt-12 prose prose-invert max-w-3xl mx-auto text-neutral-400 text-lg leading-relaxed space-y-4">
            <p>
              What started as a two-person freelance studio has grown into a full-service web agency trusted by businesses across the globe. Our approach is simple: listen deeply, design boldly, and build with precision.
            </p>
            <p>
              Every project we take on gets the same level of care — whether you're a local café or a funded startup. We believe in transparent pricing, honest timelines, and work that actually moves the needle.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <StatsSection />
      <WhyChooseUs />
     
    </>
  )
}