import { About } from '../shared/sections/About'
import { ContactTicker } from '../shared/sections/ContactTicker'
import { FeaturedProducts } from '../shared/sections/FeaturedProducts'
import { Hero } from '../shared/sections/Hero'
import { Services } from '../shared/sections/Services'
import { Testimonials } from '../shared/sections/Testimonials'
import { WhyChooseUs } from '../shared/sections/WhyChooseUs'

export function HomePage() {
  return (
    <>
      <Hero />
      <ContactTicker />
      <About />
      <Services />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
    </>
  )
}

