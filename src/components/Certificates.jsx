import { useState, useEffect } from 'react'
import { certificates } from '../data/portfolioData'

export default function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setVisibleCards(1)
      } else if (window.innerWidth <= 960) {
        setVisibleCards(2)
      } else {
        setVisibleCards(3)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, certificates.length - visibleCards)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
    }
  }, [visibleCards, maxIndex, currentIndex])

  return (
    <section className="certificates" id="certificates">
      <div className="certificates__container">
        <h2 className="section-title">Certifications</h2>
        
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
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                width: `${(certificates.length / visibleCards) * 100}%`
              }}
            >
              {certificates.map((cert) => (
                <div 
                  className="certificates__card-wrapper" 
                  key={cert.id}
                  style={{ width: `${100 / certificates.length}%` }}
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
    </section>
  )
}
