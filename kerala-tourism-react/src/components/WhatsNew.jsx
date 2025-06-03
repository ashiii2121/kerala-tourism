import React, { useEffect, useRef } from 'react'

const WhatsNew = () => {
  const sectionRef = useRef(null)

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div className="container">
      <div className="scrolling" ref={sectionRef}>
        <h2 className="chakra-heading">What's New</h2>
        <p className="chakra-text">Here's a quick glance on what's trending in God's Own Country now.</p>
      </div>
    </div>
  )
}

export default WhatsNew
