import "./css/skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="heading">
        <div className="title">Technical Skills</div>
        <div className="subtitle">
          Comprehensive expertise across the full technology stack
        </div>
      </div>
      <div className="content">
        <div className="card first-card">
          <div className="progressbar"></div>
          <div className="card-title">Frontend</div>
          <div className="card-content">
            <div className="skill">
              <div className="name">ReactJS</div>
              <div className="percentage">80%</div>
            </div>
            <div className="outer-progressbar">
              <div className="inner-progressbar" style={{ width: "95%" }}></div>
            </div>
            <div className="skill">
              <div className="name">Django</div>
              <div className="percentage">80%</div>
            </div>
            <div className="outer-progressbar">
              <div className="inner-progressbar" style={{ width: "90%" }}></div>
            </div>
            <div className="skill">
              <div className="name">JavaScript</div>
              <div className="percentage">90%</div>
            </div>
            <div className="outer-progressbar">
              <div className="inner-progressbar" style={{ width: "95%" }}></div>
            </div>

            <div className="skill">
              <div className="name">HTML/CSS</div>
              <div className="percentage">95%</div>
            </div>
            <div className="outer-progressbar">
              <div className="inner-progressbar" style={{ width: "95%" }}></div>
            </div>
            <div className="skill">
              <div className="name">Bootstrap</div>
              <div className="percentage">90%</div>
            </div>
            <div className="outer-progressbar">
              <div className="inner-progressbar" style={{ width: "90%" }}></div>
            </div>
          </div>
        </div>
        <div className="card second-card">
          <div className="progressbar"></div>
          <div className="card-title">Backend</div>
          <div className="card-content">
            <div className="skill">
              <div className="name">Node.js</div>
              <div className="percentage">90%</div>
            </div>
            <div className="outer-progressbar">
              <div className="inner-progressbar" style={{ width: "90%" }}></div>
            </div>
            <div className="skill">
              <div className="name">Php</div>
              <div className="percentage">95%</div>
            </div>
            <div className="outer-progressbar">
              <div className="inner-progressbar" style={{ width: "95%" }}></div>
            </div>
            <div className="skill">
              <div className="name">Java</div>
              <div className="percentage">75%</div>
            </div>
            <div className="outer-progressbar">
              <div className="inner-progressbar" style={{ width: "75%" }}></div>
            </div>
            <div className="skill">
              <div className="name">Python</div>
              <div className="percentage">80%</div>
            </div>
            <div className="outer-progressbar">
              <div className="inner-progressbar" style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>
        <div className="card third-card">
          <div className="progressbar"></div>
          <div className="card-title">Databases</div>
          <div className="card-content">
            <div className="skill">
              <div className="name">MongoDB</div>
              <div className="percentage">85%</div>
            </div>
            <div className="outer-progressbar">
              <div className="inner-progressbar" style={{ width: "85%" }}></div>
            </div>
            <div className="skill">
              <div className="name">Sqlite</div>
              <div className="percentage">80%</div>
            </div>
            <div className="outer-progressbar">
              <div className="inner-progressbar" style={{ width: "80%" }}></div>
            </div>
            <div className="skill">
              <div className="name">RDBMS</div>
              <div className="percentage">85%</div>
            </div>
            <div className="outer-progressbar">
              <div className="inner-progressbar" style={{ width: "85%" }}></div>
            </div>
            <div className="skill">
              <div className="name">Oracle SQL</div>
              <div className="percentage">80%</div>
            </div>
            <div className="outer-progressbar">
              <div className="inner-progressbar" style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>
        <div className="card fourth-card">
          <div className="progressbar"></div>
          <div className="card-title">Tools & Others</div>
          <div className="card-content">
            <div className="skill">
              <div className="name">Git/GitHub</div>
              <div className="percentage">85%</div>
            </div>
            <div className="outer-progressbar">
              <div className="inner-progressbar" style={{ width: "85%" }}></div>
            </div>
            <div className="skill">
              <div className="name">Excel</div>
              <div className="percentage">95%</div>
            </div>
            <div className="outer-progressbar">
              <div className="inner-progressbar" style={{ width: "95%" }}></div>
            </div>
            <div className="skill">
              <div className="name">Tableau</div>
              <div className="percentage">90%</div>
            </div>
            <div className="outer-progressbar">
              <div className="inner-progressbar" style={{ width: "90%" }}></div>
            </div>
            <div className="skill">
              <div className="name">PowerBI</div>
              <div className="percentage">85%</div>
            </div>
            <div className="outer-progressbar">
              <div className="inner-progressbar" style={{ width: "85%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
