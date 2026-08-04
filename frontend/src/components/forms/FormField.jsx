import { cn } from '../../utils/cn'

export default function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required,
  rows,
  className,
}) {
  const inputClass = cn(
    'w-full bg-[var(--color-bg)] border rounded-xl px-4 py-3 text-[var(--color-text)] text-sm placeholder:text-[var(--color-text-muted)]',
    'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition-colors',
    error ? 'border-red-500/60' : 'border-[var(--color-border)] hover:border-[var(--color-primary)]/50'
  )

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-[var(--color-text)]">
          {label}
          {required && <span className="text-[var(--color-primary)] ml-0.5">*</span>}
        </label>
      )}
      {rows ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={cn(inputClass, 'resize-none')}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={inputClass}
        />
      )}
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  )
}