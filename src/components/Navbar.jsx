import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'SERVICIOS',  id: 'servicios'  },
  { label: 'SOBRE MÍ',  id: 'sobre-mi'   },
  { label: 'CONTACTO',  id: 'contacto'   },
]

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <button
        className="navbar__wordmark"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        PAU
      </button>

      <ul className="navbar__links">
        {NAV_LINKS.map(({ label, id }) => (
          <li key={id}>
            <button className="navbar__link" onClick={() => scrollToSection(id)}>
              {label}
            </button>
          </li>
        ))}
      </ul>

      <button
        className="navbar__cta"
        onClick={() => window.open('https://calendly.com/pau', '_blank')}
      >
        AGENDA LLAMADA
      </button>
    </nav>
  )
}
