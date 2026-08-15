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
