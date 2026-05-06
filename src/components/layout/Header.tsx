import { ChevronDown, HeartPulse, ShoppingCart } from 'lucide-react'
import { navigationItems } from '../../data/navigation'
import { ActionButton } from '../ui/ActionButton'

export function Header() {
  return (
    <header className="site-header" aria-label="Primary">
      <a className="brand" href="#home" aria-label="RediaCare home">
        <span className="brand__mark" aria-hidden="true">
          <HeartPulse size={22} fill="currentColor" strokeWidth={2.4} />
        </span>
        <span className="brand__name">RediaCare</span>
      </a>

      <nav className="primary-nav" aria-label="Main navigation">
        {navigationItems.map((item) => (
          <a
            className={`primary-nav__link ${item.active ? 'is-active' : ''}`}
            href={item.href}
            key={item.label}
          >
            {item.active && <span className="primary-nav__dot" aria-hidden="true" />}
            <span>{item.label}</span>
            {item.hasMenu && <ChevronDown size={18} strokeWidth={2.8} aria-hidden="true" />}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button className="cart-button" type="button" aria-label="Open cart">
          <ShoppingCart size={30} strokeWidth={2.1} />
          <span className="cart-button__indicator" aria-hidden="true" />
        </button>
        <ActionButton className="header-actions__contact">Contact Us</ActionButton>
      </div>
    </header>
  )
}
