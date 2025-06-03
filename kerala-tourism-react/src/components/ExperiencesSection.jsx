import React, { useEffect, useRef } from 'react'

const ExperiencesSection = () => {
  const itemsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    itemsRef.current.forEach(item => {
      if (item) observer.observe(item)
    })

    return () => {
      itemsRef.current.forEach(item => {
        if (item) observer.unobserve(item)
      })
    }
  }, [])

  const experiences = [
    {
      icon: 'fas fa-spa',
      title: 'Ayurvedic Wellness',
      description: 'Rejuvenate your body and mind with traditional Ayurvedic treatments and therapies in serene wellness centers.'
    },
    {
      icon: 'fas fa-ship',
      title: 'Houseboat Cruises',
      description: 'Drift through tranquil backwaters on traditional kettuvallams while enjoying local cuisine and scenic beauty.'
    },
    {
      icon: 'fas fa-utensils',
      title: 'Culinary Delights',
      description: 'Savor authentic Kerala cuisine with coconut-based curries, fresh seafood, and traditional banana leaf meals.'
    },
    {
      icon: 'fas fa-mountain',
      title: 'Wildlife Safaris',
      description: 'Explore rich biodiversity in Periyar, Wayanad, and other wildlife sanctuaries home to elephants and tigers.'
    }
  ]

  return (
    <section id="experiences" className="experiences-section">
      <div className="experiences-container">
        <h2 className="section-title">Experiences</h2>
        <p className="section-subtitle">
          Immerse yourself in authentic Kerala experiences that create lasting memories.
        </p>
        
        <div className="experiences-grid">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className="experience-item"
              ref={el => itemsRef.current[index] = el}
            >
              <div className="experience-icon">
                <i className={experience.icon}></i>
              </div>
              <h3>{experience.title}</h3>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperiencesSection
