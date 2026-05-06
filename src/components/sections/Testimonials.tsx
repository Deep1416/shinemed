import { testimonials } from '../../data/testimonials'

export function Testimonials() {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-heading">
      <div className="testimonials-section__header">
        <div className="section-kicker section-kicker--center">
          <span aria-hidden="true" />
          TESTIMONIAL
        </div>
        <h2 id="testimonials-heading">What Our Patients Say</h2>
      </div>

      <div className="testimonial-strip" aria-label="Patient testimonials">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <span className="testimonial-card__quote" aria-hidden="true">
              &ldquo;
            </span>
            <h3>{testimonial.title}</h3>
            <p>{testimonial.quote}</p>
            <footer>
              <span className="testimonial-card__avatar" aria-hidden="true">
                {testimonial.initials}
              </span>
              <strong>{testimonial.name}</strong>
            </footer>
          </article>
        ))}
      </div>
    </section>
  )
}
