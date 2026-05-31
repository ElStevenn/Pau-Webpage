import { useEffect, useRef } from 'react'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    quote: '"Mohammed transformó por completo cómo gestionamos los presupuestos internos. Lo que tardábamos 3 días ahora lo hace un agente en 20 minutos."',
    name:  'Carlos Mendoza',
    role:  'Director de Operaciones · Nexora Capital',
  },
  {
    quote: '"Implementó nuestra infraestructura AWS desde cero en dos semanas. Estable, escalable, y con documentación real. Primera vez que un freelance cumple lo que promete."',
    name:  'Laura Puig',
    role:  'CTO · Buildfast Tech',
  },
  {
    quote: '"La auditoría de IA que nos hizo cambió la forma en que trabaja todo el despacho. Facturamos un 30% más con el mismo equipo."',
    name:  'Jordi Roca',
    role:  'Socio fundador · Despacho Roca & Vilà',
  },
]

export default function Testimonials() {
  const cardRefs = useRef([])

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean)
    if (!cards.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
      },
      { threshold: 0.15 }
    )
    cards.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="testimonials">
      <span className="testimonials__label">Lo que dicen</span>
      <h2 className="testimonials__headline">
        Resultados reales
        <span className="testimonials__headline-accent">.</span>
      </h2>

      <div className="testimonials__grid">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className="testimonials__card"
            ref={el => { cardRefs.current[i] = el }}
          >
            <span className="testimonials__quote">{t.quote}</span>
            <span className="testimonials__name">{t.name}</span>
            <span className="testimonials__role">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
