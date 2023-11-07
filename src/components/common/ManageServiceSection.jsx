import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import ManageServiceCart from './ManageServiceCart';

function ManageServiceSection() {
    const {myBaseUrl} = useAxiosSecure();
    const [myServices, setMyServices] = useState([])

    useEffect(()=> {
      myBaseUrl.get('/my_services').then((res)=> setMyServices(res.data)).catch((err)=> console.log(err))
    },[myBaseUrl])
  return (
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="grid lg:grid-cols-2 gap-6">

  {myServices ? myServices?.map((item)=> (
    <ManageServiceCart key={item._id} item={item} isDelete={true} />
        )):
        <img src="https://cdn.vectorstock.com/i/preview-1x/84/72/flat-design-no-data-error-vector-47758472.webp" className="mx-auto h-screen max-[400px]" />
        }
  </div>
</div>
  )
}

export default ManageServiceSection