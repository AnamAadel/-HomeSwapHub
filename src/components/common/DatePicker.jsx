import React from 'react'

function DatePicker() {
  return (
    
<div className="relative max-w-sm">
  <label className='peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400'>Take Service Date</label>
  <input datepicker type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"  />
</div>

  )
}

export default DatePicker