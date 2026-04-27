import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Eye } from 'lucide-react'

const galleryImages = [
  { src: 'https://cdn.corenexis.com/files/c/9312285720.jpg', alt: 'Elegant Wedding', caption: 'Classic Elegance', category: 'Wedding' },
  { src: 'https://cdn.corenexis.com/files/c/1735128720.jpg', alt: 'Table Setup', caption: 'Luxury Dining', category: 'Catering' },
  { src: 'https://cdn.corenexis.com/files/c/5487798720.jpg', alt: 'Wedding Decoration', caption: 'Bespoke Floral Decor', category: 'Decor' },
  { src: 'https://cdn.corenexis.com/files/c/8682791720.jpg', alt: 'Outdoor Venue', caption: 'Estate Celebration', category: 'Venues' },
  { src: 'https://cdn.corenexis.com/files/c/3284837720.jpg', alt: 'Entertainment', caption: 'Live Symphony', category: 'Entertainment' },
  { src: 'https://cdn.corenexis.com/files/c/6217599720.jpg', alt: 'Bridal Styling', caption: 'Bridal Radiance', category: 'Styling' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section
      id="gallery"
      style={{
        background: '#FCFCFA',
        padding: '120px 20px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.p
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Portfolio
          </motion.p>
          <motion.h2
            className="section-heading"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginTop: '12px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A Glimpse of Magic
          </motion.h2>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {galleryImages.map((img, i) => (
            <GalleryItem key={i} img={img} index={i} onClick={() => setLightbox(img)} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              background: 'rgba(0,0,0,0.95)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              padding: '20px',
            }}
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: 'absolute', top: '30px', right: '30px',
                background: 'transparent', border: 'none',
                color: '#FFFFFF', cursor: 'pointer',
                opacity: 0.7, transition: 'opacity 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = 1}
              onMouseLeave={e => e.currentTarget.style.opacity = 0.7}
              aria-label="Close lightbox"
            >
              <X size={36} strokeWidth={1} />
            </button>
            <motion.img
              src={lightbox.src}
              alt={lightbox.alt}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                maxWidth: '90vw', maxHeight: '80vh',
                objectFit: 'contain',
              }}
              onClick={e => e.stopPropagation()}
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '18px',
                color: '#FFFFFF',
                marginTop: '24px',
                fontWeight: 300,
                letterSpacing: '0.05em',
              }}
            >
              {lightbox.caption}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function GalleryItem({ img, index, onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      style={{
        position: 'relative',
        height: '400px',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClick}
    >
      <img
        src={img.src}
        alt={img.alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '30px',
      }}>
        <motion.p
          animate={hovered ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '18px',
            color: '#FFFFFF',
            fontWeight: 500,
            marginBottom: '8px',
          }}
        >
          {img.caption}
        </motion.p>

        <motion.span
          animate={hovered ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.2em',
            color: '#D4AF37',
            textTransform: 'uppercase',
          }}
        >
          {img.category}
        </motion.span>
      </div>
    </motion.div>
  )
}
