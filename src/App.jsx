import "./App.css";
import { Routes, Route } from 'react-router-dom';
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Navigation from "./components/Navigation";
import WeatherInfo from "./components/WeatherInfo";
import Pricecard from "./components/Pricecard";
import Headers from "./components/Headers";
import Layout from "./components/Layout";
import Weather from "./components/Weather";

function App() {
  return (
    <>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Headers />} />
        <Route path="/pricecard" element={<Pricecard/>}/>
        <Route path="/weather" element={<Weather/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
