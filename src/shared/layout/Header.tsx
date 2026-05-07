import { useCallback, useEffect, useId, useState } from 'react'
import { ChevronRight, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { navigationItems } from '../data/navigation'

type NavItem = (typeof navigationItems)[number]

function itemIsActive(item: NavItem, location: ReturnType<typeof useLocation>) {
  if (item.href === '/about') return location.pathname === '/about'
  if (item.href === '/services') return location.pathname === '/services'
  if (item.href === '/shop')
    return location.pathname === '/shop' || location.pathname.startsWith('/shop/')
  if (item.href.startsWith('#')) return location.pathname === '/' && location.hash === item.href
  return location.pathname === '/' && item.href === '/'
}

export function Header() {
  const location = useLocation()
  const menuPanelId = useId()
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  useEffect(() => {
    closeMobile()
  }, [location.pathname, location.hash, closeMobile])

  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobile()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen, closeMobile])

  const renderDesktopLink = (item: NavItem) => {
    const isActive = itemIsActive(item, location)
    const className = `primary-nav__link ${isActive ? 'is-active' : ''}`

    if (item.href === '/about' || item.href === '/services' || item.href === '/shop' || item.href === '/contact') {
      return (
        <Link className={className} to={item.href} key={item.label}>
          {isActive && <span className="primary-nav__dot" aria-hidden="true" />}
          <span>{item.label}</span>
        </Link>
      )
    }

    if (item.href.startsWith('#')) {
      return (
        <Link className={className} to={`/${item.href}`} key={item.label}>
          {isActive && <span className="primary-nav__dot" aria-hidden="true" />}
          <span>{item.label}</span>
        </Link>
      )
    }

    return (
      <a className={className} href={item.href} key={item.label}>
        {isActive && <span className="primary-nav__dot" aria-hidden="true" />}
        <span>{item.label}</span>
      </a>
    )
  }

  const renderMobileLink = (item: NavItem) => {
    const isActive = itemIsActive(item, location)
    const className = `mobile-nav__link ${isActive ? 'is-active' : ''}`
    const dot = isActive ? <span className="mobile-nav__dot" aria-hidden="true" /> : null

    if (item.href === '/about' || item.href === '/services' || item.href === '/shop' || item.href === '/contact') {
      return (
        <Link className={className} to={item.href} key={item.label} onClick={closeMobile}>
          {dot}
          <span>{item.label}</span>
        </Link>
      )
    }

    if (item.href.startsWith('#')) {
      return (
        <Link className={className} to={`/${item.href}`} key={item.label} onClick={closeMobile}>
          {dot}
          <span>{item.label}</span>
        </Link>
      )
    }

    return (
      <a className={className} href={item.href} key={item.label} onClick={closeMobile}>
        {dot}
        <span>{item.label}</span>
      </a>
    )
  }

  return (
    <>
      <header className="site-header" aria-label="Primary">
        <Link className="brand" to="/" aria-label="Shinemed Pharmaceuticals Pvt Ltd home">
          <span className="brand__name" aria-label="Shinemed Pharmaceuticals Pvt Ltd">
            <span className="brand__name-main">Shinemed</span>
            <span className="brand__name-sub">Pharmaceuticals Pvt Ltd</span>
          </span>
        </Link>

        <nav className="primary-nav" aria-label="Main navigation">
          {navigationItems.map(renderDesktopLink)}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="site-header__menu-toggle"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls={menuPanelId}
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={26} strokeWidth={2.4} aria-hidden="true" />
          </button>
          <Link className="action-button action-button--primary header-actions__contact" to="/contact">
            <span>Contact Us</span>
            <span className="action-button__icon" aria-hidden="true">
              <ChevronRight size={24} strokeWidth={3} />
            </span>
          </Link>
        </div>
      </header>

      <div
        id={menuPanelId}
        className={`mobile-nav${mobileOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!mobileOpen}
        {...(!mobileOpen ? { inert: true as const } : {})}
      >
        <div className="mobile-nav__backdrop" onClick={closeMobile} aria-hidden="true" />
        <div className="mobile-nav__sheet">
          <div className="mobile-nav__topbar">
            <Link className="brand brand--compact" to="/" onClick={closeMobile}>
              <span className="brand__name" aria-label="Shinemed Pharmaceuticals Pvt Ltd">
                <span className="brand__name-main">Shinemed</span>
                <span className="brand__name-sub">Pharmaceuticals Pvt Ltd</span>
              </span>
            </Link>
            <button type="button" className="mobile-nav__close" aria-label="Close menu" onClick={closeMobile}>
              <X size={26} strokeWidth={2.4} aria-hidden="true" />
            </button>
          </div>
          <div className="mobile-nav__card">
            <nav className="mobile-nav__links" aria-label="Main navigation">
              {navigationItems.map(renderMobileLink)}
            </nav>
            <Link className="action-button action-button--primary mobile-nav__cta" to="/contact" onClick={closeMobile}>
              <span>Contact Us</span>
              <span className="action-button__icon" aria-hidden="true">
                <ChevronRight size={24} strokeWidth={3} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
