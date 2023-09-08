import React from 'react'
import FeatureCard from './FeatureCard'
import Footer from './Footer'
import Heading from './Heading'
import Navigation from './Navigation'
import WeatherInfo from './WeatherInfo'

const Headers = () => {
  return (
    <div>
        <Heading/>
        <FeatureCard/>
        <WeatherInfo/>
        <Footer/>
    </div>
  )
}

export default Headers