import React from 'react'

function Hero() {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100" id="banner">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center text-white rounded-sm lg:max-w-2xl lg:text-left">
			<h1 className="text-5xl font-bold leadi sm:text-6xl dark:text-violet-400">Home Services Exchange Hub
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Welcome to the Ultimate Platform for Neighborhood Home Service Swaps – Where You Help, and Get Help in Return!
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Join Now</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Learn More</a>
			</div>
		</div>
		<div className="items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 hidden lg:flex">
			<img src="assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
    )
}

export default Hero