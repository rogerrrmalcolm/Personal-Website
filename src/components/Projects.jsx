import { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/Projects.css'

export default function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: "Enrichment-Scoring",
      description: "AI-powered prospect enrichment and scoring engine for LP fundraising. Ingests CSV contacts, deduplicates at org level, enriches with public evidence via OpenAI web search, and scores across weighted dimensions. Generates leaderboard, HTML reports, and cost analysis.",
      tech: ["Python", "OpenAI API", "FastAPI", "SQLite", "Data Pipeline"],
      link: "https://github.com/rogerrrmalcolm/Enrichment-Scoring",
      image: "🎯"
    },
    {
      id: 2,
      title: "Heart Rate Monitor",
      description: "Biomedical engineering project combining embedded systems with GUI visualization. Real-time heart rate monitoring with Python-based GUI and C++ backend for sensor interfacing. Features data logging and live visualization capabilities.",
      tech: ["Python", "C++", "Embedded Systems", "GUI", "PlatformIO"],
      link: "https://github.com/varenr/HeartRateMonitor",
      image: "❤️"
    },
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
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card glass"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              style={{ textDecoration: 'none' }}
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
                <motion.div
                  className="project-link"
                  whileHover={{ x: 10 }}
                >
                  View on GitHub →
                </motion.div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


