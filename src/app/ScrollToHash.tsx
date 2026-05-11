'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollToHash() {
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return

    const id = hash.startsWith('#') ? hash.slice(1) : hash
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    const t = window.setTimeout(() => {
      const retry = document.getElementById(id)
      retry?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)

    return () => window.clearTimeout(t)
  }, [pathname])

  return null
}
