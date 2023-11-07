import axios from "axios";


const axiosSecure = axios.create({
    baseURL: "sellingPointsData.json",
    withCredentials: true,
})

const myBaseUrl = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
})

const axiosTeamData = axios.create({
    baseURL: "ourTeamData.json",
    withCredentials: true,
})

const rootUrl = "http://localhost:5000";

function useAxiosSecure() {
  return {axiosSecure, myBaseUrl, axiosTeamData, rootUrl}
}

export default useAxiosSecure