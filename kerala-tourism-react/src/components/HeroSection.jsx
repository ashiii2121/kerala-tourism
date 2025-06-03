import React from 'react'
import Navbar from './Navbar'

const HeroSection = () => {
  return (
    <div className="css-1f3qkb6">
      <div className="video-container">
        <video 
          className="main-vid"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          src="https://www.keralatourism.org/ktadmin/img/pages/video/munnar-1707015973_ade282b198c8961ddb14.mp4"
          poster="https://www.keralatourism.org/ktadmin/img/pages/large-desktop/vagamon-1707211313_756d0ebd1901dcc2c9a9.jpg"
          preload="metadata"
          autoPlay
          muted
          loop
          playsInline
        >
          Your browser does not support the video tag.
        </video>
        <Navbar />
      </div>
    </div>
  )
}

export default HeroSection
