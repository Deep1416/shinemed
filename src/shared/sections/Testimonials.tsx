import { testimonials } from '../data/testimonials'
import { useEffect, useMemo, useRef, useState } from 'react'

export function Testimonials() {
  const items = useMemo(() => [...testimonials, ...testimonials, ...testimonials], [])
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
    const speedPxPerSec = 70

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

  const tiltClass = (index: number) => {
    const mod = index % 5
    if (mod === 0) return 'testimonial-card--tilt-a'
    if (mod === 1) return 'testimonial-card--tilt-b'
    if (mod === 2) return 'testimonial-card--tilt-c'
    if (mod === 3) return 'testimonial-card--tilt-d'
    return 'testimonial-card--tilt-e'
  }

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-heading">
      <div className="testimonials-section__header">
        <div className="section-kicker section-kicker--center">
          <span aria-hidden="true" />
          TESTIMONIAL
        </div>
        <h2 id="testimonials-heading">What Our Patients Say</h2>
      </div>

      <div
        className={`testimonials-marquee ${isDragging ? 'is-dragging' : ''}`}
        ref={viewportRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        aria-label="Patient testimonials carousel"
        role="group"
      >
        <div className="testimonial-strip" ref={trackRef}>
          <div className="testimonial-set" ref={setRef} aria-hidden="true">
            {items.map((testimonial, index) => (
              <article className={`testimonial-card ${tiltClass(index)}`} key={`set-a-${testimonial.name}-${index}`}>
                <span className="testimonial-card__quote" aria-hidden="true">
                  &ldquo;
                </span>
                <h3>{testimonial.title}</h3>
                <p>{testimonial.quote}</p>
                <footer>
                  <span className="testimonial-card__avatar" aria-hidden="true">
                    {testimonial.initials}
                  </span>
                  <strong>{testimonial.name}</strong>
                </footer>
              </article>
            ))}
          </div>

          <div className="testimonial-set" aria-hidden="true">
            {items.map((testimonial, index) => (
              <article className={`testimonial-card ${tiltClass(index)}`} key={`set-b-${testimonial.name}-${index}`}>
                <span className="testimonial-card__quote" aria-hidden="true">
                  &ldquo;
                </span>
                <h3>{testimonial.title}</h3>
                <p>{testimonial.quote}</p>
                <footer>
                  <span className="testimonial-card__avatar" aria-hidden="true">
                    {testimonial.initials}
                  </span>
                  <strong>{testimonial.name}</strong>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
