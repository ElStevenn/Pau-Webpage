import { useEffect, useRef } from 'react'
import './Problem.css'

import testVideo from '../../videos hero/test_video_landing.mp4'

export default function Problem() {
  const leftRef  = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const targets = [leftRef.current, rightRef.current].filter(Boolean)
    if (!targets.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.2 }
    )

    targets.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="problem">
      <div className="problem__left" ref={leftRef}>
        <span className="problem__label">El problema que resuelvo</span>

        <h2 className="problem__headline">
          Tu empresa<br />
          trabaja duro<span className="problem__headline-accent">.</span><br />
          Pero no<br />
          trabaja bien<span className="problem__headline-accent">.</span>
        </h2>

        <div className="problem__body">
          <p>
            La mayoría de empresas pierden entre un 30% y un 50% de su capacidad productiva
            en procesos internos mal diseñados. No por falta de ganas. Por falta de visión técnica.
          </p>
          <p>
            Yo entro, identifico dónde se pierde el tiempo y el dinero, y lo resuelvo. Con IA,
            con automatización, con desarrollo a medida, o simplemente reorganizando cómo trabaja
            tu equipo.
          </p>
        </div>
      </div>

      <div className="problem__right" ref={rightRef}>
        <video
          className="problem__video"
          src={testVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="problem__color-grade" />
        <div className="problem__edge-fade" />
      </div>
    </section>
  )
}
