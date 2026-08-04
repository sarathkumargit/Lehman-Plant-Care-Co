const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'your-cloud-name'
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`

export function buildCloudinaryUrl(publicId, transformations = {}) {
  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'fill',
    gravity = 'auto',
    blur,
    grayscale,
  } = transformations

  const parts = []

  if (width) parts.push(`w_${width}`)
  if (height) parts.push(`h_${height}`)
  if (crop) parts.push(`c_${crop}`)
  if (gravity) parts.push(`g_${gravity}`)
  if (quality) parts.push(`q_${quality}`)
  if (format) parts.push(`f_${format}`)
  if (blur) parts.push(`e_blur:${blur}`)
  if (grayscale) parts.push('e_grayscale')

  const transform = parts.join(',')
  return `${BASE_URL}/${transform}/${publicId}`
}

export function getPlaceholderUrl(publicId) {
  return buildCloudinaryUrl(publicId, { width: 20, quality: 20, blur: 1000 })
}

export function getResponsiveSrcSet(publicId, widths = [400, 800, 1200, 1600]) {
  return widths
    .map((w) => `${buildCloudinaryUrl(publicId, { width: w })} ${w}w`)
    .join(', ')
}