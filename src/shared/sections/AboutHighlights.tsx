import generalClinicImage from '../../assets/services/general-clinic.png'
import pharmacyImage from '../../assets/services/pharmacy-medication.png'
import { aboutStats } from '../data/aboutStats'

export function AboutHighlights() {
  return (
    <section
      className="about-highlights"
      aria-label="More about Shinemed Pharmaceuticals Pvt Ltd"
    >
      <div className="about-highlights__inner">
        <div className="about-mosaic" aria-label="About Shinemed Pharmaceuticals Pvt Ltd highlights">
          <figure className="about-mosaic__img about-mosaic__img--left">
            <img src={generalClinicImage} alt="Clinician supporting a patient" />
          </figure>

          <div className="about-mosaic__card about-mosaic__card--team">
            <h3>Our Team</h3>
            <p>
              Our experienced team offers personalized, respectful care to support your health at
              every life stage.
            </p>
          </div>

          <figure className="about-mosaic__img about-mosaic__img--center">
            <img
              src="https://cdn.prod.website-files.com/687dbda1698c0a7c3f05d5ad/68898dfa5d4057609629f784_about-second-section-image-2-p-1080.webp"
              alt="Doctors collaborating to support patients"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="about-mosaic__card about-mosaic__card--soft about-mosaic__card--mission">
            <h3>Our Mission</h3>
            <p>
              Shinemed Pharmaceuticals Pvt Ltd delivers trusted, accessible healthcare solutions for
              every family.
            </p>
          </div>

          <figure className="about-mosaic__img about-mosaic__img--right">
            <img src={pharmacyImage} alt="Medication and pharmacy support" />
          </figure>
        </div>

        <div className="about-who">
          <div className="about-who__left">
            <div className="section-kicker">
              <span aria-hidden="true" />
              WHO WE ARE
            </div>
            <h2>A Team Built on Trust, Care, and Community</h2>
          </div>

          <div className="about-who__right">
            <p>
              Shinemed Pharmaceuticals Pvt Ltd is more than a healthcare provider—we’re a trusted
              partner in your well-being. Founded with a vision to simplify healthcare access, we
              bring together a network of doctors, dentists, pharmacists, and telehealth
              professionals under one unified mission: to care for people like family.
            </p>
          </div>
        </div>

        <dl
          className="about-stats about-stats--card"
          aria-label="Shinemed Pharmaceuticals Pvt Ltd achievements"
        >
          {aboutStats.map((stat) => (
            <div className="about-stats__item" key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

