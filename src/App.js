import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Services from './components/services'
import Tours from './components/tours'
import Footer from './components/footer'
import About from './components/about'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  )
}

export default App
