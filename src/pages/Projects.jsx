import './css/projects.css';

function Projects() {
  const projects = [
    {
      type: 'Full-Stack Application',
      title: 'Everyday Life Insurance',
      overview:
        'Comprehensive full-stack insurance platform with advanced reporting capabilities and dynamic filtering system.',
      features: [
'💻 Fully Responsive Design Optimized for all screen sizes—desktop, tablet, and mobile—for a seamless experience everywhere.',
'⚛️ Built with React & Vite Fast, modern frontend stack using React.js and Vite for rapid development and efficient performance.',
'📁 Project Showcase Highlights full-stack projects with tech stacks, live demos, and GitHub links for recruiters and collaborators.',
'📊 Skills & Tech Stack Section Clearly displays your expertise in frontend, backend, cloud, and dev tools with custom icons and tooltips.',
'🧭 Smooth Navigation Single-page application (SPA) with scroll-based section navigation and active state highlighting.',
'🎨 Custom Styling with Tailwind CSS Clean, modern UI styled with Tailwind for flexibility and maintainability.',
'🌐 Deployed with Vercel Instant global deployment and CI/CD through GitHub and Vercel integration.',
'📱 Contact Form with Email Integration A working contact form using EmailJS (or similar) to let people reach out directly from the site.'

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
