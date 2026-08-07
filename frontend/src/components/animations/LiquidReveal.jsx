import { useEffect, useRef } from 'react'

const BRUSH_RADIUS = 143
const DECAY = 0.016

export default function LiquidReveal({ beforeSrc, afterSrc, className }) {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const stateRef = useRef({
    coverCanvas: null,
    brushCanvas: null,
    ctx: null,
    w: 0, h: 0,
    radius: 0, diam: 0,
    points: [], last: null, idle: 0,
    rafId: null,
    afterImg: null,
    dpr: Math.min(devicePixelRatio, 2),
  })

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const s = stateRef.current
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    // Load the brush-revealed image
    const afterImg = new Image()
    afterImg.crossOrigin = 'anonymous'
    afterImg.src = afterSrc
    s.afterImg = afterImg

    function buildCover() {
      if (!afterImg.complete || afterImg.naturalWidth === 0) return
      s.coverCanvas = new OffscreenCanvas(s.w, s.h)
      const cCtx = s.coverCanvas.getContext('2d')
      const iw = afterImg.naturalWidth, ih = afterImg.naturalHeight
      const imgAspect = iw / ih, canAspect = s.w / s.h
      let sw, sh, sx, sy
      if (imgAspect > canAspect) {
        sh = s.h; sw = sh * imgAspect; sx = (sw - s.w) / 2; sy = 0
      } else {
        sw = s.w; sh = sw / imgAspect; sx = 0; sy = (sh - s.h) / 2
      }
      cCtx.drawImage(afterImg, -sx, -sy, sw, sh)
    }

    function resize() {
      const rect = container.getBoundingClientRect()
      s.w = Math.ceil(rect.width * s.dpr)
      s.h = Math.ceil(rect.height * s.dpr)
      canvas.width = s.w
      canvas.height = s.h
      canvas.style.width = rect.width + 'px'
      canvas.style.height = rect.height + 'px'
      s.ctx = canvas.getContext('2d')
      s.radius = BRUSH_RADIUS * s.dpr
      s.diam = Math.ceil(s.radius * 2)
      s.brushCanvas = new OffscreenCanvas(s.diam, s.diam)
      buildCover()
    }

    function stamp(px, py) {
      if (!s.coverCanvas) return
      const bCtx = s.brushCanvas.getContext('2d')
      bCtx.clearRect(0, 0, s.diam, s.diam)
      bCtx.globalCompositeOperation = 'source-over'
      const grad = bCtx.createRadialGradient(s.radius, s.radius, 0, s.radius, s.radius, s.radius)
      grad.addColorStop(0, 'rgba(255,255,255,1)')
      grad.addColorStop(0.55, 'rgba(255,255,255,.82)')
      grad.addColorStop(1, 'rgba(255,255,255,0)')
      bCtx.fillStyle = grad
      bCtx.fillRect(0, 0, s.diam, s.diam)
      bCtx.globalCompositeOperation = 'source-in'
      bCtx.drawImage(s.coverCanvas, px - s.radius, py - s.radius, s.diam, s.diam, 0, 0, s.diam, s.diam)
      s.ctx.globalCompositeOperation = 'source-over'
      s.ctx.drawImage(s.brushCanvas, px - s.radius, py - s.radius)
    }

    function tick() {
      const drawing = s.points.length > 0
      if (!drawing) {
        s.idle++
        if (s.idle > 120) {
          s.ctx?.clearRect(0, 0, s.w, s.h)
          s.idle = 0
          s.rafId = requestAnimationFrame(tick)
          return
        }
      } else {
        s.idle = 0
      }
      const fade = drawing ? DECAY : Math.min(DECAY + s.idle * 0.004, 0.5)
      if (s.ctx) {
        s.ctx.globalCompositeOperation = 'destination-out'
        s.ctx.fillStyle = `rgba(0,0,0,${fade})`
        s.ctx.fillRect(0, 0, s.w, s.h)
      }
      if (drawing) {
        s.points.forEach(pt => stamp(pt[0], pt[1]))
        s.points = []
      }
      s.rafId = requestAnimationFrame(tick)
    }

    function onPointerMove(e) {
      const rect = container.getBoundingClientRect()
      const cx = (e.clientX - rect.left) * s.dpr
      const cy = (e.clientY - rect.top) * s.dpr
      if (cx < -s.radius || cx > s.w + s.radius || cy < -s.radius || cy > s.h + s.radius) {
        s.last = null; return
      }
      if (!s.last) { s.last = [cx, cy]; s.points.push([cx, cy]); return }
      const dx = cx - s.last[0], dy = cy - s.last[1]
      const dist = Math.sqrt(dx * dx + dy * dy)
      const step = Math.max(s.radius * 0.3, 1)
      const n = Math.min(Math.ceil(dist / step), 60)
      for (let i = 0; i <= n; i++) {
        const t = n === 0 ? 0 : i / n
        s.points.push([s.last[0] + dx * t, s.last[1] + dy * t])
      }
      s.last = [cx, cy]
    }

    function onPointerLeave() { s.last = null }

    const ro = new ResizeObserver(resize)
    ro.observe(container)
    if (afterImg.complete) resize()
    else afterImg.onload = resize

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerleave', onPointerLeave)
    s.rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(s.rafId)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
      ro.disconnect()
    }
  }, [afterSrc])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Always-visible base image */}
      <img
        src={beforeSrc}
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        fetchPriority="high"
      />
      {/* Brush-revealed overlay canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      />
    </div>
  )
}