import './Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contacto">
      <span className="contact__label">Hablemos</span>
      <h2 className="contact__headline">
        ¿Listo para<br />
        mover tu empresa<span className="contact__headline-accent">?</span>
      </h2>
      <p className="contact__subline">
        Primera llamada gratuita. Sin compromiso. Sin powerpoints.
      </p>

      <div className="contact__body">
        <button
          className="contact__cta-btn"
          onClick={() => window.open('https://calendly.com/pau', '_blank')}
        >
          AGENDA UNA LLAMADA GRATUITA →
        </button>

        <div className="contact__details">
          <a href="mailto:hola@mohammedpau.com">hola@mohammedpau.com</a>
          <a
            href="https://linkedin.com/in/mohammedpau"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn → /in/mohammedpau
          </a>
          <span>Barcelona, España · Remoto</span>
        </div>
      </div>
    </section>
  )
}
