import '../styles/Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <p className="footer-name">Roger Malcolm</p>
          <p className="footer-description">Computer Engineering / Applied AI / Software</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="https://github.com/rogerrrmalcolm" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:malcolmroger219@gmail.com">Email</a>
        </nav>
        <p className="copyright">&copy; {currentYear} Roger Malcolm</p>
      </div>
    </footer>
  )
}
