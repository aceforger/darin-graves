export default function Video() {
  return (
    <section id="video" className="py-24 bg-[#16161A] relative overflow-hidden">
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
            Video
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-[#E2E8F0] mb-4 tracking-tight">
            WATCH
          </h2>
          <div className="w-20 h-[2px] bg-[#FF4500] mx-auto mt-6 animate-neon-glow"></div>
          <p className="text-[#E2E8F0]/40 text-lg mt-4 max-w-2xl mx-auto font-inter">
            Rush2112 to become a movie!!
          </p>
        </div>

        {/* Video Container - Centered with max width */}
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <div className="bg-[#09090A] border border-[#FF4500]/20 rounded-lg overflow-hidden shadow-2xl shadow-[#FF4500]/5">
            <video
              className="w-full h-auto max-h-[400px] object-contain"
              controls
              controlsList="nodownload"
              poster="/images/2112.jpg"
              preload="metadata"
            >
              <source
                src="https://res.cloudinary.com/dlnjwoids/video/upload/v1780945056/Rush2112_to_become_a_movie_author_fjsdwf.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Caption */}
          <div className="mt-6 text-center">
            <p className="text-[#E2E8F0]/60 text-sm font-inter">
              Watch the exciting announcement about the Rush2112 movie adaptation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}