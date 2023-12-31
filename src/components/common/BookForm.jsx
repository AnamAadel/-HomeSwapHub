import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { AuthContexts } from '../../context/AuthContext'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import DatePicker from './DatePicker'
import ServiceInputBox from './ServiceInputBox'
import TextArea from './TextArea'

function BookForm({detail}) {
  const {user} = AuthContexts();
  const {myBaseUrl} = useAxiosSecure();
  const handleHtmlForm = async (e) => {
    e.preventDefault()
    const userEmail = e.target.userEmail.value;
    const photoLink = e.target.photoLink.value;
    const serviceName = e.target.serviceName.value;
    const providerEmail = e.target.providerEmail.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const date = e.target.price.date;

    const bookedService = { photoLink, serviceName, description , userEmail , providerEmail, price , date , status: "pending" }
    

    myBaseUrl.post(`/book_service`, bookedService).then((res)=> {
      
      toast.success("your book wes completed successfully!", {
        theme: "colored",
        toastId: "success"

      });
    }).catch((err)=> console.log(err));

  }
  return (
  <>
<ToastContainer />
<div className="min-h-screen">
  <div className=" p-12 bg-white w-full">
    <h1 className="text-xl font-semibold">Hello there ?, <span className="font-normal">please fill in your information to continue</span></h1>
    <form className="mt-6 space-y-4" onSubmit={handleHtmlForm}>
          <ServiceInputBox type="text" fieldName="Service Name" value={detail.serviceName} isReadOnly={true} name="serviceName"  />
          <ServiceInputBox type="text" fieldName="Service Image" value={detail.serviceImage} isReadOnly={true} name="photoLink"  />
          <ServiceInputBox type="text" fieldName="Service Provider Email" value={detail?.serviceProvider?.providerEmail ? detail?.serviceProvider?.providerEmail : "aadelbanat@gmail.com"} isReadOnly={true} name="providerEmail"  />
          <ServiceInputBox type="text" fieldName="User email" value={user?.email} isReadOnly={true} name="userEmail"  />
          <ServiceInputBox type="text" fieldName="Price" value={detail?.servicePrice} isReadOnly={true} name="price"  />
          <DatePicker fieldName="Take Service Date" name='date' />
          <TextArea value="Special instruction" name="description" />

          <button className="p-3 bg-black rounded-full text-white w-full font-semibold">Purchase this Service</button>
    </form>
  </div>
</div>
  </>
  )
}

export default BookForm