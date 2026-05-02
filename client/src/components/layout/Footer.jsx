export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid #e5e7eb",
        marginTop: "60px",
        padding: "30px 0",
        fontSize: "14px"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px"
        }}
      >
        {/* Left */}
        <div style={{ maxWidth: "300px" }}>
          <h3 style={{ marginBottom: "6px" }}>Mohit Kumar</h3>
          <p style={{ opacity: 0.7 }}>
            Full Stack Developer building scalable and modern web applications.
          </p>
        </div>

        {/* Center */}
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right */}
        <div style={{ textAlign: "right" }}>
          <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
            <a href="https://github.com/Mohit2294kumar" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mohit-kumar-7276172ba/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:k2004mohit@gmail.com">Email</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        style={{
          marginTop: "20px",
          textAlign: "center",
          opacity: 0.6
        }}
      >
        © {year} Mohit Kumar • Built with MERN Stack
      </div>
    </footer>
  );
}