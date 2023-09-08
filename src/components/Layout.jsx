import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'
import Navigation from './Navigation'
const Layout = () => {
  return (
    <div>
        <Navigation/>
    <Outlet/>
    </div>
  )
}

export default Layout