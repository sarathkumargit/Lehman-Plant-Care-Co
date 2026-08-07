import { useState } from 'react'
import { cn } from '../../utils/cn'

/**
 * LocalImage — simple lazy-loading image wrapper.
 * Accepts `src` (local asset or URL) instead of a Cloudinary publicId.
 * All Cloudinary dependencies have been removed.
 */
export default function CloudinaryImage({
  // New prop
  src,
  // Legacy prop — ignored, kept so old call-sites don't hard-crash during migration
  publicId,
  alt,
  width,
  height,
  className,
  imgClassName,
  priority = false,
}) {
  const [error, setError] = useState(false)

  const resolvedSrc = src || publicId || ''

  if (error) {
    return (
      <div
        className={cn(
          'bg-[var(--color-surface)] flex items-center justify-center border border-[var(--color-border)] rounded-xl',
          className
        )}
      >
        <span className="text-[var(--color-text-muted)] text-sm">Image unavailable</span>
      </div>
    )
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <img
        src={resolvedSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onError={() => setError(true)}
        className={cn('w-full h-full object-cover', imgClassName)}
      />
    </div>
  )
}
