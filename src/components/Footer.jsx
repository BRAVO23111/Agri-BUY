import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white p-4">
    <div className="container mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} WeatherWise. All rights reserved.</p>
      <p>Address: 1234 Farm Road, Agricultureville</p>
      <p>Email: info@weatherwise.com</p>
    </div>
  </div>
  )
}

export default Footer