import React, { useState } from 'react';


import Carousel from 'react-elastic-carousel';
import TestimonialCart from '../common/TestimonialCart';

function Testimonials() {
    const [carouselRef, setCarouselRef] = useState(null);
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1,  pagination: false },
        { width: 1010, itemsToShow: 2 },
      ]
  return (
    <section className="my-8 bg-gray-100 text-gray-800">
	<div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
		<h1 className="p-4 text-4xl font-semibold text-center">What our customers are saying about us</h1>

	</div>

	<div className="container flex flex-col items-center -mt-6 justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
    <Carousel breakPoints={breakPoints} enableAutoPlay  autoPlaySpeed='2000' onNextEnd={(currentItem) =>{ 
        if(currentItem.index == 6 - 2){

            setTimeout(()=> carouselRef.goTo(0) , 2500);
        
        }
    } }
    ref={(ref)=> setCarouselRef(ref)}
  >
          <TestimonialCart />
          <TestimonialCart />
          <TestimonialCart />
          <TestimonialCart />
          <TestimonialCart />
          <TestimonialCart />
        </Carousel>
	</div>
</section>
  )
}

export default Testimonials