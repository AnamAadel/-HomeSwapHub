import React, { useEffect, useState } from 'react';
import Header from '../components/my_shadules/Header';
import WorkTable from '../components/my_shadules/WorkTable';
import { AuthContexts } from '../context/AuthContext';
import useAxiosSecure from '../hooks/useAxiosSecure';

function MySchedules() {
  const [myBooking, setMyBooking] = useState([])
  const [pendingWorks, setPendingWorks] = useState([])
   const {myBaseUrl} = useAxiosSecure();
   const {user} = AuthContexts();
   
	const [items, setItems] = useState([]);

   console.log(myBooking)
   console.log(pendingWorks)
  useEffect(()=> {
    const fetchBookedService = ()=> {
      myBaseUrl.get(`/my_bookings?email=${user?.email}`).then((res)=>{
         setMyBooking(res.data)
        console.log(res.data)
      }).catch((err)=> console.log(err))
    }
    fetchBookedService()

    const fetchPendingWords = ()=> {
      myBaseUrl.get(`/pending_work?email=${user?.email}`).then((res)=>{
         setPendingWorks(res.data)
         console.log(res.data)
        }).catch((err)=> console.log(err))
    }
    fetchPendingWords()
  }, [myBaseUrl, user])
  return (
    <>
      <Header heading="My Bookings" />
      <WorkTable data={myBooking} isStatus={false}  />

      <Header heading="Pending works" />
      <WorkTable data={pendingWorks} setPendingWorks={setPendingWorks} isStatus={true} />
    </>
  )
}

export default MySchedules