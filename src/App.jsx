import './App.css'
import Hero from './components/home/Hero'
import SellingPoints from './components/home/SellingPoints'
import ServiceSection from './components/home/ServiceSection'
import Navbar from './pages/shared/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <SellingPoints />
      <ServiceSection />
    </>
  )
}

export default App
