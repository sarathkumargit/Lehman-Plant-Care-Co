import { useEffect } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import { navLinks } from '../../data/navLinks'
import { cn } from '../../utils/cn'

export default function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <div
        className={cn('fixed inset-0 z-40 transition-opacity duration-300', isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none')}
        style={{ background: 'rgba(6,78,59,0.2)', backdropFilter: 'blur(4px)' }}
        onClick={onClose}
      />
      <div
        className={cn('fixed top-0 right-0 h-full w-72 z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out', isOpen ? 'translate-x-0' : 'translate-x-full')}
        style={{ background: 'var(--color-bg)', borderLeft: '1px solid var(--color-border)' }}
      >
        <div className="flex items-center justify-between p-6" style={{ borderBottom: '1px solid var(--color-border)' }}>
          <span className="text-xl font-bold" style={{ color: 'var(--color-text)' }}>
            KD<span style={{ color: 'var(--color-primary)' }}>.</span>
          </span>
          <button
            onClick={onClose}
            className="transition-colors"
            aria-label="Close menu"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-6 gap-2 flex-1">
          {navLinks.map((link) => (
            <RouterNavLink
              key={link.href}
              to={link.href}
              onClick={onClose}
              className={({ isActive }) =>
                cn('px-4 py-3 rounded-lg text-base font-medium transition-colors',
                  isActive ? 'text-emerald-700' : 'text-emerald-900 hover:bg-emerald-100')
              }
              style={({ isActive }) => isActive ? { background: 'var(--color-surface)' } : {}}
            >
              {link.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="p-6" style={{ borderTop: '1px solid var(--color-border)' }}>
          <RouterNavLink
            to="/contact"
            onClick={onClose}
            className="block w-full text-center text-white font-semibold py-3 rounded-xl transition-colors"
            style={{ background: 'var(--color-primary)' }}
          >
            Get a Quote
          </RouterNavLink>
        </div>
      </div>
    </>
  )
}