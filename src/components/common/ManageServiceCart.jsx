import React from 'react'
import { Link } from 'react-router-dom'

function ManageServiceCart({ item, handleDeleteItem }) {
  return (
    <div className="group sm:flex rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
        <img className="w-full h-full absolute top-0 start-0 object-cover" src={item?.serviceImage} alt="Image Description" />
      </div>
      <div className="grow">
        <div className="p-4 flex flex-col h-full sm:p-6">
          <div className="gap-4 flex flex-wrap">
            <Link to={`/service_update/${item._id}`} type="button" className="px-8 py-3 font-semibold rounded bg-gray-800 text-gray-100">Update</Link>
            <button type="button" onClick={()=> handleDeleteItem(item._id)} className="px-8 py-3 font-semibold rounded bg-gray-800 text-gray-100">Delete</button>
          </div>
          <h3 className="text-lg sm:text-2xl mt-4 font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
            {item?.serviceName}
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {item?.serviceDescription}
          </p>

          <Link to={`/service/${item._id}`} rel="noopener noreferrer" href="#" className="inline-flex items-center space-x-2 text-sm dark:text-violet-400">
            <span>View Detail</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </Link>

          <div className="mt-5 sm:mt-auto">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-[2.875rem] w-[2.875rem] rounded-full" src={item?.serviceProvider?.providerImage} alt="Image Description" />
              </div>
              <div className="ms-2.5 sm:ms-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                  {item?.serviceProvider?.providerName}
                </h4>
                <p className="text-xs text-gray-500 mt-6 hover:text-blue-500">
                  Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageServiceCart