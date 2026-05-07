import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      return
    }

    const id = hash.startsWith('#') ? hash.slice(1) : hash
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    // Fallback if the element renders slightly later.
    const t = window.setTimeout(() => {
      const retry = document.getElementById(id)
      retry?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)

    return () => window.clearTimeout(t)
  }, [location.pathname, location.hash])

  return null
}

