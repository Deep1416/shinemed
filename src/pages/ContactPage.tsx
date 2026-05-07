import { ChevronRight, Link2, Mail, MapPin, Phone } from "lucide-react";

export function ContactPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="contact-heading">
        <div className="page-hero__inner">
          <div className="section-kicker section-kicker--center">
            <span aria-hidden="true" />
            CONTACT US
          </div>
          <h1 id="contact-heading">
            Get in Touch with Shinemed Pharmaceuticals Pvt Ltd
          </h1>
          <p>
            Have questions or need help? Contact Shinemed Pharmaceuticals Pvt
            Ltd for support, appointments, or service information anytime.
          </p>
        </div>
      </section>

      <section
        className="contact-form-section"
        aria-labelledby="contact-form-heading"
      >
        <div className="contact-form-section__inner">
          <form
            className="contact-form"
            onSubmit={(e) => e.preventDefault()}
            noValidate
          >
            <div className="contact-form__grid">
              <div className="contact-form__field">
                <label htmlFor="contact-first-name">First name</label>
                <input
                  id="contact-first-name"
                  name="firstName"
                  type="text"
                  placeholder="John"
                />
              </div>
              <div className="contact-form__field">
                <label htmlFor="contact-last-name">Last Name</label>
                <input
                  id="contact-last-name"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                />
              </div>
              <div className="contact-form__field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="shinemedpharmaceuticals@gmail.com"
                />
              </div>
              <div className="contact-form__field">
                <label htmlFor="contact-phone">Phone Number</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="8757469988"
                />
              </div>
            </div>

            <div className="contact-form__field contact-form__field--full">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={7}
                placeholder="Write your message"
              />
            </div>

            <div className="contact-form__actions">
              <button className="contact-submit" type="submit">
                Send Message
                <span className="contact-submit__icon" aria-hidden="true">
                  <ChevronRight size={18} strokeWidth={3} />
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>

      <section
        className="contact-details-section"
        aria-labelledby="contact-details-heading"
      >
        <div className="contact-details-section__inner">
          <header className="contact-details-section__header">
            <h2 id="contact-details-heading">Contact Details</h2>
            <p>
              Find our address, phone number, email, and hours—reach Shinemed
              Pharmaceuticals Pvt Ltd easily whenever you need support.
            </p>
          </header>

          <div className="contact-details-grid">
            <article className="contact-detail-card">
              <div className="contact-detail-card__head">
                <span className="contact-detail-card__icon" aria-hidden="true">
                  <Phone size={18} strokeWidth={2.6} />
                </span>
                <h3>Call Us</h3>
              </div>
              <div className="contact-detail-card__rule" role="presentation" />
              <p>
                <a href="tel:8757469988">8757469988</a>
              </p>
            </article>

            <article className="contact-detail-card">
              <div className="contact-detail-card__head">
                <span className="contact-detail-card__icon" aria-hidden="true">
                  <Mail size={18} strokeWidth={2.6} />
                </span>
                <h3>Email Us</h3>
              </div>
              <div className="contact-detail-card__rule" role="presentation" />
              <p>
                <a href="mailto:shinemedpharmaceuticals@gmail.com">
                  shinemedpharmaceuticals@gmail.com
                </a>
              </p>
            </article>

            <article className="contact-detail-card">
              <div className="contact-detail-card__head">
                <span className="contact-detail-card__icon" aria-hidden="true">
                  <MapPin size={18} strokeWidth={2.6} />
                </span>
                <h3>Head Quarter</h3>
              </div>
              <div className="contact-detail-card__rule" role="presentation" />
              <p>
                9/334, Ground Floor, Gali No. 9, Lalita Park, Delhi, India -
                110092
              </p>
            </article>

            <article className="contact-detail-card">
              <div className="contact-detail-card__head">
                <span className="contact-detail-card__icon" aria-hidden="true">
                  <Link2 size={18} strokeWidth={2.6} />
                </span>
                <h3>Follow Us</h3>
              </div>
              <div className="contact-detail-card__rule" role="presentation" />
              <div
                className="contact-detail-card__socials"
                aria-label="Social links"
              >
                <a href="#facebook" aria-label="Facebook">
                  f
                </a>
                <a href="#x" aria-label="X">
                  x
                </a>
                <a href="#instagram" aria-label="Instagram">
                  in
                </a>
                <a href="#linkedin" aria-label="LinkedIn">
                  in
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
