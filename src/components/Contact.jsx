import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'

const WA_URL = `https://wa.me/919876543210?text=Hello+MK+Caters+and+Events!%0A%0AI+would+like+to+plan+my+dream+wedding+with+you.`

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        padding: '160px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Image with Blur */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        filter: 'blur(8px)',
        transform: 'scale(1.1)',
        zIndex: 0,
      }} />

      {/* Soft Gold Gradient Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(252,252,250,0.95) 0%, rgba(212,175,55,0.85) 100%)',
        zIndex: 1,
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '800px',
          width: '100%',
          padding: '60px 40px',
          background: 'rgba(255,255,255,0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.5)',
          borderRadius: '4px',
          boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
        }}
      >
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: 500,
          color: '#2C2C2C',
          marginBottom: '20px',
        }}>
          Let's Plan Your Dream Wedding
        </h2>
        
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(14px, 2vw, 16px)',
          color: '#4A4A4A',
          marginBottom: '40px',
          fontWeight: 300,
          lineHeight: 1.8,
        }}>
          Every great love story deserves an unforgettable celebration. Reach out to our team of experts and let us bring your vision to life with elegance, precision, and a touch of magic.
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}
            style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '16px 40px',
              background: '#D4AF37',
              color: '#FFFFFF',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: '2px',
              transition: 'all 0.4s ease',
              boxShadow: '0 10px 30px rgba(212,175,55,0.2)',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(212,175,55,0.3)'
              e.currentTarget.style.background = '#C59F2D'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(212,175,55,0.2)'
              e.currentTarget.style.background = '#D4AF37'
            }}
          >
            <MessageCircle size={18} />
            Book Now
          </a>

          <a
            href="tel:+919876543210"
            style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '16px 40px',
              background: 'transparent',
              color: '#2C2C2C',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: '1px solid rgba(44,44,44,0.3)',
              borderRadius: '2px',
              transition: 'all 0.4s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(44,44,44,0.05)'
              e.currentTarget.style.borderColor = '#2C2C2C'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(44,44,44,0.3)'
            }}
          >
            <Phone size={18} />
            Call Us
          </a>
        </div>
      </motion.div>
    </section>
  )
}
