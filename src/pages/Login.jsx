
import { ToastContainer } from "react-toastify";
import Form from "../components/login/Form";


function Login() {
    
    return (
        <>

            <ToastContainer />

            <div className="relative overflow-hidden">
                <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
                    <div className="md:pr-8 flex justify-center md:w-1/2 xl:pr-0 xl:w-5/12">
                        <Form  />
                    </div>
                </div>

                <div className="hidden md:block md:absolute md:top-0 md:left-1/2 md:right-0 h-full bg-[url('https://images.pexels.com/photos/6197122/pexels-photo-6197122.jpeg?auto=compress&cs=tinysrgb&w=400')] bg-no-repeat bg-center bg-cover"></div>
            </div>

        </>

    )
}

export default Login