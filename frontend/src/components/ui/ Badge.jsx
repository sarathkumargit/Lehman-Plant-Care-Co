import { cn } from '../../utils/cn'

const variants = {
  default: 'bg-amber-400/10 text-amber-500 border border-amber-400/20',
  secondary: 'bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-border)]',
  success: 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20',
  destructive: 'bg-red-500/10 text-red-500 border border-red-500/20',
}

export default function Badge({ children, variant = 'default', className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}