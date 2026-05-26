import { useEffect, useState } from 'react'
import AmbientBackground from './components/AmbientBackground'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Focus from './components/Focus'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = ['home', 'projects', 'about', 'focus', 'skills', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-35% 0px -50% 0px',
        threshold: [0.2, 0.4, 0.6],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <AmbientBackground />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <Projects />
        <About />
        <Focus />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
