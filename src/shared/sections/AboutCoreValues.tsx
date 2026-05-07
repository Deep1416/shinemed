type CoreValue = {
  id: string
  title: string
  description: string
}

const coreValues: CoreValue[] = [
  {
    id: '01',
    title: 'Compassion',
    description:
      'We treat every patient with empathy, kindness, and genuine concern—because healthcare begins with understanding.',
  },
  {
    id: '02',
    title: 'Integrity',
    description:
      'We act with honesty, transparency, and accountability in all we do, building lasting trust with our communities.',
  },
  {
    id: '03',
    title: 'Excellence',
    description:
      'We strive for the highest standards in medical care, continuously improving to serve you better.',
  },
  {
    id: '04',
    title: 'Respect',
    description:
      'We listen, include, and honor each person’s unique needs—creating a welcoming space for everyone.',
  },
  {
    id: '05',
    title: 'Empowerment',
    description:
      'We provide clear guidance and support so patients can make informed, confident choices about their health.',
  },
]

export function AboutCoreValues() {
  return (
    <section className="core-values-section" aria-labelledby="core-values-heading">
      <div className="core-values-section__inner">
        <header className="core-values-section__header">
          <div className="section-kicker section-kicker--center">
            <span aria-hidden="true" />
            OUR CORE VALUES
          </div>
          <h2 id="core-values-heading">Guiding Every Patient Experience</h2>
          <p>
            At Shinemed Pharmaceuticals Pvt Ltd, our values shape the way we care, connect, and grow.
            They guide every decision, every interaction, and every step of your health journey.
          </p>
        </header>

        <div className="core-values-grid" aria-label="Core values">
          {coreValues.map((value) => (
            <article
              className={`core-value-card ${value.id === '05' ? 'core-value-card--wide' : ''}`}
              key={value.id}
            >
              <div className="core-value-card__top">
                <h3>{value.title}</h3>
                <span className="core-value-card__num" aria-hidden="true">
                  {value.id}
                </span>
              </div>
              <div className="core-value-card__rule" role="presentation" />
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

