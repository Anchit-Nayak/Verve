import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'

const Layout = () => {
  return (
    <div className='h-full w-full'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout