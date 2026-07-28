import { useState } from "react";
import "./App.css";

function App() {
  const [showInternship, setShowInternship] = useState(false);
  return (
    <div className="app">

      <nav className="navbar">
        <div className="logo">
          SANJANA<span>.sec</span>
        </div>

        <ul>
  <li><a href="#about">About</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#internship">Internship</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#certifications">Certifications</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
      </nav>

      <section className="hero">

  <div className="hero-left">

    <p className="intro">
      HELLO, THIS IS
    </p>

    <h1>
      S.R Sanjana
    </h1>

    <h2>
      Cybersecurity Student
    </h2>

    <p className="description">
      Cybersecurity • Ethical Hacking • Network Security
      <br />
      Digital Forensics
    </p>

    <div className="buttons">

      <a href="#projects">
        <button className="btn-dark">
          View Projects
        </button>
      </a>

      <a href="#contact">
        <button className="btn-light">
          Let's Connect
        </button>
      </a>

    </div>

  </div>

</section>
      <section id="about" className="about">

  <div className="about-card">

    <h2>Who Am I?</h2>

    <p>
  A passionate Cybersecurity student currently pursuing a
  <strong> Bachelor of Science in Computer Science, specialising in Cybersecurity </strong>.
  I have a strong interest in ethical hacking, digital forensics, and network security.
  I enjoy exploring security technologies, solving real-world challenges,
  and continuously expanding my knowledge through projects and hands-on learning.
</p>

  </div>

</section>
<section className="skills" id="skills">

    <h2>Technical Expertise</h2>

    <div className="skills-box">

        <span>Ethical Hacking</span>
        <span>Digital Forensics</span>
        <span>Network Security</span>
        <span>Python</span>
        <span>Wireshark</span>
        <span>Kali Linux</span>
        <span>HTML.CSS</span>
    </div>

</section>
<section className="internship" id="internship">

    <h2>Internship Experience</h2>

    <div className="timeline">

        <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-card">

                <span className="timeline-date">
                    Feb 2026 – May 2026
                </span>

                <h3>Mindenious Edutech</h3>

                <h4>Cybersecurity Intern</h4>

                <p className="timeline-short">
                    Completed practical cybersecurity training focused on network security,
                    vulnerability assessment and digital defence concepts.
                </p>

                <button
                    className="details-btn"
                    onClick={() => setShowInternship(!showInternship)}
                >
                    {showInternship ? "Hide Details ▲" : "View Details ▼"}
                </button>

                {showInternship && (

                    <div className="timeline-details">

                        <h4>About</h4>

                        <p>
                            During my internship at <strong>Mindenious Edutech</strong>,
                            I gained practical exposure to cybersecurity concepts through
                            hands-on security exercises, vulnerability analysis and
                            network defence practices while strengthening my technical skills.
                        </p>

                        <h4>Key Responsibilities</h4>

                        <ul>

                            <li>Threat Analysis & Vulnerability Assessment</li>

                            <li>Network Security Fundamentals</li>

                            <li>Digital Forensics Concepts</li>

                            <li>Security Monitoring & Incident Analysis</li>

                            <li>Cybersecurity Best Practices</li>

                        </ul>

                        <h4>Conclusion</h4>

                        <p>
                            This internship enhanced my technical knowledge,
                            strengthened my problem-solving abilities and
                            reinforced my passion for building a career in Cybersecurity.
                        </p>

                    </div>

                )}

            </div>

        </div>

    </div>

</section>
<section id="projects" className="projects">

  <h2>Featured Projects</h2>

  <div className="project-grid">

    <div className="project-card">

      <h3>Threat Intelligence Dashboard</h3>

      <p>
        A Python-based cybersecurity solution that analyses malicious IP
        addresses using the AbuseIPDB API.
      </p>

      <div className="project-tech">
        Python • AbuseIPDB API • VS Code
      </div>

    </div>

    <div className="project-card">

      <h3>Network Traffic Monitoring</h3>

      <p>
        A cybersecurity project focused on monitoring network traffic,
        analysing packet flow and identifying suspicious network behaviour.
      </p>

      <div className="project-tech">
        Wireshark • Cisco Packet Tracer
      </div>

    </div>

    <div className="project-card">

      <h3>Password Security Analyzer</h3>

      <p>
        A password analysis application that evaluates password strength
        using cybersecurity best practices and promotes secure password
        creation through practical validation techniques.
      </p>

      <div className="project-tech">
        Kali Linux • Python
      </div>

    </div>

  </div>

</section>
<section className="certifications" id="certifications">

<h2>Professional Certifications</h2>

<div className="timeline">

  <div className="timeline-item">
    <div className="timeline-dot"></div>
    <div className="timeline-content">
      <span className="timeline-year">2026</span>
      <h3>MongoDB Skillathon 2026</h3>
      <p>ICT Academy × MongoDB</p>
    </div>
  </div>

  <div className="timeline-item">
    <div className="timeline-dot"></div>
    <div className="timeline-content">
      <h3>Introduction to Cybersecurity</h3>
      <p>Cisco Networking Academy</p>
    </div>
  </div>

  <div className="timeline-item">
    <div className="timeline-dot"></div>
    <div className="timeline-content">
      <h3>Deloitte Cyber Job Simulation</h3>
      <p>Deloitte Australia – Forage</p>
    </div>
  </div>

  <div className="timeline-item">
    <div className="timeline-dot"></div>
    <div className="timeline-content">
      <h3>Digital Forensics Essentials</h3>
      <p>Great Learning</p>
    </div>
  </div>
</div>

</section>
<section id="contact" className="contact">

    <h2>Let'S Connect</h2>

    <p className="contact-subtitle">
        Passionate Cybersecurity student continuously learning Digital Forensics,
        Network Security and Ethical Hacking. Feel free to connect and collaborate.
    </p>

    <div className="contact-container">

        <div className="contact-left">
            <img
  src="/images/shield.png"
  alt="Cyber Shield"
  className="shield-img"
/>
        </div>

        <div className="contact-right">

            <div className="contact-item">
                <h3>📧 Email</h3>
                <a
  href="mailto:sanjana.sr.work@gmail.com"
  className="contact-link"
>
  sanjana.sr.work@gmail.com
</a>
            </div>

            <div className="contact-item">
                <h3>💼 LinkedIn</h3>

                <a
                  href="https://www.linkedin.com/in/sanjana-s-r-340518412/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-btn"
                >
                    Visit Profile →
                </a>

            </div>

            <div className="contact-item">
                <h3>📍 Location</h3>
                <p>Tamil Nadu, India</p>
            </div>

            <div className="contact-item">
                <h3>📄 Resume</h3>
                <a
  href="/resume/Sanjana_SR_Resume.pdf"
  download
  className="contact-btn"
>
  Download Resume →
</a>

            </div>

        </div>

    </div>

</section>

    </div>
  );
}

export default App;