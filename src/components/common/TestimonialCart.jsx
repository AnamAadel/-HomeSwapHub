import React from 'react'
import { LiaQuoteLeftSolid, LiaQuoteRightSolid } from "react-icons/lia"

function TestimonialCart() {
    return (
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
                <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                <LiaQuoteLeftSolid className="inline text-5xl text-sky-500" />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                    <LiaQuoteRightSolid className="inline text-5xl  text-sky-500" />
                </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-gray-800 text-gray-50">
                <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  bg-gray-300" />
                <p className="text-xl font-semibold leadi">Distinctio Animi</p>
                <p className="text-sm uppercase">Aliquam illum</p>
            </div>
        </div>
    )
}

export default TestimonialCart