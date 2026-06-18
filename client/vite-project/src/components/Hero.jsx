import React, {useState} from 'react'
import './Hero.css'
import { HiOutlineArrowSmRight } from "react-icons/hi";
import heroimg from '../assets/hero-img.png'
import { useMediaQuery } from 'react-responsive';
 import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


const Hero = () => {

    const isMobile = useMediaQuery({maxWidth:"768px"})
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);


      const [formData, setFormData] = useState({
        fullName :"",
        email: "",
        phone: "",
        message: "",
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);

        const response = await axios.post(import.meta.env.VITE_BACKEND_BASE_URL+"/contact", formData);
        console.log(response)
        if(response.status === 200){
            toast.success("We will get in touch with you shortly.")
            setLoading(false);
        }else{
            toast.error("Unable to submit contact form")
            setLoading(false);
        }
    
        // send to backend here
        setShowModal(false);
      };

  return (
    <>
    <div className='hero-main'>
        {
            isMobile ? <div className='overlay' /> : null
        }
        
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnHover
            theme="light"
            // transition={Bounce}
        />
        <div className='hero-content'>
            <div className='content'>
                <p style={{color:"#006A63", fontWeight:"bold", fontSize:"18px", display: isMobile ? 'none' : 'flex' }}>Since 2019</p>
                <h1 className='hero-header-content'>
                    Driving Strategic Transformation Through Insight, Research & Execution
                </h1>
                <p className='hero-main-content'>We partner with organizations to design future-ready strategies, unlock growth, improve systems, and create measurable impact through consulting, research, and implementation excellence.</p>
            </div>
            <div className='hero-btn-container'>
                {/* <div className='hero-btn-explore'>
                    <p>EXPLORE OUR WORK </p> <HiOutlineArrowSmRight style= {{width:"25px", height:"25px", margin:"0"}} />
                </div> */}
                <div onClick={() => setShowModal(true)} className='hero-btn-partner'>
                    <p>PARTNER WITH US </p>
                </div>
            </div>
            {/* <div>

            </div> */}
        </div>
        <div className='hero-img'>
            <div className='img-holder'>
                <img src={heroimg} />
                <div className='hero-project-card'>
                    <h2 style={{fontWeight:"700", fontSize:"xx-large"}}>85%</h2>
                    <p style={{fontWeight:"500", color:"#006A63"}}>Project Efficiency Increase</p>
                </div>
            </div>
        </div>
    </div>

    {showModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            <h2>Get in Touch</h2>
            <p>Tell us about your requirements.</p>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
{/* 
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                  required
                /> */}
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                onChange={handleChange}
                required
              />

              <button type="submit" className="submit-btn">
                {loading ? <div className="loader"></div> : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}</>
  )
}

export default Hero