import React from 'react'
import './RibbonVision.css'
// import big from '../assets/'
import big1 from '../assets/visionlady.png'
import big2 from '../assets/visionbig2.png'
import short1 from '../assets/visionconf.png'
import short2 from '../assets/visiontable.png'
import Check from '../assets/Check.svg'

const RibbonVision = () => {
  return (
    <div className='ribbonvison' id="strategy">
        <div className='ribbon'>
            <div className='content'>
                <p className='ribbon-header'>INCORPORATED</p>
                <p className='ribbon-para'> 25 December 2019</p>
            </div>
            <div className='content'>
                <p className='ribbon-header'>STATUS</p>
                <p className='ribbon-para'> Active Private Ltd</p>
            </div>
            <div className='content'>
                <p className='ribbon-header'>APPROACH</p>
                <p className='ribbon-para'> Research - Driven</p>
            </div>
            <div className='content'>
                <p className='ribbon-header'>SPECIALIZATION</p>
                <p className='ribbon-para'> CSR & Impact Assesment</p>
            </div>
        </div>

        <div className='vision'>
            <div className='img-container'>
                <img src={short1} className='img item1' />
                <img src={big1} className='img item2' />
                <img src={big2} className='img item3' />
                <img src={short2} className='img item4' />
            </div>
            <div className='vision-content'>
                <p className='title-tag'> THE FOUNDATION</p>
                <h2>Transforming Worker Welfare Through Systemic Design</h2>
                <p className='contentv'>To be a leading advisory and transformation partner enabling organizations, institutions, and governments to build sustainable, inclusive, and high-impact growth ecosystems.</p>
                <ul className='mission' type="none">
                   <li> <img src={Check} width={22} height={22} /> Delivering data-backed strategic insights and advisory services</li>
                   <li> <img src={Check} width={22} height={22} /> Designing scalable business and ecosystem transformation models</li>
                   <li> <img src={Check} width={22} height={22} /> Enabling sustainable growth through research and innovation</li>
                   <li> <img src={Check} width={22} height={22} /> Supporting public and private sector impact initiatives</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default RibbonVision