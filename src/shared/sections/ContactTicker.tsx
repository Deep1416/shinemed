import { Mail, PhoneCall } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'

const baseItems = [
  { icon: Mail, label: 'Email: shinemedpharmaceuticals@gmail.com' },
  { icon: PhoneCall, label: 'Call Us: 8757469988' },
]

export function ContactTicker() {
  const items = useMemo(() => [...baseItems, ...baseItems, ...baseItems], [])
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const setRef = useRef<HTMLDivElement | null>(null)

  const offsetRef = useRef(0)
  const lastTsRef = useRef<number | null>(null)
  const setWidthRef = useRef(0)
  const draggingRef = useRef(false)
  const dragStartXRef = useRef(0)
  const dragStartOffsetRef = useRef(0)

  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches

    if (prefersReducedMotion) return

    const measure = () => {
      const setEl = setRef.current
      if (!setEl) return
      const rect = setEl.getBoundingClientRect()
      setWidthRef.current = rect.width
      // Keep offset within bounds after resize.
      const w = setWidthRef.current
      if (w > 0) {
        offsetRef.current = ((offsetRef.current % w) + w) % w
        offsetRef.current = -offsetRef.current
      }
    }

    measure()

    const ro =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => {
            measure()
          })
        : null

    if (ro) {
      if (setRef.current) ro.observe(setRef.current)
      if (viewportRef.current) ro.observe(viewportRef.current)
    }

    let raf = 0
    const speedPxPerSec = 90

    const tick = (ts: number) => {
      raf = window.requestAnimationFrame(tick)
      if (draggingRef.current) {
        lastTsRef.current = ts
        return
      }

      const last = lastTsRef.current ?? ts
      const dt = Math.min(0.05, (ts - last) / 1000)
      lastTsRef.current = ts

      const w = setWidthRef.current
      if (!w) return

      offsetRef.current -= speedPxPerSec * dt

      // Wrap seamlessly.
      if (offsetRef.current <= -w) offsetRef.current += w

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`
      }
    }

    raf = window.requestAnimationFrame(tick)

    return () => {
      if (raf) window.cancelAnimationFrame(raf)
      ro?.disconnect()
    }
  }, [])

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true
    setIsDragging(true)
    dragStartXRef.current = e.clientX
    dragStartOffsetRef.current = offsetRef.current
    viewportRef.current?.setPointerCapture?.(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return
    const dx = e.clientX - dragStartXRef.current
    offsetRef.current = dragStartOffsetRef.current + dx

    const w = setWidthRef.current
    if (w) {
      while (offsetRef.current <= -w) offsetRef.current += w
      while (offsetRef.current > 0) offsetRef.current -= w
    }

    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`
    }
  }

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return
    draggingRef.current = false
    setIsDragging(false)
    viewportRef.current?.releasePointerCapture?.(e.pointerId)
  }

  return (
    <section className="contact-ticker" aria-label="Contact information">
      <div
        className={`contact-ticker__viewport ${isDragging ? 'is-dragging' : ''}`}
        ref={viewportRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        aria-label="Contact ticker"
        role="group"
      >
        <div className="contact-ticker__track" ref={trackRef}>
          <div className="contact-ticker__set" ref={setRef} aria-hidden="true">
            {items.map((item, index) => {
              const Icon = item.icon
              return (
                <div className="contact-ticker__item" key={`set-a-${item.label}-${index}`}>
                  <Icon size={34} strokeWidth={2.4} aria-hidden="true" />
                  <span>{item.label}</span>
                  <span className="contact-ticker__flower" aria-hidden="true" />
                </div>
              )
            })}
          </div>

          <div className="contact-ticker__set" aria-hidden="true">
            {items.map((item, index) => {
              const Icon = item.icon
              return (
                <div className="contact-ticker__item" key={`set-b-${item.label}-${index}`}>
                  <Icon size={34} strokeWidth={2.4} aria-hidden="true" />
                  <span>{item.label}</span>
                  <span className="contact-ticker__flower" aria-hidden="true" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
