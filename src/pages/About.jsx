import "./css/about.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="top-section">
        <div className="heading">About Me</div>
        <div className="subheading">
          Passionate python developer with expertise in modern web technologies
        </div>
      </div>
      <div className="about-details">
        <div className="left">
          <div className="heading">Professional Journey</div>
          <div className="content">
            <p>
              With over 2 years of Practical experience in Full Python Stack
              Developer, I specialize in ReactJS, Node.js, and Django. My
              expertise spans full-stack development, production issue handling,
              API integrations, and many more.
            </p>
            <p>
              I have successfully implemeted multiple high-impact projects, from
              full-stack web applications .
            </p>
            <p className="m-0">
              I'm passionate about writing clean, maintainable code and staying
              up-to-date with the latest technologies and best practices in
              software development.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="education-section">
            <div className="title">Education</div>
            <div className="subtitle">Bachelor of Engineering</div>
            <div className="content">
              <div>Computer Science</div>
              <div>SNJB COE Chandwad,2020-2023</div>
            </div>
          </div>
          <div className="interests-section">
            <div className="title">Interests</div>
            <ul>
              <li>Travelling</li>
              <li>Reading</li>
              <li>Technology</li>
            </ul>
          </div>
          <div className="strengths-section">
            <div className="title">Key Strengths</div>
            <ul>
              <li>Full-stack development</li>
              <li>Data Analyst</li>
              <li>API design & integration</li>
              <li>Performance optimization</li>
              <li>Team collaboration & mentoring</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
