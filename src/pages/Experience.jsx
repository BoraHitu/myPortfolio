import "./css/experience.css";

function Experience() {
  const experience = [
    {
      role: "Full Stack Python Developer",
      organization: "Qspiders",
      startDate: "07/2024",
      endDate: "07/2025",
      details: [
        "Learned all basic concepts of sql.",
        "Structuring and Designing the websites using Html and Css frameworks like bootstrap and tailwind.",
        "Learned All basic and advanced javascript topics up to ES6.",
        "Implemeted Django ,React and Created many projects and hosted using git and vercel.",
      ],
      skills: ["Oracle SQl", "Python", "HTML,CSS,JS", "React,Django"],
    },
    {
      role: "Data Scientist",
      organization: "Simpli-learn",
      startDate: "07/2023",
      endDate: "07/2024",
      details: [
        "Analyzed large datasets using Pandas to perform data cleaning, transformation, and analysis.",
        "Used NumPy for efficient mathematical Operations and multi-Dimensional Array manipulations.",
        "Used Matplotlib and Seaborn for data visualization Purpose.",
        "Used scikit-learn (sklearn) to apply different machine learning models for training and making predictions.",
        "Used tools like R Programming, Excel, Tableau, and Power BI.",
      ],
      skills: [
        "Python and R Programming",
        "Pandas,Numpy,Matplotlib,Seaborn,Skit-learn etc",
        "Tableau,PowerBi,Excel",
        "SQL",
        "Deep-Learning",
      ],
    },
    {
      role: "Full Stack Web Developer",
      organization: "Sumago Infotech",
      startDate: "01/2022",
      endDate: "03/2022",
      details: [
        "Prepared project presentations and reports to assist senior staff.",
        "Developed effective and responsive web sites with CSS framework like Bootstrap.",
        "Connected websites with databases. like SQL using PHP.",
        "Learned and implemented JavaScript in various websites.",
      ],

      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Python"],
    },
    {
      role: "Android Application Development",
      organization: "Sunanda Infotech",
      startDate: "02/2019",
      endDate: "04/2019",
      details: [
        "Built basic android applications using java and kotlin.",
        "Creating gui for android applications.",
        "Creating Apps like ,",
        "number swapping,calculator, background color changing.",
        "Participated in code reviews and knowledge sharing sessions.",
      ],
      skills: ["Java", "Kotlin", "Android Studio"],
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="top-section">
        <div className="heading">
          Pre-Professional Experience And Certifications
        </div>
        <div className="subheading">
          2+ years of pre-professional software development experience
        </div>
      </div>
      <div className="content">
        {experience.map((item, index) => (
          <div key={index} className="card-container">
            <div className="dot"></div>
            <div className="line"></div>
            <div className="card">
              <div className="d-flex">
                <div>
                  <div className="role">{item.role}</div>
                  <div className="organization">{item.organization}</div>
                </div>
                <div className="timeline">
                  {item.startDate} – {item.endDate || "Present"}
                </div>
              </div>
              <div className="details">
                <ul>
                  {item.details.map((detail) => (
                    <li>
                      <span className="bullet"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="skills">
                <ul>
                  {item.skills.map((skill) => (
                    <li>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
