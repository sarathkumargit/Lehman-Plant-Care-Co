import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { cn } from '../../utils/cn'

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 600,
  once = true,
}) {
  const { ref, isIntersecting, hasIntersected } = useIntersectionObserver()
  const visible = once ? hasIntersected : isIntersecting

  return (
    <div
      ref={ref}
      className={cn('transition-all', className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {children}
    </div>
  )
}