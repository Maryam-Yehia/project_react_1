import React from 'react'
import Navbar from '../navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}
