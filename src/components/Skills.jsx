import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills__categories">
        {skills.map((group) => (
          <div key={group.category} className="skills__category-card">
            <h3 className="skills__category-title">{group.category}</h3>
            <div className="skills__badges-list">
              {group.items.map((skill) => (
                <span key={skill} className="skills__badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
