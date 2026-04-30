import { useState } from 'react'
import '../styles/Projects.css'

export default function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: "Project 1",
      description: "Your project description will go here",
      tech: ["Technology 1", "Technology 2"],
      link: "#",
      image: "📁"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Your project description will go here",
      tech: ["Technology 1", "Technology 2"],
      link: "#",
      image: "📁"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Your project description will go here",
      tech: ["Technology 1", "Technology 2"],
      link: "#",
      image: "📁"
    }
  ])

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <span className="project-icon">{project.image}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <p className="projects-note">
          💡 Ready to add your projects! Just provide the details and I'll update this section.
        </p>
      </div>
    </section>
  )
}
