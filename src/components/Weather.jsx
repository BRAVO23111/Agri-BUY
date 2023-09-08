import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [maxTemperature, setMaxTemperature] = useState(null);
  const [minTemperature, setMinTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState("");

  async function getWeather() {
    const apiKey = "3d21a4ae9b35ec83f4822aec8431d0ac";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log("Error");
      }
      const data = await response.json();
      const { main, wind } = data;

      setMaxTemperature(main.temp_max);
      setMinTemperature(main.temp_min);
      setHumidity(main.humidity);
      setWind(wind.speed);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-3xl font-semibold mb-4">Check Today's Weather</div>
      <div className="weather-container bg-white p-4 rounded-lg shadow-md">
        <div className="input-container flex items-center space-x-4 mb-4">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="rounded-full px-4 py-2 border border-gray-300 outline-none"
          />
          <button
            className="btn btn-primary px-4 py-2 rounded-full"
            onClick={getWeather}
          >
            Go
          </button>
        </div>
        {city && (
          <>
            <h2 className="text-2xl">City: {city}</h2>
            <h2 className="text-2xl">Max Temperature: {maxTemperature}°C</h2>
            <h2 className="text-2xl">Min Temperature: {minTemperature}°C</h2>
            <h2 className="text-2xl">Humidity: {humidity}%</h2>
            <h2 className="text-2xl">Wind: {wind} m/s</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default Weather;
