import React from 'react';
import ServiceSection from '../components/common/ServiceSection';
import ServiceHero from '../components/services/ServiceHero';
import { AuthContexts } from '../context/AuthContext';

function Services() {
  const {searchData} = AuthContexts();
  const handleClickScroll = () => {
    const element = document.getElementById('serviceArea');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <ServiceHero scroll={handleClickScroll}  />
      <ServiceSection services={searchData} isShowAll={false} />
    </>
  )
}

export default Services