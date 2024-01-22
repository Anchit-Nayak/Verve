import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const OtpVerification = () => {
  const { state } = useLocation();
  const id=state.key;
  const [num, setNum] = useState('');
  const navigate = useNavigate()
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:3000/user/verifyotp", {
        id: id,
        otp: num,
      });
      console.log(response);
      localStorage.setItem("accessToken",response.data.accessToken)
      localStorage.setItem("userId",response.data._id)
      localStorage.setItem("email",response.data.email)
      toast.success("Registration Successfull!")
      navigate('/');
    } catch (error){
      toast.error(error.response.data.message)
      console.log(error);
    }
}
  return (
    <div>
<div class="relative flex min-h-screen flex-col justify-center overflow-hidden py-12 text-white">
  <div class="relative bg-gray-700 px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
    <div class="mx-auto flex w-full max-w-md flex-col space-y-10">
      <div class="flex flex-col items-center justify-center text-center space-y-2">
        <div class="font-semibold text-3xl">
          <p>Please verify your email</p>
        </div>
        <div class="flex flex-row text-sm font-medium text-gray-400">
          <p>We have sent a code to your email </p>
        </div>
      </div>

      <div>
        <form onSubmit={(e)=>handleSubmit(e)} action="" method="post">
          <div class="flex flex-col space-y-10">
            <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
              <div class="w-full h-12 ">
                <input class="font-bold w-full h-full flex  items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-lg bg-gray-800 focus:bg-gray-700 focus:ring-1 " type="text" name="" id="" maxLength={6} onChange={event => setNum(event.target.value)} />
              </div>
            </div>

            <div class="flex flex-col space-y-5">
              <div>
              <button type="submit" class="w-full text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Verify</button>
              </div>

              <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                <p>Didn't recieve code?</p> <a class="flex flex-row items-center text-primary-500 hover:text-primary-400" href="" target="_blank" rel="noopener noreferrer">Resend</a>
              </div>
            </div>
          </div>
        </form>
        <Toaster/>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default OtpVerification