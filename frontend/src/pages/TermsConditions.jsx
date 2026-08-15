import SEOHead from '../components/ui/SEOHead'
import ww1 from '../assets/ww1.webp'

const EFFECTIVE_DATE = 'January 19, 2025'
const LAST_UPDATED   = 'July 9, 2026'


const CONTACT_EMAIL = 'sales@kdtreeservices.com'
const CONTACT_PHONE = '+1 516-347-7526'

const COMPANY_NAME = 'The Lehman Plant Care Co'
const COMPANY_ADDR = '126 Duffy Ave, Hicksville, NY 11801, United States'
/* ── small presentational helpers (matches PrivacyPolicy.jsx) ── */
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

export default function TermsConditions() {
  return (
    <>
      <SEOHead title="Terms & Conditions" pathname="/terms-conditions" noindex />

      {/* ── Hero — ww1.png background behind navbar + title ── */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <img
          src={ww1}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(6,78,59,0.72), rgba(6,78,59,0.55))' }}
        />

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <p className="text-sm font-semibold tracking-widest uppercase text-emerald-300">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-white/70 mt-3">
            Effective Date: {EFFECTIVE_DATE} &nbsp;|&nbsp; Last Updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="pb-24" style={{ background: 'var(--color-bg)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="-mt-16 relative z-10 rounded-3xl border border-[var(--color-border)] bg-white shadow-xl shadow-emerald-950/5 p-6 md:p-12">
            <p className="text-[var(--color-text)]/75 leading-relaxed">
              Welcome to {COMPANY_NAME}. By accessing this website or using our services, you
              agree to be bound by these Terms and Conditions. If you do not agree with any part
              of these terms, please do not use our website or services.
            </p>

            {/* 1 */}
            <Section id="business-identity" title="1. Business Identity">
              <p>
                These Terms and Conditions govern your use of the services provided by{' '}
                {COMPANY_NAME}. Contact:{' '}
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className={linkCls}>
                  {CONTACT_PHONE}
                </a>{' '}
                |{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className={linkCls}>
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </Section>

            {/* 2 */}
            <Section id="age-requirement" title="2. Age Requirement (18+)">
              <p>
                By using this website or enrolling in our services, including SMS messaging, you
                confirm that you are at least 18 years of age. Our SMS program is not directed to
                individuals under 18.
              </p>
            </Section>

            {/* 3 */}
            <Section id="terminology" title="3. Terminology">
              <p>&ldquo;Client,&rdquo; &ldquo;You,&rdquo; and &ldquo;Your&rdquo; refers to the user of this website.</p>
              <p>
                &ldquo;The Company,&rdquo; &ldquo;We,&rdquo; &ldquo;Our,&rdquo; and &ldquo;Us&rdquo; refers to {COMPANY_NAME}.
              </p>
            </Section>

            {/* 4 */}
            <Section id="sms-terms" title="4. SMS Messaging Terms of Service">
              <SubHeading>4a. Program Description &amp; Message Types</SubHeading>
              <p>
                By providing your phone number and checking the SMS consent checkbox on our
                contact forms, you agree to receive recurring automated text messages from{' '}
                {COMPANY_NAME}. Messages may include:
              </p>
              <Bullets
                items={[
                  'Free estimate confirmations and scheduling notifications',
                  'Appointment reminders and project status updates',
                  'Customer support and service follow-up communications',
                  'Promotional offers and seasonal announcements related to our tree care services',
                ]}
              />

              <SubHeading>4b. Message Frequency</SubHeading>
              <p>
                Message frequency varies based on your service activity and interactions with us.
                You may receive up to 4–8 messages per month. Frequency may increase during active
                service periods.
              </p>

              <SubHeading>4c. Message &amp; Data Rates</SubHeading>
              <p>
                Message and data rates may apply for any messages sent to you from us and to us
                from you. Charges are determined by your mobile carrier and your individual
                service plan. {COMPANY_NAME} is not responsible for any carrier charges.
              </p>

              <SubHeading>4d. How to Opt Out (STOP)</SubHeading>
              <p>
                You can opt out of receiving SMS messages at any time by replying{' '}
                <strong>STOP</strong> to any message we send. After opting out, you will receive a
                one-time confirmation message and will no longer receive SMS messages from us
                unless you re-enroll.
              </p>

              <SubHeading>4e. How to Get Help (HELP)</SubHeading>
              <p>
                For help with our SMS program, reply <strong>HELP</strong> to any message or
                contact us directly at{' '}
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className={linkCls}>
                  {CONTACT_PHONE}
                </a>{' '}
                or{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className={linkCls}>
                  {CONTACT_EMAIL}
                </a>
                .
              </p>

              <SubHeading>4f. Carrier Liability Disclaimer</SubHeading>
              <p>
                Mobile carriers are not liable for delayed or undelivered messages.{' '}
                {COMPANY_NAME} cannot guarantee delivery of SMS messages. Delivery may be subject
                to your mobile carrier&rsquo;s capability and coverage area.
              </p>

              <SubHeading>4g. Supported Carriers</SubHeading>
              <p>
                Our SMS program is supported by all major U.S. wireless carriers including AT&amp;T,
                Verizon, T-Mobile, and Sprint. Not all carriers are supported for all messages.
              </p>
            </Section>

            {/* 5 */}
            <Section id="cookies" title="5. Cookies">
              <p>
                We use cookies in accordance with our Privacy Policy to improve user experience
                and website functionality.
              </p>
            </Section>

            {/* 6 */}
            <Section id="intellectual-property" title="6. Intellectual Property & License">
              <p>
                Unless otherwise stated, {COMPANY_NAME} owns the intellectual property rights for
                all content on this website. You may not copy, reproduce, republish, sell, or
                redistribute any material without prior written permission.
              </p>
            </Section>

            {/* 7 */}
            <Section id="user-content" title="7. Comments & User Content">
              <p>
                {COMPANY_NAME} reserves the right to monitor and remove any comments or
                user-generated content on our platforms that are inappropriate, offensive, or
                violate these terms.
              </p>
            </Section>

            {/* 8 */}
            <Section id="content-liability" title="8. Content Liability">
              <p>
                We are not responsible for content that appears on external websites linking to
                us. You agree to defend and protect {COMPANY_NAME} against any claims arising from
                your website or digital properties.
              </p>
            </Section>

            {/* 9 */}
            <Section id="disclaimer" title="9. Disclaimer">
              <p>
                To the maximum extent permitted by applicable law, {COMPANY_NAME} excludes all
                warranties, representations, and conditions relating to our website and services.
                We are not liable for any loss or damage (including damage for loss of business,
                profits, or revenue) arising from the use of our website or services.
              </p>
            </Section>

            {/* 10 */}
            <Section id="changes" title="10. Changes to These Terms">
              <p>
                We reserve the right to update these Terms and Conditions at any time. Changes
                will be posted on this page with a revised &ldquo;Last Updated&rdquo; date.
                Continued use of our website or services constitutes acceptance of the updated
                terms.
              </p>
            </Section>

            {/* 11 */}
            <Section id="contact" title="11. Contact Information">
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 p-5 space-y-2">
                <p className="font-medium text-[var(--color-text)]">{COMPANY_NAME}</p>
                <p>
                  <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className={linkCls}>
                    {CONTACT_PHONE}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className={linkCls}>
                    {CONTACT_EMAIL}
                  </a>
                </p>
                <p className="text-[var(--color-text)]/75">{COMPANY_ADDR}</p>
              </div>
            </Section>
          </div>
        </div>
      </section>
    </>
  )
}