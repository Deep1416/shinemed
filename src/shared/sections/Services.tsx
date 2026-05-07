import { ArrowRight } from 'lucide-react'
import { services } from '../data/services'

export function Services() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="services-section__inner">
        <div className="services-section__header">
          <div className="section-kicker section-kicker--center">
            <span aria-hidden="true" />
            OUR SERVICES
          </div>
          <h2 id="services-heading">Complete Care for Your Everyday Health Needs</h2>
          <p>
            At Shinemed Pharmaceuticals Pvt Ltd, we offer a wide range of healthcare services to
            support you and your family, whether in person or online.
          </p>
        </div>

        <div className="services-list">
          {services.map((service) => (
            <article className="service-row" key={service.id}>
              <div className="service-row__title">
                <span>[{service.id}]</span>
                <h3>{service.title}</h3>
              </div>

              <img src={service.image} alt={service.imageAlt} />

              <div className="service-row__summary">
                <p>{service.description}</p>
                <a href={`#service-${service.id}`} aria-label={`Learn more about ${service.title}`}>
                  <ArrowRight size={56} strokeWidth={1.8} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
