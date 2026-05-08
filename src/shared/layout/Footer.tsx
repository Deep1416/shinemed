import { Link } from "react-router-dom";
import { footerQuickLinks, footerSocialLinks } from "../data/footer";

export function Footer() {
	return (
		<footer className="site-footer">
			<div className="footer-top" aria-label="Footer call to action">
				<div className="footer-top__inner">
					<div className="footer-cta">
						<h2>Need support or product guidance?</h2>
						<p>Connect with Shinemed Pharmaceuticals Pvt Ltd for assistance, availability, and general inquiries.</p>
					</div>

					<div className="footer-cta__actions" aria-label="Footer actions">
						<Link className="footer-button footer-button--primary" to="/contact">
							Contact Us
						</Link>
						<Link className="footer-button footer-button--ghost" to="/shop">
							Explore Products
						</Link>
					</div>
				</div>
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
								<Link className={link.active ? "is-active" : ""} to={link.href}>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<div className="footer-brand-panel">
					<Link className="footer-brand" to="/" aria-label="Shinemed Pharmaceuticals Pvt Ltd home">
						<span>Shinemed Pharmaceuticals Pvt Ltd</span>
					</Link>
					<p>Shinemed Pharmaceuticals Pvt Ltd provides trusted, accessible healthcare products and services to support every family.</p>
					<div className="footer-socials">
						{footerSocialLinks.map((link) => (
							<a href={link.href} aria-label={link.label} key={link.label}>
								{link.text}
							</a>
						))}
					</div>
				</div>

				<div className="footer-contact" aria-label="Contact information">
					<h2 className="footer-contact__title">
						<span aria-hidden="true" />
						Contact
					</h2>
					<ul className="footer-contact__list">
						<li>
							<span className="footer-contact__label">Email</span>
							<a href="mailto:shinemedpharmaceuticals@gmail.com">shinemedpharmaceuticals@gmail.com</a>
						</li>
						<li>
							<span className="footer-contact__label">Phone</span>
							<a href="tel:8757469988">8757469988</a>
						</li>
						<li>
							<span className="footer-contact__label">Address</span>
							<span>9/334, Ground Floor, Gali No. 9, Lalita Park, Delhi, India - 110092</span>
						</li>
						<li>
							<span className="footer-contact__label">Hours</span>
							<span>Mon–Sat: 9:00 AM – 6:00 PM</span>
						</li>
					</ul>
				</div>
			</div>

			<div className="footer-bottom">
				<p>© 2026 Shinemed Pharmaceuticals Pvt Ltd. All rights reserved.</p>
			</div>
		</footer>
	);
}
