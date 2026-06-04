import { authorInfo, navLinks, book } from '../data'

export default function Footer() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="bg-[#09090A] text-[#E2E8F0]">
      {/* Launch Portal */}
      <div className="bg-[#0a0a0a] border-b border-[#FF4500]/10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-orbitron font-bold tracking-tight text-[#64D28D] mb-1">Ready to Publish?</h3>
              <p className="text-[#E2E8F0]/30 text-sm font-inter">Access the go-live portal for your book</p>
            </div>
            <a
              href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#FF4500] text-white font-rajdhani font-bold uppercase tracking-[0.1em] text-sm hover:bg-[#E63946] transition-all shadow-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Launch & Go-Live Portal
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-orbitron text-xl font-bold tracking-tight text-[#FF4500]">2112</span>
              <span className="text-[#E2E8F0]/20 text-sm font-rajdhani">|</span>
              <span className="text-[#E2E8F0]/50 text-sm font-rajdhani">{authorInfo.name}</span>
            </div>
            <p className="text-[#E2E8F0]/20 text-sm font-inter leading-relaxed">
              Screenwriter & Creator of "{book.title}"
            </p>
          </div>

          <div>
            <h4 className="font-rajdhani text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#64D28D]">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-[#E2E8F0]/20 hover:text-[#FF4500] transition-colors text-sm font-inter"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-rajdhani text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#64D28D]">Contact</h4>
            <a
              href={`mailto:${authorInfo.email}`}
              className="text-[#E2E8F0]/20 hover:text-[#FF4500] transition-colors text-sm font-inter block"
            >
              {authorInfo.email}
            </a>
            <a
              href={`tel:${authorInfo.phone}`}
              className="text-[#E2E8F0]/20 hover:text-[#FF4500] transition-colors text-sm font-inter block mt-2"
            >
              {authorInfo.phone}
            </a>
          </div>
        </div>

        <div className="border-t border-[#FF4500]/10 mt-12 pt-8 text-center">
          <p className="text-[#E2E8F0]/10 text-xs font-inter">
            &copy; {new Date().getFullYear()} {authorInfo.name} | 2112
          </p>
        </div>
      </div>
    </footer>
  )
}