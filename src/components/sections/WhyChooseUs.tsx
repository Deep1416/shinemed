import { whyChooseUsCards } from '../../data/whyChooseUs'

export function WhyChooseUs() {
  return (
    <section className="why-section" aria-labelledby="why-heading">
      <div className="why-section__inner">
        <div className="why-section__header">
          <div className="section-kicker section-kicker--center">
            <span aria-hidden="true" />
            WHY CHOOSE US
          </div>
          <h2 id="why-heading">Why Choose ReliaCare?</h2>
          <p>
            At ReliaCare, we offer a wide range of healthcare services to support you
            and your family, whether in person or online.
          </p>
        </div>

        <div className="why-cards">
          {whyChooseUsCards.map((card) => (
            <article className="why-card" key={card.title}>
              <span className={`why-card__motif why-card__motif--${card.motif}`} aria-hidden="true" />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
