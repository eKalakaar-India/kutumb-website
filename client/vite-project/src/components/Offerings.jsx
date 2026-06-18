import React from 'react'
import './offerings.css'
import Icon1 from '../assets/offering1.svg'
import Icon2 from '../assets/offering2.svg'
import Icon3 from '../assets/offering3.svg'
import Icon4 from '../assets/offering4.svg'


const Offerings = () => {
  return (
    <div className='offering-div' id="service">
        <div className='header-space'>
            <p className='section-headers'> INSTITUTIONAL PILLARS</p>
            <h2 className='offering-headers'>Our Core Service Offerings</h2>
        </div>
        <div className='offering-cards'>
            <div className='card'>
                <img src={Icon1} width={30} height={30} />
                <p className='card-header'>
                    Worker-Centric Infrastructure
                </p>
                <p className='card-content'>Designing and managing
                    proximity-based housing
                    and hygiene hubs for
                    migrant workforces.
                </p>
            </div>
            <div className='card'>
                <img src={Icon2} width={30} height={30} />
                <p className='card-header'>
                    Worker Skill Enhancement
                </p>
                <p className='card-content'>Bespoke training modules
                    to facilitate upward mobility
                    and wage parity for skilled
                    labor.
                </p>
            </div>
            <div className='card'>
                <img src={Icon3} width={30} height={30} />
                <p className='card-header'>
                    Research & Policy Studies
                </p>
                <p className='card-content'>Rigorous impact
                    assessments and data
                    analysis for public and
                    private sector strategy
                </p>
            </div>
            <div className='card'>
                <img src={Icon4} width={30} height={30} />
                <p className='card-header'>
                    Entrepreneurship Development
                </p>
                <p className='card-content'>Empowering workforce
                    members to transition into
                    micro-entrepreneurs and
                    vendors.
                </p>
            </div>
        </div>

    </div>
  )
}

export default Offerings