import Contact from "../components/home/Contact"
import FeatureState from "../components/home/FeatureState"
import Hero from "../components/home/Hero"
import OurTeam from "../components/home/OurTeam"
import SellingPoints from "../components/home/SellingPoints"
import ServiceSection from "../components/home/ServiceSection"
import Testimonials from "../components/home/Testimonials"


function Home() {

  return (
    <>
      <Hero />
      <SellingPoints />
      <ServiceSection />
      <Contact />
      <OurTeam />
      <FeatureState />
      <Testimonials />
    </>
  )
}

export default Home
