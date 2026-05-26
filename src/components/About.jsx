import { motion } from 'framer-motion'
import '../styles/About.css'

const profile = [
  { label: 'Discipline', value: 'Computer Engineering' },
  { label: 'University', value: 'Toronto Metropolitan University' },
  { label: 'Interest', value: 'AI systems and business operations' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-layout">
        <motion.div
          className="section-heading about-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-kicker">About</p>
          <h2 className="section-title">Engineering with business context.</h2>
        </motion.div>

        <motion.div
          className="about-body"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div className="about-text">
            <p>
              I am a Computer Engineering student focused on building software at the intersection
              of applied AI, data, and operational decision-making.
            </p>
            <p>
              My projects explore how technical systems can reduce manual effort, structure
              information, and produce outputs that people can act on.
            </p>
          </div>
          <dl className="about-facts">
            {profile.map((fact) => (
              <div className="fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
