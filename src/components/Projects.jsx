import { motion } from 'framer-motion'
import '../styles/Projects.css'

const projects = [
  {
    id: '01',
    title: 'Bastion',
    category: 'AI / Due Diligence',
    description:
      'An AI-powered M&A diligence workspace coordinating market, financial, risk, and memo agents to produce investment-committee-style analysis.',
    tech: ['FastAPI', 'Gemini', 'Three.js', 'Amazon S3', 'Multi-Agent AI'],
    link: 'https://github.com/rogerrrmalcolm/Bastion',
    featured: true,
  },
  {
    id: '02',
    title: 'Prospect Enrichment Engine',
    category: 'AI / Data Pipeline',
    description:
      'A prospect enrichment and scoring engine for LP fundraising that deduplicates organizations, researches public evidence, ranks leads, and exports decision-ready reporting.',
    tech: ['Python', 'OpenAI API', 'FastAPI', 'SQLite', 'Reporting'],
    link: 'https://github.com/rogerrrmalcolm/Enrichment-Scoring',
    featured: true,
  },
  {
    id: '03',
    title: 'Heart Rate Monitor',
    category: 'Embedded Systems',
    description:
      'A biomedical engineering project supporting real-time heart rate monitoring, data logging, and live visualization through embedded and desktop components.',
    tech: ['Python', 'C++', 'Embedded Systems', 'GUI', 'PlatformIO'],
    link: 'https://github.com/varenr/HeartRateMonitor',
  },
  {
    id: '04',
    title: 'Personal Website',
    category: 'Frontend',
    description:
      'A responsive portfolio experience built to present software projects, technical interests, and contact details with a concise visual language.',
    tech: ['React', 'Vite', 'Framer Motion', 'CSS'],
    link: 'https://github.com/rogerrrmalcolm/Personal-Website',
  },
]

export default function Projects() {
  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`)
    event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`)
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-heading projects-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">Selected work.</h2>
          <p className="section-summary">
            Product-focused software spanning AI workflow orchestration, research automation,
            embedded engineering, and interface development.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card ${project.featured ? 'featured' : ''}`}
              onPointerMove={handlePointerMove}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="project-meta">
                <span className="project-number">{project.id}</span>
                <span className="project-category">
                  {project.featured ? 'Featured / ' : ''}
                  {project.category}
                </span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <span className="project-link">
                View Repository <span aria-hidden="true">&rarr;</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
