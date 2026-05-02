import SectionTitle from "../ui/SectionTitle";
import { skills } from "../../data/skillsData";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle
          kicker="Skills"
          title="Skills & Technologies"
          subtitle="A blend of frontend, backend, and development tools that enable me to build complete, scalable web solutions."
        />

        <div className="grid skills-grid">
          {skills.map((skill) => (
            <div className="card skill-card" key={skill}>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}