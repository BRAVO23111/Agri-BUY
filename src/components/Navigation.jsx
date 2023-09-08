import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="relative container mx-auto p-6">
    <div className="flex items-center justify-between">
      <div className="text-xl pt-2">
        <Link to='/'>AgriBuy</Link>
      </div>
      <div className="flex space-x-6">
        <Link to="/weather">Weather</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/pricecard">Prices</Link>
        <a href="#">Login</a>
      </div>
    </div>
  </nav>
  )
}

export default Navigation
