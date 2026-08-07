// Redirects to local assets — no Cloudinary dependencies.
export { galleryImages as default, heroImage, aboutImage, galleryImages, testimonialAvatars } from '../assets/images.js'

// Legacy shape kept for backwards compat during migration.
import { heroImage, aboutImage, galleryImages, testimonialAvatars } from '../assets/images.js'
export const cloudinaryImages = {
  hero: heroImage,
  about: aboutImage,
  gallery: galleryImages,
  testimonialAvatars,
}
