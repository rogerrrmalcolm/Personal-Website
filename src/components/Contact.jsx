import { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`)
    const body = encodeURIComponent(
      `${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`,
    )

    window.location.href = `mailto:malcolmroger219@gmail.com?subject=${subject}&body=${body}`
    setSubmitStatus('success')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitStatus(null), 3000)
  }

  const contactLinks = [
    { icon: 'EM', label: 'Email', href: 'mailto:malcolmroger219@gmail.com', text: 'malcolmroger219@gmail.com' },
    { icon: 'GH', label: 'GitHub', href: 'https://github.com/rogerrrmalcolm', text: 'github.com/rogerrrmalcolm' },
    { icon: 'IN', label: 'LinkedIn', href: 'https://www.linkedin.com/in/rogermalcolm', text: 'linkedin.com/in/rogermalcolm' },
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Let's Connect</h3>
            <p>
              I am open to internships, project collaborations, and conversations around AI,
              engineering, and business operations.
            </p>

            <div className="contact-links">
              {contactLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-link glass"
                  whileHover={{ x: 10 }}
                >
                  <span className="link-icon">{link.icon}</span>
                  <span className="link-text">
                    <strong>{link.label}</strong>
                    {link.text}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form glass"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                rows="5"
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Open Email Draft
            </motion.button>

            {submitStatus === 'success' && (
              <motion.p
                className="success-message"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Your email draft is ready to send.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
