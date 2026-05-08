import { aboutStats } from '../data/aboutStats'
import { ActionButton } from '../ui/ActionButton'

export function About() {
  return (
    <section
      className="about-section"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="about-section__inner">
        <div className="section-kicker">
          <span aria-hidden="true" />
          ABOUT US
        </div>

        <div className="about-section__intro">
          <h2 id="about-heading">
            Dedicated to Your Health, Every Step of the Way
          </h2>
          <div className="about-section__copy">
            <p>
              At Shinemed Pharmaceuticals Pvt Ltd, we provide compassionate, reliable healthcare
              services
              tailored to individuals and families. Whether you visit us in
              person or connect through telehealth, our experienced team is here
              to deliver accessible care with professionalism
            </p>
            <ActionButton to="/about">About Us</ActionButton>
          </div>
        </div>

        <dl className="about-stats" aria-label="Shinemed Pharmaceuticals Pvt Ltd achievements">
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
