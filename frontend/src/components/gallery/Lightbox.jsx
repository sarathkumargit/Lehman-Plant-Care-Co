import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import CloudinaryImage from '../ui/CloudinaryImage'

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  const image = images[currentIndex]

  return (
    <div className="fixed inset-0 z-50 bg-[rgba(236,253,245,0.96)] flex items-center justify-center">
      {/* Close */}
      <button onClick={onClose} className="absolute top-4 right-4 text-[var(--color-text-muted)] hover:text-[var(--color-text)] p-2 rounded-full hover:bg-white/70 transition-colors z-10">
        <X size={24} />
      </button>

      {/* Prev */}
      <button onClick={onPrev} className="absolute left-4 text-[var(--color-text-muted)] hover:text-[var(--color-text)] p-3 rounded-full hover:bg-white/70 transition-colors">
        <ChevronLeft size={28} />
      </button>

      {/* Image */}
      <div className="max-w-5xl max-h-[85vh] w-full mx-16">
        <CloudinaryImage
          publicId={image.publicId}
          alt={image.alt}
          className="w-full h-full max-h-[80vh] rounded-xl overflow-hidden"
          imgClassName="object-contain"
          priority
        />
        <p className="text-center text-[var(--color-text-muted)] text-sm mt-3">{image.alt}</p>
      </div>

      {/* Next */}
      <button onClick={onNext} className="absolute right-4 text-[var(--color-text-muted)] hover:text-[var(--color-text)] p-3 rounded-full hover:bg-white/70 transition-colors">
        <ChevronRight size={28} />
      </button>

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[var(--color-text-muted)] text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}