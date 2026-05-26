import { motion } from 'framer-motion'
import '../styles/Hero.css'

const selectedProjects = [
  {
    label: '01',
    title: 'Bastion',
    summary: 'AI-powered M&A diligence workspace',
    link: 'https://github.com/rogerrrmalcolm/Bastion',
  },
  {
    label: '02',
    title: 'Prospect Enrichment Engine',
    summary: 'Research and scoring pipeline for LP fundraising',
    link: 'https://github.com/rogerrrmalcolm/Enrichment-Scoring',
  },
]

const capabilities = [
  'Multi-Agent Workflows',
  'Research Automation',
  'Decision-Ready Reporting',
  'Data Pipelines',
  'API Engineering',
]

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="eyebrow">Roger Malcolm / Portfolio</p>
          <h1 className="hero-title">
            Software built for
            <span>real decisions.</span>
          </h1>
          <p className="hero-subtitle">Computer Engineering Student at TMU</p>
          <p className="hero-description">
            I build AI-backed tools and practical software systems, with a focus on turning
            complex workflows into clear, usable products.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Explore Projects
            </a>
            <a
              href="https://github.com/rogerrrmalcolm"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </div>
        </motion.div>

        <motion.aside
          className="selected-work"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          aria-label="Featured projects"
        >
          <div className="selected-work-header">
            <span>Selected Work</span>
            <span className="panel-signal">
              <i />
              Featured
            </span>
          </div>
          {selectedProjects.map((project) => (
            <a
              key={project.title}
              className="work-row"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="work-number">{project.label}</span>
              <span className="work-details">
                <strong>{project.title}</strong>
                <small>{project.summary}</small>
              </span>
              <span className="work-arrow" aria-hidden="true">
                &rarr;
              </span>
            </a>
          ))}
          <p className="selected-work-note">
            Applied AI, data pipelines, full-stack prototypes, and engineering projects.
          </p>
        </motion.aside>
      </div>
      <motion.div
        className="capability-rail"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        aria-label="Technical capability areas"
      >
        <div className="rail-track">
          {[...capabilities, ...capabilities].map((capability, index) => (
            <span key={`${capability}-${index}`} aria-hidden={index >= capabilities.length}>
              {capability}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
