import { useState, useEffect, useRef, useCallback } from 'react'


export function useCinematicScroll(options = {}) {
  const { start = 0, end = 1 } = options
  const ref = useRef(null)
  const [state, setState] = useState({ scrollY: 0, progress: 0, velocity: 0 })
  const lastY = useRef(0)
  const rafId = useRef(null)

  const update = useCallback(() => {
    const y = window.scrollY
    const velocity = y - lastY.current
    lastY.current = y

    let progress = 0
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      const total = window.innerHeight + rect.height
      const pos = window.innerHeight - rect.top
      progress = Math.max(0, Math.min(1, pos / total))
    }

    setState({ scrollY: y, progress, velocity })
  }, [])

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId.current)
    }
  }, [update])

  return { ref, ...state }
}

/**
 * Interpolates between two values based on progress (0–1).
 */
export function lerp(a, b, t) {
  return a + (b - a) * t
}

/**
 * Clamps a value between min and max.
 */
export function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val))
}

/**
 * Maps a value from one range to another.
 */
export function mapRange(val, inMin, inMax, outMin, outMax) {
  return outMin + ((val - inMin) / (inMax - inMin)) * (outMax - outMin)
}