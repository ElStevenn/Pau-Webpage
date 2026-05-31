import { useState, useEffect, useRef } from 'react'
import './Hero.css'

import v1 from '../../videos hero/saludo_militar.mp4'
import v2 from '../../videos hero/video_masculino.mp4'
import v3 from '../../videos hero/video_cringe.mp4'

const VIDEO_PLAYLIST = [
  { src: v1, mobilePosition: '55% 38%' },
  { src: v2, mobilePosition: '35% 20%' },
  { src: v3, mobilePosition: '40% 20%' },
]

const CLIENTS = [
  'NEXORA CAPITAL',
  'GRUPO ALDEA',
  'SINERGIA LEGAL',
  'BUILDFAST TECH',
  'CLARION VENTURES',
  'DESPACHO ROCA & VILA',
  'OPTIMA RETAIL',
]

function MarqueeRow() {
  return CLIENTS.map((name, i) => (
    <span key={i} className="hero__marquee-item">
      {name}
      <span className="hero__marquee-diamond">◆</span>
    </span>
  ))
}

export default function Hero() {
  const [visible, setVisible]           = useState(false)
  const [currentVideo, setCurrentVideo] = useState(0)
  const [activeSlot, setActiveSlot]     = useState(0)

  const slotRefs = [useRef(null), useRef(null)]

  /* ── Entrance animation ──────────────────────────────── */
  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 60)
    return () => clearTimeout(id)
  }, [])

  /* ── Video crossfade logic ───────────────────────────── */
  const loadAndPlay = (slotIndex, videoIndex) => {
    const el = slotRefs[slotIndex].current
    if (!el) return
    el.src = VIDEO_PLAYLIST[videoIndex].src
    // Apply per-video object-position for mobile framing
    if (window.innerWidth <= 768) {
      el.style.objectPosition = VIDEO_PLAYLIST[videoIndex].mobilePosition
    }
    el.load()
    el.play().catch(() => {})
  }

  useEffect(() => {
    loadAndPlay(0, 0)
    const next = slotRefs[1].current
    if (next) { next.src = VIDEO_PLAYLIST[1].src; next.load() }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleVideoEnded = () => {
    const nextVideo = (currentVideo + 1) % VIDEO_PLAYLIST.length
    const nextSlot  = activeSlot === 0 ? 1 : 0
    loadAndPlay(nextSlot, nextVideo)
    setActiveSlot(nextSlot)
    setCurrentVideo(nextVideo)
    const afterVideo = (nextVideo + 1) % VIDEO_PLAYLIST.length
    const afterSlot  = nextSlot === 0 ? 1 : 0
    const el = slotRefs[afterSlot].current
    if (el) { el.src = VIDEO_PLAYLIST[afterVideo].src; el.load() }
  }


  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__video-bg">
          {[0, 1].map(slot => (
            <video
              key={slot}
              ref={slotRefs[slot]}
              className={`hero__video hero__video--${activeSlot === slot ? 'visible' : 'hidden'}`}
              muted
              autoPlay={slot === 0}
              playsInline
              onEnded={activeSlot === slot ? handleVideoEnded : undefined}
            />
          ))}
          <div className="hero__color-grade" />
        </div>

        <div className="hero__scrim" />

        <div className="hero__content">
          <span className={`hero__label${visible ? ' visible' : ''}`}>
            Consultor Tecnológico · Barcelona
          </span>

          <div className="hero__headline">
            {['TU EMPRESA', 'PUEDE IR', null].map((text, i) => (
              <span key={i} className={`hero__headline-line${visible ? ' visible' : ''}`}>
                {i === 2
                  ? <>MÁS RÁPIDO<span className="hero__headline-accent">.</span></>
                  : text}
              </span>
            ))}
          </div>

          <p className={`hero__subline${visible ? ' visible' : ''}`}>
            Automatización con IA. Infraestructura cloud. Desarrollo a medida.
          </p>

          <div className={`hero__cta${visible ? ' visible' : ''}`}>
            <button
              className="cta-btn"
              onClick={() => window.open('https://calendly.com/pau', '_blank')}
            >
              AGENDA UNA LLAMADA →
            </button>
          </div>
        </div>

        {/* Clients marquee — bottom of hero, very subtle */}
        <div className="hero__clients">
          <div className="hero__marquee-wrapper">
            <div className="hero__marquee-track">
              <MarqueeRow />
              <MarqueeRow />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
