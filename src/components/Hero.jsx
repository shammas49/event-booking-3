import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    
    const frameCount = 80
    const images = []
    
    // Load images
    for (let i = 0; i < frameCount; i++) {
      const img = new Image()
      const index = i.toString().padStart(3, '0')
      img.src = `/weding/Wedding_mandap_setup_202604231138_${index}.jpg`
      images.push(img)
    }
    
    let frame = 0
    let animationFrameId
    let lastTime = 0
    const fps = 24
    const interval = 1000 / fps
    
    const render = (time) => {
      if (time - lastTime >= interval) {
        if (images[frame] && images[frame].complete && images[frame].naturalWidth > 0) {
          const img = images[frame]
          const canvasRatio = canvas.width / canvas.height
          const imgRatio = img.width / img.height
          
          let drawWidth, drawHeight, offsetX, offsetY
          
          if (canvasRatio > imgRatio) {
            drawWidth = canvas.width
            drawHeight = canvas.width / imgRatio
            offsetX = 0
            offsetY = (canvas.height - drawHeight) / 2
          } else {
            drawWidth = canvas.height * imgRatio
            drawHeight = canvas.height
            offsetX = (canvas.width - drawWidth) / 2
            offsetY = 0
          }
          
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
        }
        
        frame = (frame + 1) % frameCount
        lastTime = time
      }
      animationFrameId = requestAnimationFrame(render)
    }
    
    const resizeCanvas = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()
    
    animationFrameId = requestAnimationFrame(render)
    
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#000'
      }}
    >
      {/* ── Image Sequence Background ── */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />

      {/* ── Cinematic Dark/Warm Overlay ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)',
        zIndex: 1,
      }} />

      {/* ── Hero Content ── */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        padding: '0 20px',
        maxWidth: '1000px',
        width: '100%',
      }}>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 400,
            color: '#FFFFFF',
            lineHeight: 1.2,
            marginBottom: '24px',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}
        >
          Crafting Unforgettable<br />
          <span style={{ fontStyle: 'italic', color: '#F3E5AB' }}>Wedding Experiences</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(14px, 2vw, 18px)',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '48px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Luxury event design and catering tailored to your story
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <button
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '16px 36px',
              background: '#D4AF37',
              color: '#FFFFFF',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              border: 'none',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: '0 10px 30px rgba(212,175,55,0.2)',
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
            Explore Our Services
          </button>

          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '16px 36px',
              background: 'transparent',
              color: '#FFFFFF',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              border: '1px solid rgba(255,255,255,0.6)',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.borderColor = '#FFFFFF'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'
            }}
          >
            Contact Us
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#FFFFFF',
          cursor: 'pointer',
          zIndex: 10,
          opacity: 0.6,
        }}
        onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={28} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  )
}
