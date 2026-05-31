import { useEffect, useRef } from 'react'
import './Services.css'

const CARDS = [
  {
    number: '01',
    title:  'Auditoría de Procesos con IA',
    body:   'Analizo cómo trabaja tu equipo y diseño una hoja de ruta para automatizar con IA. Resultado: menos horas manuales, más output, mismo equipo.',
  },
  {
    number: '02',
    title:  'Automatización e IA',
    body:   'Implemento agentes y workflows que eliminan tareas repetitivas. Tu equipo deja de perder tiempo en lo que una máquina puede hacer mejor.',
  },
  {
    number: '03',
    title:  'Desarrollo a Medida',
    body:   'APIs, apps internas, dashboards, herramientas propias. Construido rápido, sin deuda técnica, sin intermediarios.',
  },
  {
    number: '04',
    title:  'Infraestructura Cloud',
    body:   'AWS, Docker, Terraform, CI/CD. Tu producto escala sin romperse. Yo me encargo de que la infraestructura nunca sea el cuello de botella.',
  },
]

export default function Services() {
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
    <section className="services" id="servicios">
      <span className="services__label">Lo que hago</span>
      <h2 className="services__headline">
        Servicios que mueven el negocio
        <span className="services__headline-accent">.</span>
      </h2>

      <div className="services__grid">
        {CARDS.map((card, i) => (
          <div
            key={i}
            className="services__card"
            ref={el => { cardRefs.current[i] = el }}
          >
            <span className="services__card-number">{card.number}</span>
            <h3 className="services__card-title">{card.title}</h3>
            <p className="services__card-body">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
