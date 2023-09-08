import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold">
            <Link to='/' className="text-blue-600 hover:text-blue-800 transition duration-300">AgriBuy</Link>
          </div>
          <div className="flex space-x-6 font-bold">
            <Link to="/weather" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</Link>
            <Link to="/pricecard" className="text-gray-600 hover:text-blue-600 transition duration-300">Prices</Link>
            <Link to='/Login'className="text-gray-600 hover:text-blue-600 transition duration-300">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
