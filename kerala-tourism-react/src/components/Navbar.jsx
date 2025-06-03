import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [navBackground, setNavBackground] = useState('rgba(0, 0, 0, 0.3)')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavBackground('rgba(0, 0, 0, 0.9)')
      } else {
        setNavBackground('rgba(0, 0, 0, 0.3)')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = () => {
    const searchTerm = prompt('Search Kerala Tourism:')
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      if (searchLower.includes('destination') || searchLower.includes('place') || searchLower.includes('munnar') || searchLower.includes('alleppey') || searchLower.includes('kochi')) {
        document.getElementById('where-to-go')?.scrollIntoView({ behavior: 'smooth' })
      } else if (searchLower.includes('experience') || searchLower.includes('activity') || searchLower.includes('ayurveda') || searchLower.includes('houseboat')) {
        document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' })
      } else if (searchLower.includes('event') || searchLower.includes('festival') || searchLower.includes('theyyam') || searchLower.includes('onam')) {
        document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })
      } else if (searchLower.includes('plan') || searchLower.includes('trip') || searchLower.includes('travel')) {
        document.getElementById('plan-your-trip')?.scrollIntoView({ behavior: 'smooth' })
      } else {
        alert('Try searching for: destinations, experiences, events, or plan trip')
      }
    }
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className="navbar" style={{ background: navBackground }}>
        <div className="logo">
          <img src="/logo.png" alt="Kerala Tourism Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#where-to-go" onClick={(e) => { e.preventDefault(); scrollToSection('where-to-go') }}>Where to Go</a></li>
          <li><a href="#experiences" onClick={(e) => { e.preventDefault(); scrollToSection('experiences') }}>Experience</a></li>
          <li><a href="#plan-your-trip" onClick={(e) => { e.preventDefault(); scrollToSection('plan-your-trip') }}>Plan Your Trip</a></li>
        </ul>
        <div className="btns">
          <button className="btn" onClick={handleSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button className="btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <button className="close-menu" onClick={() => setIsMenuOpen(false)}>
            &times;
          </button>
          <a href="#where-to-go" onClick={(e) => { e.preventDefault(); scrollToSection('where-to-go') }}>Where to Go</a>
          <a href="#experiences" onClick={(e) => { e.preventDefault(); scrollToSection('experiences') }}>Experiences</a>
          <a href="#events" onClick={(e) => { e.preventDefault(); scrollToSection('events') }}>Events</a>
          <a href="#plan-your-trip" onClick={(e) => { e.preventDefault(); scrollToSection('plan-your-trip') }}>Plan Your Trip</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
