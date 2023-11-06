import React from 'react'

function InputBox({name, type}) {
  return (
    <div>
                <label htmlFor="hs-firstname-contacts-1" className="sr-only">{name}</label>
                <input type={type ? type : "text"} name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder={name} />
              </div>
  )
}

export default InputBox