import { ChevronRight, HeartPulse } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { navigationItems } from '../data/navigation'

export function Header() {
  const location = useLocation()

  return (
    <header className="site-header" aria-label="Primary">
      <Link className="brand" to="/" aria-label="Shinemed Pharmaceuticals Pvt Ltd home">
        <span className="brand__mark" aria-hidden="true">
          <HeartPulse size={22} fill="currentColor" strokeWidth={2.4} />
        </span>
        <span className="brand__name" aria-label="Shinemed Pharmaceuticals Pvt Ltd">
          <span className="brand__name-main">Shinemed</span>
          <span className="brand__name-sub">Pharmaceuticals Pvt Ltd</span>
        </span>
      </Link>

      <nav className="primary-nav" aria-label="Main navigation">
        {navigationItems.map((item) => {
          const isActive =
            item.href === '/about'
              ? location.pathname === '/about'
              : item.href === '/services'
                ? location.pathname === '/services'
                : item.href === '/shop'
                  ? location.pathname === '/shop' || location.pathname.startsWith('/shop/')
                  : item.href.startsWith('#')
                    ? location.pathname === '/' && location.hash === item.href
                    : location.pathname === '/' && item.href === '/'

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
        })}
      </nav>

      <div className="header-actions">
        <Link className="action-button action-button--primary header-actions__contact" to="/contact">
          <span>Contact Us</span>
          <span className="action-button__icon" aria-hidden="true">
            <ChevronRight size={24} strokeWidth={3} />
          </span>
        </Link>
      </div>
    </header>
  )
}
