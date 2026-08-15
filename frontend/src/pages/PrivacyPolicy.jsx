import SEOHead from '../components/ui/SEOHead'
import ww1 from '../assets/ww1.webp'

const EFFECTIVE_DATE = 'January 19, 2025'
const LAST_UPDATED   = 'July 9, 2026'

const CONTACT_EMAIL = 'sales@kdtreeservices.com'
const CONTACT_PHONE = '+1 516-347-7526'
const CONTACT_ADDR  = '126 Duffy Ave, Hicksville, NY 11801, United States'
const COMPANY_NAME = 'The Lehman Plant Care Co'

/* ── small presentational helpers ── */
function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mt-12 mb-3">
        {title}
      </h2>
      <div className="space-y-4 text-[var(--color-text)]/75 leading-relaxed">{children}</div>
    </section>
  )
}

function SubHeading({ children }) {
  return (
    <h3 className="text-base font-semibold text-[var(--color-text)] mt-4 mb-5">{children}</h3>
  )
}

function Bullets({ items }) {
  return (
    <ul className="list-disc pl-5 space-y-1.5 marker:text-[var(--color-primary)]">
      {items.map((item) => (
        <li key={typeof item === 'string' ? item : item.key}>{item}</li>
      ))}
    </ul>
  )
}

const linkCls = 'text-[var(--color-primary-dark)] font-medium hover:underline'

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead title="Privacy Policy" pathname="/privacy-policy" noindex />

      {/* ── Hero — ww1.png background behind navbar + title ── */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <img
          src={ww1}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* dark emerald wash so text stays readable over the photo */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(6,78,59,0.72), rgba(6,78,59,0.55))' }}
        />

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <p className="text-sm font-semibold tracking-widest uppercase text-emerald-300">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-white/70 mt-3">
            Effective Date: {EFFECTIVE_DATE} &nbsp;|&nbsp; Last Updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="pb-24" style={{ background: 'var(--color-bg)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          {/* ── Card wrapper — visually separates content from navbar/hero ── */}
          <div
            className="-mt-16 relative z-10 rounded-3xl border border-[var(--color-border)] bg-white shadow-xl shadow-emerald-950/5 p-6 md:p-12"
          >
            {/* 1 */}
            <Section id="information-we-collect" title="1. Information We Collect">
              <p>
                We may collect the following categories of personal information when you contact
                us, request a quote, submit a web form, or use our services:
              </p>
              <Bullets
                items={[
                  'Full name',
                  'Mailing or service address',
                  'Email address',
                  'Mobile phone number',
                  'Service request details and project descriptions',
                  'Communication history and preferences',
                ]}
              />
            </Section>

            {/* 2 */}
            <Section id="sms-communications" title="2. SMS / Text Message Communications">
              <SubHeading>2a. How We Collect Your Mobile Number</SubHeading>
              <p>
                We collect your mobile phone number when you voluntarily provide it through our
                website contact forms, phone calls, or other direct communication channels. By
                providing your mobile number and checking the SMS consent checkbox on our forms,
                you expressly consent to receive SMS communications from {COMPANY_NAME}.
              </p>

              <SubHeading>2b. Types of Messages We Send</SubHeading>
              <p>By opting in, you may receive recurring automated text messages including:</p>
              <Bullets
                items={[
                  'Free estimate confirmations and appointment reminders',
                  'Project status updates and scheduling notifications',
                  'Customer support and follow-up communications',
                  'Promotional offers and seasonal service announcements',
                ]}
              />

              <SubHeading>2c. Message Frequency</SubHeading>
              <p>
                Message frequency varies based on your interactions with us, ongoing service needs,
                and active promotions. You may receive up to 4–8 messages per month depending on
                your service activity.
              </p>

              <SubHeading>2d. Message &amp; Data Rates</SubHeading>
              <p>
                Message and data rates may apply. Charges are determined by your mobile carrier and
                your individual service plan. {COMPANY_NAME} is not responsible for any charges
                incurred from your mobile carrier.
              </p>

              <SubHeading>2e. How to Opt Out (STOP)</SubHeading>
              <p>
                You may cancel SMS messages at any time by replying <strong>STOP</strong> to any
                text message you receive from us. After opting out, you will receive one final
                confirmation message and will no longer receive SMS communications unless you
                re-enroll.
              </p>

              <SubHeading>2f. How to Get Help (HELP)</SubHeading>
              <p>
                For help with our SMS program, reply <strong>HELP</strong> to any message, or
                contact us at{' '}
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className={linkCls}>
                  {CONTACT_PHONE}
                </a>{' '}
                or{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className={linkCls}>
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </Section>

            {/* 3 */}
            <Section
              id="sms-consent-no-sharing"
              title="3. Mobile Information & SMS Consent — No Third-Party Sharing"
            >
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-5">
                <p className="font-medium text-[var(--color-text)]">
                  No mobile information (including your mobile phone number and SMS opt-in consent
                  data) will be shared with third parties or affiliates for marketing or
                  promotional purposes.
                </p>
                <p className="mt-3 text-[var(--color-text)]/75">
                  All other categories of personal data exclude text messaging originator opt-in
                  data and consent; this information will not be shared with any third parties
                  under any circumstances.
                </p>
              </div>
            </Section>

            {/* 4 */}
            <Section id="how-we-use" title="4. How We Use Your Information">
              <p>We use the personal information we collect to:</p>
              <Bullets
                items={[
                  'Provide and manage tree care services',
                  'Respond to inquiries and service requests',
                  'Schedule appointments and send reminders',
                  'Send promotional communications (with your consent)',
                  'Improve our website and service quality',
                  'Comply with applicable laws and regulations',
                ]}
              />
            </Section>

            {/* 5 */}
            <Section id="cookies" title="5. Cookies and Tracking Technologies">
              <p>
                We use cookies and similar technologies to improve website functionality, analyze
                traffic, and enhance user experience. Cookies do not store sensitive personal
                information. By continuing to use this website, you consent to our use of cookies
                in accordance with this policy.
              </p>
            </Section>

            {/* 6 */}
            <Section id="data-security" title="6. Data Security">
              <p>
                We implement reasonable administrative, technical, and physical security measures
                to protect your personal data against unauthorized access, disclosure, alteration,
                or destruction. However, no method of electronic transmission or storage is 100%
                secure.
              </p>
            </Section>

            {/* 7 */}
            <Section id="data-retention" title="7. Data Retention">
              <p>
                We retain your personal information only for as long as necessary to fulfill the
                purposes outlined in this Privacy Policy, or as required by applicable law. When
                your data is no longer needed, we securely delete or anonymize it.
              </p>
            </Section>

            {/* 8 */}
            <Section id="your-rights" title="8. Your Privacy Rights">
              <p>
                Depending on your location, you may have the following rights regarding your
                personal data:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 marker:text-[var(--color-primary)]">
                <li>
                  <strong>Access:</strong> Request a copy of the personal data we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate personal data
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal data including your
                  mobile number and SMS consent record
                </li>
                <li>
                  <strong>Opt-Out of SMS:</strong> Reply STOP to any text message at any time
                </li>
                <li>
                  <strong>Opt-Out of Marketing:</strong> Contact us directly to be removed from
                  marketing lists
                </li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className={linkCls}>
                  {CONTACT_EMAIL}
                </a>{' '}
                or call{' '}
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className={linkCls}>
                  {CONTACT_PHONE}
                </a>
                .
              </p>
            </Section>

            {/* 9 */}
            <Section id="changes" title="9. Changes to This Privacy Policy">
              <p>
                We may update this Privacy Policy from time to time. We will post the updated
                policy on this page with a revised "Last Updated" date. Continued use of our
                website or services after any changes constitutes your acceptance of the updated
                policy.
              </p>
            </Section>

            {/* 10 */}
            <Section id="contact" title="10. Contact Information">
              <p>
                If you have questions or concerns about this Privacy Policy, please contact us:
              </p>
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 p-5 space-y-2">
                <p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className={linkCls}>
                    {CONTACT_EMAIL}
                  </a>
                </p>
                <p>
                  <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className={linkCls}>
                    {CONTACT_PHONE}
                  </a>
                </p>
                <p className="text-[var(--color-text)]/75">{CONTACT_ADDR}</p>
              </div>
            </Section>
          </div>
        </div>
      </section>
    </>
  )
}