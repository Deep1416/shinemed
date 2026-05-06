import { ChevronRight, HeartPulse } from 'lucide-react'
import { footerQuickLinks, footerSocialLinks, footerUtilityLinks } from '../../data/footer'

const appointmentItems = Array.from({ length: 4 }, (_, index) => index)

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-cta-strip" aria-label="Appointment shortcuts">
        {appointmentItems.map((item) => (
          <div className="footer-cta-strip__item" key={item}>
            <a className="footer-appointment" href="#home">
              <span>Book Appointment Now</span>
              <span className="footer-appointment__icon" aria-hidden="true">
                <ChevronRight size={28} strokeWidth={3} />
              </span>
            </a>
            <span className="footer-cta-strip__flower" aria-hidden="true" />
          </div>
        ))}
      </div>

      <div className="footer-main">
        <nav className="footer-links footer-links--quick" aria-label="Footer quick links">
          <h2>
            <span aria-hidden="true" />
            Quick Links
          </h2>
          <ul>
            {footerQuickLinks.map((link) => (
              <li key={link.label}>
                <a className={link.active ? 'is-active' : ''} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-brand-panel">
          <a className="footer-brand" href="#home" aria-label="ReliaCare home">
            <span className="footer-brand__mark" aria-hidden="true">
              <HeartPulse size={28} fill="currentColor" strokeWidth={2.5} />
            </span>
            <span>
              Relia<strong>Care</strong>
            </span>
          </a>
          <p>
            ReliaCare provides trusted, compassionate healthcare for families through
            clinic, pharmacy, and telehealth services.
          </p>
          <div className="footer-socials">
            {footerSocialLinks.map((link) => (
              <a href={link.href} aria-label={link.label} key={link.label}>
                {link.text}
              </a>
            ))}
          </div>
        </div>

        <nav className="footer-links footer-links--utility" aria-label="Footer utility links">
          <h2>
            <span aria-hidden="true" />
            Utilities
          </h2>
          <ul>
            {footerUtilityLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>All rights reserved.</p>
        <p>
          Powered by - <a href="#webflow">Webflow</a>
        </p>
        <p>
          Design & Developed by - <a href="#ideapeel">ideapeel</a>
        </p>
      </div>
    </footer>
  )
}
