import React from 'react';

function AddTravelCard() {
  const dataHandler = (e) => {
    e.preventDefault();
    const startTime = new Date(e.target.start.value);
    const endTime = new Date(e.target.end.value);

    const hourStart = new Date(`2000-01-01T${e.target.hourStart.value}`);
    const hourEnd = new Date(`2000-01-01T${e.target.hourEnd.value}`);

    startTime.setHours(hourStart.getHours());
    startTime.setMinutes(hourStart.getMinutes());
    endTime.setHours(hourEnd.getHours());
    endTime.setMinutes(hourEnd.getMinutes());

    const url = 'https://localhost:7037/api/Travels';
    const travel = {
      driverId: 0,
      originCity: e.target.origin.value,
      endCity: e.target.destination.value,
      price: e.target.price.value,
      startTime: startTime,
      endTime: endTime,
    };
    fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(travel) })
      .then((response) => {
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        window.location.reload();
        return response.json;
      })
      .catch((error) => console.log(error));
  };

  return (
    <form className="p-6 max-w-xl bg-white shadow-2xl h-72 rounded-3xl block mt-8 mx-auto border-gray-900 border-2" onSubmit={dataHandler}>
      <div className="relative z-0 w-full group mb-6">
        <input type="text" name="origin" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 focus:outline-none focus:ring-0 peer" placeholder=" " required />
        <label htmlFor="origin" className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Origin
        </label>
      </div>
      <div className="relative z-0 w-full group mb-6">
        <input type="text" name="destination" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 focus:outline-none focus:ring-0 peer" placeholder=" " required />
        <label htmlFor="destination" className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Destination
        </label>
      </div>
      <div>
        <div className="flex items-center mb-2">
          <label htmlFor="start" className="mr-4 text-gray-400">
            Start Time:
          </label>
          <input type="date" name="start" className="text-gray-900 mr-4" required />
          <input type="time" id="hourStart" name="hourStart" className="p-2 border rounded text-gray-900" />
          <div className="relative z-0 group mb-6 ml-4">
            <input type="number" name="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 focus:outline-none focus:ring-0 peer appearance-none" placeholder=" " required />
            <label htmlFor="price" className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Price
            </label>
          </div>
        </div>

        <div className="flex items-center">
          <label htmlFor="end" className="mr-4 text-gray-400">
            End Time:
          </label>
          <input type="date" id="end" name="end" className="text-gray-900 mr-4" required />
          <input type="time" id="hourEnd" name="hourEnd" className="p-2 border rounded text-gray-900" />
        </div>
      </div>

      <style>
        {`
          .appearance-none::-webkit-inner-spin-button,
          .appearance-none::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          .appearance-none {
            -moz-appearance: textfield;
          }
        `}
      </style>

      <button type="submit" className="bg-gray-900 font-bold text-white h-12 w-12 rounded-full focus:outline-none focus:ring focus:border-blue-300 mt-2.5">
        +
      </button>
    </form>
  );
}

export default AddTravelCard;
