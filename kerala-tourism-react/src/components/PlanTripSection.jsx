import React, { useEffect, useRef } from 'react'

const PlanTripSection = () => {
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

  const planItems = [
    {
      icon: 'fas fa-calendar-alt',
      title: 'Best Time to Visit',
      details: [
        { period: 'October to March:', description: 'Pleasant weather, ideal for sightseeing' },
        { period: 'June to September:', description: 'Monsoon season, perfect for Ayurveda' },
        { period: 'April to May:', description: 'Summer season, great for hill stations' }
      ]
    },
    {
      icon: 'fas fa-plane',
      title: 'Getting There',
      details: [
        { period: 'By Air:', description: 'Kochi, Thiruvananthapuram, Kozhikode airports' },
        { period: 'By Train:', description: 'Well-connected railway network' },
        { period: 'By Road:', description: 'Excellent highway connectivity' }
      ]
    },
    {
      icon: 'fas fa-bed',
      title: 'Accommodation',
      details: [
        { period: 'Luxury Resorts:', description: 'Premium beachfront and hill station properties' },
        { period: 'Houseboats:', description: 'Unique backwater accommodation' },
        { period: 'Heritage Hotels:', description: 'Traditional Kerala architecture' }
      ]
    },
    {
      icon: 'fas fa-info-circle',
      title: 'Travel Tips',
      details: [
        { period: 'Currency:', description: 'Indian Rupee (INR)' },
        { period: 'Language:', description: 'Malayalam, English widely spoken' },
        { period: 'Clothing:', description: 'Light cotton clothes, modest attire for temples' }
      ]
    }
  ]

  return (
    <section id="plan-your-trip" className="plan-trip-section">
      <div className="plan-trip-container">
        <h2 className="section-title">Plan Your Trip</h2>
        <p className="section-subtitle">
          Everything you need to know for an unforgettable Kerala experience.
        </p>
        
        <div className="plan-trip-grid">
          {planItems.map((item, index) => (
            <div 
              key={index}
              className="plan-item"
              ref={el => itemsRef.current[index] = el}
            >
              <div className="plan-icon">
                <i className={item.icon}></i>
              </div>
              <h3>{item.title}</h3>
              {item.details.map((detail, idx) => (
                <p key={idx}>
                  <strong>{detail.period}</strong> {detail.description}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlanTripSection
