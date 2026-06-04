import { authorInfo } from '../data'

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#16161A] relative overflow-hidden">
      {/* Tunnel rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#FF4500]/5 rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#FF4500]/8 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 border border-[#FF4500]/30 text-[#FF4500] px-4 py-2 mb-4 text-xs font-rajdhani font-bold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 bg-[#FF4500] rounded-full animate-pulse"></span>
            The Author
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-[#E2E8F0] mb-4 tracking-tight">
            {authorInfo.name.toUpperCase()}
          </h2>
          <div className="w-20 h-[2px] bg-[#FF4500] mx-auto mt-6 animate-neon-glow"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Bio */}
          <div className="bg-[#09090A] p-8 border border-[#FF4500]/10 animate-fade-in-up hover-lift">
            <p className="text-[#E2E8F0]/70 text-lg leading-relaxed font-inter">
              {authorInfo.bio}
            </p>
          </div>

          {/* Story */}
          <div className="bg-[#09090A] p-8 border-l-2 border-[#FF4500] animate-fade-in-up-delayed hover-lift">
            <p className="text-[#E2E8F0]/60 leading-relaxed font-inter">
              {authorInfo.bio2}
            </p>
          </div>

          {/* Inspiration */}
          <div className="bg-[#09090A] p-8 text-center border border-[#E63946]/20 animate-fade-in-up-delayed-2 hover-lift">
            <p className="text-[#64D28D] text-xs font-rajdhani font-bold uppercase tracking-[0.2em] mb-3">Inspiration</p>
            <p className="text-[#E2E8F0]/70 font-inter italic text-lg leading-relaxed">
              "{authorInfo.inspiration}"
            </p>
          </div>

          {/* Roles */}
          <div className="flex flex-wrap gap-3 justify-center">
            {authorInfo.roles.map((role, i) => (
              <span key={i} className="px-5 py-2.5 bg-[#09090A] text-[#FF4500] text-xs font-rajdhani font-bold uppercase tracking-wider border border-[#FF4500]/20 hover:border-[#FF4500]/50 hover-lift transition-all">
                {role}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${authorInfo.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF4500] text-white font-rajdhani font-bold uppercase tracking-[0.15em] hover:bg-[#E63946] transition-all text-center hover-lift"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              {authorInfo.email}
            </a>
            <a
              href={`tel:${authorInfo.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#FF4500]/50 text-[#FF4500] font-rajdhani font-bold uppercase tracking-[0.15em] hover:border-[#FF4500] hover:bg-[#FF4500]/5 transition-all text-center hover-lift"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              {authorInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}