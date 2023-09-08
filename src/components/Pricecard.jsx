import React, { useState } from 'react';

const Pricecard = () => {
  const [name, setName] = useState('');
  const [cropwise,setCropwise] = useState('');
  const [variety, setVariety] = useState('');
  const [price, setPrice] = useState('');
  async function getCity(e) {
    e.preventDefault();
    const response = await fetch(`https://retoolapi.dev/jseK3r/data?Commodity=${name}`)
    const data = await response.json();
    console.log(data);
    setCropwise(data[0].Crops);
    setPrice(data[0].Price)
    setVariety(data[0].Variety)
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='text-2xl mb-6'>Check today's price</div>
      <div className='mb-4'>
        <input
          type='text'
          placeholder='Enter Crop Name'
          className='border rounded px-2 py-1'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" onClick={getCity}>Go</button>
      </div>
      <div className="w-4/5 md:w-3/5 bg-white rounded-lg p-4 md:p-8 flex flex-col md:flex-row gap-4 md:gap-10">
        <div className="md:w-1/4 md:border-r-2 border-slate-300 flex flex-col gap-2 items-center">
          <p className="text-sm text-slate-400 font-semibold">Name</p>
          <p className="md:text-2xl text-black font-bold">{name}</p>
        </div>
        <div className="md:w-1/4 md:border-r-2 border-slate-300 flex flex-col gap-2 items-center">
          <p className="text-sm text-slate-400 font-semibold">Crop-wise</p>
          <p className="md:text-2xl text-black font-bold">{cropwise}</p>
        </div>
        <div className="md:w-1/4 md:border-r-2 border-slate-300 flex flex-col gap-2 items-center">
          <p className="text-sm text-slate-400 font-semibold">Price(in ₹)</p>
          <p className="md:text-2xl text-black font-bold">₹{price}</p>
        </div>
        <div className="md:w-1/4 md:border-r-2 border-slate-300 flex flex-col gap-2 items-center">
          <p className="text-sm text-slate-400 font-semibold">Variety</p>
          <p className="md:text-2xl text-black font-bold">{variety}</p>
        </div>
        {/* Add similar sections for Max Price and Market Name */}
      </div>
    </div>
  );
};

export default Pricecard;
