import React from 'react'

const MemoriesSection = () => {
  return (
    <div className="video-2">
      <video 
        src="https://www.keralatourism.org/ktadmin/img/pages/video/memories-for-a-lifetime-1715763700_071e75dfcbd9d1f5467e.mp4"
        preload="metadata" 
        playsInline 
        muted 
        autoPlay 
        loop 
        className="css-mnrf7s"
      />
      <div className="video-content">
        <div className="v-1">
          <h2>Memories <br />for a Lifetime</h2>
          <p>
            Here is a bouquet of unforgettable experiences <br />Kerala offers: charming village life, thrilling <br />treks, serene safaris, vibrant farms, unique <br /> cuisine, tranquil houseboats, and the magic of monsoon. 
            Each moment in Kerala is a story waiting to be told, a memory etched in time.
          </p>
        </div>
        <div className="v-2">
          <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="7000">
                <img src="/house boat.webp" className="d-block" alt="Kerala Houseboats" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Tranquil Houseboats</h5>
                  <p>
                    Experience the serenity of Kerala's backwaters aboard traditional kettuvallams, floating through palm-fringed canals.
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src="/cuisine.webp" className="d-block" alt="Kerala Cuisine" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Authentic Cuisine</h5>
                  <p>
                    Savor the rich flavors of Kerala's traditional cuisine, featuring coconut-based curries and fresh seafood delicacies.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="/art-forms.webp" className="d-block" alt="Kerala Art Forms" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Cultural Art Forms</h5>
                  <p>
                    Witness the vibrant traditional art forms of Kerala, including Kathakali, Theyyam, and classical dance performances.
                  </p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemoriesSection
