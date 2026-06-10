import { contactInfo, authorInfo, book } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#16161A] relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 border border-[#FF4500]/30 text-[#FF4500] px-4 py-2 mb-8 text-xs font-rajdhani font-bold uppercase tracking-[0.2em]">
          <span className="w-1.5 h-1.5 bg-[#FF4500] rounded-full animate-pulse"></span>
          Contact
        </div>

        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-[#E2E8F0] mb-6 tracking-tight animate-fade-in-up">
          Get Your Copy
        </h2>
        <p className="text-[#E2E8F0]/40 text-lg mb-12 max-w-md mx-auto font-inter animate-fade-in-up-delayed">
          Contact {authorInfo.name}
        </p>

        <div className="bg-[#09090A] p-10 inline-block shadow-2xl border border-[#FF4500]/20 animate-fade-in-up-delayed-2 hover-lift">

          <div className="space-y-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#FF4500] text-white font-rajdhani font-bold tracking-[0.15em] hover:bg-[#E63946] transition-all text-lg w-full justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              {contactInfo.email}
            </a>
            {/* <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center gap-3 px-10 py-5 border-2 border-[#FF4500]/50 text-[#FF4500] font-rajdhani font-bold uppercase tracking-[0.15em] hover:border-[#FF4500] hover:bg-[#FF4500]/5 transition-all text-lg w-full justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              {contactInfo.phone}
            </a> */}
          </div>
        </div>
      </div>
    </section>
  )
}