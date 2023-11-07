import React from 'react'

function ManageServiceBanner() {
  return (<div className="p-6 py-12 bg-gray-800 text-gray-50">
  <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-6xl tracki font-bold">My Added Services
          </h2>
          <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Wishing you a day full of smiles</span>
          </div>
          <a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-white text-gray-900 border-gray-600">Add Your Service</a>
      </div>
  </div>
</div>
  )
}

export default ManageServiceBanner