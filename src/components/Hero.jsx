// import { authorInfo } from '../data'

// export default function Hero() {
//   const handleScroll = (e, href) => {
//     e.preventDefault()
//     const targetId = href.replace('#', '')
//     const element = document.getElementById(targetId)
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' })
//     }
//   }

//   return (
//     <section id="home" className="min-h-screen flex items-center bg-[#020510] relative overflow-hidden">
//       {/* Deep space background with subtle gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#020510] via-[#0a0a2e] to-[#020510]"></div>

//       {/* Stars - Twinkling */}
//       {[...Array(80)].map((_, i) => (
//         <div
//           key={`star-${i}`}
//           className="absolute bg-white rounded-full"
//           style={{
//             width: `${1 + Math.random() * 3}px`,
//             height: `${1 + Math.random() * 3}px`,
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//             opacity: Math.random() * 0.8 + 0.2,
//             animation: `twinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
//             animationDelay: `${Math.random() * 5}s`
//           }}
//         ></div>
//       ))}

//       {/* Nebula - Large rotating clouds */}
//       <div className="absolute top-0 left-0 w-full h-full opacity-20 animate-nebula">
//         <div className="absolute top-10 left-10 w-96 h-96 bg-[#4B0082] rounded-full blur-[120px]"></div>
//         <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#1a0033] rounded-full blur-[100px]"></div>
//       </div>
//       <div className="absolute top-0 left-0 w-full h-full opacity-15 animate-nebula-slow">
//         <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#FF4500]/20 rounded-full blur-[100px]"></div>
//         <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#64D28D]/10 rounded-full blur-[80px]"></div>
//       </div>

//       {/* Aurora gradient */}
//       <div className="absolute top-0 left-0 w-full h-64 opacity-20 animate-aurora">
//         <div className="w-full h-full bg-gradient-to-r from-[#4B0082]/30 via-[#FF4500]/20 to-[#64D28D]/30 blur-3xl"></div>
//       </div>
//       <div className="absolute top-20 left-0 w-full h-48 opacity-15 animate-aurora-slow">
//         <div className="w-full h-full bg-gradient-to-r from-[#64D28D]/20 via-[#4B0082]/30 to-[#FF4500]/20 blur-3xl"></div>
//       </div>

//       {/* Earth-like glow */}
//       <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#64D28D] rounded-full opacity-10 blur-3xl animate-earth-glow"></div>

//       {/* Floating light particles */}
//       {[...Array(15)].map((_, i) => (
//         <div
//           key={`particle-${i}`}
//           className="absolute w-1 h-1 bg-[#FF4500] rounded-full animate-float-particle"
//           style={{
//             left: `${Math.random() * 100}%`,
//             bottom: '0',
//             animationDelay: `${Math.random() * 10}s`,
//             opacity: Math.random() * 0.6 + 0.2
//           }}
//         ></div>
//       ))}
//       {[...Array(10)].map((_, i) => (
//         <div
//           key={`particle-green-${i}`}
//           className="absolute w-1 h-1 bg-[#64D28D] rounded-full animate-float-particle-delayed"
//           style={{
//             left: `${Math.random() * 100}%`,
//             bottom: '0',
//             animationDelay: `${Math.random() * 8}s`,
//             opacity: Math.random() * 0.5 + 0.2
//           }}
//         ></div>
//       ))}

//       {/* Dramatic shooting stars */}
// <div className="absolute top-20 right-40 w-32 h-[2px] bg-gradient-to-l from-white via-white/80 to-transparent rounded-full animate-shooting-star shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
// <div className="absolute top-1/3 left-20 w-24 h-[2px] bg-gradient-to-r from-white via-white/80 to-transparent rounded-full animate-shooting-star-delayed shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
// <div className="absolute bottom-1/4 right-1/3 w-28 h-[2px] bg-gradient-to-l from-white via-white/70 to-transparent rounded-full animate-shooting-star shadow-[0_0_10px_rgba(255,255,255,0.4)]" style={{ animationDelay: '1.5s' }}></div>

//       {/* Rotating ring */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#FF4500]/5 rounded-full animate-spin-very-slow"></div>
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-[#64D28D]/5 rounded-full animate-spin-very-slow" style={{ animationDirection: 'reverse', animationDuration: '80s' }}></div>

//       {/* Grid */}
//       <div className="absolute inset-0 opacity-[0.015]"
//         style={{
//           backgroundImage: 'linear-gradient(90deg, #FF4500 1px, transparent 1px), linear-gradient(0deg, #FF4500 1px, transparent 1px)',
//           backgroundSize: '80px 80px'
//         }}>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           {/* Author Introduction */}
//           <div className="text-center md:text-left">
//             <div className="inline-flex items-center gap-2 border border-[#FF4500]/30 text-[#FF4500] px-4 py-2 mb-8 text-xs font-rajdhani font-bold uppercase tracking-[0.2em] animate-pulse">
//               <span className="w-1.5 h-1.5 bg-[#FF4500] rounded-full"></span>
//               Screenwriter & Creator
//             </div>

//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-orbitron font-bold text-[#E2E8F0] mb-6 leading-tight tracking-tight animate-fade-in-up drop-shadow-[0_0_40px_rgba(255,69,0,0.3)]">
//               {authorInfo.name.toUpperCase()}
//             </h1>

//             <div className="w-24 h-[2px] bg-gradient-to-r from-[#FF4500] to-[#64D28D] mb-8 mx-auto md:mx-0 animate-fade-in-up-delayed"></div>

//             <p className="text-xl text-[#64D28D] mb-6 font-rajdhani font-semibold tracking-wider animate-fade-in-up-delayed drop-shadow-[0_0_15px_rgba(100,210,141,0.3)]">
//               Creator of <span className="text-[#FF4500] font-bold">2112, Serial Killer Explanation, Animating Principle</span>
//             </p>

//             <p className="text-[#E2E8F0]/60 leading-relaxed max-w-lg mx-auto md:mx-0 font-inter text-base border-l-2 border-[#FF4500] pl-6 py-2 animate-fade-in-up-delayed-2">
//               "The album has the story. The novel has all actions within."
//             </p>

//             <div className="flex flex-wrap gap-3 my-8 justify-center md:justify-start animate-fade-in-up-delayed-2">
//               {authorInfo.roles.map((role, i) => (
//                 <span key={i} className="px-4 py-2 bg-white/5 backdrop-blur-sm text-[#E2E8F0] text-xs font-rajdhani font-bold uppercase tracking-wider border border-[#FF4500]/20 hover:border-[#FF4500]/50 hover:bg-[#FF4500]/10 hover-lift transition-all">
//                   {role}
//                 </span>
//               ))}
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up-delayed-2">
//               <a
//                 href="#about"
//                 onClick={(e) => handleScroll(e, '#about')}
//                 className="px-8 py-4 bg-[#FF4500] text-white font-rajdhani font-bold uppercase tracking-[0.15em] hover:bg-[#E63946] transition-all text-center hover-lift animate-pulse-ring relative overflow-hidden group"
//               >
//                 <span className="relative z-10">About the Author</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//               </a>
//               <a
//                 href="#books"
//                 onClick={(e) => handleScroll(e, '#books')}
//                 className="px-8 py-4 border-2 border-[#FF4500]/50 text-[#FF4500] font-rajdhani font-bold uppercase tracking-[0.15em] hover:border-[#FF4500] hover:bg-[#FF4500]/5 transition-all text-center hover-lift"
//               >
//                 Books
//               </a>
//             </div>
//           </div>

//           {/* Profile Image */}
//           <div className="relative mx-auto max-w-sm animate-fade-in-up">
//             <div className="relative">
//               <div className="absolute -inset-4 bg-[#FF4500]/10 rounded-full blur-3xl animate-earth-glow"></div>
//               <div className="relative bg-[#0a0a2e]/50 backdrop-blur-sm shadow-2xl border border-[#FF4500]/20 rounded-full overflow-hidden hover-lift">
//                 <div className="aspect-square rounded-full overflow-hidden">
//                   <img
//                     src="/images/profile.png"
//                     alt={authorInfo.name}
//                     className="w-full h-full object-cover"
//                     onError={(e) => {
//                       e.target.style.display = 'none'
//                       e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-[#0a0a2e]', 'to-[#020510]')
//                       e.target.parentElement.innerHTML = `
//                         <div class="text-center p-8">
//                           <div class="text-7xl font-orbitron font-bold text-[#FF4500] mb-4 tracking-tighter drop-shadow-[0_0_30px_rgba(255,69,0,0.4)]">DG</div>
//                           <p class="text-lg font-rajdhani font-bold text-[#E2E8F0] uppercase tracking-[0.2em]">${authorInfo.name}</p>
//                         </div>
//                       `
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>
//             {/* <div className="absolute -top-1 -right-0 bg-[#E63946] text-white w-14 h-14 flex items-center justify-center font-orbitron font-bold text-xs shadow-lg animate-earth-glow rounded-full">
//               AUTHOR
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


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
    <section id="home" className="min-h-screen flex items-center bg-black relative overflow-hidden">
      {/* Absolute void */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Distant star field */}
      {[...Array(150)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${0.5 + Math.random() * 2}px`,
            height: `${0.5 + Math.random() * 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: '#FFFFFF',
            opacity: Math.random() * 0.2 + 0.05,
            animation: `twinkle ${4 + Math.random() * 8}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 6}s`
          }}
        ></div>
      ))}

      {/* Outer gravitational lensing - Subtle light bending */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 35%, rgba(255,69,0,0.08) 40%, rgba(255,69,0,0.03) 45%, transparent 50%)',
          filter: 'blur(6px)',
          transform: 'scale(1, 0.6) rotate(15deg)'
        }}>
      </div>

      {/* OUTER TORUS - Faint, wide glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 55%, rgba(255,69,0,0.05) 58%, rgba(255,99,71,0.15) 62%, rgba(255,69,0,0.1) 66%, transparent 70%)',
          filter: 'blur(15px)',
          transform: 'rotate(-15deg)',
          animation: 'accretionSpin 35s linear infinite'
        }}>
      </div>

      {/* MAIN LUMINOUS TORUS - The glowing ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '650px',
          height: '380px',
          transform: 'rotate(-15deg)'
        }}>
        
        {/* Torus outer glow */}
        <div className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 48%, rgba(255,69,0,0.15) 52%, rgba(255,99,71,0.3) 55%, rgba(255,140,0,0.4) 58%, rgba(255,69,0,0.25) 61%, rgba(139,0,0,0.15) 65%, transparent 70%)',
            filter: 'blur(8px)',
            animation: 'torusPulse 4s ease-in-out infinite'
          }}>
        </div>

        {/* Torus bright ring - Orange core */}
        <div className="absolute inset-0 rounded-full"
          style={{
            boxShadow: '0 0 40px rgba(255,69,0,0.4), 0 0 80px rgba(255,69,0,0.2), 0 0 120px rgba(255,99,71,0.1)',
            background: 'radial-gradient(ellipse at center, transparent 50%, rgba(255,69,0,0.1) 53%, rgba(255,140,0,0.5) 55%, rgba(255,69,0,0.6) 56%, rgba(255,99,71,0.5) 57%, rgba(255,69,0,0.2) 59%, transparent 62%)',
            filter: 'blur(4px)',
            animation: 'accretionSpin 20s linear infinite'
          }}>
        </div>

        {/* Torus sharp inner ring */}
        <div className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 52%, rgba(255,140,0,0.4) 54%, rgba(255,69,0,0.7) 55%, rgba(255,99,71,0.6) 56%, rgba(255,69,0,0.3) 57%, transparent 59%)',
            filter: 'blur(2px)',
            animation: 'accretionSpin 15s linear infinite reverse'
          }}>
        </div>

        {/* Bright hotspots on torus */}
        <div className="absolute inset-0 rounded-full animate-spin-very-slow" style={{ animationDuration: '18s' }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '650px',
              height: '380px',
              borderRadius: '50%'
            }}>
            {/* Hotspot 1 */}
            <div className="absolute"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(0deg) translateX(325px) translateY(-190px)',
                width: '30px',
                height: '8px',
                background: 'rgba(255,140,0,0.9)',
                borderRadius: '50%',
                boxShadow: '0 0 20px rgba(255,140,0,0.8), 0 0 40px rgba(255,69,0,0.6), 0 0 60px rgba(255,99,71,0.4)',
                filter: 'blur(2px)'
              }}>
            </div>
            {/* Hotspot 2 */}
            <div className="absolute"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(120deg) translateX(325px) translateY(-190px)',
                width: '25px',
                height: '6px',
                background: 'rgba(255,69,0,0.8)',
                borderRadius: '50%',
                boxShadow: '0 0 15px rgba(255,69,0,0.7), 0 0 30px rgba(255,99,71,0.5)',
                filter: 'blur(1.5px)'
              }}>
            </div>
            {/* Hotspot 3 */}
            <div className="absolute"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(240deg) translateX(325px) translateY(-190px)',
                width: '35px',
                height: '10px',
                background: 'rgba(255,99,71,0.85)',
                borderRadius: '50%',
                boxShadow: '0 0 25px rgba(255,99,71,0.8), 0 0 50px rgba(255,69,0,0.5), 0 0 75px rgba(255,140,0,0.3)',
                filter: 'blur(2.5px)'
              }}>
            </div>
          </div>
        </div>
      </div>

      {/* INNER TORUS - Brighter, tighter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '450px',
          height: '260px',
          transform: 'rotate(-15deg)'
        }}>
        
        {/* Inner torus glow */}
        <div className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 38%, rgba(255,140,0,0.2) 42%, rgba(255,69,0,0.5) 45%, rgba(255,99,71,0.4) 48%, transparent 52%)',
            filter: 'blur(5px)',
            animation: 'torusPulse 3s ease-in-out infinite',
            animationDelay: '0.5s'
          }}>
        </div>

        <div className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(255,69,0,0.3) 43%, rgba(255,140,0,0.7) 44%, rgba(255,69,0,0.5) 46%, transparent 49%)',
            filter: 'blur(2px)',
            animation: 'accretionSpin 10s linear infinite'
          }}>
        </div>
      </div>

      {/* PHOTON RING - Innermost stable orbit */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '300px',
          height: '170px',
          transform: 'rotate(-15deg)'
        }}>
        
        <div className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(255,200,100,0.3) 35%, rgba(255,140,0,0.6) 37%, rgba(255,69,0,0.4) 40%, transparent 44%)',
            filter: 'blur(1.5px)',
            boxShadow: '0 0 20px rgba(255,140,0,0.5), 0 0 40px rgba(255,69,0,0.3)',
            animation: 'photonOrbit 6s linear infinite'
          }}>
        </div>
      </div>

      {/* EVENT HORIZON - The singularity */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '200px',
          height: '110px',
          transform: 'rotate(-15deg)'
        }}>
        
        {/* Penumbra - Slight glow at edge */}
        <div className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.95) 80%, black 100%)',
            boxShadow: '0 0 30px rgba(255,69,0,0.1), inset 0 0 40px rgba(0,0,0,0.9)',
            filter: 'blur(1px)'
          }}>
        </div>
        
        {/* Pure void center */}
        <div className="absolute inset-[15%] rounded-full bg-black"
          style={{
            boxShadow: '0 0 50px rgba(0,0,0,0.95), inset 0 0 30px rgba(0,0,0,1)'
          }}>
        </div>
      </div>

      {/* RELATIVISTIC JETS */}
      {/* Top jet */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[250px]"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(255,69,0,0.1) 20%, rgba(255,140,0,0.3) 50%, rgba(255,69,0,0.15) 80%, rgba(255,99,71,0.3) 100%)',
          filter: 'blur(3px)',
          transform: 'rotate(-15deg)',
          animation: 'jetPulse 3s ease-in-out infinite'
        }}>
      </div>
      <div className="absolute top-0 left-[calc(50%+15px)] -translate-x-1/2 w-[2px] h-[200px]"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(255,99,71,0.2) 30%, rgba(255,69,0,0.15) 70%, rgba(255,140,0,0.2) 100%)',
          filter: 'blur(2px)',
          transform: 'rotate(-12deg)',
          animation: 'jetPulse 3s ease-in-out infinite',
          animationDelay: '0.3s'
        }}>
      </div>
      <div className="absolute top-0 left-[calc(50%-15px)] -translate-x-1/2 w-[2px] h-[220px]"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(255,140,0,0.15) 25%, rgba(255,69,0,0.2) 60%, rgba(255,99,71,0.15) 100%)',
          filter: 'blur(2px)',
          transform: 'rotate(-18deg)',
          animation: 'jetPulse 3s ease-in-out infinite',
          animationDelay: '0.6s'
        }}>
      </div>

      {/* Bottom jet */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[3px] h-[250px]"
        style={{
          background: 'linear-gradient(to top, transparent, rgba(255,69,0,0.1) 20%, rgba(255,140,0,0.3) 50%, rgba(255,69,0,0.15) 80%, rgba(255,99,71,0.3) 100%)',
          filter: 'blur(3px)',
          transform: 'rotate(-15deg)',
          animation: 'jetPulse 3s ease-in-out infinite',
          animationDelay: '1.5s'
        }}>
      </div>
      <div className="absolute bottom-0 left-[calc(50%+15px)] -translate-x-1/2 w-[2px] h-[200px]"
        style={{
          background: 'linear-gradient(to top, transparent, rgba(255,99,71,0.2) 30%, rgba(255,69,0,0.15) 70%, rgba(255,140,0,0.2) 100%)',
          filter: 'blur(2px)',
          transform: 'rotate(-12deg)',
          animation: 'jetPulse 3s ease-in-out infinite',
          animationDelay: '1.8s'
        }}>
      </div>
      <div className="absolute bottom-0 left-[calc(50%-15px)] -translate-x-1/2 w-[2px] h-[220px]"
        style={{
          background: 'linear-gradient(to top, transparent, rgba(255,140,0,0.15) 25%, rgba(255,69,0,0.2) 60%, rgba(255,99,71,0.15) 100%)',
          filter: 'blur(2px)',
          transform: 'rotate(-18deg)',
          animation: 'jetPulse 3s ease-in-out infinite',
          animationDelay: '2.1s'
        }}>
      </div>

      {/* Jet particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`jet-top-${i}`}
          className="absolute w-[2px] h-[2px] rounded-full"
          style={{
            left: `${47 + Math.random() * 6}%`,
            top: `${5 + Math.random() * 20}%`,
            background: '#FF4500',
            boxShadow: '0 0 8px #FF4500, 0 0 16px #FF6347',
            opacity: Math.random() * 0.5 + 0.2,
            animation: `floatUpSlow ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`
          }}
        ></div>
      ))}
      {[...Array(15)].map((_, i) => (
        <div
          key={`jet-bottom-${i}`}
          className="absolute w-[2px] h-[2px] rounded-full"
          style={{
            left: `${47 + Math.random() * 6}%`,
            bottom: `${5 + Math.random() * 20}%`,
            background: '#FF4500',
            boxShadow: '0 0 8px #FF4500, 0 0 16px #FF6347',
            opacity: Math.random() * 0.5 + 0.2,
            animation: `floatUpSlow ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
            animationDirection: 'reverse'
          }}
        ></div>
      ))}

      {/* Gravitational wave ripples */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '900px',
          height: '520px',
          transform: 'rotate(-15deg)',
          borderRadius: '50%',
          border: '1px solid rgba(255,69,0,0.08)',
          animation: 'gravityWave 5s ease-out infinite'
        }}>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '900px',
          height: '520px',
          transform: 'rotate(-15deg)',
          borderRadius: '50%',
          border: '1px solid rgba(255,69,0,0.06)',
          animation: 'gravityWave 5s ease-out infinite',
          animationDelay: '2.5s'
        }}>
      </div>

      {/* Subtle light rays from torus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10"
        style={{
          background: 'radial-gradient(ellipse 400px 230px at center, rgba(255,140,0,0.2) 0%, rgba(255,69,0,0.1) 30%, transparent 70%)',
          filter: 'blur(20px)',
          animation: 'torusPulse 4s ease-in-out infinite'
        }}>
      </div>

      {/* Content Layer */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Author Introduction */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 border border-[#FF4500]/30 text-[#FF4500] px-4 py-2 mb-8 text-xs font-rajdhani font-bold uppercase tracking-[0.2em] animate-pulse">
              <span className="w-1.5 h-1.5 bg-[#FF4500] rounded-full shadow-[0_0_8px_#FF4500]"></span>
              Screenwriter & Creator
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-orbitron font-bold text-white mb-6 leading-tight tracking-tight animate-fade-in-up drop-shadow-[0_0_40px_rgba(255,69,0,0.3)]">
              {authorInfo.name.toUpperCase()}
            </h1>

            <div className="w-24 h-[2px] bg-gradient-to-r from-[#FF4500] via-[#FF6347] to-[#8B0000] mb-8 mx-auto md:mx-0 animate-fade-in-up-delayed shadow-[0_0_10px_rgba(255,69,0,0.5)]"></div>

            <p className="text-xl text-[#FF6347] mb-6 font-rajdhani font-semibold tracking-wider animate-fade-in-up-delayed drop-shadow-[0_0_15px_rgba(255,99,71,0.4)]">
              Creator of <span className="text-white font-bold">2112, Serial Killer Explanation, Animating Principle</span>
            </p>

            <p className="text-white/50 leading-relaxed max-w-lg mx-auto md:mx-0 font-inter text-base border-l-2 border-[#FF4500]/50 pl-6 py-2 animate-fade-in-up-delayed-2 bg-gradient-to-r from-[#FF4500]/5 to-transparent">
              "The album has the story. The novel has all actions within."
            </p>

            <div className="flex flex-wrap gap-3 my-8 justify-center md:justify-start animate-fade-in-up-delayed-2">
              {authorInfo.roles.map((role, i) => (
                <span key={i} className="px-4 py-2 bg-white/3 backdrop-blur-sm text-white/70 text-xs font-rajdhani font-bold uppercase tracking-wider border border-[#FF4500]/15 hover:border-[#FF4500]/40 hover:bg-[#FF4500]/8 hover-lift transition-all">
                  {role}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up-delayed-2">
              <a
                href="#about"
                onClick={(e) => handleScroll(e, '#about')}
                className="px-8 py-4 bg-[#FF4500] text-white font-rajdhani font-bold uppercase tracking-[0.15em] hover:bg-[#cc3700] transition-all text-center hover-lift shadow-[0_0_25px_rgba(255,69,0,0.4),0_0_50px_rgba(255,69,0,0.2)] relative overflow-hidden group"
              >
                <span className="relative z-10">About the Author</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
              <a
                href="#books"
                onClick={(e) => handleScroll(e, '#books')}
                className="px-8 py-4 border-2 border-[#FF4500]/40 text-[#FF4500] font-rajdhani font-bold uppercase tracking-[0.15em] hover:border-[#FF4500]/70 hover:bg-[#FF4500]/8 transition-all text-center hover-lift backdrop-blur-sm"
              >
                Books
              </a>
            </div>
          </div>

          {/* Profile Image with torus influence */}
          <div className="relative mx-auto max-w-sm animate-fade-in-up">
            <div className="relative">
              {/* Torus glow around profile */}
              <div className="absolute -inset-16 rounded-full"
                style={{
                  background: 'radial-gradient(ellipse at center, transparent 45%, rgba(255,69,0,0.1) 50%, rgba(255,140,0,0.15) 55%, rgba(255,69,0,0.1) 60%, transparent 65%)',
                  filter: 'blur(15px)',
                  animation: 'torusPulse 4s ease-in-out infinite'
                }}>
              </div>
              
              {/* Elliptical rings around profile */}
              <div className="absolute -inset-8 rounded-full border border-[#FF4500]/15 blur-sm"
                style={{
                  transform: 'scale(1, 0.6)',
                  animation: 'accretionSpin 25s linear infinite',
                  boxShadow: '0 0 20px rgba(255,69,0,0.15)'
                }}>
              </div>
              <div className="absolute -inset-6 rounded-full border border-[#FF6347]/10"
                style={{
                  transform: 'scale(1, 0.6)',
                  animation: 'accretionSpin 20s linear infinite reverse',
                  boxShadow: '0 0 15px rgba(255,99,71,0.1)'
                }}>
              </div>
              
              <div className="relative bg-gradient-to-br from-[#0a0a0a]/95 to-black/95 backdrop-blur-sm shadow-2xl border border-[#FF4500]/15 rounded-full overflow-hidden hover-lift">
                <div className="aspect-square rounded-full overflow-hidden">
                  <img
                    src="/images/profile.png"
                    alt={authorInfo.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-black', 'to-[#0a0a0a]')
                      e.target.parentElement.innerHTML = `
                        <div class="text-center p-8">
                          <div class="text-7xl font-orbitron font-bold text-[#FF4500] mb-4 tracking-tighter drop-shadow-[0_0_30px_rgba(255,69,0,0.5)]">DG</div>
                          <p class="text-lg font-rajdhani font-bold text-white/70 uppercase tracking-[0.2em]">${authorInfo.name}</p>
                        </div>
                      `
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}