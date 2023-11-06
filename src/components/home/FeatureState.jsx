import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

function FeatureState() {
  const [isTrue, setIsTrue] = useState(true);

  useEffect(() => {
    let num = 0;
    document.addEventListener("aos:in:detect", () => {
      num++;
      console.log(num)
      console.log(num % 2 === 0)

      if(num % 2 !== 0){
        setIsTrue(true);
      }else{
        setIsTrue(false);
      }
    })

  }, [])
  return (
    <div className="max-w-[85rem] px-4 py-10 my-12 sm:px-6 lg:px-8 lg:py-14 mx-auto relative md:bg-fixed" style={{ background: "url('https://images.pexels.com/photos/4792489/pexels-photo-4792489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') no-repeat center",backgroundAttachment: "fixed",  zIndex: 1 }} data-aos="fade-out" data-aos-id="detect">

      <div className="absolute top-0 left-0 right-0 bottom-0" style={{ background: "linear-gradient(90deg, rgba(2,2,2,0.8547794117647058) 0%, rgba(2,2,2,0.2) 90%, rgba(2,2,2,0) 100%)", zIndex: -1 }}></div>
      <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8 text-center">
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-white dark:text-gray-200">Accuracy rate</h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">{isTrue ? <CountUp
            start={0}
            end={99.95}
            duration={0.75}
            decimals={2}
            suffix="%" /> : null} </p>
          <p className="mt-1 text-white">in fulfilling orders</p>
        </div>
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-white dark:text-gray-200">Startup businesses</h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">{isTrue ? <CountUp
            start={0}
            end={2000}
            duration={0.75}
            decimal=","
            suffix="+" /> : null}</p>
          <p className="mt-1 text-white">partner with Preline</p>
        </div>
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-white dark:text-gray-200">Happy customer</h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">{isTrue ? <CountUp
            start={0}
            end={85}
            duration={0.75}
            suffix="%" /> : null}</p>
          <p className="mt-1 text-white">this year alone</p>
        </div>
      </div>
    </div>
  )
}

export default FeatureState