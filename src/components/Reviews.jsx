// Reviews.jsx
import { useState } from 'react'
import { reviews, book } from '../data'

export default function Reviews() {
  const [selectedReview, setSelectedReview] = useState(null)

  const getBookById = (bookId) => {
    return book.find(b => b.id === bookId)
  }

  return (
    <section id="reviews" className="py-24 bg-[#09090A] relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'linear-gradient(90deg, #FF4500 1px, transparent 1px), linear-gradient(0deg, #FF4500 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}>
      </div>

      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF4500]/3 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 border border-[#FF4500]/30 text-[#FF4500] px-4 py-2 mb-4 text-xs font-rajdhani font-bold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 bg-[#FF4500] rounded-full animate-pulse"></span>
            Press & Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-[#E2E8F0] mb-4 tracking-tight">
            CRITICAL ACCLAIM
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-[#FF4500] to-[#8B0000] mx-auto mt-6 shadow-[0_0_10px_rgba(255,69,0,0.3)]"></div>
          <p className="text-[#E2E8F0]/40 text-sm font-inter mt-6 max-w-lg mx-auto">
            What critics and readers are saying about Darin Graves' works
          </p>
        </div>

        {/* Single Review - Centered */}
        {reviews.length > 0 ? (
          <div className="flex justify-center">
            {reviews.map((review, i) => {
              const bookData = getBookById(review.bookId)
              return (
                <div
                  key={review.id}
                  className="group cursor-pointer animate-fade-in-up max-w-2xl w-full"
                  style={{ animationDelay: `${i * 0.15}s` }}
                  onClick={() => setSelectedReview(review)}
                >
                  <div className="bg-[#16161A] border border-[#FF4500]/10 hover:border-[#FF4500]/30 transition-all shadow-lg hover:shadow-xl hover-lift p-8">
                    {/* Book Info & Stars Row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        {bookData && (
                          <div className="w-16 h-20 bg-[#09090A] border border-[#FF4500]/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                            <img
                              src={bookData.coverImage}
                              alt={bookData.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = 'none'
                                e.target.parentElement.innerHTML = `<span class="text-[#FF4500] text-lg font-orbitron font-bold">${bookData.title.split(' ').map(w => w[0]).join('')}</span>`
                              }}
                            />
                          </div>
                        )}
                        <div>
                          <h3 className="text-xl font-orbitron font-bold text-[#E2E8F0] group-hover:text-[#FF4500] transition-colors">
                            {review.bookTitle}
                          </h3>
                          <p className="text-[#E2E8F0]/40 text-xs font-rajdhani uppercase tracking-wider mt-1">
                            by Darin Graves
                          </p>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${i < review.rating ? 'text-[#FF4500]' : 'text-[#E2E8F0]/10'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    {/* Book Details */}
                    {bookData?.bookDetails && (
                      <div className="flex flex-wrap gap-4 mb-6 p-4 bg-[#09090A] border border-[#FF4500]/5 justify-center">
                        {Object.entries(bookData.bookDetails).map(([key, value]) => (
                          <div key={key} className="text-center px-3">
                            <p className="text-[#E2E8F0]/30 text-[10px] font-rajdhani uppercase tracking-wider">{key}</p>
                            <p className="text-[#E2E8F0]/70 text-xs font-inter">{value}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Review Excerpt */}
                    <div className="mb-6">
                      <p className="text-[#E2E8F0]/60 text-base font-inter leading-relaxed italic text-center border-l-2 border-[#FF4500]/30 pl-6 py-2 bg-gradient-to-r from-[#FF4500]/3 to-transparent">
                        "{review.excerpt}"
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6 p-4 bg-[#09090A]">
                      <p className="text-[#64D28D] text-[10px] font-rajdhani font-bold uppercase tracking-[0.2em] mb-3 text-center">Key Takeaways</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {review.highlights.map((highlight, i) => (
                          <span key={i} className="px-3 py-1.5 bg-[#16161A] text-[#E2E8F0]/50 text-xs font-inter border border-[#FF4500]/5">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Reviewer Info & Read More */}
                    <div className="flex items-center justify-between border-t border-[#FF4500]/10 pt-4">
                      <div>
                        <p className="text-[#E2E8F0] text-sm font-rajdhani font-bold uppercase tracking-wider">
                          {review.reviewer}
                        </p>
                        <p className="text-[#64D28D] text-[11px] font-rajdhani font-bold uppercase tracking-[0.15em]">
                          {review.source}
                        </p>
                      </div>
                      <button className="px-6 py-2.5 border border-[#FF4500]/30 text-[#FF4500] font-rajdhani font-bold text-xs uppercase tracking-[0.15em] hover:bg-[#FF4500]/10 transition-all group-hover:border-[#FF4500]/50">
                        Read Full Review
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-[#E2E8F0]/30 font-inter">More reviews coming soon.</p>
          </div>
        )}
      </div>

      {/* Full Review Modal */}
      {selectedReview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#09090A]/95 backdrop-blur-sm"
          onClick={() => setSelectedReview(null)}
        >
          <div
            className="bg-[#16161A] max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-[#FF4500]/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#FF4500]/10 sticky top-0 bg-[#16161A] z-10">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < selectedReview.rating ? 'text-[#FF4500]' : 'text-[#E2E8F0]/10'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[#E2E8F0]/30 text-sm font-rajdhani">|</span>
                <span className="text-[#64D28D] text-xs font-rajdhani font-bold uppercase tracking-wider">{selectedReview.source}</span>
              </div>
              <button
                onClick={() => setSelectedReview(null)}
                className="text-[#E2E8F0]/40 hover:text-[#FF4500] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-[#E2E8F0] mb-2 tracking-tight">
                {selectedReview.bookTitle}
              </h2>
              <p className="text-[#E2E8F0]/50 text-sm font-inter mb-6">
                Reviewed by <span className="text-[#FF4500] font-semibold">{selectedReview.reviewer}</span> • {selectedReview.source}
              </p>

              {/* Book Details */}
              {getBookById(selectedReview.bookId)?.bookDetails && (
                <div className="flex flex-wrap gap-3 mb-8 p-4 bg-[#09090A] border border-[#FF4500]/5 justify-center">
                  {Object.entries(getBookById(selectedReview.bookId).bookDetails).map(([key, value]) => (
                    <div key={key} className="text-center px-4">
                      <p className="text-[#E2E8F0]/30 text-[9px] font-rajdhani uppercase tracking-wider">{key}</p>
                      <p className="text-[#E2E8F0]/70 text-xs font-inter">{value}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Highlights */}
              <div className="mb-8 p-4 bg-[#09090A] border-l-2 border-[#FF4500]/30">
                <p className="text-[#64D28D] text-[10px] font-rajdhani font-bold uppercase tracking-[0.2em] mb-3">Review Highlights</p>
                <ul className="space-y-2">
                  {selectedReview.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#E2E8F0]/60 text-sm font-inter">
                      <span className="text-[#FF4500] mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Review Text */}
              <div className="space-y-4">
                {selectedReview.fullReview.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-[#E2E8F0]/70 leading-relaxed font-inter">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Purchase CTA */}
              {getBookById(selectedReview.bookId)?.status === 'published' && getBookById(selectedReview.bookId)?.purchaseLinks && (
                <div className="mt-10 p-6 bg-[#09090A] border border-[#FF4500]/10 text-center">
                  <p className="text-[#64D28D] text-xs font-rajdhani font-bold uppercase tracking-[0.15em] mb-4">Get Your Copy</p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {getBookById(selectedReview.bookId).purchaseLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF4500] text-white font-rajdhani font-bold uppercase tracking-[0.1em] text-sm hover:bg-[#cc3700] transition-all hover-lift"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                        </svg>
                        Buy on {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}