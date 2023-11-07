import React from 'react'

function ProviderProfile({provider}) {
  return (
    <div className="w-full p-8 sm:flex sm:space-x-6 bg-gray-100 text-gray-800">
	<div className="flex-shrink-0 w-full mb-6 sm:h-32 sm:w-32 sm:mb-0">
		<img src={provider.image} alt="" className="object-cover object-center self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start bg-gray-500 border-gray-300 mx-auto md:ml-0" />
	</div>
	<div className="flex flex-col space-y-4">
		<div>
			<h2 className="text-2xl font-semibold">{provider.name}</h2>
			<span className="text-sm text-gray-600">{provider.title}</span>
		</div>
	</div>
</div>
  )
}

export default ProviderProfile