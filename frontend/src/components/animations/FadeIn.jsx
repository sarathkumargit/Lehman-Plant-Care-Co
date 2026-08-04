import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

export default function FadeIn({ children, delay = 0, duration = 500, className }) {
  const { ref, hasIntersected } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: hasIntersected ? 1 : 0,
        transition: `opacity ${duration}ms ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}