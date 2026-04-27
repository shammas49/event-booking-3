import { motion, useInView } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const features = [
  {
    icon: '✨',
    title: 'Personalized Planning',
    desc: 'From intimate gatherings to grand celebrations, we tailor every detail to reflect your unique love story and vision.',
  },
  {
    icon: '🍽️',
    title: 'Premium Catering',
    desc: 'Indulge in a culinary journey crafted by expert chefs, featuring gourmet menus, elegant presentations, and flawless service.',
  },
  {
    icon: '⚜️',
    title: 'Attention to Detail',
    desc: 'Bespoke decor, luxurious florals, and precise logistics — we handle the intricacies so you can cherish every moment.',
  },
  {
    icon: '🕊️',
    title: 'Seamless Execution',
    desc: 'Experience a stress-free day with our dedicated coordination team ensuring your event flows effortlessly from start to finish.',
  },
]

// Animated Counter Component
const Counter = ({ from, to, suffix }) => {
  const [count, setCount] = useState(from)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      let start = from
      const end = to
      const duration = 2000 // 2 seconds
      const increment = (end - start) / (duration / 16)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.ceil(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [isInView, from, to])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      style={{
        background: '#FCFCFA',
        padding: '120px 20px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>

        {/* Section 2: Our Journey (Stats) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '100px',
            padding: '60px 40px',
            background: '#FFFFFF',
            border: '1px solid rgba(212,175,55,0.15)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
            position: 'relative',
          }}
        >
          {/* Subtle gold line accent */}
          <div style={{
            position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
            width: '100px', height: '2px', background: '#D4AF37'
          }} />

          {[
            { num: 500, suffix: '+', label: 'Weddings Completed', icon: '💍' },
            { num: 10, suffix: '+', label: 'Years of Experience', icon: '⏳' },
            { num: 50, suffix: '+', label: 'Expert Team Members', icon: '👥' },
            { num: 100, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', marginBottom: '16px', opacity: 0.8 }}>{stat.icon}</div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 500,
                color: '#D4AF37',
                lineHeight: 1,
              }}>
                <Counter from={0} to={stat.num} suffix={stat.suffix} />
              </div>
              <div style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '13px',
                fontWeight: 400,
                color: '#666666',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginTop: '12px',
              }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Heading for Why Choose Us */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.p
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            className="section-heading"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginTop: '12px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A Commitment to Excellence
          </motion.h2>
        </div>

        {/* Feature columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
        }}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              style={{
                textAlign: 'center',
                padding: '20px',
              }}
            >
              <div style={{ 
                fontSize: '32px', 
                marginBottom: '24px',
                display: 'inline-block',
                padding: '16px',
                background: '#FCFCFA',
                borderRadius: '50%',
                border: '1px solid rgba(212,175,55,0.2)'
              }}>{f.icon}</div>

              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '20px',
                fontWeight: 500,
                color: '#2C2C2C',
                marginBottom: '16px',
              }}>
                {f.title}
              </h3>

              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '14px',
                lineHeight: 1.8,
                color: '#666666',
                fontWeight: 300,
              }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
