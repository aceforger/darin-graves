import { useState } from 'react'
import { book } from '../data'

export default function Books() {
  const [selectedBook, setSelectedBook] = useState(null)

  return (
    <section id="books" className="py-24 bg-[#09090A] relative overflow-hidden">
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
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 border border-[#FF4500]/30 text-[#FF4500] px-4 py-2 mb-4 text-xs font-rajdhani font-bold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 bg-[#FF4500] rounded-full animate-pulse"></span>
            Books & Screenplays
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-[#E2E8F0] mb-4 tracking-tight">
            ALL WORKS
          </h2>
          <div className="w-20 h-[2px] bg-[#FF4500] mx-auto mt-6 animate-neon-glow"></div>
          <p className="text-[#E2E8F0]/40 text-lg mt-4 max-w-lg mx-auto font-inter">
            Explore the complete collection of works
          </p>
        </div>

        {/* Books Grid - 4 in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
                    {bookItem.themes && bookItem.themes.length > 2 && (
                      <span className="px-1.5 py-0.5 bg-[#09090A] text-[#E2E8F0]/30 text-[7px] font-rajdhani font-bold uppercase tracking-wider border border-[#E2E8F0]/10">
                        +{bookItem.themes.length - 2}
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedBook(bookItem)
                    }}
                    className="w-full py-2 border border-[#FF4500]/30 text-[#FF4500] font-rajdhani font-bold text-[10px] uppercase tracking-[0.15em] hover:bg-[#FF4500]/10 transition-all group-hover:border-[#FF4500]/50"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Book Detail Modal */}
      {selectedBook && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#09090A]/90 backdrop-blur-sm"
          onClick={() => setSelectedBook(null)}
        >
          <div 
            className="bg-[#16161A] max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#FF4500]/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#FF4500]/10 sticky top-0 bg-[#16161A] z-10">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 font-rajdhani font-bold text-[10px] uppercase tracking-wider ${
                  selectedBook.status === 'published' 
                    ? 'bg-[#64D28D] text-[#09090A]' 
                    : 'bg-[#FF4500] text-white'
                }`}>
                  {selectedBook.statusText}
                </span>
                <span className="text-[#E2E8F0]/30 text-sm font-rajdhani">|</span>
                <span className="text-[#E2E8F0]/50 text-xs font-rajdhani uppercase tracking-wider">{selectedBook.subtitle || 'Book'}</span>
              </div>
              <button 
                onClick={() => setSelectedBook(null)}
                className="text-[#E2E8F0]/40 hover:text-[#FF4500] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-10">
              <div className="grid md:grid-cols-5 gap-10">
               
                <div className="md:col-span-2">
                  <div className="bg-[#09090A] border border-[#FF4500]/10 flex items-center justify-center p-4">
                    <img
                      src={selectedBook.coverImage}
                      alt={selectedBook.title}
                      className="w-full h-auto max-h-[400px] object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.classList.add('min-h-[300px]')
                        e.target.parentElement.innerHTML = `
                          <div class="text-center p-8">
                            <div class="text-6xl font-orbitron font-bold text-[#FF4500] mb-3 tracking-tighter">${selectedBook.title.split(' ').map(w => w[0]).join('')}</div>
                            <p class="text-sm font-rajdhani font-bold text-[#E2E8F0] uppercase tracking-wider">${selectedBook.title}</p>
                          </div>
                        `
                      }}
                    />
                  </div>
                </div>

                {/* Book Details */}
                <div className="md:col-span-3 flex flex-col justify-center space-y-6">
                  <div>
                    {selectedBook.subtitle && (
                      <p className="text-[#64D28D] text-xs font-rajdhani font-bold uppercase tracking-[0.2em] mb-2">{selectedBook.subtitle}</p>
                    )}
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-[#E2E8F0] mb-2 tracking-tight">
                      {selectedBook.title}
                    </h2>
                    <div className="w-16 h-[2px] bg-[#FF4500] animate-neon-glow"></div>
                  </div>

                  {selectedBook.tagline && (
                    <p className="text-[#FF4500] text-sm font-rajdhani font-bold uppercase tracking-[0.1em] italic">
                      "{selectedBook.tagline}"
                    </p>
                  )}

                  <p className="text-[#E2E8F0]/70 leading-relaxed font-inter">
                    {selectedBook.description}
                  </p>

                  {selectedBook.description2 && (
                    <p className="text-[#E2E8F0]/50 leading-relaxed font-inter text-sm">
                      {selectedBook.description2}
                    </p>
                  )}

                  {selectedBook.description3 && (
                    <p className="text-[#E2E8F0]/40 leading-relaxed font-inter text-sm italic border-l-2 border-[#FF4500]/30 pl-4">
                      {selectedBook.description3}
                    </p>
                  )}

                  {/* Book Details */}
                  {selectedBook.bookDetails && (
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(selectedBook.bookDetails).map(([key, value]) => (
                        <div key={key} className="p-2 bg-[#09090A] border border-[#FF4500]/5">
                          <p className="text-[#E2E8F0]/30 text-[9px] font-rajdhani uppercase tracking-wider">{key}</p>
                          <p className="text-[#E2E8F0]/60 text-xs font-inter">{value}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Themes */}
                  <div className="flex flex-wrap gap-2">
                    {selectedBook.themes.map((theme, i) => (
                      <span key={i} className="px-3 py-1 bg-[#09090A] text-[#64D28D] text-[10px] font-rajdhani font-bold uppercase tracking-wider border border-[#64D28D]/20">
                        {theme}
                      </span>
                    ))}
                  </div>

                  {/* Purchase Buttons - Only in Modal */}
                  <div className="pt-4 space-y-3">
                    {selectedBook.status === 'published' && selectedBook.purchaseLinks ? (
                      <>
                        <p className="text-[#64D28D] text-xs font-rajdhani font-bold uppercase tracking-[0.15em]">Available at:</p>
                        <div className="flex flex-wrap gap-3">
                          {selectedBook.purchaseLinks.map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-[#64D28D] text-[#09090A] font-rajdhani font-bold uppercase tracking-[0.1em] text-sm hover:bg-[#4ab872] transition-all hover-lift"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/>
                              </svg>
                              {link.name}
                            </a>
                          ))}
                        </div>
                      </>
                    ) : (
                      <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF4500]/5 border-2 border-[#FF4500]/20 text-[#FF4500]/60 font-rajdhani font-bold uppercase tracking-[0.1em] text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Coming Soon — Stay Tuned
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}