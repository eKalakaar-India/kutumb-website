import React from 'react'
import "./MobileFooter.css"
import logo from '../assets/logo.png'

const MobileFooter = () => {
  return (
    <footer className="footer">
          <div className="footer-top">
            <div className="footer-brand">
            <div className='footer-header'>
              <img src={logo} width={"60px"} height={"50px"} alt='KUTUMBHARAT LOGO' />
              <h2> KUTUMB BHARAT</h2>
            </div>
    
              <p>
                  Kutumb Bharat is a strategy and advisory consultancy driving growth through research, transformation, policy design, and impact evaluation.              
              </p>

              <div className="footer-links">
                <h4>EXPLORE</h4>
                <a href="/">Strategy</a>
                <a href="/">Research Papers</a>
                <a href="/">Impact Portfolio</a>
                <a href="/">About Our Mission</a>
              </div>  
    
              <h4>CIN: U853000R2019PTC032353</h4>
              <span>Keonjhar, Odisha | New Delhi, India</span>
            </div> 
          </div>
    
          <div className="footer-bottom">
            © 2024 KUTUMB BHARAT. All rights reserved. Intellectual Property of the
            Social Impact Advisory Group.
          </div>
    </footer>
  )
}

export default MobileFooter