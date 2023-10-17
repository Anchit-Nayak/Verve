import React from 'react'
import CardLayout from '../Components/Home/CardLayout';
import Events from '../Components/Home/Events';
import Contact from '../Components/Home/Contact';

const Home = () => {
  return (
    <div className='wrapper-container my-7'>
      <div className='flex flex-row'>
      <div className='w-full md:w-4/5'>
      <CardLayout/>
      </div>
      <div className='hidden md:flex flex-col w-1/3 ml-5'>
        <Events/>
        <Contact/>
      </div>
      </div>
    </div>
  )
}

export default Home