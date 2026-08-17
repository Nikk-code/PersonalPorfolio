import { useState, useEffect } from 'react'
import { certificates } from '../data/portfolioData'

export default function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCards] = useState(1) // Always show 1 certificate card next to sidebar / on mobile
  const [activePreview, setActivePreview] = useState(null)

  const maxIndex = Math.max(0, certificates.length - visibleCards)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activePreview) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [activePreview])

  return (
    <section className="certificates" id="certificates">
      <div className="certificates__container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="certificates__split-layout">
          {/* Left Panel: Direct Navigation List */}
          <div className="certificates__list-panel">
            <h3 className="certificates__list-header">All Credentials ({certificates.length})</h3>
            <div className="certificates__list-items">
              {certificates.map((cert, idx) => (
                <button
                  key={cert.id}
                  className={`certificates__list-item certificates__list-item--${cert.theme} ${currentIndex === idx ? 'certificates__list-item--active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                >
                  <span className="certificates__list-badge">{cert.issuer}</span>
                  <span className="certificates__list-title">{cert.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Panel: Interactive Slider Details */}
          <div className="certificates__preview-panel">
            <div className="certificates__wrapper">
              <button 
                className="certificates__btn certificates__btn--prev"
                onClick={prevSlide}
                disabled={currentIndex === 0}
                aria-label="Previous slide"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <div className="certificates__slider-viewport">
                <div 
                  className="certificates__track"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
                  }}
                >
                  {certificates.map((cert) => (
                    <div 
                      className="certificates__card-wrapper" 
                      key={cert.id}
                      style={{ flex: `0 0 ${100 / visibleCards}%` }}
                    >
                      <div className={`certificates__card certificates__card--${cert.theme}`}>
                        <div className="certificates__card-header">
                          <span className="certificates__badge">{cert.issuer}</span>
                          <span className="certificates__date">{cert.date}</span>
                        </div>
                        <div className="certificates__card-body">
                          <div className="certificates__icon-wrapper">
                            <svg className="certificates__icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 2L2 7l10 5 10-5-10-5z" />
                              <path d="M2 17l10 5 10-5" />
                              <path d="M2 12l10 5 10-5" />
                            </svg>
                          </div>
                          <h3 className="certificates__card-title">{cert.title}</h3>
                        </div>
                        {(cert.verifyUrl || cert.fileUrl) && (
                          <div className="certificates__card-actions">
                            {cert.verifyUrl && (
                              <a 
                                href={cert.verifyUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="certificates__action-link"
                              >
                                Verify Online
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                  <polyline points="15 3 21 3 21 9" />
                                  <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                              </a>
                            )}
                            {cert.fileUrl && (
                              <button 
                                onClick={() => setActivePreview(cert)} 
                                className="certificates__action-btn"
                              >
                                View Doc
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                  <polyline points="14 2 14 8 20 8" />
                                  <line x1="16" y1="13" x2="8" y2="13" />
                                  <line x1="16" y1="17" x2="8" y2="17" />
                                </svg>
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                className="certificates__btn certificates__btn--next"
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
                aria-label="Next slide"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {maxIndex > 0 && (
              <div className="certificates__dots">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    className={`certificates__dot ${currentIndex === idx ? 'certificates__dot--active' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dynamic Pop-up Modal Preview */}
      {activePreview && (
        <div className="cert-modal" onClick={() => setActivePreview(null)}>
          <div className="cert-modal__content" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal__header">
              <h3 className="cert-modal__title">{activePreview.title}</h3>
              <div className="cert-modal__actions">
                <a 
                  href={activePreview.fileUrl} 
                  download 
                  className="cert-modal__btn cert-modal__btn--primary"
                  title="Download File"
                >
                  Download
                </a>
                <a 
                  href={activePreview.fileUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cert-modal__btn cert-modal__btn--secondary"
                  title="Open in new tab"
                >
                  Open in New Tab
                </a>
                <button className="cert-modal__close" onClick={() => setActivePreview(null)} aria-label="Close modal">
                  &times;
                </button>
              </div>
            </div>
            <div className="cert-modal__body">
              {activePreview.fileUrl.toLowerCase().endsWith('.pdf') ? (
                <iframe 
                  src={activePreview.fileUrl} 
                  title="Certificate PDF Preview" 
                  className="cert-modal__iframe"
                  width="100%" 
                  height="500px"
                />
              ) : (
                <div className="cert-modal__img-wrapper">
                  <img 
                    src={activePreview.fileUrl} 
                    alt="Certificate Preview" 
                    className="cert-modal__img"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
