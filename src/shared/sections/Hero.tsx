export function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-heading">
      <div className="hero-section__ambient" aria-hidden="true" />
      <div className="hero-section__grid" aria-hidden="true">
        <span className="hero-section__pillar hero-section__pillar--left" />
        <span className="hero-section__pillar hero-section__pillar--middle" />
        <span className="hero-section__pillar hero-section__pillar--right" />
      </div>

      <div className="hero-content">
        <h1 id="hero-heading">
          Trustworthy <mark>Care</mark> for You and Your Family
        </h1>
        <p>
          Comprehensive, compassionate healthcare services designed to support
          your family's well-being at every stage of life.
        </p>
      </div>
    </section>
  );
}
