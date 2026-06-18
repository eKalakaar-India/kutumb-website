import React from 'react'
import './casestudy.css'
import { PiArrowSquareOutBold } from "react-icons/pi";
import ResearchIcon from '../assets/researchicon.svg'
import { useMediaQuery } from 'react-responsive';


const CaseStudy = () => {

  const isMobile = useMediaQuery({maxWidth:"768px"})
  return (
    <div className='case-div' id="research">
        <div className="case-header">
            <p> EVIDENCE-BASED ACTION</p>
            <h3>Strategic Research Case Study</h3>
        </div>
        <div className='case-bento-grid'>
            <div className='case-item1'>
              <p  className='header-tag'> IMPACT ASSESMENT </p>
              <h3>CSR Impact Assessment Study – Mobile Health Unit Program</h3>
              <div className='case-desc-div'>
                <p className='case-desc'>Kutumb Bharat conducted an impact assessment of a mobile healthcare initiative serving underserved and remote communities. </p>
                {/* <p className='case-desc'>2.4x increase in effective community resource utilization. </p> */}
              </div>
              <a href='https://docs.google.com/document/d/1vozh3jyA8dfAhf4fI7lnWnm_WbZjsAmISDf5KOYuySo/edit?usp=sharing ' target='blank'> View Report </a>
            </div>
            <div className='case-item2'>
              <p  className='header-tag'> SECTOR STUDY </p>
              <h3>All India Study on Carpenters</h3>
              <p className='case-desc'>Kutumb Bharat carried out a national baseline study on the carpentry sector to understand the socio-economic conditions, aspirations, and market realities faced by carpenters across India. </p>
              <div className='case-desc-div'>
                <div style={{textAlign:"center"}}>
                  <p style={{fontSize:"24px", fontWeight:"bold", color:"#006A63"}}>4.k+</p>
                  <p style={{fontSize:"12px", fontWeight:"bold"}}>SURVEYED</p>
                </div>
                <a href='https://docs.google.com/document/d/1exhlmB44bvIqj__UGuLdOU_28OOb0vnY9c1NeKhNl1M/edit?usp=sharing' target='blank'> <PiArrowSquareOutBold /> </a>
              </div>
            </div>
            <div className='case-item3'>
              <p  className='header-tag'> REGIONAL ANALYSIS </p>
              <h3>Baseline Study on Entrepreneurship and Livelihood Development Opportunities</h3>
              <p className='case-desc'>A comprehensive opportunity assessment in Keonjhar focused on entrepreneurship, market dynamics, and livelihood systems to develop scalable economic growth models. </p>
              <div className='case-desc-div'>
                <div style={{textAlign:"center"}}>
                  <p style={{fontSize:"24px", fontWeight:"bold", color:"#006A63"}}>Mining Focus</p>
                </div>
                <a href='https://docs.google.com/document/d/1cSo7vq9K6_vExf0s_POlGCQiuhynRHLTWU9vopOZJ1k/edit?usp=sharing' target='blank'> <PiArrowSquareOutBold /> </a>
              </div></div>
            <div className='case-item4'>
              <div className='case4'>
                  <p  className='header-tag'> MIGRATION TRACKER </p>
                  <h3>All India Study on Migration and Business (2020)</h3>
                  <p className='case-desc'>A seminal study documenting the reverse migration flows and immediate social security needs during the 2020-21 lockdowns.</p>
                  <a href='https://docs.google.com/document/d/1LSK0LKXTmlZYkaEUIMvX8E-CoWeE6Dupa3BVYZpL1k0/edit?usp=sharing' target='blank'> View Report </a>
              
              </div>
              {
                isMobile ? null : 
                              <div className='filler'>
                                <img src={ResearchIcon} />
                              </div>
              }
            </div>
            <div className='case-item5'>
              <p  className='header-tag'> INNOVATION </p>
              <h3>Impact Assessment of Entrepreneurship Program for Persons with Disabilities</h3>
              <p className='case-desc'>Kutumb Bharat conducted an impact assessment of an entrepreneurship development initiative supporting persons with disabilities.</p>
                <a href='https://docs.google.com/document/d/1cy5h93PVM5-iNZ52WRMq1pkKEaJjmp-5SuWazL6BcWo/edit?usp=sharing' target='blank'> EXPLORE NOW <PiArrowSquareOutBold /> </a>
            </div>

            <div className='case-item6'>
              <p  className='header-tag'> SOCIO-ECONOMIC </p>
              <h3>Impact Assessment Proposal for Scholarship Program</h3>
              <p className='case-desc'>Kutumb Bharat proposed an impact assessment of a scholarship program for low-income students to evaluate educational outcomes, socio-economic impact, and long-term career prospects.</p>
              <div className='case-desc-div'>
              <div style={{textAlign:"center"}}>
                  <p style={{fontSize:"24px", fontWeight:"bold", color:"#006A63"}}>Student Focus</p>
                </div>
                <a href='https://docs.google.com/document/d/1IXz5dfD94xPvCfdGjwxvo3KKvzbgcw4_j1UiJD1tBlI/edit?usp=sharing ' target='blank'> <PiArrowSquareOutBold /> </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CaseStudy