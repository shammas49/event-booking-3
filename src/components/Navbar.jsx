import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // Styles change based on scroll
  const textColor = scrolled ? '#2C2C2C' : '#FFFFFF'
  const hoverColor = '#D4AF37'

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={scrolled ? {} : { background: 'rgba(255,255,255,0)' }}
        animate={scrolled ? { backgroundColor: 'rgba(255,255,255,0.95)' } : { backgroundColor: 'rgba(255,255,255,0)' }}
        transition={{ duration: 0.3 }}
      >
        {scrolled && (
          <div style={{ position: 'absolute', inset: 0, backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', zIndex: -1, borderBottom: '1px solid rgba(212,175,55,0.15)' }} />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24 transition-all duration-300">

            {/* Logo */}
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 no-underline">
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: scrolled ? '24px' : '28px',
                fontWeight: 600,
                color: scrolled ? '#D4AF37' : '#FFFFFF',
                lineHeight: 1,
                transition: 'all 0.3s'
              }}>MK</span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '12px',
                  fontWeight: 400,
                  color: textColor,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  lineHeight: 1.2
                }}>Caters &amp; Events</span>
                <span style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '9px',
                  color: scrolled ? '#AA8C2C' : 'rgba(255,255,255,0.7)',
                  letterSpacing: '0.05em',
                  fontStyle: 'italic'
                }}>Luxury Weddings</span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '13px',
                    fontWeight: 400,
                    color: textColor,
                    textDecoration: 'none',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={e => e.target.style.color = hoverColor}
                  onMouseLeave={e => e.target.style.color = textColor}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  padding: '10px 24px',
                  background: '#D4AF37',
                  color: '#FFFFFF',
                  borderRadius: '2px',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '12px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#AA8C2C'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#D4AF37'; }}
              >
                Book Now
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              id="navbar-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
              style={{ color: textColor, background: 'transparent', border: 'none', cursor: 'pointer' }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden flex flex-col"
            style={{ backgroundColor: '#FCFCFA' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 relative z-10">
              <div className="text-center mb-4">
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '40px', fontWeight: 600, color: '#D4AF37' }}>MK</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '12px', color: '#2C2C2C', letterSpacing: '0.15em', marginTop: '8px' }}>CATERS &amp; EVENTS</div>
              </div>

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '24px',
                    fontWeight: 400,
                    color: '#2C2C2C',
                    textDecoration: 'none',
                    letterSpacing: '0.05em',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.label}
                </motion.a>
              ))}

              <button
                onClick={() => {
                  setMenuOpen(false)
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
                }}
                style={{
                  marginTop: '20px',
                  padding: '12px 32px',
                  background: '#D4AF37',
                  color: '#FFFFFF',
                  borderRadius: '2px',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '13px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
