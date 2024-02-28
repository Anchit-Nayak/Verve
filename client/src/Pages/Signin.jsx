import React, { useState } from 'react'
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate();
    const otpflag = "Verify your email address by entering the OTP sent to your email"
    const [values, setValues] = useState({
        email: "",
        password: ""
    })
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:3000/user/login', {
            ...values
          })
          console.log(response);
          localStorage.setItem("accessToken",response.data.accessToken)
          localStorage.setItem("userId",response.data._id)
          localStorage.setItem("username",response.data.username)
          localStorage.setItem("resfreshToken",response.data.refreshToken)
          toast.success("Login successful! Redirecting to Homescreen")
          navigate("/");  
        } catch (error) {
            console.log(error);
            toast.error(error.response.data)
            if(error.response.data == otpflag){
                const id = error.response.data.userId;
                navigate("/verification", {state: {key : id}});
            }
        }
    }
   return (
    <section class="h-screen">
        <img src='src/assets/Impermanence.jpeg' className='w-full h-screen object-cover absolute mix-blend-overlay opacity-1'></img>
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 absolute w-full">
  <h1 className='font-semibold font-dancing-script text-8xl p-7 mix-blend-plus-lighter text-slate-300'>Verve</h1>
      <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="" onSubmit={(e)=> handleSubmit(e)}>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="true" onChange={e => setValues({...values, [e.target.name]:e.target.value})}/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true" onChange={e => setValues({...values, [e.target.name]:e.target.value})}/>
                  </div>
                  <div class="flex items-center justify-end">
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="/signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
          <Toaster/>
      </div>
  </div>
</section>
  )
}

export default Signin