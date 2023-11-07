import React from 'react'
import BreadCrumb from '../common/BreadCrumb'
import ProviderProfile from '../common/ProviderProfile'

function ServiceDetailSection({detail, isOpenModal, setIsOpenModal}) {
  return (
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
<BreadCrumb name={detail?.serviceName} />
  <div className="grid grid-cols-1 md:grid-cols-2 justify-center md:gap-12 xl:gap-32">
      <img className="rounded-xl w-full h-[350px] md:h-[500px] object-cover" src={detail?.serviceImage} alt="Image Description" />
    

    <div className="mt-5 sm:mt-10 lg:mt-0">
      <div className="space-y-6 sm:space-y-8 text-center md:text-left">
      <ProviderProfile provider={detail?.serviceProvider} />
        <div className="space-y-2 md:space-y-4">
          <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
          {detail?.serviceName}
          </h2>
          <p className="text-gray-500">
          {detail?.serviceDescription}
          </p>
          <p className="text-gray-800 text-bold">
          {detail?.servicePrice}
          </p>
        </div>
        <div className="mb-3 space-x-4">
          <button type="button" className="px-8 py-3 font-semibold rounded bg-gray-800 text-gray-100" id="open_modal" onClick={()=> setIsOpenModal(true)}>Book Now</button>
          </div>
          
      </div>
    </div>
  </div>
</div>
  )
}

export default ServiceDetailSection