import { useParallax } from '../../hooks/useParallax'

export default function ParallaxScene() {
  const { ref, offset } = useParallax(0.4)

  return (
    <div
      ref={ref}
      className="absolute inset-0 z-0"
      style={{ transform: `translateY(${offset}px)` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 via-transparent to-orange-500/5" />
      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
    </div>
  )
}