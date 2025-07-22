import './css/projects.css';

function Projects() {
  const projects = [
    {
      type: 'Full-Stack Application',
      title: 'Everyday Life Insurance',
      overview:
        'Comprehensive full-stack insurance platform with advanced reporting capabilities and dynamic filtering system.',
      features: [
        'Full-stack web application development',
        'Advanced reporting tool with dynamic filters',
        'Seamless API integrations',
        'AWS cloud deployment and scaling',
        'Real-time data visualization',
      ],
      skills: [
        'ReactJS',
        'Node.js',
        'AWS',
        'API Integration',
        'Dynamic Reporting',
      ],
      cardName: 'first-card',
    }
  
  ];

  return (
    <section
      id="projects"
      className="projects-section"
    >
      <div className="heading">
        <div className="title">Featured Projects</div>
        <div className="subtitle">
          Showcase of impactful projects demonstrating technical expertise and
          problem-solving skills
        </div>
      </div>
      <div className="content">
        {projects.map((project, index) => (
          <div key={index} className={`card ${project.cardName}`}>
            <div className="project-type">{project.type}</div>
            <div className="project-title">{project.title}</div>
            <div className="project-overview">{project.overview}</div>
            <div className="key-features-title">Key Features:</div>
            <div className="key-features">
              <ul>
                {project.features.map((feature, i) => <li key={i}><span className='bullet'></span><span>{feature}</span></li>)}
              </ul>
            </div>
            <div className="skills">
              <ul>
                {project.skills.map((feature, i) => <li key={i}>{feature}</li>)}
              </ul>
            </div>
            <button className="btn btn-primary d-none">View Details</button>
          </div>
        ))}
      </div>
      <div className="github-button-container">
        <button className="btn btn-secondary"><a href="https://github.com/BoraHitu" target='_blank' rel="noreferrer">View All Projects on GitHub</a></button>
      </div>
    </section>
  );
}
export default Projects;
