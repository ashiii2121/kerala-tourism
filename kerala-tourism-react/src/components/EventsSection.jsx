import React, { useEffect, useRef } from 'react'

const EventsSection = () => {
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

  const events = [
    {
      image: '/art-forms.webp',
      title: 'Theyyam Festival',
      date: 'November - March',
      description: 'Experience the mystical Theyyam rituals in North Kerala, where performers transform into living gods through elaborate costumes and divine dance.'
    },
    {
      image: '/house boat.webp',
      title: 'Nehru Trophy Boat Race',
      date: 'August',
      description: 'Witness the spectacular snake boat races on Vembanad Lake, featuring traditional chundan vallams in thrilling competition.'
    },
    {
      image: '/cuisine.webp',
      title: 'Onam Festival',
      date: 'August - September',
      description: 'Celebrate Kerala\'s harvest festival with traditional Onam Sadhya, Pulikali performances, and vibrant floral decorations.'
    }
  ]

  return (
    <section id="events" className="events-section">
      <div className="events-container">
        <h2 className="section-title">Events</h2>
        <p className="section-subtitle">
          The land of rich cultures and traditions! Mark the major events for your next visit.
        </p>
        
        <div className="events-grid">
          {events.map((event, index) => (
            <div 
              key={index}
              className="event-card"
              ref={el => cardsRef.current[index] = el}
            >
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="event-content">
                <h3>{event.title}</h3>
                <p className="event-date">{event.date}</p>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventsSection
