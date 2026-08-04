import { useEffect, useRef } from 'react'
import { cn } from '../../utils/cn'

export default function FloatingElement({
  children,
  amplitude = 12,
  duration = 4,
  delay = 0,
  className,
}) {
  return (
    <div
      className={cn('will-change-transform', className)}
      style={{
        animation: `float ${duration}s ease-in-out ${delay}s infinite`,
      }}
    >
      {children}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-${amplitude}px); }
        }
      `}</style>
    </div>
  )
}