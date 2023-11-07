import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ServiceInputBox from "../components/common/ServiceInputBox";
import TextArea from "../components/common/TextArea";
import useAxiosSecure from "../hooks/useAxiosSecure";


function AddService() {
  const {rootUrl, myBaseUrl} = useAxiosSecure()
  const navigation = useNavigate();

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

    const service = { name, photoLink, serviceName, description , email , serviceArea, price }
    console.log(service)

    myBaseUrl.post(`/service_add`, service).then((res)=> console.log(res.data)).catch((err)=> console.log(err));

    // try {
    //   const res = await fetch(`http://localhost:5000/service_add`, {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json"
    //     },
    //     credentials: 'include',
    //     body: JSON.stringify(service)
    //   })
    //   const data = await res.json()
    //   console.log(data)
    //   if (data.acknowledged) {
    //     toast.success("Product added successfully!", {
    //       theme: "colored",
    //       toastId: "success"

    //     });
    //   }
    // } catch (error) {
    //   console.log(error)
    //   toast.warn(`An error happened`, {
    //     theme: "colored"
    //   });
    // }
  }
  return (
    <>
      <ToastContainer />
      <section className="bg-gray-100 text-gray-800">
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-bold tracki text-center sm:text-5xl text-gray-900">Add a new Service</h2>
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<div className="mt-12 space-y-12">
        
<form onSubmit={handleHtmlForm}>
      <ServiceInputBox type="text" name="name" fieldName="Your Name" value="Anamul Amin" isReadOnly={true} />
      <ServiceInputBox type="email" name="email" fieldName="Email Address" value="Anamul@gmail.com" isReadOnly={true} />
      <ServiceInputBox type="text" name="serviceName" fieldName="Service Name" value="" isReadOnly={false} />
      <ServiceInputBox type="text" name="photoLink" fieldName="Photo Link" value="" isReadOnly={false} />
      <ServiceInputBox type="text" name="price" fieldName="Price" value="" isReadOnly={false} />
      <ServiceInputBox type="text" name="serviceArea" fieldName="Service Area" value="" isReadOnly={false} />
      <TextArea value="Description" name="description" />
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

export default AddService