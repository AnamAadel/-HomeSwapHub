import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ServiceCart from "../common/serviceCart";


function ProviderService({services}) {
    const [providerServices, setProviderServices] = useState();
    const { myBaseUrl } = useAxiosSecure();
    const email = services?.serviceProvider?.providerEmail
    console.log(email)

    console.log(providerServices)

    useEffect(() => {
        function fetchData() {
            myBaseUrl.get(`/provider_service?email=${email}`).then(res => setProviderServices(res.data)).catch(err => console.log(err))
        }
        fetchData()
    }, [myBaseUrl, email])
    return (
        <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100" id="serviceArea">
            <div className="container mx-auto grid justify-center gap-8 xl:grid-cols-2">
            {providerServices?.length > 1 && providerServices.map((item, ind)=> (
            <ServiceCart item={item} key={ind} />

            ))
            }
            </div>
        </section>
    )
}

export default ProviderService