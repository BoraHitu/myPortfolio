import "./css/footer.css";

function Footer() {
  const contacts = [
    {
      type: "hiteshbora1105@gmail.com",
      value: "hiteshbora1105@gmail.com",
      href: "mailto:hiteshbora1105@gmail.com",
    },
    {
      type: "+91 7038288861",
      value: "+91 7038288861",
      href: "tel:+917038288861",
    },
    {
      type: "LinkedIn",
      value: "linkedin.com/in/hiteshbora",
      href: "https://www.linkedin.com/in/hiteshbora/",
    },
    {
      type: "GitHub",
      value: "github.com/BoraHitu",
      href: "https://github.com/BoraHitu",
    },
  ];

  return (
    <div className="footer-main">
      <div className="footer-section">
        <div className="first-section">
          <div className="column about-details">
            <div className="title">
              {"{"}
              <span> HB </span>
              {"}"}
            </div>
            <div className="subtitle">
              Software Developer specializing in ReactJS, Node.js, Django and
              Data Analyses. Passionate about building scalable web applications
              and solving complex problems.
            </div>
          </div>
          <div className="column link-section">
            <div className="title">Quick Links</div>
            <ul>
              <li>
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>
              <li>
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="column connect-section">
            <div className="title">Connect</div>
            <ul>
              {contacts.map((contact, index) => (
                <li key={index}>
                  <a href={contact.href}>{contact.type}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
        <div className="second-section">
          <div className="copyright">
            © 2025 Hitesh Bora. All rights reserved.
          </div>
          <button className="btn btn-primary">
            <a className="nav-link" href="#name-section">
              Back to Top
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
