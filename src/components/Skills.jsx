import '../styles/Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "Java", "C++", "C#"]
    },
    {
      category: "Frontend",
      skills: ["React", "HTML/CSS", "Vite", "Responsive Design"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Databases", "APIs"]
    },
    {
      category: "AI & ML",
      skills: ["Machine Learning", "Data Analysis", "Python ML Libraries", "Neural Networks"]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-dot"></span>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
