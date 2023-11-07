import ServiceSection from "../components/common/ServiceSection"
import Contact from "../components/home/Contact"
import FeatureState from "../components/home/FeatureState"
import Hero from "../components/home/Hero"
import OurTeam from "../components/home/OurTeam"
import SellingPoints from "../components/home/SellingPoints"
import Testimonials from "../components/home/Testimonials"


function Home() {

  return (
    <>
      <Hero />
      <SellingPoints />
      <ServiceSection showAmount={{number: 4}} isShowAll={true} />
      <Contact />
      <OurTeam />
      <FeatureState />
      <Testimonials />
    </>
  )
}

export default Home
