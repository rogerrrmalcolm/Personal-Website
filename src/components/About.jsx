import { motion } from 'framer-motion'
import '../styles/About.css'

export default function About() {
  const stats = [
    { number: '3+', label: 'Years of Learning' },
    { number: '10+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>

          <motion.div
            className="about-stats"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} className="stat glass" variants={itemVariants}>
                <motion.h3 className="stat-number">
                  {stat.number}
                </motion.h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

