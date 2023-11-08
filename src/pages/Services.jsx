import React from 'react'
import ServiceSection from '../components/common/ServiceSection'
import ServiceHero from '../components/services/ServiceHero'
import { useState } from 'react'

function Services() {
  const [searchService, setSearchService] = useState("");
  return (
    <>
      <ServiceHero setSearchService={setSearchService} />
      <ServiceSection showAmount="all" searchService={searchService} />
    </>
  )
}

export default Services