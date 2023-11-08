import { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';

function useFetchServices() {
    
    const [serviceData, setServiceData] = useState([]);
    const {myBaseUrl} = useAxiosSecure();

    useEffect(()=> {
        function fetchData(){
            myBaseUrl.get("/services/all").then(res => setServiceData(res.data)).catch(err => console.log(err))
        }
        fetchData()
    },[myBaseUrl])
  return serviceData
}

export default useFetchServices