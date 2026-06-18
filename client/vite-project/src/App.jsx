import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import RibbonVision from './components/RibbonVision'
import Offerings from './components/Offerings'
import CaseStudy from './components/CaseStudy'
import SystemicApproach from './components/SystematicApproach'
import WhyPartner from './components/WhyPartner'
import StatsSection from './components/StatsComponent'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import MobileNavbar from './components/MobileNavbar'
import MobileFooter from './components/MobileFooter'
import { useMediaQuery } from "react-responsive";



function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className='main-body'>
      {
        isMobile ? null : <CustomCursor />
      }
      
      {
        isMobile ? <MobileNavbar /> : <Navbar />
      }
      
      <Hero />
      <RibbonVision />
      <Offerings />
      <CaseStudy />
      <SystemicApproach />
      <WhyPartner />
      {
        isMobile ? <MobileFooter /> :
            <div>
              <StatsSection />
              <Footer />
            </div>
      }
    </div>
  )
}

export default App
