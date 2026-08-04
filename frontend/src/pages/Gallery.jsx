import { useState } from 'react'
import SEOHead from '../components/ui/SEOHead'
import SectionHeading from '../components/ui/SectionHeading'
import GalleryGrid from '../components/gallery/GalleryGrid'
import ScrollReveal from '../components/animations/ScrollReveal'
import { cloudinaryImages } from '../data/cloudinaryImages'
import { cn } from '../utils/cn'

const categories = ['All', ...new Set(cloudinaryImages.gallery.map((i) => i.category))]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? cloudinaryImages.gallery : cloudinaryImages.gallery.filter((i) => i.category === active)

  return (
    <>
      <SEOHead title="Gallery" pathname="/gallery" description="Browse our portfolio of web design and development projects." />

      <section className="pt-40 pb-24">
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
                    ? 'bg-(--color-primary) text-white'
                    : 'bg-(--color-surface) text-(--color-text-muted) hover:text-(--color-text) hover:bg-white border border-(--color-border)'
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