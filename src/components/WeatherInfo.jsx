import React from "react";
import { Link } from "react-router-dom";

const WeatherInfo = () => {
  return (
    <div className="bg-blue-100 p-8 text-black text-center">
      <div className="text-4xl font-bold mb-4">
        <Link to="/weather" className="hover:text-red-700">
          WeatherWise
        </Link>
      </div>
      <div className="text-2xl font-semibold mb-4">
        Your Ultimate Source for Precision Weather Information
      </div>
      <div className="text-lg mb-8">
        WeatherWise, a part of AgriBuy, empowers farmers with precision weather
        data to make informed decisions for their daily farming activities.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
        <div className="bg-white text-black font-bold p-4 rounded-lg shadow-md">
          <div className="text-2xl font-semibold mb-2">What You Get</div>
          <ul className="list-inside">
            <li>Daily temperature forecasts for your location</li>
            <li>Rainfall predictions and probabilities</li>
            <li>Growing degree days tailored to your crops</li>
          </ul>
        </div>
        <div className="bg-white text-black font-bold p-4 rounded-lg shadow-md">
          <div className="text-2xl font-semibold mb-2">Farm Smart</div>
          <ul className="list-inside">
            <li>Weather alerts for adverse conditions</li>
            <li>Optimize your farming practices</li>
            <li>Make every farming day count with WeatherWise</li>
          </ul>
        </div>
      </div>
      <div className="text-lg mt-8">
        Unlock the power of WeatherWise for smarter and more profitable farming.
      </div>
    </div>
  );
};

export default WeatherInfo;
