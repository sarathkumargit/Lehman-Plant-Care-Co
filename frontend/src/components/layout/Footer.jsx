import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { InstagramIcon, TwitterIcon, LinkedinIcon, FacebookIcon } from '../icons/SocialIcons'
import { siteConfig } from '../../data/siteConfig'
import { navLinks } from '../../data/navLinks'
import logo from '../../assets/logo.png'

const socialLinks = [
  { key: 'instagram', label: 'Instagram', Icon: InstagramIcon },
  { key: 'twitter', label: 'Twitter', Icon: TwitterIcon },
  { key: 'linkedin', label: 'LinkedIn', Icon: LinkedinIcon },
  { key: 'facebook', label: 'Facebook', Icon: FacebookIcon },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--color-border)] border-t border-[var(--color-border)]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="The Tree Service Clearence" className="h-10 w-auto object-contain" />
          </Link>
            <p className="mt-4 text-[var(--color-text-black)] max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ key, label, Icon }) => {
                const url = siteConfig.social[key]
                if (!url) return null
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-white transition-colors border border-[var(--color-border)]"
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-[var(--color-text)] font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-[var(--color-text-black)] hover:text-[var(--color-primary)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[var(--color-text)] font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 ">
              {[
                { Icon: Mail, text: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { Icon: Phone, text: siteConfig.phone, href: `tel:${siteConfig.phone}` },
                { Icon: MapPin, text: siteConfig.address, href: null },
              ].map(({ Icon, text, href }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={16} className="text-[var(--color-black)] mt-0.5 shrink-0" />
                  {href ? (
                    <a href={href} className="text-[var(--color-text-black)] hover:text-[var(--color-text)] transition-colors text-sm">
                      {text}
                    </a>
                  ) : (
                    <span className="text-[var(--color-text-black)] text-sm">{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--color-text-muted)] text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-[var(--color-text-black)] hover:text-[var(--color-text)] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-[var(--color-text-black)] hover:text-[var(--color-text)] text-sm transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
