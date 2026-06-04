import { authorInfo, book } from '../data'

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center bg-[#09090A] relative overflow-hidden">
      {/* Tunnel effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-[800px] h-[800px] border border-[#FF4500]/30 rounded-full"></div>
        <div className="absolute w-[600px] h-[600px] border border-[#FF4500]/20 rounded-full"></div>
        <div className="absolute w-[400px] h-[400px] border border-[#FF4500]/15 rounded-full"></div>
        <div className="absolute w-[200px] h-[200px] border border-[#FF4500]/10 rounded-full"></div>
      </div>

      {/* Scan line */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF4500]/5 via-transparent to-[#FF4500]/5 h-1.5 animate-tunnel-scan"></div>

      {/* Neon glows */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#FF4500] rounded-full opacity-5 blur-3xl animate-neon-glow"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-[#E63946] rounded-full opacity-5 blur-3xl"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(90deg, #FF4500 1px, transparent 1px), linear-gradient(0deg, #FF4500 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Author Introduction */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 border border-[#FF4500]/30 text-[#FF4500] px-4 py-2 mb-8 text-xs font-rajdhani font-bold uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 bg-[#FF4500] rounded-full animate-pulse"></span>
              Screenwriter & Creator
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-orbitron font-bold text-[#E2E8F0] mb-6 leading-tight tracking-tight animate-fade-in-up">
              {authorInfo.name.toUpperCase()}
            </h1>

            <div className="w-24 h-[2px] bg-[#FF4500] mb-8 mx-auto md:mx-0 animate-fade-in-up-delayed animate-neon-glow"></div>

            <p className="text-xl text-[#64D28D] mb-6 font-rajdhani font-semibold tracking-wider animate-fade-in-up-delayed">
              Creator of <span className="text-[#FF4500] font-bold">2112</span>
            </p>

            <p className="text-[#E2E8F0]/60 leading-relaxed max-w-lg mx-auto md:mx-0 font-inter text-base border-l-2 border-[#FF4500] pl-6 py-2 animate-fade-in-up-delayed-2">
              {book.tagline}
            </p>

            <div className="flex flex-wrap gap-3 my-8 justify-center md:justify-start animate-fade-in-up-delayed-2">
              {authorInfo.roles.map((role, i) => (
                <span key={i} className="px-4 py-2 bg-[#16161A] text-[#E2E8F0] text-xs font-rajdhani font-bold uppercase tracking-wider border border-[#FF4500]/20 hover:border-[#FF4500]/50 hover-lift transition-all">
                  {role}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up-delayed-2">
              <a
                href="#about"
                onClick={(e) => handleScroll(e, '#about')}
                className="px-8 py-4 bg-[#FF4500] text-white font-rajdhani font-bold uppercase tracking-[0.15em] hover:bg-[#E63946] transition-all text-center hover-lift animate-pulse-ring"
              >
                About the Author
              </a>
              <a
                href="#book"
                onClick={(e) => handleScroll(e, '#book')}
                className="px-8 py-4 border-2 border-[#FF4500]/50 text-[#FF4500] font-rajdhani font-bold uppercase tracking-[0.15em] hover:border-[#FF4500] hover:bg-[#FF4500]/5 transition-all text-center hover-lift"
              >
                2112
              </a>
            </div>
          </div>

          {/* Profile Image */}
        <div className="relative mx-auto max-w-sm animate-fade-in-up">
        <div className="relative">
            <div className="absolute -inset-3 bg-[#FF4500]/10 rounded-2xl blur-2xl animate-neon-glow"></div>
            <div className="relative bg-[#16161A] shadow-2xl border border-[#FF4500]/20 overflow-hidden">
            <div className="aspect-square">
                <img
                src="/images/profile.png"
                alt={authorInfo.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-[#16161A]', 'to-[#09090A]')
                    e.target.parentElement.innerHTML = `
                    <div class="text-center p-8">
                        <div class="text-8xl font-orbitron font-bold text-[#FF4500] mb-6 tracking-tighter animate-glitch-text drop-shadow-[0_0_30px_rgba(255,69,0,0.4)]">2112</div>
                        <p class="text-xl font-rajdhani font-bold text-[#E2E8F0] uppercase tracking-[0.3em]">${authorInfo.name}</p>
                        <p class="text-[#64D28D] text-sm font-rajdhani font-semibold uppercase tracking-widest mt-3">Screenplay</p>
                    </div>
                    `
                }}
                />
            </div>
            </div>
        </div>
        <div className="absolute -top-4 -right-4 bg-[#E63946] text-white w-14 h-14 flex items-center justify-center font-orbitron font-bold text-xs shadow-lg animate-neon-glow"
            style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
            AUTHOR
        </div>
        </div>
        </div>
      </div>
    </section>
  )
}