import CloudinaryImage from '../ui/CloudinaryImage'
import FloatingElement from '../animations/FloatingElement'
import { cn } from '../../utils/cn'

export default function FloatingImage({ src, alt, className, delay = 0 }) {
  return (
    <FloatingElement delay={delay} className={cn('rounded-2xl overflow-hidden shadow-2xl', className)}>
      <CloudinaryImage
        src={src}
        alt={alt}
        className="w-full h-full"
      />
    </FloatingElement>
  )
}
