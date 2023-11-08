import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import ServiceInputBox from '../components/common/ServiceInputBox';
import { AuthContexts } from "../context/AuthContext";


function Register() {
    const { createUser } = AuthContexts();
    const [showPassword, setShowPassword] = useState(false);

    const handleCreateUser = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        console.log(email)
        const password = e.target.password.value;
        console.log(password)
        const userName = e.target.userName.value;
        console.log(userName)
        const file = e.target.file.files[0]
        console.log(file)



        const userImage = file ? file : null;
        if (/^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/.test(password)) {

            createUser(email, password, userName, userImage)
            toast.success("your registration has completed successfully", {
                toastId: "success",
                theme: "colored"
            })
        } else {
            toast.warn("The password should be greater than 6 characters, contain at least one capital letter, and have at least one special character.", {
                theme: "colored"
            });
            console.log("false")
        }
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
        console.log(showPassword)

    }
    return (
        <>
            <ToastContainer />
            <section className="bg-gray-100 text-gray-800">
                <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                    <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 ">
                        <form onSubmit={handleCreateUser}>
                            <ServiceInputBox type="text" fieldName="Your Name" value="" isReadOnly={false} name="userName" />

                            <ServiceInputBox type="require" fieldName="Your Email" value="" isReadOnly={false} name="email" />

                            <div className="relative z-0 w-full mb-6 group">
                                <input type={showPassword ? "text" : "password"} name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:border-gray-800 peer" placeholder=" " required />
                                <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-800 peer-focus:dark:text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Password</label>

                                <button className='absolute bottom-3 right-2' type='button' onClick={handleShowPassword}>{showPassword ? <AiFillEye className='text-xl' /> : <AiFillEyeInvisible className='text-xl' />}</button>
                            </div>
                            <input type="file" name='file' required className="file-input file-input-bordered w-full max-w-xs inline-block" />

                            <button type="submit" className="text-white bg-gray-800 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-800 mt-6 dark:hover:bg-gray-800 dark:focus:ring-gray-800">Submit</button>

                        </form>
                    </div>
                    <div className="lg:w-1/2 xl:w-3/5 hidden md:block bg-gray-100">
                        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                            <img src="https://source.unsplash.com/640x480/" alt="" className="rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96" />
                        </div>
                    </div>
                </div>
            </section>

        </>




    )
}

export default Register