import { cn } from '../../utils/cn'

export default function FeatureCard({ icon: Icon, title, description, className }) {
  return (
    <div
      className={cn('flex gap-4 p-5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-md', className)}
      style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
    >
      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'var(--color-surface)' }}>
        {Icon && <Icon size={20} style={{ color: 'var(--color-primary-dark)' }} />}
      </div>
      <div>
        <h4 className="font-semibold" style={{ color: 'var(--color-text)' }}>{title}</h4>
        <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{description}</p>
      </div>
    </div>
  )
}