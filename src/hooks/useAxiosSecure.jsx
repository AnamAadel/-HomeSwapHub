import axios from "axios";


const axiosSecure = axios.create({
    baseURL: "sellingPointsData.json",
    withCredentials: true,
})

const axiosServiceData = axios.create({
    baseURL: "servicesData.json",
    withCredentials: true,
})

function useAxiosSecure() {
  return {axiosSecure, axiosServiceData}
}

export default useAxiosSecure