import { useEffect, useState } from "react";
import ServiceSection from "../components/common/ServiceSection";
import Contact from "../components/home/Contact";
import FeatureState from "../components/home/FeatureState";
import Hero from "../components/home/Hero";
import OurTeam from "../components/home/OurTeam";
import SellingPoints from "../components/home/SellingPoints";
import useAxiosSecure from "../hooks/useAxiosSecure";


function Home() {
  
  const {myBaseUrl} = useAxiosSecure(); 
  const [services, setServices] = useState([])
  useEffect(()=> {
    const fetchData = ()=> {
      myBaseUrl.get(`/services?limit=6`).then(res => setServices(res.data)).catch(err => console.log(err))
    }
    fetchData()
  },[myBaseUrl])
  return (
    <>
      <Hero />
       <SellingPoints />
      <ServiceSection services={services} isShowAll={true} />
      <Contact />
      <OurTeam />
     <FeatureState />
    </>
  )
}

export default Home
