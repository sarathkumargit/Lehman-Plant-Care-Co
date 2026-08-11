import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../utils/cn'

export default function ServiceCard({ service, className }) {
  return (
    <div
      className={cn(' glass group relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl', className)}
     
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, rgba(167,243,208,0.3), transparent)' }} />
      <div  className="relative">
        <span className="text-3xl font-mono" style={{ color: 'var(--color-primary)' }}></span>
        <h3 className="mt-4 text-xl font-bold" style={{ color: 'var(--color-text)' }}>{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{service.shortDescription}</p>
        <div className="mt-4 pt-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--color-border)' }}>
          <span className="text-sm font-medium" style={{ color: 'var(--color-primary)' }}>{service.price}</span>
          <Link to={`/services#${service.id}`} className="flex items-center gap-1 text-sm transition-colors group/link" style={{ color: 'var(--color-text-muted)' }}>
            Learn more
            <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}