import React, { useEffect, useRef } from 'react'

const StunningWonders = () => {
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
    <div className="scroll-element" ref={sectionRef}>
      <h4 className="kerala">Kerala's Stunning Wonders</h4>
      <p className="enjoy">Enjoy the magnificent and varied allure of God's Own Country.</p>
    </div>
  )
}

export default StunningWonders
