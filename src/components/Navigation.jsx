import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/Navigation.css'

export default function Navigation({ activeSection, setActiveSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let frameId

    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
      setScrollProgress(Math.min(Math.max(progress, 0), 1))
      frameId = undefined
    }

    const handleScroll = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateProgress)
      }
    }

    updateProgress()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const menuItems = ['home', 'projects', 'about', 'focus', 'skills', 'contact']

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('home')}
        >
          <span className="logo-icon">RM</span>
          <span className="logo-text">Roger Malcolm</span>
        </motion.div>

        <button
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              className="nav-menu mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuItems.map((item, index) => (
                <motion.li
                  key={item}
                  className="nav-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.button
                    className={`nav-link ${activeSection === item ? 'active' : ''}`}
                    onClick={() => scrollToSection(item)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <ul className="nav-menu desktop">
          {menuItems.map((item) => (
            <motion.li key={item} className="nav-item">
              <motion.button
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                onClick={() => scrollToSection(item)}
                whileHover={{ y: -2 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.button>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />
    </motion.nav>
  )
}

