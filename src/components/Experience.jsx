import { motion } from 'framer-motion'
import '../styles/Experience.css'

const roles = [
  {
    period: 'Mar 2026 - Present',
    role: 'Software Developer',
    organization: 'TMU Wave',
    location: 'Toronto, ON',
    current: true,
    highlights: [
      'Implemented embedded C control routines for an autonomous underwater vehicle using Raspberry Pi-based sensor inputs.',
      'Prototyped PWM motor-control logic and sensor/camera integration pipelines for embedded-system validation.',
      'Built BlueSim simulation workflows to improve software testing reliability and model vehicle behavior.',
    ],
  },
  {
    period: 'Mar 2026 - May 2026',
    role: 'Full-Stack Development Intern',
    organization: 'Ayinke Consulting',
    location: 'Toronto, ON',
    highlights: [
      'Defined REST API data flows and backend architecture for a cloud-backed web application.',
      'Built a React landing page with Supabase authentication, persistent profiles, and database-backed storage.',
      'Mapped product requirements into AWS deployment services, backend responsibilities, and data integrations.',
    ],
  },
  {
    period: 'May 2026',
    role: 'AI Automation Engineering Intern',
    organization: 'Next Stop Toronto',
    location: 'Toronto, ON',
    highlights: [
      'Configured a local n8n workflow environment with Docker for self-hosted automation execution.',
      'Integrated Twilio SMS and email outreach logic while mapping consent and anti-spam compliance safeguards.',
      'Designed AI-assisted workflows for video clipping, content generation, scheduled posting, and website integrations.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-heading experience-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-kicker">Experience</p>
          <h2 className="section-title">Applied work.</h2>
          <p className="section-summary">
            Building embedded systems, full-stack products, and automation workflows in practical
            team environments.
          </p>
        </motion.div>

        <div className="experience-timeline">
          {roles.map((role, index) => (
            <motion.article
              className={`experience-entry ${role.current ? 'current' : ''}`}
              key={`${role.organization}-${role.role}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="experience-period">
                <span>{role.period}</span>
                {role.current && <small>Current</small>}
              </div>
              <div className="experience-details">
                <div className="experience-title">
                  <h3>{role.role}</h3>
                  <p>
                    {role.organization} <span>/</span> {role.location}
                  </p>
                </div>
                <ul className="experience-highlights">
                  {role.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
