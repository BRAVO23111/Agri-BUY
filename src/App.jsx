import "./App.css";
import { Routes, Route } from 'react-router-dom';
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import WeatherInfo from "./components/WeatherInfo";
import Pricecard from "./components/Pricecard";
import Headers from "./components/Headers";
import Layout from "./components/Layout";
import Weather from "./components/Weather";
import Login from "./components/Login";
import RegisterPage from "./components/Register";
import ContactUs from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Headers />} />
          <Route path="/pricecard" element={<Pricecard />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
