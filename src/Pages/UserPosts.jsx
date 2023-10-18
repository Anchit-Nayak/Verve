import React from 'react'
import UserPostCards from '../Components/UserPosts/UserPostCards';
import Events from '../Components/Home/Events';
import Contact from '../Components/Home/Contact';

const UserPosts = () => {
  return (
    <div className='wrapper-container my-7'>
      <h1 className='text-4xl font-bold text-gray-50 mb-4'>My Posts</h1>
      <div className='flex flex-row'>
      <div className='w-full md:w-4/5'>
      <UserPostCards/>
      </div>
      <div className='hidden md:flex flex-col w-1/3 ml-5'>
        <Events/>
        <Contact/>
      </div>
      </div>
    </div>
  )
}

export default UserPosts