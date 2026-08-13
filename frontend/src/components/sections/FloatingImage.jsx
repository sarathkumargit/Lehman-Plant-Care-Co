import FloatingElement from '../animations/FloatingElement'
import { cn } from '../../utils/cn'

export default function FloatingImage({ src, alt, className, delay = 0 }) {
  return (
    <FloatingElement delay={delay} className={cn('rounded-2xl overflow-hidden shadow-2xl', className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </FloatingElement>
  )
}