import '../styles/Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">Hi, I'm</span>
            <span className="title-highlight">Roger Malcolm</span>
          </h1>
          <p className="hero-subtitle">
            Computer Engineering Student @ Toronto Metropolitan University
          </p>
          <p className="hero-description">
            Passionate about the future of AI and business operations. 
            Building innovative solutions at the intersection of technology and strategy.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <span className="icon">💻</span>
            <span>AI & ML</span>
          </div>
          <div className="floating-card card-2">
            <span className="icon">🚀</span>
            <span>Innovation</span>
          </div>
          <div className="floating-card card-3">
            <span className="icon">⚙️</span>
            <span>Engineering</span>
          </div>
        </div>
      </div>
    </section>
  )
}
