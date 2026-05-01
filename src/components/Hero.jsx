import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import '../styles/Hero.css'

const FloatingText = ({ text, delay }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: 'easeOut' }}
      className="floating-text"
    >
      {text}
    </motion.span>
  )
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-background"
        animate={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 240, 255, 0.1), transparent 80%)`,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
      />

      <div className="hero-content">
        <div className="hero-text">
          <motion.h1 className="hero-title">
            <FloatingText text="Hi, I'm" delay={0.1} />
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="title-highlight"
            >
              Roger Malcolm
            </motion.span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Computer Engineering Student @ TMU
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Exploring the intersection of <span className="gradient-text">AI</span> and{' '}
            <span className="gradient-text">business operations</span>. Building practical systems
            through code, curiosity, and engineering discipline.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <span>Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="scroll-arrow"
            >
              &darr;
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="hero-panel glass" aria-label="Portfolio focus areas">
            <div className="panel-topline">
              <span>Portfolio System</span>
              <span className="panel-status">Live</span>
            </div>
            <div className="panel-body">
              <div className="signal-row">
                <span>AI operations</span>
                <strong>Scoring + automation</strong>
              </div>
              <div className="signal-row">
                <span>Engineering</span>
                <strong>Embedded + data systems</strong>
              </div>
              <div className="signal-row">
                <span>Frontend</span>
                <strong>React experiences</strong>
              </div>
            </div>
            <div className="panel-command">
              <span className="command-prompt">&gt;</span>
              building practical software with measurable outcomes
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
