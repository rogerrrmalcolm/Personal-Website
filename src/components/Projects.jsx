import { motion } from 'framer-motion'
import '../styles/Projects.css'

const projects = [
  {
    id: 1,
    title: 'Bastion',
    description:
      'An AI-powered M&A diligence workspace that coordinates specialist agents across market, financial, risk, and memo workstreams to produce investment-committee-style analysis.',
    tech: ['FastAPI', 'Gemini', 'Three.js', 'Amazon S3', 'Multi-Agent AI'],
    link: 'https://github.com/rogerrrmalcolm/Bastion',
    image: 'BA',
  },
  {
    id: 2,
    title: 'Prospect Enrichment Engine',
    description:
      'AI-powered prospect enrichment and scoring engine for LP fundraising. Ingests CSV contacts, deduplicates at the organization level, enriches with public evidence, and scores across weighted dimensions.',
    tech: ['Python', 'OpenAI API', 'FastAPI', 'SQLite', 'Data Pipeline'],
    link: 'https://github.com/rogerrrmalcolm/Enrichment-Scoring',
    image: 'ES',
  },
  {
    id: 3,
    title: 'Heart Rate Monitor',
    description:
      'Biomedical engineering project combining embedded systems with GUI visualization. The system supports real-time heart rate monitoring, data logging, and live visualization.',
    tech: ['Python', 'C++', 'Embedded Systems', 'GUI', 'PlatformIO'],
    link: 'https://github.com/varenr/HeartRateMonitor',
    image: 'HR',
  },
  {
    id: 4,
    title: 'Personal Website',
    description:
      'A React portfolio built with Vite and Framer Motion. The site presents projects, technical focus areas, contact links, and a polished responsive experience.',
    tech: ['React', 'Vite', 'Framer Motion', 'CSS'],
    link: 'https://github.com/rogerrrmalcolm/Personal-Website',
    image: 'RM',
  },
]

export default function Projects() {
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
                <motion.span className="project-icon" whileHover={{ scale: 1.08 }}>
                  {project.image}
                </motion.span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <motion.span key={tech} className="tech-badge" whileHover={{ scale: 1.05 }}>
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <motion.div className="project-link" whileHover={{ x: 10 }}>
                  View on GitHub &rarr;
                </motion.div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
