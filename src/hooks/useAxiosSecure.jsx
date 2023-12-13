import axios from "axios";




const myBaseUrl = axios.create({
    baseURL: "https://back-end-vercel-seven.vercel.app",
})



function useAxiosSecure() {
  return { myBaseUrl}
}

export default useAxiosSecure