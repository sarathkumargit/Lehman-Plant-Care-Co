import { useState } from 'react'
import SEOHead from '../components/ui/SEOHead'
import SectionHeading from '../components/ui/SectionHeading'
import ScrollReveal from '../components/animations/ScrollReveal'
import { galleryImages } from '../assets/images'
import { cn } from '../utils/cn'
import ww1 from '../assets/ww1.webp'

const categories = ['All', ...new Set(galleryImages.map((i) => i.category))]

/* Short blurb per category — used as the card description */
const DESCRIPTIONS = {
  Removal:     'Safe, professional removal of damaged or unwanted trees.',
  Trimming:    'Precision trimming to keep trees healthy and well balanced.',
  Clearance:   'Full vegetation and tree clearance for homes and businesses.',
  Stump:       'Stumps ground below grade for a clean, level finish.',
  Maintenance: 'Ongoing care and health checks for mature trees.',
}

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered =
    active === 'All' ? galleryImages : galleryImages.filter((i) => i.category === active)

  return (
    <>
      <SEOHead
        title="Gallery"
        pathname="/gallery"
        description="Browse our portfolio of tree removal, trimming and clearance projects."
      />
        {/* ── Hero — ww1.png background behind navbar + title ── */}
             <section className="relative pt-40 pb-16 overflow-hidden">
               <img
                 src={ww1}
                 alt=""
                 aria-hidden
                 className="absolute inset-0 w-full h-full object-cover"
               />
              
             </section>
      <section className="pt-30 pb-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Work"
              title="Projects We're Proud Of"
              description="A selection of tree care projects delivered for homes and businesses."
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

          {/* Image cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((image, i) => (
              <ScrollReveal key={image.src + i} delay={i * 60}>
                <figure className="group h-full rounded-2xl overflow-hidden bg-white border border-[var(--color-border)] shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <div className="overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <figcaption className="p-5">
                    <span className="inline-block text-[11px] font-semibold uppercase tracking-wide text-[var(--color-primary)] bg-[var(--color-surface)] px-2.5 py-1 rounded-full">
                      {image.category}
                    </span>
                    <h3 className="mt-3 font-semibold text-[var(--color-text)] leading-tight">
                      {image.alt}
                    </h3>
                    <p className="mt-1.5 text-sm text-[var(--color-text-muted)] leading-snug">
                      {DESCRIPTIONS[image.category] ?? 'Professional tree care, done right.'}
                    </p>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}