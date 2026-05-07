import { ServiceHighlights } from '../shared/sections/ServiceHighlights'
import { Services } from '../shared/sections/Services'

export function ServicesPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="services-page-heading">
        <div className="page-hero__inner">
          <div className="section-kicker section-kicker--center">
            <span aria-hidden="true" />
            SERVICES
          </div>
          <h1 id="services-page-heading">Our Services</h1>
          <p>
            We provide complete medical, dental, telehealth, and pharmacy
            services to support your family’s health every day.
          </p>
        </div>
      </section>

      <ServiceHighlights />
      <Services />
    </>
  )
}
