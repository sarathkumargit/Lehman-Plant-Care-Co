import { useState } from 'react'
import SEOHead from '../components/ui/SEOHead'
import SectionHeading from '../components/ui/SectionHeading'
import GalleryGrid from '../components/gallery/GalleryGrid'
import ScrollReveal from '../components/animations/ScrollReveal'
import { galleryImages } from '../assets/images'
import { cn } from '../utils/cn'

const categories = ['All', ...new Set(galleryImages.map((i) => i.category))]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? galleryImages : galleryImages.filter((i) => i.category === active)

  return (
    <>
      <SEOHead title="Gallery" pathname="/gallery" description="Browse our portfolio of web design and development projects." />

      <section className="pt-40 pb-500">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Work"
              title="Projects We're Proud Of"
              description="A selection of websites we've designed and built for clients across industries."
            />
          </ScrollReveal>

          {/* Filter tabs */}
          <ScrollReveal delay={100} className="mt-10 flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  active === cat
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-white border border-[var(--color-border)]'
                )}
              >
                {cat}
              </button>
            ))}
          </ScrollReveal>

          <div className="mt-10">
            <GalleryGrid images={filtered} />
          </div>
        </div>
      </section>
    </>
  )
}
