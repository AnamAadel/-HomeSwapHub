import React, { useEffect, useState } from 'react';
import { AuthContexts } from '../../context/AuthContext';
import useAxiosSecure from '../../hooks/useAxiosSecure';
const icons = [
  "https://www.reshot.com/preview-assets/icons/HD5JRFYLPS/cleaning-brush-HD5JRFYLPS.svg",
  "https://www.reshot.com/preview-assets/icons/43W9BZG8TN/planting-43W9BZG8TN.svg",
  "https://www.reshot.com/preview-assets/icons/F6GVJP8ST2/plane-maintenance-F6GVJP8ST2.svg",
  "https://www.reshot.com/preview-assets/icons/MN8DZ2KSQT/crib-mobile-MN8DZ2KSQT.svg",
  "https://www.reshot.com/preview-assets/icons/VAUXN879YP/teacher-bag-VAUXN879YP.svg",
  "https://www.reshot.com/preview-assets/icons/YNLAMC62FV/cooking-YNLAMC62FV.svg",
  "https://www.reshot.com/preview-assets/icons/PTR94Y5CL8/fitness-center-PTR94Y5CL8.svg",
  "https://www.reshot.com/preview-assets/icons/K6XV45TAEL/care-K6XV45TAEL.svg",
  "https://www.reshot.com/preview-assets/icons/WNJC59VR4F/security-WNJC59VR4F.svg"

]
function ServiceHero({scroll}) {
  const {myBaseUrl} = useAxiosSecure();
  const [serviceCategories, setServiceCategories] = useState();
  const {searchData, setSearchData} = AuthContexts();
  



  const fetchDataByCategory = (type)=> {
    myBaseUrl.get(`/services/type/${type}`).then(res => setSearchData(res.data)).catch((err)=> console.log(err))
    // scroll()
  }

  const handleSearch = (e)=> {
    e.preventDefault()
    const searchValue = e.target.search.value;
    myBaseUrl.post(`/services`, {search: searchValue}).then(res => setSearchData(res.data)).catch(err => console.log(err))
    // setServiceData(searchValue);
    // scroll();
  }
  useEffect(()=> {
    myBaseUrl.get("/services/categories").then(res => setServiceCategories(res.data)).catch((err)=> console.log(err))
  }, [myBaseUrl])
  return (
<div className="relative overflow-hidden z-[1]">
    <img src="https://freedesignresources.net/wp-content/uploads/2023/10/Free-living-room-frame-mockup_momogi_301023_prev01.jpg" className='w-full h-full absolute top-0 left-0 z-[-1]' alt="" />
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
    <div className="text-center">
      <h1 className="text-4xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200">
        House Service Exchange
      </h1>

      <p className="mt-3 text-gray-600 dark:text-gray-400">
        Stay in the know with insights from industry experts.
      </p>

      <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
        <form onSubmit={handleSearch}>
          <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/[.2]">
            <div className="flex-[1_0_0%]">
              <label htmlFor="search" className="block text-sm text-gray-700 font-medium dark:text-white"><span className="sr-only">Search article</span></label>
              <input type="text"  name="search" id="search" className="p-3 block w-full border-transparent rounded-md focus:border-gray-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400" placeholder="Search article" />
            </div>
            <div className="flex-[0_0_auto]">
              <a className="p-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-700 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="#" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </form>
        <div className="hidden md:block absolute top-0 right-0 -translate-y-12 translate-x-20">
          <svg className="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
            <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
            <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="hidden md:block absolute bottom-0 left-0 translate-y-10 -translate-x-32">
          <svg className="w-40 h-auto text-cyan-500" width="347" height="188" viewBox="0 0 347 188" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      <div className="mt-10 sm:mt-20">
        {serviceCategories && serviceCategories.map((type, ind)=> (
        <div key={ind} onClick={()=> fetchDataByCategory(type)} className="m-1 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800 cursor-pointer">
          <img src={icons[ind]} className="w-4" alt="" />
          {type}
        </div>
 
        ))}
      </div>
    </div>
  </div>
</div>
  )
}

export default ServiceHero