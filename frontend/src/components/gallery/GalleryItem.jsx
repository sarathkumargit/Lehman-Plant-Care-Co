import { ZoomIn } from 'lucide-react'
import CloudinaryImage from '../ui/CloudinaryImage'
import { cn } from '../../utils/cn'

export default function GalleryItem({ image, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'group relative overflow-hidden rounded-2xl w-full aspect-[4/3] cursor-zoom-in',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400',
        className
      )}
    >
      <CloudinaryImage
        publicId={image.publicId}
        alt={image.alt}
        className="w-full h-full"
        imgClassName="group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ZoomIn size={28} className="text-white" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-xs font-medium text-amber-400 bg-amber-400/10 px-2 py-1 rounded-full">
          {image.category}
        </span>
        <p className="text-white text-sm font-medium mt-1">{image.alt}</p>
      </div>
    </button>
  )
}