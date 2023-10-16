import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='h-full w-full'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout