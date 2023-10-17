import React from 'react'
import PostContainer from '../Components/Post/PostContainer'
import Comments from '../Components/Post/Comments'
import Events from '../Components/Home/Events';
import Contact from '../Components/Home/Contact';

const PostDetail = () => {
  return (
    <div className='w-full h-96 relative bg-gradient-to-b from-gray-500 to-gray-900'>
            <img src="src/assets/terraform.jpg" alt=""  className='w-full h-full object-cover absolute mix-blend-overlay'/>
            <div className='wrapper-container p-4 py-48 h-screen'>
                <h1 className='text-slate-300 font-lato font-bold text-3xl md:text-5xl mb-10'>Terraform for beginners</h1>
                <div className='flex flex-col'>
                <PostContainer/>
                <div className='flex items-start flex-col md:flex-row'>
                <Comments/>
                <div className='w-full md:w-auto flex flex-col md:flex-col py-8 lg:py-16'>
                <div className='flex'>
                <Events/>
                </div>
                <div className='w-full pb-3'>
                <Contact/>
                </div>
                </div>
                </div>
                </div>
            </div>
    </div>
  )
}

export default PostDetail