import { useState } from 'react'

const galleryImages = [
  {
    id: 1,
    src: '/images/g1.jpeg',
    caption: 'It’s officially on the shelves! Spot my book Serial Killer Explanation next to some absolute true crime classics. Beyond grateful for this journey. 🖤',
    alt: 'Concert energy'
  },
  {
    id: 2,
    src: '/images/g2.jpeg',
    caption: 'Seeing your work printed on a massive banner in the middle of a bookstore never gets old. Huge milestone moment for 2112 today! 🙏✨',
    alt: 'Fan moment'
  },
  {
    id: 3,
    src: '/images/g3.jpeg',
    caption: 'They said find the fans. They were already here, waiting.',
    alt: 'Community gathering'
  },
  {
    id: 4,
    src: '/images/g4.jpeg',
    caption: 'Legends never fade. They echo through every beat, every word, every soul they touched.',
    alt: 'Legacy moment'
  },
  {
    id: 5,
    src: '/images/g5.jpeg',
    caption: 'This community runs deep. Once you are in, you are family.',
    alt: 'Fan community'
  },
  {
    id: 6,
    src: '/images/g6.jpeg',
    caption: 'Behind the red star lies a story of control, rebellion, and survival. Get your copy of 2112 today!',
    alt: 'Live experience'
  }
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setSelectedImage(galleryImages[index])
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = (e) => {
    e.stopPropagation()
    const nextIndex = (currentIndex + 1) % galleryImages.length
    setCurrentIndex(nextIndex)
    setSelectedImage(galleryImages[nextIndex])
  }

  const prevImage = (e) => {
    e.stopPropagation()
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
    setCurrentIndex(prevIndex)
    setSelectedImage(galleryImages[prevIndex])
  }

  return (
    <section id="gallery" className="py-24 bg-[#09090A] relative overflow-hidden">
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
            Gallery
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-[#E2E8F0] mb-4 tracking-tight">
            THE COMMUNITY
          </h2>
          <div className="w-20 h-[2px] bg-[#FF4500] mx-auto mt-6 animate-neon-glow"></div>
          <p className="text-[#E2E8F0]/40 text-lg mt-4 max-w-2xl mx-auto font-inter">
            Finding the fans. They will engage. They always do.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, i) => (
            <div 
              key={image.id} 
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => openLightbox(i)}
            >
              <div className="bg-[#16161A] border border-[#FF4500]/10 hover:border-[#FF4500]/30 transition-all shadow-lg hover:shadow-xl hover-lift overflow-hidden">
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-[#16161A]', 'to-[#09090A]')
                      e.target.parentElement.innerHTML = `
                        <div class="text-center p-6">
                          <svg class="w-12 h-12 text-[#FF4500]/30 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <p class="text-xs text-[#E2E8F0]/30 font-rajdhani uppercase tracking-wider">Image ${image.id}</p>
                        </div>
                      `
                    }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090A]/90 via-[#09090A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>

                {/* Caption */}
                <div className="p-5">
                  <p className="text-[#E2E8F0]/70 text-sm font-inter leading-relaxed italic">
                    "{image.caption}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#09090A]/98 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 text-[#E2E8F0]/40 hover:text-[#FF4500] transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button */}
          <button 
            onClick={prevImage}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 text-[#E2E8F0]/30 hover:text-[#FF4500] transition-colors p-2"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button 
            onClick={nextImage}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 text-[#E2E8F0]/30 hover:text-[#FF4500] transition-colors p-2"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image container */}
          <div 
            className="max-w-5xl max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain border border-[#FF4500]/10 shadow-2xl"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.innerHTML = `
                  <div class="bg-[#16161A] border border-[#FF4500]/20 p-20 text-center">
                    <svg class="w-16 h-16 text-[#FF4500]/20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p class="text-[#E2E8F0]/30 font-rajdhani uppercase tracking-wider">Image not available</p>
                  </div>
                `
              }}
            />
            
            {/* Caption bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#09090A] via-[#09090A]/90 to-transparent p-8 pt-16">
              <p className="text-[#E2E8F0]/90 text-base font-inter text-center italic">
                "{selectedImage.caption}"
              </p>
              <p className="text-[#E2E8F0]/20 text-xs font-rajdhani text-center mt-3">
                {currentIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}