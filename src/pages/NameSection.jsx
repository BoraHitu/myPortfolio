import Navbar from "../components/Navbar";
import "./css/name-section.css";

function NameSection() {
  return (
    <section id="name-section" className="name-container">
      <div className="left">
        <h1>
          Hi, I'm <span>Hitesh Bora</span>
        </h1>
        <div className="content">
          <div className="role">Software Developer</div>
          <div className="about">
            React | Django | Data Analyst| with 2 years of Certification in
            full-stack python development, and Data Scientist.
          </div>
          <div className="button-section">
            <button className="btn btn-primary">
              <a href="#projects">View My Work</a>
            </button>
            <button className="btn btn-secondary">
              <a href="#contact">Contact Me</a>
            </button>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="ball-big">
          <div className="logo-div">{"{HB}"}</div>
        </div>
        <div className="ball-medium"></div>
        <div className="ball-small"></div>
      </div>
    </section>
  );
}

export default NameSection;
