import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const directions = {
  up: 'translateY(40px)',
  down: 'translateY(-40px)',
  left: 'translateX(40px)',
  right: 'translateX(-40px)',
}

export default function SlideIn({
  children,
  from = 'up',
  delay = 0,
  duration = 600,
  className,
}) {
  const { ref, hasIntersected } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: hasIntersected ? 1 : 0,
        transform: hasIntersected ? 'translate(0)' : directions[from],
        transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}