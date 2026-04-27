import { motion } from 'framer-motion'

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ backgroundColor: '#FCFCFA' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
    >
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
      />

      <motion.h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(60px, 15vw, 120px)',
          fontWeight: 600,
          color: '#D4AF37',
          lineHeight: 1,
          letterSpacing: '0.05em',
        }}
        initial={{ scale: 0.9, opacity: 0, filter: 'blur(10px)' }}
        animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        MK
      </motion.h1>

      {/* Company name */}
      <motion.p
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(14px, 3vw, 20px)',
          color: '#2C2C2C',
          letterSpacing: '0.3em',
          fontWeight: 400,
          marginTop: '16px',
        }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
      >
        CATERS &amp; EVENTS
      </motion.p>

      {/* Tagline */}
      <motion.p
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(12px, 2vw, 16px)',
          color: '#666666',
          letterSpacing: '0.1em',
          fontStyle: 'italic',
          marginTop: '12px',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Luxury Weddings & Bespoke Events
      </motion.p>

      {/* Decorative gold line drawing */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '32px' }}>
        <motion.div
          style={{ height: '1px', backgroundColor: 'rgba(212,175,55,0.4)', transformOrigin: 'right center' }}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 100, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' }}
        />
        <motion.div
          style={{ width: 6, height: 6, backgroundColor: '#D4AF37', borderRadius: '50%', transform: 'rotate(45deg)' }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.4 }}
        />
        <motion.div
          style={{ height: '1px', backgroundColor: 'rgba(212,175,55,0.4)', transformOrigin: 'left center' }}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 100, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' }}
        />
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
      />
    </motion.div>
  )
}
