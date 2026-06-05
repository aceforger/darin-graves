import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { navLinks } from '../data'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      if (isHomePage) {
        const sections = navLinks.map(link => link.href.replace('#', ''))
        const scrollPosition = window.scrollY + 100
        for (const section of sections) {
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
              STEVEN BENTLEY
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
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
            ))}
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

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-[#16161A] border border-[#FF4500]/20 rounded-xl shadow-xl mt-2 p-4">
            {navLinks.map((link) => (
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
            ))}
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