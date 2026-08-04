import { useState, useEffect, useRef } from 'react'

export function useParallax(speed = 0.3) {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!ref.current) return
          const rect = ref.current.getBoundingClientRect()
          const center = rect.top + rect.height / 2 - window.innerHeight / 2
          setOffset(center * speed)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return { ref, offset }
}