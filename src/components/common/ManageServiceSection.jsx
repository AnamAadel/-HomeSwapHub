import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContexts } from '../../context/AuthContext';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import ManageServiceCart from './ManageServiceCart';

function ManageServiceSection() {
    const {myBaseUrl} = useAxiosSecure();
    const [myServices, setMyServices] = useState([])
    const {user} = AuthContexts();

    const handleDeleteItem = (id)=> {
      myBaseUrl.delete(`/my_services/delete/${id}`).then((res)=> {
        console.log(res.data)
        toast.success("service deleted successfully!", {
          theme: "colored",
          toastId: "success"
  
        });
      }).catch((err)=> console.log(err))
    }

    useEffect(()=> {
      myBaseUrl.get(`/my_services?email=${user?.email}`).then((res)=> setMyServices(res.data)).catch((err)=> console.log(err))
    },[myBaseUrl, user])
  return (
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="grid lg:grid-cols-2 gap-6">
  <ToastContainer />

  {myServices ? myServices?.map((item)=> (
    <ManageServiceCart key={item._id} item={item} isDelete={true} handleDeleteItem={handleDeleteItem} />
        )):
        <img src="https://cdn.vectorstock.com/i/preview-1x/84/72/flat-design-no-data-error-vector-47758472.webp" className="mx-auto h-screen max-[400px]" />
        }
  </div>
</div>
  )
}

export default ManageServiceSection