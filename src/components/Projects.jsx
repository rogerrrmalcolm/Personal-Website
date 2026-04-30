import { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/Projects.css'

export default function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: "Project 1",
      description: "Your project description will go here",
      tech: ["Technology 1", "Technology 2"],
      link: "#",
      image: "🚀"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Your project description will go here",
      tech: ["Technology 1", "Technology 2"],
      link: "#",
      image: "💡"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Your project description will go here",
      tech: ["Technology 1", "Technology 2"],
      link: "#",
      image: "⚡"
    }
  ])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card glass"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <motion.span
                  className="project-icon"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {project.image}
                </motion.span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="tech-badge"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <motion.a
                  href={project.link}
                  className="project-link"
                  whileHover={{ x: 10 }}
                >
                  View Project →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="projects-note glass"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          💡 Ready to add your projects! Just provide the details and I'll update this section.
        </motion.p>
      </div>
    </section>
  )
}

