import React from 'react'

const ProfileCard = () => {
  return (
    <div className='md:w-1/2 w-full bg-gray-800 h-4/5 mt-10 rounded-xl py-5 px-3'>
     <div className='relative'>
        <img src="src/assets/blue.jpg" alt="" className='rounded-md h-[170px] w-full object-cover absolute mix-blend-overlay' />
     </div>
     <div className='flex justify-center items-center mt-[210px] flex-col'>
     <img class="w-[150px] rounded-full absolute mb-52 shadow-2xl" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Michael Gough"/>
     <h1 className='text-4xl font-semibold mb-2'>Bonnie Green</h1>
     </div>
     <div className='text-center'>
     <p className='text-gray-400'>Posts written: <span className='text-primary-500'>10</span> </p>
     <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, architecto quos minima voluptatum excepturi dolor, incidunt pariatur molestiae animi voluptate exercitationem porro iusto adipisci reiciendis totam nemo non perspiciatis. A impedit magnam tempore explicabo laboriosam.</p>
     </div>
    </div>
  )
}

export default ProfileCard