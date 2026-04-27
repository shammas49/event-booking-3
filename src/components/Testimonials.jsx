import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Eleanor & James',
    location: 'London',
    text: 'Working with MK Caters & Events was a dream. Their attention to detail, elegant design aesthetic, and flawless execution meant we could simply relax and enjoy the most perfect day of our lives.',
    stars: 5,
  },
  {
    name: 'Sophia Laurent',
    location: 'Paris',
    text: 'From the exquisite catering to the breathtaking floral arrangements, everything was orchestrated beautifully. It felt like walking into a modern fairy tale. Absolutely spectacular.',
    stars: 5,
  },
  {
    name: 'William Harrison',
    location: 'New York',
    text: 'The team brings a rare level of sophistication and professionalism to event planning. They anticipated our every need and created an atmosphere of pure luxury that our guests are still talking about.',
    stars: 5,
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="testimonials"
      style={{
        background: '#FFFFFF',
        padding: '120px 20px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Heading */}
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Kind Words
        </motion.p>
        <motion.h2
          className="section-heading"
          style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginTop: '12px', marginBottom: '60px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Love Stories We've Shared
        </motion.h2>

        <div style={{ position: 'relative', minHeight: '300px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: '40px',
              }}
            >
              {/* Quote Mark */}
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '60px',
                color: '#D4AF37',
                lineHeight: 1,
                opacity: 0.5,
                marginBottom: '24px',
              }}>
                "
              </div>

              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(18px, 2.5vw, 24px)',
                lineHeight: 1.8,
                color: '#2C2C2C',
                fontStyle: 'italic',
                marginBottom: '40px',
                fontWeight: 400,
              }}>
                {testimonials[active].text}
              </p>

              <div>
                <div style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#2C2C2C',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  {testimonials[active].name}
                </div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '13px',
                  color: '#666666',
                  fontStyle: 'italic',
                  marginTop: '8px',
                }}>
                  {testimonials[active].location}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot navigation */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '20px' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: i === active ? '#D4AF37' : '#E5E5E5',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                transform: i === active ? 'scale(1.2)' : 'scale(1)',
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
