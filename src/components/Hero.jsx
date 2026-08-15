import { personalInfo } from '../data/portfolioData'
import avatar from '../assets/avatar.jpg'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <p className="hero__greeting">{personalInfo.greeting}</p>
        <h1 className="hero__name">{personalInfo.name}</h1>
        <p className="hero__tagline">{personalInfo.tagline}</p>
        <div className="hero__actions">
          <a href={`tel:${personalInfo.phone}`} className="hero__phone">
            Call: {personalInfo.phone}
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__email"
          >
            Email Me
          </a>
          <a
            href="/PersonalPorfolio/Nikhil_Sakalkar_Resume.pdf"
            download="Nikhil_Sakalkar_Resume.pdf"
            className="hero__resume"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
      <div className="hero__avatar-container">
        <div className="hero__avatar-wrapper">
          <img src={avatar} alt="Nikhil Sakalkar Avatar" className="hero__avatar" />
          <div className="hero__avatar-glow"></div>
        </div>
      </div>
    </section>
  )
}
