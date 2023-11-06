import axios from "axios";


const axiosSecure = axios.create({
    baseURL: "sellingPointsData.json",
    withCredentials: true,
})

const axiosServiceData = axios.create({
    baseURL: "servicesData.json",
    withCredentials: true,
})

const axiosTeamData = axios.create({
    baseURL: "ourTeamData.json",
    withCredentials: true,
})

function useAxiosSecure() {
  return {axiosSecure, axiosServiceData, axiosTeamData}
}

export default useAxiosSecure