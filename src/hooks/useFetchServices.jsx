import { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';

function useFetchServices(limit, search) {
    
    const [serviceData, setServiceData] = useState([]);
    const {myBaseUrl} = useAxiosSecure();
    console.log(serviceData)

    useEffect(()=> {
        function fetchData(){
            if(limit === "all"){
                if(search === ""){
                    myBaseUrl.get("/services/all").then(res => setServiceData(res.data)).catch(err => console.log(err))

                }else{
                    myBaseUrl.get(`/services?search=${search}`).then(res => setServiceData(res.data)).catch(err => console.log(err))

                }
            }else{
                myBaseUrl.get(`/services?limit=${limit}`).then(res => setServiceData(res.data)).catch(err => console.log(err))

            }
        }
        fetchData()
    },[myBaseUrl, limit, search])
  return {serviceData}
}

export default useFetchServices