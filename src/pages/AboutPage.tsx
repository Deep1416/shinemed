import { AboutCoreValues } from '../shared/sections/AboutCoreValues'
// import { AboutHighlights } from '../shared/sections/AboutHighlights'

export function AboutPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="about-page-heading">
        <div className="page-hero__inner">
          <div className="section-kicker section-kicker--center">
            <span aria-hidden="true" />
            ABOUT US
          </div>
          <h1 id="about-page-heading">About Shinemed Pharmaceuticals Pvt Ltd</h1>
          <p>
            Shinemed Pharmaceuticals Pvt Ltd delivers trusted, accessible healthcare solutions for
            every family.
          </p>
        </div>
      </section>
      {/* <AboutHighlights /> */}
      <AboutCoreValues />
    </>
  )
}
