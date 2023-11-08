import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ServiceInputBox from '../components/common/ServiceInputBox';
import TextArea from '../components/common/TextArea';
import { AuthContexts } from '../context/AuthContext';
import useAxiosSecure from '../hooks/useAxiosSecure';


function UpdateService() {
  const product = {}
  const navigation = useNavigate();
  const loadData = useLoaderData();
  const {user} = AuthContexts();
  
  const {rootUrl, myBaseUrl} = useAxiosSecure()

  console.log(loadData)

  const handleNavigate = () => {
    navigation(-1)
  }

  const handleHtmlForm = async (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoLink = e.target.photoLink.value;
    const serviceName = e.target.serviceName.value;
    const serviceArea = e.target.serviceArea.value;
    const description = e.target.description.value;
    const price = e.target.price.value;

    const service = {serviceProvider:{ providerName: name, providerImage: user.photoURL}, serviceImage: photoLink, serviceName, serviceDescription: description , providerEmail: email , serviceArea, servicePrice: price, status: "pending" }
    console.log(service)

    myBaseUrl.put(`/service_update/${loadData._id}`, service).then((res)=>{ 
      toast.success("Service updated successful.", {
        theme: "colored",
        toastId: "success"
      });
      console.log(res.data)
    }).catch((err)=> console.log(err));

  
  }
  return (
    <>
      <ToastContainer />
      <section className="bg-gray-100 text-gray-800">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracki text-center sm:text-5xl text-gray-900">Update Your Service</h2>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mt-12 space-y-12">

                <form onSubmit={handleHtmlForm}>
                  <ServiceInputBox type="text" name="name" fieldName="Your Name" value={user?.displayName} isReadOnly={true} />
                  <ServiceInputBox type="email" name="email" fieldName="Email Address" value={user?.email} isReadOnly={true} />
                  <ServiceInputBox type="text" name="serviceName" fieldName="Service Name" value={loadData?.serviceName} isReadOnly={false} />
                  <ServiceInputBox type="text" name="photoLink" fieldName="Photo Link" value={loadData?.serviceImage} isReadOnly={false} />
                  <ServiceInputBox type="text" name="price" fieldName="Price" value={loadData?.servicePrice} isReadOnly={false} />
                  <ServiceInputBox type="text" name="serviceArea" fieldName="Service Area" value={loadData?.serviceArea} isReadOnly={false} />
                  <TextArea value="Description" defaultValue={loadData?.serviceDescription} name="description" />
                  <button type="submit" className="text-white mt-6 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Add Service</button>
                </form>

              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img src="https://source.unsplash.com/random/360x480" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UpdateService