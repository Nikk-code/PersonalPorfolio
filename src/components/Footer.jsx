import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
      <p className="footer__copy">
        Built with React &middot; Nikhil Sakalkar portfolio
      </p>
    </footer>
  )
}
