import React from 'react'
import { Link } from 'react-router-dom'


function ServiceCart({item}) {
    return (
        <div className="dark:bg-gray-800 dark:text-gray-50">
            <div className="container grid grid-cols-12 mx-auto dark:bg-gray-900" >
                <div className="bg-no-repeat bg-cover dark:bg-gray-700 h-[300px] lg:h-auto col-span-full lg:col-span-4" style={{ backgroundImage: `url(${item.serviceImage})`, backgroundPosition: "center center", backgroundBlendMode: "multiply", backgroundSize: "cover" }}></div>
                <div className="flex flex-col p-6 col-span-full lg:col-span-8 lg:p-10">
                <div className="flex justify-start gap-4">
				<span className="px-2 py-1 text-xs rounded-full bg-violet-600 text-gray-50">{item.servicePrice}</span>
				<span className="px-2 py-1 text-xs rounded-full bg-violet-600 text-gray-50">{item.serviceArea}</span>
			</div>
                    <h1 className="text-3xl font-semibold">{item.serviceName}</h1>
                    <p className="flex-1 pt-2">{item.serviceDescription}.</p>

                    <div className="flex items-center justify-between pt-2">
                        <div className="flex space-x-2 gap-6">
                        <img src={item?.serviceProvider?.providerImage} alt="" className="self-center flex-shrink-0 w-12 h-12 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700 object-cover" />
                            <span className="self-center text-sm">{item?.serviceProvider?.providerName}</span>
                        </div>
                        <Link to={`/service/${item._id}`} rel="noopener noreferrer" href="#" className="inline-flex items-center space-x-2 text-sm dark:text-violet-400">
                            <span>View Detail</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCart