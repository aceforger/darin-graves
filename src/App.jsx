// App.jsx - Updated
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Books from './components/Books'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#09090A]">
      <Navbar />
      <Hero />
      <About />
      <Books />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}

export default App