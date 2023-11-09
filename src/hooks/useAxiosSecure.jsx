import axios from "axios";




const myBaseUrl = axios.create({
    baseURL: "https://back-end-vercel-seven.vercel.app",
    withCredentials: true,
})



const rootUrl = "https://back-end-vercel-seven.vercel.app";

function useAxiosSecure() {
  return { myBaseUrl, rootUrl}
}

export default useAxiosSecure