import React from 'react'
import {BsGithub, BsLinkedin, BsInstagram} from "react-icons/bs";
const Contact = () => {
  return (
    <div className='text-gray-50 w-full mt-5 max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <h1 className='font-bold text-xl'>Contact Us</h1>
        <div className='mt-3'>
        <p className='font-semibold text-sm'>Built and deployed by <a href='https://github.com/Anchit-Nayak' target="_blank" className='text-primary-600 hover:underline'>Anchit Nayak</a></p>
        <div className='flex justify-center gap-5 mt-4'> 

        <a href="https://github.com/Anchit-Nayak" target='_blank'><BsGithub className='w-7 h-7 hover:scale-110 ease-out duration-300'/></a>
        <a href="https://www.linkedin.com/in/anchit-nayak/" target='_blank'><BsLinkedin className='w-7 h-7 hover:scale-110 ease-out duration-300'/></a>    
        <a href="https://www.instagram.com/_anchitttt/" target='_blank'><BsInstagram className='w-7 h-7 hover:scale-110 ease-out duration-300'/></a>
        </div>
        <hr className='h-px my-3 border-0 bg-gray-700'/>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-gray-500 text-xs' >© 2023 Verve™. All Rights Reserved.</h1>
            <div className='flex justify-between w-4/5 text-gray-300 text-xs mt-4'>
            <h1 className='hover:text-primary-600 cursor-pointer'>About</h1>
            <p>|</p>
            <h1 className='hover:text-primary-600 cursor-pointer'>Privacy</h1>
            <p>|</p>
            <h1 className='hover:text-primary-600 cursor-pointer'>Terms</h1>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Contact