import React, { useEffect, useState } from 'react';
import { FaStarOfLife } from "react-icons/fa";
import useAxiosSecure from '../../hooks/useAxiosSecure';

function SellingPoints() {
    const {myBaseUrl} = useAxiosSecure();
    const [sellingPoints, setSellingPoint]  = useState([]);
    useEffect(()=> {
        function fetchData(){
            myBaseUrl.get("/selling_points").then(res => setSellingPoint(res.data)).catch(err => console.log(err))
        }
        fetchData()
    },[myBaseUrl])
    return (
        <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                <h2 className="text-5xl font-bold">Unique Selling Points</h2>
                <p className="dark:text-gray-400 max-w-2xl mx-auto">USPs are distinct features that set your product or service apart, attracting customers by offering unique benefits and a competitive edge.</p>
            </div>
            <div className="container mx-auto grid justify-center gap-12 sm:grid-cols-2 lg:grid-cols-3">

                {sellingPoints && sellingPoints.map((item, ind)=> (
                <div key={ind} className="flex flex-col group items-start text-left p-12 border shadow-lg rounded-md hover:bg-slate-400 hover:shadow-2xl hover:scale-110 transition-all duration-300">
                        <FaStarOfLife className='group-hover:rotate-180 transition-all duration-300 text-3xl' />
                    <h3 className="my-3 text-3xl font-semibold">{item.point}</h3>
                    <div className="space-y-1">
                        <p>{item.description}</p>
                    </div>
                </div>

                ))}
            </div>
        </section>
    )
}

export default SellingPoints