import { cn } from '../../utils/cn'

export default function SectionHeading({ eyebrow, title, description, align = 'center', className }) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', align === 'left' && 'text-left', className)}>
      {eyebrow && (
        <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--color-primary)' }}>
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: 'var(--color-text)' }}>
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
          {description}
        </p>
      )}
    </div>
  )
}