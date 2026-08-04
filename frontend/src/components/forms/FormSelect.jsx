import { cn } from '../../utils/cn'

export default function FormSelect({ label, name, options, value, onChange, error, required, className }) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-[var(--color-text)]">
          {label}
          {required && <span className="text-[var(--color-primary)] ml-0.5">*</span>}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={cn(
          'w-full bg-[var(--color-bg)] border rounded-xl px-4 py-3 text-[var(--color-text)] text-sm',
          'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition-colors',
          'appearance-none cursor-pointer',
          error ? 'border-red-500/60' : 'border-[var(--color-border)] hover:border-[var(--color-primary)]/50'
        )}
      >
        <option value="" disabled>Select an option</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  )
}