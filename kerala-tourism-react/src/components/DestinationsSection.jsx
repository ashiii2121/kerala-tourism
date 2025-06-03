import React, { useEffect, useRef } from 'react'

const DestinationsSection = () => {
  const cardsRef = useRef([])

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

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card)
    })

    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  const destinations = [
    {
      image: '/agritourism.webp',
      title: 'Munnar',
      description: 'Rolling tea plantations, misty mountains, and cool climate make Munnar a perfect hill station retreat.',
      highlights: ['Tea Gardens', 'Eravikulam National Park', 'Mattupetty Dam']
    },
    {
      image: '/village life.webp',
      title: 'Alleppey (Alappuzha)',
      description: 'Venice of the East with serene backwaters, traditional houseboats, and lush paddy fields.',
      highlights: ['Backwaters', 'Houseboats', 'Kumarakom']
    },
    {
      image: '/con2.webp',
      title: 'Kochi (Cochin)',
      description: 'Historic port city blending colonial architecture, spice markets, and modern attractions.',
      highlights: ['Fort Kochi', 'Chinese Fishing Nets', 'Spice Markets']
    }
  ]

  return (
    <section id="where-to-go" className="destinations-section">
      <div className="destinations-container">
        <h2 className="section-title">Where to Go</h2>
        <p className="section-subtitle">
          Discover the diverse landscapes and attractions across God's Own Country.
        </p>
        
        <div className="destinations-grid">
          {destinations.map((destination, index) => (
            <div 
              key={index}
              className="destination-card"
              ref={el => cardsRef.current[index] = el}
            >
              <div className="destination-image">
                <img src={destination.image} alt={destination.title} />
              </div>
              <div className="destination-content">
                <h3>{destination.title}</h3>
                <p>{destination.description}</p>
                <div className="destination-highlights">
                  {destination.highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight">{highlight}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DestinationsSection
