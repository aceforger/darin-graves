import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { navLinks } from '../data'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMediaOpen, setIsMediaOpen] = useState(false)
  const mediaRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mediaRef.current && !mediaRef.current.contains(event.target)) {
        setIsMediaOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      if (isHomePage) {
        const allSections = ['home', 'about', 'books', 'gallery', 'video', 'reviews', 'contact']
        const scrollPosition = window.scrollY + 100
        for (const section of allSections) {
          const element = document.getElementById(section)
          if (element) {
            const { offsetTop, offsetHeight } = element
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    setIsMediaOpen(false)
    
    if (isHomePage) {
      const targetId = href.replace('#', '')
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      navigate('/' + href)
    }
  }

  const handleStoreClick = (e) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    navigate('/store')
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const isMediaActive = activeSection === 'gallery' || activeSection === 'video'

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#09090A]/95 backdrop-blur-xl border-b border-[#FF4500]/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-3 group">
            <span className="font-orbitron text-2xl font-bold text-[#FF4500] tracking-[0.1em] group-hover:animate-glitch-text">
              DARIN GRAVES
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => {
              // Media dropdown
              if (link.children) {
                return (
                  <div key={link.name} className="relative" ref={mediaRef}>
                    <button
                      onClick={() => setIsMediaOpen(!isMediaOpen)}
                      className={`px-4 py-2 text-xs font-rajdhani font-semibold uppercase tracking-[0.15em] transition-all flex items-center gap-1 ${
                        isMediaActive && isHomePage
                          ? 'text-[#FF4500]'
                          : 'text-[#E2E8F0]/50 hover:text-[#E2E8F0]'
                      }`}
                    >
                      {link.name}
                      <svg 
                        className={`w-3 h-3 transition-transform duration-300 ${isMediaOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      {isMediaActive && isHomePage && (
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-full bg-[#FF4500] animate-neon-glow"></div>
                      )}
                    </button>

                    <div className={`absolute top-full left-0 mt-2 w-40 bg-[#16161A] border border-[#FF4500]/20 rounded-lg shadow-xl overflow-hidden transition-all duration-300 ${
                      isMediaOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}>
                      {link.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          onClick={(e) => handleNavClick(e, child.href)}
                          className={`block px-4 py-2.5 text-xs font-rajdhani font-semibold uppercase tracking-[0.15em] transition-all ${
                            activeSection === child.href.replace('#', '') && isHomePage
                              ? 'text-[#FF4500] bg-[#FF4500]/10'
                              : 'text-[#E2E8F0]/50 hover:text-[#E2E8F0] hover:bg-[#FF4500]/5'
                          }`}
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )
              }
              
              // Regular links
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2 text-xs font-rajdhani font-semibold uppercase tracking-[0.15em] transition-all ${
                    activeSection === link.href.replace('#', '') && isHomePage
                      ? 'text-[#FF4500]'
                      : 'text-[#E2E8F0]/50 hover:text-[#E2E8F0]'
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {link.name}
                  {activeSection === link.href.replace('#', '') && isHomePage && (
                    <div className="h-[2px] bg-[#FF4500] mt-0.5 animate-neon-glow"></div>
                  )}
                </a>
              )
            })}

            <a
              href="/store"
              onClick={handleStoreClick}
              className="ml-4 px-6 py-2.5 bg-[#FF4500] text-white font-rajdhani font-bold text-xs uppercase tracking-[0.15em] hover:bg-[#E63946] transition-all hover-lift"
            >
              Get the Book
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#E2E8F0] hover:text-[#FF4500] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-[#16161A] border border-[#FF4500]/20 rounded-xl shadow-xl mt-2 p-4">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.name}>
                    <p className="px-4 py-2 text-xs font-rajdhani font-semibold uppercase tracking-[0.2em] text-[#FF4500]/40">{link.name}</p>
                    {link.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.href}
                        onClick={(e) => handleNavClick(e, child.href)}
                        className={`block px-4 py-3 font-rajdhani font-semibold uppercase tracking-[0.15em] transition-colors ${
                          activeSection === child.href.replace('#', '') && isHomePage
                            ? 'text-[#FF4500] bg-[#FF4500]/10 rounded-lg'
                            : 'text-[#E2E8F0]/50 hover:text-[#E2E8F0]'
                        }`}
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                )
              }
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-3 font-rajdhani font-semibold uppercase tracking-[0.15em] transition-colors ${
                    activeSection === link.href.replace('#', '') && isHomePage
                      ? 'text-[#FF4500] bg-[#FF4500]/10 rounded-lg'
                      : 'text-[#E2E8F0]/50 hover:text-[#E2E8F0]'
                  }`}
                >
                  {link.name}
                </a>
              )
            })}

            <a
              href="/store"
              onClick={handleStoreClick}
              className="block mt-3 px-4 py-3 bg-[#FF4500] text-white text-center font-rajdhani font-bold uppercase tracking-[0.15em] hover:bg-[#E63946] transition-colors rounded-lg"
            >
              Get the Book
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}