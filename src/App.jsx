import Navbar       from './components/Navbar.jsx'
import Hero         from './components/Hero.jsx'
import Problem      from './components/Problem.jsx'
import Services     from './components/Services.jsx'
import Testimonials from './components/Testimonials.jsx'
import About        from './components/About.jsx'
import Contact      from './components/Contact.jsx'
import Footer       from './components/Footer.jsx'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
