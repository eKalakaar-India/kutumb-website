import React, {useState} from 'react'
import './navbar.css'
import logo from '../assets/logo.png'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';


const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName:"",
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
    <nav className='navbar'>
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
        <div className='nav-logo'>
            {/* <h3>KUTUMBHARAT</h3> */}
            <img src={logo} width={"40px"} height={"40px"} alt='KUTUMBHARAT LOGO' />
        </div>

        <div className='nav-items'>
            <ul type="none">
                <li> <a href="#strategy" > Strategy </a></li>
                <li> <a href="#research" > Research</a></li>
                <li> <a href="#impact" > Impact</a></li>
                <li> <a href="#service" > Service</a></li>
            </ul>
        </div>

        <div className='nav-btns'>
            {/* <button className='explore-btn'>Explore our Work</button> */}
            <button className='partner-btn' onClick={() => setShowModal(true)}>Partner With Us</button>
        </div>
    </nav>

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

export default Navbar