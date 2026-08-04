import { cn } from '../../utils/cn'

const variants = {
  primary:   'bg-emerald-600 text-white hover:bg-emerald-700 font-semibold shadow-lg shadow-emerald-600/20 hover:-translate-y-0.5',
  secondary: 'font-medium hover:-translate-y-0.5',
  outline:   'border font-medium hover:-translate-y-0.5',
  ghost:     'font-medium',
}

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
}

export default function Button({ children, variant = 'primary', size = 'md', className, as: Tag = 'button', disabled, loading, ...props }) {
  const baseStyle =
    variant === 'secondary'
      ? { background: 'var(--color-surface)', color: 'var(--color-text)', border: '1px solid var(--color-border)' }
      : variant === 'outline'
      ? { borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }
      : variant === 'ghost'
      ? { color: 'var(--color-text-muted)' }
      : {}

  return (
    <Tag
      className={cn(
        'inline-flex items-center justify-center gap-2 transition-all duration-200',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      style={baseStyle}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />}
      {children}
    </Tag>
  )
}