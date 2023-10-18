import React from 'react'
import BookmarkCards from '../Components/Bookmarks/BookmarkCards'
import Events from '../Components/Home/Events';
import Contact from '../Components/Home/Contact';

const Bookmarks = () => {
  return (
    <div className='wrapper-container my-7'>
      <h1 className='text-4xl font-bold text-gray-50 mb-4'>My Bookmarks</h1>
      <div className='flex flex-row'>
      <div className='w-full md:w-4/5'>
      <BookmarkCards/>
      </div>
      <div className='hidden md:flex flex-col w-1/3 ml-5'>
        <Events/>
        <Contact/>
      </div>
      </div>
    </div>
  )
}

export default Bookmarks