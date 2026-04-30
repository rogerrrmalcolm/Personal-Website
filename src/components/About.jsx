import '../styles/About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Computer Engineering student at Toronto Metropolitan University with a passion 
              for exploring the intersection of artificial intelligence and business operations.
            </p>
            <p>
              Currently, I'm focused on understanding how AI can transform business processes and 
              create meaningful value. I'm committed to continuous learning and building projects 
              that demonstrate my technical skills and innovative thinking.
            </p>
            <p>
              When I'm not coding or studying, you'll find me exploring new technologies, 
              reading about AI trends, or working on side projects that challenge my problem-solving abilities.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat">
              <h3 className="stat-number">3+</h3>
              <p className="stat-label">Years of Learning</p>
            </div>
            <div className="stat">
              <h3 className="stat-number">10+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat">
              <h3 className="stat-number">5+</h3>
              <p className="stat-label">Technologies Mastered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
