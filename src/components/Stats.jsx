import { stats, projects } from '../data/portfolioData'

export default function Stats() {
  return (
    <section className="stats">
      {stats.map((stat) => {
        const displayValue = stat.label === 'PROFESSIONAL PROJECTS'
          ? projects.filter((p) => p.isProfessional).length
          : stat.value

        return (
          <div key={stat.label} className="stats__card">
            <span className="stats__value">{displayValue}</span>
            <span className="stats__label">{stat.label}</span>
          </div>
        )
      })}
    </section>
  )
}
