import "./StatsComponent.css";
import Icon1 from "../assets/Stats1.svg"
import Icon2 from "../assets/Stats2.svg"
import Icon3 from "../assets/Stats3.svg"
import Icon4 from "../assets/Stats4.svg"

const stats = [
  {
    icon: Icon1,
    value: "50K+",
    label: "MIGRANT WELFARE IMPACT",
  },
  {
    icon: Icon2,
    value: "12+",
    label: "HOUSING ECOSYSTEMS",
  },
  {
    icon: Icon3,
    value: "30%",
    label: "PRODUCTIVITY GAIN",
  },
  {
    icon: Icon4,
    value: "100%",
    label: "COMPLIANCE ADHERENCE",
  },
];

export default function StatsSection() {
  return (
    <section className="stats-section" id="impact">
      {stats.map((item, index) => (
        <div key={index} className="stat-card">
          <div className="stat-icon">
            <img src= {item.icon} width={48} height={24} />
          </div>
          <h2>{item.value}</h2>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
}