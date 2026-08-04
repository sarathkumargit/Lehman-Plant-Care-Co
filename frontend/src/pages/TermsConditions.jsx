import SEOHead from '../components/ui/SEOHead'
import { siteConfig } from '../data/siteConfig'

export default function TermsConditions() {
  return (
    <>
      <SEOHead title="Terms & Conditions" pathname="/terms-conditions" noindex />

      <section className="pt-40 pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-white">Terms & Conditions</h1>
          <p className="text-neutral-500 text-sm mt-2">Last updated: January 1, 2025</p>

          <div className="mt-10 space-y-6 text-neutral-400">
            <p>By accessing or using {siteConfig.name}'s website and services, you agree to be bound by these Terms & Conditions.</p>

            <h2 className="text-white text-xl font-semibold mt-8">Services</h2>
            <p>All services are provided subject to a signed agreement. Scope, timelines, and pricing are defined in individual project proposals. We reserve the right to decline any project.</p>

            <h2 className="text-white text-xl font-semibold mt-8">Intellectual Property</h2>
            <p>Upon receipt of full payment, clients receive full ownership of the final deliverables. We retain the right to display projects in our portfolio unless otherwise agreed in writing.</p>

            <h2 className="text-white text-xl font-semibold mt-8">Payments</h2>
            <p>A 50% deposit is required to begin work. The remaining balance is due upon project completion before final handover. All fees are non-refundable unless stated in the project agreement.</p>

            <h2 className="text-white text-xl font-semibold mt-8">Limitation of Liability</h2>
            <p>{siteConfig.name} shall not be liable for any indirect, incidental, or consequential damages arising from use of our services.</p>

            <h2 className="text-white text-xl font-semibold mt-8">Contact</h2>
            <p>Questions? Reach us at <a href={`mailto:${siteConfig.email}`} className="text-amber-400 hover:underline">{siteConfig.email}</a>.</p>
          </div>
        </div>
      </section>
    </>
  )
}