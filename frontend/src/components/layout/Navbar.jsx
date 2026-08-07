import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { cn } from '../../utils/cn'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { navLinks } from '../../data/navLinks'
import NavLink from './NavLink'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const scrollY = useScrollPosition()
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = scrollY > 40

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-500',
          scrolled ? 'py-3 shadow-sm' : 'py-5'
        )}
        style={{
          background: scrolled ? 'rgba(209,250,229,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>
            KD
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-xl transition-all text-sm hover:-translate-y-0.5 shadow-sm"
              style={{ background: 'var(--color-primary)', color: '#fff' }}
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden transition-colors"
              aria-label="Open menu"
              style={{ color: 'var(--color-text)' }}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}