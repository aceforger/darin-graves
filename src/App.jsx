import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Books from './components/Books'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Store from './components/Store'

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Books />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </>
  )
}

function StorePage() {
  return (
    <>
      <Store />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#09090A]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
      </Routes>
    </div>
  )
}

export default App