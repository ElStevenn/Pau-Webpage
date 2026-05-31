import './About.css'

const PILLS = ['PYTHON', 'FASTAPI', 'AWS', 'DOCKER', 'POSTGRESQL', 'REACT', 'TERRAFORM', 'N8N']

const STATS = [
  { number: '+40', label: 'Proyectos' },
  { number: '7',   label: 'Años'      },
  { number: '3',   label: 'Países'    },
]

export default function About() {
  return (
    <section className="about" id="sobre-mi">
      <div className="about__left">
        <span className="about__label">Sobre mí</span>
        <h2 className="about__headline">
          No soy<br />
          una agencia<span className="about__headline-accent">.</span><br />
          Soy yo.
        </h2>

        <div className="about__body">
          <p>
            Freelance fullstack y consultor tech con más de 7 años trabajando con startups,
            PYMEs y despachos en España y Europa. He construido desde cero plataformas SaaS,
            sistemas de automatización y arquitecturas cloud que hoy mueven dinero real.
          </p>
          <p>
            No vendo humo. No subcontrato. Cuando contratas a PAU, trabajas con PAU.
          </p>
        </div>

        <div className="about__pills">
          {PILLS.map(p => (
            <span key={p} className="about__pill">{p}</span>
          ))}
        </div>
      </div>

      <div className="about__visual">
        <span className="about__visual-watermark">PAU</span>
        <div className="about__stats">
          {STATS.map(s => (
            <div key={s.number} className="about__stat">
              <span className="about__stat-number">{s.number}</span>
              <span className="about__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
