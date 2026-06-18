import "./WhyPartner.css";
import Icon1 from '../assets/why1.svg'
import Icon2 from '../assets/why2.svg'
import Icon3 from '../assets/why3.svg'
import Icon4 from '../assets/why4.svg'
import img from  "../assets/whyimg.png"
import { useMediaQuery } from "react-responsive";

const features = [
  {
    icon: Icon1,
    title: "Proximity-Based Worker Housing",
    desc: "Reducing travel time and costs while increasing rest and productivity through strategic onsite or near-site housing modules.",
  },
  {
    icon: Icon2,
    title: "Data-Driven Policy",
    desc: "Utilizing real-time worker data to inform policy shifts and corporate social governance strategies.",
  },
  {
    icon: Icon3,
    title: "Integrated Health & Safety",
    desc: "A holistic approach to welfare that prioritizes preventive healthcare and safe work environments as fundamental rights.",
  },
  {
    icon: Icon4,
    title: "Institutional Rigor",
    desc: "Every project is managed with the same level of accountability and reporting as a major management consultancy engagement.",
  },
];

export default function WhyPartner() {

  const isMobile = useMediaQuery({maxWidth:"768px"});

  return (
        <>
        {
          isMobile ?
          <section className="why-section">
                <h2>
                  Why Kutumb Bharat ?
                </h2>


              <div className="right-panel">
                {features.map((feature, index) => (
                  <div className="feature-item" key={index}>
                    <div className="feature-icon"><img src={feature.icon} /></div>

                    <div className="feature-content">
                      <h3>{feature.title}</h3>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
          </section>
          :
          <section className="why-section">
              <div className="left-panel">
                <p className="section-tag">THE DIFFERENCE</p>

                <h2>
                  Why Leading Enterprises Partner with
                  <br />
                  Kutumb Bharat
                </h2>

                <p className="description">
                  We operate at the intersection of private sector efficiency and deep
                  social understanding. Our solutions are designed to be resilient,
                  measurable, and dignified.
                </p>

                <img
                  src={img}
                  alt="analytics"
                />
              </div>

              <div className="right-panel">
                {features.map((feature, index) => (
                  <div className="feature-item" key={index}>
                    <div className="feature-icon"><img src={feature.icon} /></div>

                    <div className="feature-content">
                      <h3>{feature.title}</h3>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
          </section>
        }
            
        </>
      
  );
}