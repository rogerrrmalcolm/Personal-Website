import { motion } from 'framer-motion'
import '../styles/Focus.css'

const focusAreas = [
  {
    label: '01',
    title: 'AI Operations',
    summary:
      'Designing practical systems that turn messy business workflows into searchable data, scored outputs, and repeatable decisions.',
  },
  {
    label: '02',
    title: 'Full-Stack Prototyping',
    summary:
      'Building fast, usable interfaces around real technical ideas so projects can be tested, shown, and improved quickly.',
  },
  {
    label: '03',
    title: 'Systems Thinking',
    summary:
      'Connecting software, data, and engineering fundamentals to understand how a solution behaves beyond the first demo.',
  },
]

const workflow = [
  'Frame the problem',
  'Build the smallest useful version',
  'Measure the result',
  'Refine the system',
]

export default function Focus() {
  return (
    <section id="focus" className="focus">
      <div className="container">
        <div className="focus-heading">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Current Focus
          </motion.h2>
          <motion.p
            className="focus-intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            I am interested in projects where engineering discipline, AI tools, and business context
            meet. The goal is to build software that is useful before it is flashy.
          </motion.p>
        </div>

        <div className="focus-layout">
          <motion.div
            className="focus-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {focusAreas.map((area) => (
              <motion.article
                key={area.title}
                className="focus-card glass"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <span className="focus-label">{area.label}</span>
                <h3>{area.title}</h3>
                <p>{area.summary}</p>
              </motion.article>
            ))}
          </motion.div>

          <motion.aside
            className="workflow-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>How I Build</h3>
            <ol>
              {workflow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
