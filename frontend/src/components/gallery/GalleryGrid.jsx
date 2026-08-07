import { useState } from 'react'
import GalleryItem from './GalleryItem'
import Lightbox from './Lightbox'

export default function GalleryGrid({ images }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const close = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setLightboxIndex((i) => (i + 1) % images.length)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, idx) => (
          <GalleryItem
            key={image.src + idx}
            image={image}
            onClick={() => setLightboxIndex(idx)}
          />
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  )
}
