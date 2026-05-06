import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { About } from './components/sections/About'
import { Hero } from './components/sections/Hero'
import { ContactTicker } from './components/sections/ContactTicker'
import { Services } from './components/sections/Services'
import { Testimonials } from './components/sections/Testimonials'
import { WhyChooseUs } from './components/sections/WhyChooseUs'
import './App.css'

function App() {
  return (
    <main className="site-shell">
      <Header />
      <Hero />
      <ContactTicker />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default App
