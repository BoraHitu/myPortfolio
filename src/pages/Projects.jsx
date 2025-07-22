import './css/projects.css';

function Projects() {
  const projects = [
    {
      type: 'React',
      title: 'MyPortfolio Website',
      overview:
        'I am a web developer passionate about building modern, responsive web applications. This portfolio showcases my projects, skills, and experience using React, Node.js, and  interactive layout.',
      features: [
'💻 Optimized for all devices — desktop, tablet, and mobile.',
'⚛️ Modern frontend stack for fast and efficient development.',
'📁 Full-stack projects with tech stacks, live demos, and GitHub links.',
'📊 Showcases expertise in frontend, backend, and development tools.',
'🧭 SPA with scroll-based navigation and active section highlighting.',
'🎨 Clean, modern UI with flexible and maintainable styling.',
'🌐 Global deployment via GitHub and vercel.',
'📱 Functional form with email integration for direct communication.'

      ],
      skills: [
        'ReactJS',
        'Node.js',
        'Javascript',
        'CSS',
        'HTML',
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
