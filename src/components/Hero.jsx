import { authorInfo } from '../data'

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
    <section id="home" className="min-h-screen flex items-center bg-[#020510] relative overflow-hidden">
      {/* Deep space background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020510] via-[#0a0a2e] to-[#020510]"></div>

      {/* Stars - Twinkling */}
      {[...Array(80)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute bg-white rounded-full"
          style={{
            width: `${1 + Math.random() * 3}px`,
            height: `${1 + Math.random() * 3}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8 + 0.2,
            animation: `twinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        ></div>
      ))}

      {/* Nebula - Large rotating clouds */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 animate-nebula">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#4B0082] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#1a0033] rounded-full blur-[100px]"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-15 animate-nebula-slow">
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#FF4500]/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#64D28D]/10 rounded-full blur-[80px]"></div>
      </div>

      {/* Aurora gradient */}
      <div className="absolute top-0 left-0 w-full h-64 opacity-20 animate-aurora">
        <div className="w-full h-full bg-gradient-to-r from-[#4B0082]/30 via-[#FF4500]/20 to-[#64D28D]/30 blur-3xl"></div>
      </div>
      <div className="absolute top-20 left-0 w-full h-48 opacity-15 animate-aurora-slow">
        <div className="w-full h-full bg-gradient-to-r from-[#64D28D]/20 via-[#4B0082]/30 to-[#FF4500]/20 blur-3xl"></div>
      </div>

      {/* Earth-like glow */}
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#64D28D] rounded-full opacity-10 blur-3xl animate-earth-glow"></div>

      {/* Floating light particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-[#FF4500] rounded-full animate-float-particle"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '0',
            animationDelay: `${Math.random() * 10}s`,
            opacity: Math.random() * 0.6 + 0.2
          }}
        ></div>
      ))}
      {[...Array(10)].map((_, i) => (
        <div
          key={`particle-green-${i}`}
          className="absolute w-1 h-1 bg-[#64D28D] rounded-full animate-float-particle-delayed"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '0',
            animationDelay: `${Math.random() * 8}s`,
            opacity: Math.random() * 0.5 + 0.2
          }}
        ></div>
      ))}

      {/* Dramatic shooting stars */}
<div className="absolute top-20 right-40 w-32 h-[2px] bg-gradient-to-l from-white via-white/80 to-transparent rounded-full animate-shooting-star shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
<div className="absolute top-1/3 left-20 w-24 h-[2px] bg-gradient-to-r from-white via-white/80 to-transparent rounded-full animate-shooting-star-delayed shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
<div className="absolute bottom-1/4 right-1/3 w-28 h-[2px] bg-gradient-to-l from-white via-white/70 to-transparent rounded-full animate-shooting-star shadow-[0_0_10px_rgba(255,255,255,0.4)]" style={{ animationDelay: '1.5s' }}></div>

      {/* Rotating ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#FF4500]/5 rounded-full animate-spin-very-slow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-[#64D28D]/5 rounded-full animate-spin-very-slow" style={{ animationDirection: 'reverse', animationDuration: '80s' }}></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'linear-gradient(90deg, #FF4500 1px, transparent 1px), linear-gradient(0deg, #FF4500 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Author Introduction */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 border border-[#FF4500]/30 text-[#FF4500] px-4 py-2 mb-8 text-xs font-rajdhani font-bold uppercase tracking-[0.2em] animate-pulse">
              <span className="w-1.5 h-1.5 bg-[#FF4500] rounded-full"></span>
              Screenwriter & Creator
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-orbitron font-bold text-[#E2E8F0] mb-6 leading-tight tracking-tight animate-fade-in-up drop-shadow-[0_0_40px_rgba(255,69,0,0.3)]">
              {authorInfo.name.toUpperCase()}
            </h1>

            <div className="w-24 h-[2px] bg-gradient-to-r from-[#FF4500] to-[#64D28D] mb-8 mx-auto md:mx-0 animate-fade-in-up-delayed"></div>

            <p className="text-xl text-[#64D28D] mb-6 font-rajdhani font-semibold tracking-wider animate-fade-in-up-delayed drop-shadow-[0_0_15px_rgba(100,210,141,0.3)]">
              Creator of <span className="text-[#FF4500] font-bold">2112, Serial Killer Explanation, Animating Principle</span>
            </p>

            <p className="text-[#E2E8F0]/60 leading-relaxed max-w-lg mx-auto md:mx-0 font-inter text-base border-l-2 border-[#FF4500] pl-6 py-2 animate-fade-in-up-delayed-2">
              "The album has the story. The novel has all actions within."
            </p>

            <div className="flex flex-wrap gap-3 my-8 justify-center md:justify-start animate-fade-in-up-delayed-2">
              {authorInfo.roles.map((role, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 backdrop-blur-sm text-[#E2E8F0] text-xs font-rajdhani font-bold uppercase tracking-wider border border-[#FF4500]/20 hover:border-[#FF4500]/50 hover:bg-[#FF4500]/10 hover-lift transition-all">
                  {role}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up-delayed-2">
              <a
                href="#about"
                onClick={(e) => handleScroll(e, '#about')}
                className="px-8 py-4 bg-[#FF4500] text-white font-rajdhani font-bold uppercase tracking-[0.15em] hover:bg-[#E63946] transition-all text-center hover-lift animate-pulse-ring relative overflow-hidden group"
              >
                <span className="relative z-10">About the Author</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
              <a
                href="#books"
                onClick={(e) => handleScroll(e, '#books')}
                className="px-8 py-4 border-2 border-[#FF4500]/50 text-[#FF4500] font-rajdhani font-bold uppercase tracking-[0.15em] hover:border-[#FF4500] hover:bg-[#FF4500]/5 transition-all text-center hover-lift"
              >
                Books
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative mx-auto max-w-sm animate-fade-in-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#FF4500]/10 rounded-full blur-3xl animate-earth-glow"></div>
              <div className="relative bg-[#0a0a2e]/50 backdrop-blur-sm shadow-2xl border border-[#FF4500]/20 rounded-full overflow-hidden hover-lift">
                <div className="aspect-square rounded-full overflow-hidden">
                  <img
                    src="/images/profile.png"
                    alt={authorInfo.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-[#0a0a2e]', 'to-[#020510]')
                      e.target.parentElement.innerHTML = `
                        <div class="text-center p-8">
                          <div class="text-7xl font-orbitron font-bold text-[#FF4500] mb-4 tracking-tighter drop-shadow-[0_0_30px_rgba(255,69,0,0.4)]">DG</div>
                          <p class="text-lg font-rajdhani font-bold text-[#E2E8F0] uppercase tracking-[0.2em]">${authorInfo.name}</p>
                        </div>
                      `
                    }}
                  />
                </div>
              </div>
            </div>
            {/* <div className="absolute -top-1 -right-0 bg-[#E63946] text-white w-14 h-14 flex items-center justify-center font-orbitron font-bold text-xs shadow-lg animate-earth-glow rounded-full">
              AUTHOR
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}