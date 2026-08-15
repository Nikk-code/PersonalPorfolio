import { personalInfo } from '../data/portfolioData'

export default function GitHubContributions() {
  const username = personalInfo.github.split('/').pop()

  return (
    <section className="github" id="github">
      <h2 className="section-title">GitHub Contributions</h2>
      <div className="github__card">
        <img
          src={`https://ghchart.rshah.org/${username}`}
          alt={`${username} GitHub contribution chart`}
          className="github__chart"
        />
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="github__link"
        >
          View @{username} on GitHub
        </a>
      </div>
    </section>
  )
}
