import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  const allTags = project.allTags ?? project.tags

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Close project details"
        >
          &times;
        </button>

        <div className="modal__header">
          <h2 id="modal-title" className="modal__title">
            {project.title}
          </h2>
          <time className="modal__date">{project.date}</time>
        </div>

        <p className="modal__description">{project.description}</p>

        {project.highlights?.length > 0 && (
          <div className="modal__section">
            <h3 className="modal__section-title">Key Highlights</h3>
            <ul className="modal__highlights">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="modal__section">
          <h3 className="modal__section-title">Technologies Used</h3>
          <div className="modal__tags">
            {allTags.map((tag) => (
              <span key={tag} className="modal__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="modal__actions">
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal__btn modal__btn--primary"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && project.githubUrl !== '#' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal__btn modal__btn--secondary"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
