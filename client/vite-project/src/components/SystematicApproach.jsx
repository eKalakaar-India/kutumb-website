import "./SystematicApproach.css";

const steps = [
  {
    id: 1,
    title: "Research",
    desc: "In-depth ethnographic and data-driven landscape analysis of worker needs.",
  },
  {
    id: 2,
    title: "Design",
    desc: "Crafting scalable infrastructure and service models for high-impact welfare.",
  },
  {
    id: 3,
    title: "Implementation",
    desc: "Deploying managed solutions on-ground through institutional partnerships.",
  },
  {
    id: 4,
    title: "Scale",
    desc: "Hand-over or expansion through policy advocacy and systemic integration.",
  },
];

export default function SystemicApproach() {
  return (
    <section className="approach-section">
      <div className="approach-header">
        <p className="approach-tag">OPERATIONAL EXCELLENCE</p>
        <h2>Our Systemic Approach</h2>
      </div>

      <div className="timeline-wrapper">
        <div className="timeline-line"></div>

        {steps.map((step) => (
          <div key={step.id} className="timeline-step">
            <div className="timeline-circle">{step.id}</div>

            <div className="step-card">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}