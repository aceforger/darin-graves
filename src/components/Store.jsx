import { useNavigate } from 'react-router-dom'
import { book } from '../data'

export default function Store() {
  const navigate = useNavigate()

  return (
    <section id="store" className="min-h-screen py-10 bg-[#09090A] relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(90deg, #FF4500 1px, transparent 1px), linear-gradient(0deg, #FF4500 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}>
      </div>

      {/* Scan line */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF4500]/3 via-transparent to-[#FF4500]/3 h-1 animate-tunnel-scan"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-[#E2E8F0]/50 hover:text-[#FF4500] transition-colors mb-2 group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-xs font-rajdhani font-bold uppercase tracking-[0.2em]">Back to Home</span>
        </button>

        {/* Store Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 border border-[#FF4500]/30 text-[#FF4500] px-4 py-2 mb-2 text-xs font-rajdhani font-bold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 bg-[#FF4500] rounded-full animate-pulse"></span>
            Book Store
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-[#E2E8F0] mb-2 tracking-tight">
            GET YOUR COPY
          </h2>
          <div className="w-20 h-[2px] bg-[#FF4500] mx-auto mt-6 animate-neon-glow"></div>
          <p className="text-[#E2E8F0]/40 text-lg mt-4 max-w-lg mx-auto font-inter">
            Purchase books directly from these links
          </p>
        </div>

        {/* Books Grid - 4 in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {book.map((bookItem, i) => (
            <div 
              key={bookItem.id} 
              className="group animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="bg-[#16161A] border border-[#FF4500]/10 hover:border-[#FF4500]/30 transition-all shadow-lg hover:shadow-xl hover-lift h-full flex flex-col">
                {/* Book Cover */}
                <div className="bg-gradient-to-br from-[#16161A] to-[#09090A] overflow-hidden relative flex items-center justify-center p-4">
                  {/* Status Badge */}
                  <div className={`absolute top-2 left-2 z-10 px-2 py-0.5 font-rajdhani font-bold text-[8px] uppercase tracking-wider ${
                    bookItem.status === 'published' 
                      ? 'bg-[#64D28D] text-[#09090A]' 
                      : 'bg-[#FF4500] text-white'
                  }`}>
                    {bookItem.statusText}
                  </div>

                  <img
                    src={bookItem.coverImage}
                    alt={bookItem.title}
                    className="w-36 h-48 object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.classList.add('min-h-[200px]')
                      e.target.parentElement.innerHTML = `
                        <div class="text-center p-4">
                          <div class="text-4xl font-orbitron font-bold text-[#FF4500] mb-2 tracking-tighter">${bookItem.title.split(' ').map(w => w[0]).join('')}</div>
                          <p class="text-xs font-rajdhani font-bold text-[#E2E8F0] uppercase tracking-wider">${bookItem.title}</p>
                        </div>
                      `
                    }}
                  />
                </div>

                {/* Book Info */}
                <div className="p-4 flex-1 flex flex-col">
                  {bookItem.subtitle && (
                    <p className="text-[#64D28D] text-[9px] font-rajdhani font-bold uppercase tracking-[0.15em] mb-1.5">{bookItem.subtitle}</p>
                  )}
                  <h3 className="text-sm font-orbitron font-bold text-[#E2E8F0] mb-1.5 tracking-tight group-hover:text-[#FF4500] transition-colors line-clamp-1">
                    {bookItem.title}
                  </h3>
                  <p className="text-[#E2E8F0]/40 text-[10px] font-inter leading-relaxed mb-3 flex-1 line-clamp-2">
                    {bookItem.description}
                  </p>

                  {/* Themes */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {bookItem.themes && bookItem.themes.slice(0, 2).map((theme, i) => (
                      <span key={i} className="px-1.5 py-0.5 bg-[#09090A] text-[#64D28D] text-[7px] font-rajdhani font-bold uppercase tracking-wider border border-[#64D28D]/10">
                        {theme}
                      </span>
                    ))}
                  </div>

                  {/* ISBN */}
                  {bookItem.isbn && (
                    <div className="mb-3 p-2 bg-[#09090A] border border-[#FF4500]/10">
                      <p className="text-[#E2E8F0]/30 text-[8px] font-rajdhani uppercase tracking-wider">ISBN</p>
                      <p className="text-[#E2E8F0]/60 text-[10px] font-mono">{bookItem.isbn}</p>
                    </div>
                  )}

                  {/* Purchase Links - 2 buttons per line */}
                  {bookItem.status === 'published' && bookItem.purchaseLinks ? (
                    <div className="mt-auto">
                      <div className="grid grid-cols-2 gap-1.5">
                        {bookItem.purchaseLinks.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2 bg-[#64D28D] text-[#09090A] font-rajdhani font-bold text-[9px] uppercase tracking-[0.05em] hover:bg-[#4ab872] transition-all text-center hover-lift truncate"
                            title={link.name}
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="block w-full py-2 bg-[#FF4500]/5 border border-[#FF4500]/20 text-[#FF4500]/60 font-rajdhani font-bold text-[9px] uppercase tracking-[0.1em] text-center">
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}