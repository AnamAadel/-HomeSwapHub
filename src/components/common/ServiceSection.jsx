import { Link } from "react-router-dom";
import useFetchServices from "../../hooks/useFetchServices";
import ServiceCart from "./serviceCart";


function ServiceSection({showAmount, searchService}) {
    const {serviceData} = useFetchServices(showAmount , searchService);
    console.log(serviceData)
    return (
        <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                <h2 className="text-5xl font-bold">Our Services</h2>
                <p className="dark:text-gray-400 max-w-2xl mx-auto">Discover a world of home services tailored to your needs. From cleaning to gardening, repairs to childcare, find trusted professionals ready to help.</p>
            </div>
            <div className="container mx-auto grid justify-center gap-8 xl:grid-cols-2">
            {serviceData && serviceData.map((item, ind)=> (
            <ServiceCart item={item} key={ind} />

            ))}
            </div>

            {showAmount !== "all" ? 
            <Link to="/services" className="text-white w-full  sm:w-1/2 justify-center bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mb-2 mt-10 mx-auto">
                Show All
            </Link> : null
            }
        </section>
    )
}

export default ServiceSection