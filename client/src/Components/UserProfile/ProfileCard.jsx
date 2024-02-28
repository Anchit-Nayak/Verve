import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MetroSpinner } from "react-spinners-kit";

const ProfileCard = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem('userId');
  const username = localStorage.getItem('username');
  useEffect(() => {
     axios.post(`http://localhost:3000/user/userdetails`, { id: userId })
     .then((res) => {
        // console.log(res.data);
        setUser(res.data);
        setLoading(false);
     })
  }, []);
  return (
    <div className='wrapper-container flex items-center justify-center mt-7'>
    {loading ? 
    <div className='w-full h-full flex items-center justify-center'>
      <MetroSpinner/>
    </div> :
    <div className='md:w-1/2 w-full bg-gray-800 h-4/5 mt-10 rounded-xl py-5 px-3'>
     <div className='relative'>
        <img src="src/assets/blue.jpg" alt="" className='rounded-md h-[170px] w-full object-cover absolute mix-blend-overlay' />
     </div>
     <div className='flex justify-center items-center mt-[210px] flex-col'>
     <img class="w-[150px] rounded-full absolute mb-64 shadow-2xl" src="https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg" alt="user profile"/>
     <h1 className='text-4xl font-semibold my-2 mt-5'>{user.userDetails.fullName}</h1>
     <h1 className='text-md font-medium mb-2 text-primary-500'>{user.userDetails.username}</h1>
     </div>
     <div className='text-center'>
     <p className='text-gray-400'>Posts written: <span className='text-primary-500'>{user.recentPosts.length}</span> </p>
     <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, architecto quos minima voluptatum excepturi dolor, incidunt pariatur molestiae animi voluptate exercitationem porro iusto adipisci reiciendis totam nemo non perspiciatis. A impedit magnam tempore explicabo laboriosam.</p>
     </div>
    </div>
    }
    </div>
  )
}

export default ProfileCard