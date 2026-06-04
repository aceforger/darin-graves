import { book } from '../data'

export default function BookDetail() {
  return (
    <section id="book" className="py-24 bg-[#09090A] relative overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(90deg, #FF4500 1px, transparent 1px), linear-gradient(0deg, #FF4500 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 border border-[#FF4500]/30 text-[#FF4500] px-4 py-2 mb-4 text-xs font-rajdhani font-bold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 bg-[#FF4500] rounded-full animate-pulse"></span>
            Screenplay
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold text-[#E2E8F0] mb-4 tracking-tighter">
            {book.title}
          </h2>
          <p className="text-[#64D28D] text-lg font-rajdhani font-bold uppercase tracking-[0.2em]">The Future Awaits</p>
          <div className="w-20 h-[2px] bg-[#FF4500] mx-auto mt-6 animate-neon-glow"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          {/* Book Cover */}
<div className="relative mx-auto max-w-sm animate-fade-in-up">
  <div className="bg-[#16161A] shadow-2xl border border-[#FF4500]/20 overflow-hidden hover-lift">
    <div className="aspect-[3/4]">
      <img
        src="/images/2112.jpg"
        alt={book.title}
        className="w-full h-full object-contain p-1"
        onError={(e) => {
          e.target.style.display = 'none'
          e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-[#16161A]', 'to-[#09090A]')
          e.target.parentElement.innerHTML = `
            <div class="text-center p-12">
              <div class="text-8xl font-orbitron font-bold text-[#FF4500] mb-6 tracking-tighter animate-glitch-text drop-shadow-[0_0_30px_rgba(255,69,0,0.4)]">2112</div>
              <p class="text-xl font-rajdhani font-bold text-[#E2E8F0] uppercase tracking-[0.3em]">Screenplay</p>
              <p class="text-[#E2E8F0]/30 text-sm font-inter mt-4">Cover coming soon</p>
            </div>
          `
        }}
      />
    </div>
  </div>
</div>

          {/* Book Details */}
          <div className="space-y-6 animate-fade-in-up-delayed">
            <div className="flex flex-wrap gap-3">
              {book.themes.map((theme, i) => (
                <span key={i} className="px-3 py-1.5 bg-[#16161A] text-[#64D28D] text-xs font-rajdhani font-bold uppercase tracking-wider border border-[#64D28D]/20 hover-lift">
                  {theme}
                </span>
              ))}
            </div>

            <div className="bg-[#16161A] p-8 border-l-2 border-[#FF4500] hover-lift">
              <p className="text-[#E2E8F0]/70 leading-relaxed text-lg font-inter">
                {book.description}
              </p>
            </div>

            <div className="bg-[#16161A] p-8 text-center border border-[#E63946]/20 hover-lift">
              <p className="text-[#64D28D] text-xs font-rajdhani font-bold uppercase tracking-[0.2em] mb-3">Mentor</p>
              <p className="text-[#E2E8F0]/60 font-inter italic leading-relaxed">
                "{book.inspiration}"
              </p>
            </div>

            <a
              href="#contact"
              className="w-full inline-block text-center px-8 py-4 bg-[#FF4500] text-white font-rajdhani font-bold uppercase tracking-[0.15em] hover:bg-[#E63946] transition-all hover-lift animate-pulse-ring"
            >
              Order This Screenplay
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}