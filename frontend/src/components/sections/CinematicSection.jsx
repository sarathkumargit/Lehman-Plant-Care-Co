import { useRef } from 'react'
import { useCinematicScroll, clamp, mapRange } from '../../hooks/useCinematicScroll'

/**
 * A reusable cinematic scroll section.
 * Children receive a `progress` prop (0–1) as they scroll into view.
 */
export default function CinematicSection({ children, className = '', height = '150vh', id }) {
  const { ref, progress } = useCinematicScroll()

  return (
    <div ref={ref} id={id} className={`relative ${className}`} style={{ minHeight: height }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {typeof children === 'function' ? children({ progress }) : children}
      </div>
    </div>
  )
}