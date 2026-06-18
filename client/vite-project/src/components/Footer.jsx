import "./Footer.css";
import { useState } from "react";
import { HiGlobeAlt, HiMail, HiArrowRight } from "react-icons/hi";
import logo from '../assets/logo.png'
import axios from 'axios'


export default function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async()=>{
    setLoading(true)
    const response = await axios.post(import.meta.env.VITE_BACKEND_BASE_URL+"/newsletter", {email:email});

    if(response.status === 200){
      setLoading(false);
      setEmail('');
    }else{
      setEmail('');
      setLoading(false);
    }
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} width={"40px"} height={"40px"} alt='KUTUMBHARAT LOGO' />

          <p>
            Kutumb Bharat is a strategy and advisory consultancy specializing in research, business transformation, policy design, ecosystem development, and impact evaluation. We work with enterprises, institutions, development organizations, and public sector stakeholders to solve complex challenges and deliver sustainable growth.
          </p>

          <h4>CIN: U853000R2019PTC032353</h4>
          <span>Keonjhar, Odisha | New Delhi, India</span>
        </div>

        <div className="footer-links">
          <h4>EXPLORE</h4>
          <a href="/">Strategy</a>
          <a href="/">Research Papers</a>
          <a href="/">Impact Portfolio</a>
          <a href="/">About Our Mission</a>
        </div>

        <div className="footer-links">
          <h4>LEGAL</h4>
          <a href="/">Terms of Engagement</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Research Ethics</a>
          <a href="/">Annual Report</a>
        </div>

        <div className="footer-connect">
          <h4>CONNECT</h4>

          <p>Get strategic updates from our research desk.</p>

          <div className="newsletter">
            <input placeholder="Email Address" value={email} onChange={(e)=> setEmail(e.target.value)} />
            <button onClick={handleSubmit}>
              {loading ? <div className="loader"></div> : <HiArrowRight />}              
            </button>
          </div>

          <div className="socials">
            <button>
              <HiGlobeAlt />
            </button>
            <button>
              <HiMail />
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2024 KUTUMB BHARAT. All rights reserved. Intellectual Property of the
        Social Impact Advisory Group.
      </div>
    </footer>
  );
}