import SectionTitle from "../ui/SectionTitle";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle
          kicker="About"
          title="Full Stack Developer & AI Enthusiast"
          subtitle="I build scalable web applications using the MERN stack and develop intelligent solutions through real-world projects and modern technologies."
        />
        <div className="card" style={{ padding: 24 }}>
          <p>
            I am a passionate Full Stack Developer and a fresher, skilled in building modern web applications using the MERN stack. I have worked on several real-world projects, including AI-based applications and dashboards, where I gained hands-on experience in frontend, backend, and API development. I am eager to apply my skills, learn continuously, and contribute to impactful software solutions.
          </p>
        </div>
      </div>
    </section>
  );
}