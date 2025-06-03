import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WhatsNew from './components/WhatsNew'
import BeyporeSection from './components/BeyporeSection'
import StunningWonders from './components/StunningWonders'
import MainContent from './components/MainContent'
import MemoriesSection from './components/MemoriesSection'
import EventsSection from './components/EventsSection'
import DestinationsSection from './components/DestinationsSection'
import ExperiencesSection from './components/ExperiencesSection'
import PlanTripSection from './components/PlanTripSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <HeroSection />
      <WhatsNew />
      <BeyporeSection />
      <StunningWonders />
      <MainContent />
      <MemoriesSection />
      <EventsSection />
      <DestinationsSection />
      <ExperiencesSection />
      <PlanTripSection />
      <Footer />
    </div>
  )
}

export default App
