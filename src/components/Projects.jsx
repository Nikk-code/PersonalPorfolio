import { useState } from 'react'
import { projects } from '../data/portfolioData'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-card__header">
              <div className="project-card__title-group">
                {project.isProfessional && (
                  <span className="project-card__badge">Professional Experience</span>
                )}
                <h3 className="project-card__title">{project.title}</h3>
              </div>
              <time className="project-card__date">{project.date}</time>
            </div>
            <div className="project-card__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-card__tag">
                  {tag}
                </span>
              ))}
              {project.moreCount > 0 && (
                <span className="project-card__tag project-card__tag--more">
                  +{project.moreCount} more
                </span>
              )}
            </div>
            <button
              type="button"
              className="project-card__cta"
              onClick={() => setSelectedProject(project)}
            >
              View Project Details
            </button>
          </article>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
