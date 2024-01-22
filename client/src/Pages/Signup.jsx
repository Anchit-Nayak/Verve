import React, {useState} from 'react'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const otpflag = "Already Signed Up, Please Verify your Email."
    const [values, setValues] = useState({
        fullName:"",
        email:"",
        password:""
    });
    const [cpassword, setCpassword] = useState('');
    const navigate = useNavigate()
    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(cpassword != values.password){
           toast.error("Passwords do not match!");
        }else{
          try{
            console.log(values);
            const response = await axios.post("http://localhost:3000/user/signup", {
              ...values,
            });
            console.log(response);
            console.log(response.data.id);
            const id = response.data.id;
            toast.success("Registration Successfull!")
            navigate("/verification", {state: {key : id}});
          } catch (error){
            console.log(error);
            toast.error(error.response.data.message);
            if(error.response.data.message == otpflag){
              navigate("/signin")
            }
          }
        }
    }
  return (
    <section className="h-screen ">
    <img src='src/assets/Impermanence.jpeg' className='w-full h-screen object-cover absolute mix-blend-overlay opacity-1'></img>
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 absolute w-full">
  <h1 className='font-semibold font-dancing-script text-8xl p-7 mix-blend-plus-lighter text-slate-300'>Verve</h1>
      <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                  Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" action="" onSubmit={handleSubmit}>
                  <div>
                      <label for="fullName" className="block mb-2 text-sm font-medium  text-white">Full Name</label>
                      <input type="text" name="fullName" id="fullname" placeholder="Full Name" className=" border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="true" onChange={(e)=>setValues({...values, [e.target.name]:e.target.value })}/>
                  </div>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium  text-white">Your email</label>
                      <input type="email" name="email" id="email" className="border  sm:text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@gmail.com" required="true" onChange={(e)=> setValues({...values, [e.target.name]:e.target.value })}/>
                  </div>
                 
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium  text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className=" border  sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="true" onChange={(e)=> setValues({...values, [e.target.name]:e.target.value })}/>
                  </div>
                  <div>
                      <label for="confirm-password" className="block mb-2 text-sm font-medium  text-white">Confirm Password</label>
                      <input type="password" name="confirm-password" id="password" placeholder="••••••••" className=" border  sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="true" onChange={(e)=> setCpassword(e.target.value)}/>
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border  rounded  focus:ring-3  bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" required="true"/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label for="terms" className="font-light  text-gray-300">I accept the <a className="font-medium  hover:underline text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" className="w-full text-white   focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Create an account</button>
                  <p className="text-sm font-light  text-gray-400">
                      Already have an account? <a href="/signin" className="font-medium  hover:underline text-primary-500">Login here</a>
                  </p>
              </form>
              <Toaster/>
          </div>
      </div>
  </div>
</section>
  )
}

export default Signup