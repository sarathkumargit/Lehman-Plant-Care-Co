export function scrollToElement(id, offset = 80) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function getScrollProgress() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  return docHeight > 0 ? scrollTop / docHeight : 0
}

export function isInViewport(el, threshold = 0) {
  if (!el) return false
  const rect = el.getBoundingClientRect()
  return (
    rect.top <= window.innerHeight * (1 - threshold) &&
    rect.bottom >= window.innerHeight * threshold
  )
}