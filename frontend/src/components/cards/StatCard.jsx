import { cn } from '../../utils/cn'

export default function StatCard({ value, label, suffix = '', className }) {
  return (
    <div className={cn('text-center', className)}>
      <div className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--color-text)' }}>
        {value}<span style={{ color: 'var(--color-primary)' }}>{suffix}</span>
      </div>
      <div className="mt-1 text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>{label}</div>
    </div>
  )
}