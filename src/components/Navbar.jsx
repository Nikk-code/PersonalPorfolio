import { navLinks } from '../data/portfolioData'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#" className="navbar__brand">
        <svg className="navbar__logo" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="currentColor" fillOpacity="0.1" />
          <path d="M8 10L4 16L8 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 10L28 16L24 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="52%" y="58%" dominantBaseline="middle" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="10" fill="currentColor">NS</text>
        </svg>
        <span className="navbar__brand-text">Nikhil Sakalkar</span>
      </a>
      <div className="navbar__right">
        <nav className="navbar__links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}

