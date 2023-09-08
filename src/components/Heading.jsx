import React from 'react';

const Heading = () => {
  return (
    <div className="bg-blue-100 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Revolutionizing Agriculture: Discover Unbeatable Prices on Quality Agricultural Products.
          </h2>
        </div>
        <div className="md:w-1/2">
          <img
            src="src/assets/Agritech-Feature.jpg"
            alt="Agricultural Products"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Heading;
