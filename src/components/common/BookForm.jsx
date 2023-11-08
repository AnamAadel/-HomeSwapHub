import React from 'react'
import { AuthContexts } from '../../context/AuthContext'
import DatePicker from './DatePicker'
import ServiceInputBox from './ServiceInputBox'
import TextArea from './TextArea'

function BookForm({detail}) {
  const {user} = AuthContexts();
  const handleHtmlForm = async (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoLink = e.target.photoLink.value;
    const serviceName = e.target.serviceName.value;
    const serviceArea = e.target.serviceArea.value;
    const description = e.target.description.value;
    const price = e.target.price.value;

    const service = { name, photoLink, serviceName, description , email , serviceArea, price }
    console.log(service)

    myBaseUrl.post(`/service_add`, service).then((res)=> console.log(res.data)).catch((err)=> console.log(err));

  }
  return (
<div className="min-h-screen">
  <div className=" p-12 bg-white w-full">
    <h1 className="text-xl font-semibold">Hello there ?, <span className="font-normal">please fill in your information to continue</span></h1>
    <form className="mt-6 space-y-4">
          <ServiceInputBox type="text" fieldName="Service Name" value={detail.serviceName} isReadOnly={true} name="serviceName"  />
          <ServiceInputBox type="text" fieldName="Service Image" value={detail.serviceImage} isReadOnly={true} name="serviceName"  />
          <ServiceInputBox type="text" fieldName="Service Provider Email" value={detail?.providerEmail ? detail?.providerEmail : "aadelbanat@gmail.com"} isReadOnly={true} name="serviceName"  />
          <ServiceInputBox type="text" fieldName="User email" value={user?.email} isReadOnly={true} name="serviceName"  />
          <ServiceInputBox type="text" fieldName="Price" value={detail?.servicePrice} isReadOnly={true} name="serviceName"  />
          <DatePicker />
          <TextArea value="Special instruction" name="description" />

          <button className="p-3 bg-black rounded-full text-white w-full font-semibold">Purchase this Service</button>
    </form>
  </div>
</div>
  )
}

export default BookForm