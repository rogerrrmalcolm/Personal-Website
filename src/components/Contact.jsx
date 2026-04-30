import { useState } from 'react'
import '../styles/Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitStatus('success')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitStatus(null), 3000)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always open to new opportunities and interesting conversations. Feel free to reach out!</p>
            
            <div className="contact-links">
              <a href="mailto:malcolmroger219@gmail.com" className="contact-link">
                <span className="link-icon">✉️</span>
                <span>malcolmroger219@gmail.com</span>
              </a>
              <a href="https://github.com/rogerrrmalcolm" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="link-icon">🐙</span>
                <span>github.com/rogerrrmalcolm</span>
              </a>
              <a href="https://www.linkedin.com/in/rogermalcolm" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="link-icon">💼</span>
                <span>linkedin.com/in/rogermalcolm</span>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
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
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>

            {submitStatus === 'success' && (
              <p className="success-message">Thanks for reaching out! I'll get back to you soon.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
