import { Phone, MessageCircle, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function handleNavClick(e, href) {
  e.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer
      style={{
        background: '#1A1A1A',
        color: '#FFFFFF',
        padding: '80px 20px 40px',
        position: 'relative',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '60px',
      }}>
        
        {/* Brand Column */}
        <div>
          <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '32px',
              fontWeight: 600,
              color: '#D4AF37',
            }}>MK</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '12px',
                color: '#FFFFFF',
                letterSpacing: '0.15em',
                lineHeight: 1.2
              }}>CATERS & EVENTS</span>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '9px',
                color: '#AA8C2C',
                letterSpacing: '0.05em',
                fontStyle: 'italic'
              }}>Luxury Weddings</span>
            </div>
          </div>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '14px',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.8,
            marginBottom: '32px',
            fontWeight: 300,
          }}>
            Crafting unforgettable luxury weddings and bespoke events tailored exclusively to your story. Elegance, precision, and passion in every detail.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '36px', height: '36px',
                  borderRadius: '50%',
                  border: '1px solid rgba(212,175,55,0.3)',
                  color: '#D4AF37',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#D4AF37'
                  e.currentTarget.style.color = '#1A1A1A'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = '#D4AF37'
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '18px',
            fontWeight: 500,
            color: '#FFFFFF',
            marginBottom: '24px',
          }}>
            Quick Links
          </h3>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {quickLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                  transition: 'color 0.3s ease',
                  display: 'inline-block',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact Info */}
        <div>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '18px',
            fontWeight: 500,
            color: '#FFFFFF',
            marginBottom: '24px',
          }}>
            Contact Us
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <MapPin size={20} color="#D4AF37" style={{ flexShrink: 0 }} />
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontWeight: 300,
              }}>
                123 Luxury Avenue<br />Kottakkal, Kerala, India
              </span>
            </div>
            <a href="tel:+919876543210" style={{
              display: 'flex', gap: '16px', alignItems: 'center',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none',
              transition: 'color 0.3s', fontWeight: 300,
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
              <Phone size={20} color="#D4AF37" />
              +91 98765 43210
            </a>
            <a href="mailto:hello@mkcaters.com" style={{
              display: 'flex', gap: '16px', alignItems: 'center',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none',
              transition: 'color 0.3s', fontWeight: 300,
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
              <MessageCircle size={20} color="#D4AF37" />
              hello@mkcaters.com
            </a>
          </div>
        </div>
      </div>

      <div style={{
        marginTop: '80px',
        paddingTop: '32px',
        borderTop: '1px solid rgba(212,175,55,0.1)',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '13px',
          color: 'rgba(255,255,255,0.4)',
          fontWeight: 300,
          letterSpacing: '0.05em',
        }}>
          © {new Date().getFullYear()} MK Caters & Events. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
