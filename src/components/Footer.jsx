import '../styles/Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Roger Malcolm</h3>
            <p>Computer Engineering Student | AI & Business Operations Enthusiast</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#focus">Focus</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="mailto:malcolmroger219@gmail.com">Email</a>
              </li>
              <li>
                <a href="https://github.com/rogerrrmalcolm" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/rogermalcolm" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Roger Malcolm. All rights reserved.</p>
          <p>Built with React, Vite, and Framer Motion.</p>
        </div>
      </div>
    </footer>
  )
}
