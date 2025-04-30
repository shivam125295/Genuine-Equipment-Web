import React from 'react'

const BatteryCharger = () => {
  return (
    <div className='gap-x-8'>

    <div className="relative h-[200px] bg-red-400   ">
      <div className="absolute top-2 left-2 w-full h-full">

      
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9emqXbcigb5mA548XAap4Od4aca53lyr79Q&s"
          alt="Pallet Trucks"
          className="w-90 h-45  object-cover center"
          />
          </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4 py-16 text-end text-white">
            <h1 className="text-white text-5xl font-bold">Battery Charger</h1>
          </div>
          </div>
        </div>
      </div>
  )
}

export default BatteryCharger
