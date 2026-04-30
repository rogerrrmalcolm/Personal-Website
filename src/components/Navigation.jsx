import { useState } from 'react'
import '../styles/Navigation.css'

export default function Navigation({ activeSection, setActiveSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-icon">RM</span>
          <span className="logo-text">Roger Malcolm</span>
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
