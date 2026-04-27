import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import EventGalleryModal from './EventGalleryModal'

const services = [
  {
    name: 'Wedding Planning',
    img: 'https://www.image2url.com/r2/default/images/1776941536048-7506d4a3-88b8-4145-81b3-980ed322da8d.jpg',
    desc: 'Comprehensive planning from concept to execution. We ensure your special day is flawless and unforgettable.',
    photos: []
  },
  {
    name: 'Luxury Catering',
    img: 'https://www.image2url.com/r2/default/images/1776942032872-c679ee7f-96e4-4a78-ac09-7462b61d8026.jpg',
    desc: 'Exquisite culinary experiences tailored to your palate, served with elegance and professionalism.',
    photos: []
  },
  {
    name: 'Decor & Floral Design',
    img: 'https://www.image2url.com/r2/default/images/1776942268237-e2d77a55-c194-478b-a68e-37cd2ec694c9.jpg',
    desc: 'Bespoke aesthetic arrangements that transform any venue into a breathtaking dreamscape.',
    photos: []
  },
  {
    name: 'Venue Selection',
    img: 'https://cdn.corenexis.com/files/c/2588158720.jpg',
    desc: 'Discovering the perfect backdrop for your celebration, from historic estates to modern grand halls.',
    photos: []
  },
  {
    name: 'Entertainment',
    img: 'https://cdn.corenexis.com/files/c/1295782720.jpg',
    desc: 'Curated musical acts, DJs, and performances that keep your guests captivated and dancing all night.',
    photos: []
  },
  {
    name: 'Bridal Styling',
    img: 'https://cdn.corenexis.com/files/c/7619447720.jpg',
    desc: 'Personalized styling and beauty services to make you look and feel radiant on your special day.',
    photos: []
  }
]

function ServiceCard({ service, index, onBook }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => onBook && onBook(service)}
      style={{
        position: 'relative',
        height: '420px',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: hovered ? 'translateY(-12px)' : 'translateY(0)',
        boxShadow: hovered 
          ? '0 30px 60px rgba(0,0,0,0.1), 0 0 0 1px #D4AF37' 
          : '0 4px 20px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.05)',
      }}
    >
      {/* Background Image Container */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '60%',
        overflow: 'hidden',
      }}>
        <div style={{
          width: '100%', height: '100%',
          backgroundImage: `url(${service.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }} />
        {/* Subtle dark overlay for image */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4))',
          opacity: hovered ? 1 : 0.6,
          transition: 'opacity 0.6s ease',
        }} />
        
        {/* Icon over image */}
        {/* <div style={{
          position: 'absolute',
          bottom: '-24px',
          right: '24px',
          width: '48px',
          height: '48px',
          background: '#FFFFFF',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          zIndex: 2,
          transition: 'transform 0.4s ease, background 0.4s ease',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
          border: hovered ? '1px solid #D4AF37' : 'none',
        }}>
          {service.icon}
        </div> */}
      </div>

      {/* Content Container */}
      <div style={{
        position: 'absolute',
        top: '60%', left: 0, right: 0, bottom: 0,
        padding: '24px 24px',
        background: '#FFFFFF',
        transition: 'background 0.6s ease',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '20px',
          fontWeight: 500,
          color: '#2C2C2C',
          marginBottom: '8px',
          transition: 'color 0.4s ease',
        }}>
          {service.name}
        </h3>
        
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '13px',
          lineHeight: 1.5,
          color: '#666666',
          fontWeight: 300,
          marginBottom: '12px',
          flex: 1
        }}>
          {service.desc}
        </p>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontFamily: "'Outfit', sans-serif",
          fontSize: '12px',
          fontWeight: 500,
          color: hovered ? '#D4AF37' : '#2C2C2C',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          transition: 'color 0.4s ease',
        }}>
          Book Now
          <ArrowRight 
            size={14} 
            style={{ 
              transform: hovered ? 'translateX(4px)' : 'translateX(0)', 
              transition: 'transform 0.4s ease' 
            }} 
          />
        </div>

        {/* Animated Gold Line */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          height: '3px',
          background: '#D4AF37',
          width: hovered ? '100%' : '0%',
          transition: 'width 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }} />
      </div>
    </motion.div>
  )
}

export default function Services({ onBook }) {
  return (
    <section
      id="services"
      style={{
        background: '#FFFFFF',
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
            Our Expertise
          </motion.p>
          <motion.h2
            className="section-heading"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginTop: '12px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Curated Services for Your Special Day
          </motion.h2>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '30px',
        }}>
          {services.map((service, i) => (
            <ServiceCard
              key={service.name}
              service={service}
              index={i}
              onBook={onBook}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
