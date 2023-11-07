import React from 'react'

function ManageServiceCart() {
  return (
    <div className="group sm:flex rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
        <img className="w-full h-full absolute top-0 start-0 object-cover" src="https://images.unsplash.com/photo-1669824774762-65ddf29bee56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Image Description" />
      </div>
      <div className="grow">
        <div className="p-4 flex flex-col h-full sm:p-6">
          <div className="mb-3 space-x-4">
          <button type="button" className="px-8 py-3 font-semibold rounded bg-gray-800 text-gray-100">Update</button>
          <button type="button" className="px-8 py-3 font-semibold rounded bg-gray-800 text-gray-100">Delete</button>
          </div>
          <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
            Announcing a free plan for small teams
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            At Wake, our mission has always been focused on bringing openness.
          </p>

          <div className="mt-5 sm:mt-auto">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-[2.875rem] w-[2.875rem] rounded-full" src="https://images.unsplash.com/photo-1669720229052-89cda125fc3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
              </div>
              <div className="ms-2.5 sm:ms-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                  Hanna Wolfe
                </h4>
                <p className="text-xs text-gray-500">
                  Feb 4, 2021
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