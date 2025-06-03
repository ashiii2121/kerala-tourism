import React from 'react'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo.png" alt="Kerala Tourism Logo" />
              <h3>Kerala Tourism</h3>
            </div>
            <p>
              Discover the enchanting beauty of God's Own Country. Experience
              the magic of Kerala's backwaters, hill stations, beaches, and rich
              cultural heritage.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#where-to-go" onClick={(e) => { e.preventDefault(); scrollToSection('where-to-go') }}>
                  Where to Go
                </a>
              </li>
              <li>
                <a href="#experiences" onClick={(e) => { e.preventDefault(); scrollToSection('experiences') }}>
                  Experiences
                </a>
              </li>
              <li>
                <a href="#events" onClick={(e) => { e.preventDefault(); scrollToSection('events') }}>
                  Events
                </a>
              </li>
              <li>
                <a href="#plan-your-trip" onClick={(e) => { e.preventDefault(); scrollToSection('plan-your-trip') }}>
                  Plan Your Trip
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Destinations</h4>
            <ul>
              <li><a href="#">Munnar</a></li>
              <li><a href="#">Alleppey</a></li>
              <li><a href="#">Kochi</a></li>
              <li><a href="#">Wayanad</a></li>
              <li><a href="#">Kovalam</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>
                <i className="fas fa-map-marker-alt"></i> Kerala Tourism Development Corporation
              </p>
              <p>
                <i className="fas fa-phone"></i> +91-471-2321132
              </p>
              <p>
                <i className="fas fa-envelope"></i> info@keralatourism.org
              </p>
              <p>
                <i className="fas fa-globe"></i> www.keralatourism.org
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2024 Kerala Tourism. All rights reserved. | Designed with ❤️
            for God's Own Country
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
