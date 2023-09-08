import React from 'react'
import { Link } from 'react-router-dom'

const WeatherInfo = () => {
  return (
    <div className="flex justify-center items-center">
    <div className="p-6 text-center">
      <div className="text-2xl font-bold mb-20">
        WeatherWise
      </div>
      <div className="text-lg mt-4">
        <p>
          Your Ultimate Source for Precision Weather Information.
          Our comprehensive WeatherWise offers farmers precise weather data tailored to their specific crops. Stay informed about temperature fluctuations, rainfall forecasts, and growing degree days, ensuring optimal crop management and higher yields.
        </p>
        <Link to='/weather' className='font-bold'>Checkout Todays weather</Link>
      </div>
    </div>
  </div>
  )
}

export default WeatherInfo
