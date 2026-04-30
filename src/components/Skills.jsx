import { motion } from 'framer-motion'
import '../styles/Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "Java", "C++", "C#"]
    },
    {
      category: "Frontend",
      skills: ["React", "HTML/CSS", "Vite", "Framer Motion", "Three.js"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Databases", "APIs", "REST"]
    },
    {
      category: "AI & ML",
      skills: ["Machine Learning", "Data Analysis", "TensorFlow", "Neural Networks", "NLP"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category glass"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    whileHover={{ x: 8 }}
                  >
                    <span className="skill-dot"></span>
                    <span className="skill-name">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

