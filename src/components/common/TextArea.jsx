import React from 'react'

function TextArea() {
    return (
        <div>
            <label htmlFor="hs-about-contacts-1" className="sr-only">Details</label>
            <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Details"></textarea>
        </div>
    )
}

export default TextArea