import React from 'react'
import Navber from './layouts/Navber'
import { Outlet } from 'react-router-dom'
import Footer from './layouts/Footer'

const RoutLayout = () => {
  return (
    <>
    <Navber/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RoutLayout