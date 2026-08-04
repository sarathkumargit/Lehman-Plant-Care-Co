import { useState } from 'react'
import { buildCloudinaryUrl, getPlaceholderUrl, getResponsiveSrcSet } from '../../utils/cloudinary'
import { cn } from '../../utils/cn'

export default function CloudinaryImage({
  publicId,
  alt,
  width,
  height,
  transformations = {},
  className,
  imgClassName,
  priority = false,
}) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const src = buildCloudinaryUrl(publicId, { width, height, ...transformations })
  const placeholder = getPlaceholderUrl(publicId)
  const srcSet = getResponsiveSrcSet(publicId)

  if (error) {
    return (
      <div className={cn('bg-[var(--color-surface)] flex items-center justify-center border border-[var(--color-border)] rounded-xl', className)}>
        <span className="text-[var(--color-text-muted)] text-sm">Image unavailable</span>
      </div>
    )
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Blur placeholder */}
      {!loaded && (
        <img
          src={placeholder}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-sm"
        />
      )}
      <img
        src={src}
        srcSet={srcSet}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-500',
          loaded ? 'opacity-100' : 'opacity-0',
          imgClassName
        )}
      />
    </div>
  )
}