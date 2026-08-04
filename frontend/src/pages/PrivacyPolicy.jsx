import SEOHead from '../components/ui/SEOHead'
import { siteConfig } from '../data/siteConfig'

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead title="Privacy Policy" pathname="/privacy-policy" noindex />

      <section className="pt-40 pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-neutral-500 text-sm mt-2">Last updated: January 1, 2025</p>

          <div className="mt-10 prose prose-invert prose-neutral max-w-none text-neutral-400 space-y-6">
            <p>
              {siteConfig.name} ("we", "our", "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website.
            </p>

            <h2 className="text-white text-xl font-semibold mt-8">Information We Collect</h2>
            <p>We may collect information you provide directly to us, such as your name, email address, and message when you submit our contact form. We also collect analytics data to improve our website performance.</p>

            <h2 className="text-white text-xl font-semibold mt-8">How We Use Your Information</h2>
            <p>We use the information we collect to respond to your inquiries, improve our services, and send relevant communications. We do not sell or share your personal data with third parties for marketing purposes.</p>

            <h2 className="text-white text-xl font-semibold mt-8">Cookies</h2>
            <p>Our website uses cookies to enhance your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings.</p>

            <h2 className="text-white text-xl font-semibold mt-8">Contact</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href={`mailto:${siteConfig.email}`} className="text-amber-400 hover:underline">{siteConfig.email}</a>.</p>
          </div>
        </div>
      </section>
    </>
  )
}