import React from 'react'
import { Outlet } from "react-router";
import Navbar from '../ui/Navbar';

const MainWebsite = () => {
  return (
    <div className=' bg-screen-100 w-full'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default MainWebsite