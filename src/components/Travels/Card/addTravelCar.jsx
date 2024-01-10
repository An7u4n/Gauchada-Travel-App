import React from 'react';

export default function AddTravelCar() {
  return (
    <form className="p-6 max-w-xl bg-white shadow-2xl h-72 rounded-3xl block mt-8 mx-auto border-gray-900 border-2">
      <div className="relative z-0 w-full group mb-6">
        <input type="text" name="origin" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 focus:outline-none focus:ring-0 peer" placeholder=" " required />
        <label htmlFor="origin" id="origin" className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Origin
        </label>
      </div>
      <div className="relative z-0 w-full group mb-6">
        <input type="text" name="destination" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 focus:outline-none focus:ring-0 peer" placeholder=" " required />
        <label htmlFor="destination" id="destination" className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Destination
        </label>
      </div>

      <div className="flex items-center mb-6">
        <label htmlFor="start" className="mr-4 text-gray-400">
          Start Time:
        </label>
        <input type="date" id="fecha" name="start" className="text-gray-900 mr-4" required />
        <input type="time" id="hora" name="hora" className="p-2 border rounded text-gray-900" />
      </div>

      <button type="submit" className="bg-gray-900 font-bold text-white h-12 w-12 rounded-full focus:outline-none focus:ring focus:border-blue-300 mt-8">
        +
      </button>
    </form>
  );
}
