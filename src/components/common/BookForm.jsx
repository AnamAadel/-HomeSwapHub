import React from 'react'
import DatePicker from './DatePicker'
import ServiceInputBox from './ServiceInputBox'
import TextArea from './TextArea'

function BookForm() {
  return (
<div className="min-h-screen">
  <div className=" p-12 bg-white w-full">
    <h1 className="text-xl font-semibold">Hello there ?, <span className="font-normal">please fill in your information to continue</span></h1>
    <form className="mt-6 space-y-4">
          <ServiceInputBox type="text" fieldName="Service Name" value="" isReadOnly={true} name="serviceName"  />
          <ServiceInputBox type="text" fieldName="Service Image" value="" isReadOnly={true} name="serviceName"  />
          <ServiceInputBox type="text" fieldName="Service Provider Email" value="" isReadOnly={true} name="serviceName"  />
          <ServiceInputBox type="text" fieldName="User email" value="" isReadOnly={true} name="serviceName"  />
          <ServiceInputBox type="text" fieldName="Price" value="" isReadOnly={true} name="serviceName"  />
          <DatePicker />
          <TextArea value="Special instruction" name="description" />

          <button className="p-3 bg-black rounded-full text-white w-full font-semibold">Purchase this Service</button>
    </form>
  </div>
</div>
  )
}

export default BookForm