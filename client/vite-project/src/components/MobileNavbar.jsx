import React, {useState} from 'react'
import './navbar.css'
import logo from '../assets/logo.png'


const MobileNavbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className='navbar'>
          <div className='nav-logo'>
              {/* <h3>KUTUMBHARAT</h3> */}
              <img src={logo} width={"40px"} height={"40px"} alt='KUTUMBHARAT LOGO' />
          </div>

          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
  
          <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
            <ul>
                <li>Strategy</li>
                <li>Research</li>
                <li>Impact</li>
                <li>About</li>
            </ul>
           </div>
      </nav>
    )
  
  
}

export default MobileNavbar