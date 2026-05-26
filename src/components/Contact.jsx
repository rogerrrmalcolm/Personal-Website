import { motion } from 'framer-motion'
import '../styles/Contact.css'

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:malcolmroger219@gmail.com',
    text: 'malcolmroger219@gmail.com',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/rogerrrmalcolm',
    text: 'github.com/rogerrrmalcolm',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rogermalcolm',
    text: 'linkedin.com/in/rogermalcolm',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="contact-panel"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-copy">
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Let us build something useful.</h2>
            <p>
              Open to internships, project collaboration, and technical conversations around AI
              applications and software engineering.
            </p>
            <a className="btn btn-primary" href="mailto:malcolmroger219@gmail.com">
              Send an Email
            </a>
          </div>
          <div className="contact-links">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact-link"
              >
                <span>{link.label}</span>
                <strong>{link.text}</strong>
                <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
