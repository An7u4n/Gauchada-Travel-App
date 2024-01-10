import React from 'react';
import PropTypes from 'prop-types';
import { Travel } from '../../../models/travel.class';

CardComponent.propTypes = {
  travel: PropTypes.instanceOf(Travel),
};

export default function CardComponent({ travel }) {
  let options = { hour: 'numeric', minute: 'numeric' };
  let startTime = new Intl.DateTimeFormat('es-ES', options).format(travel.startTime);
  let endTime = new Intl.DateTimeFormat('es-ES', options).format(travel.endTime);
  let driverImage = 'https://cdn.blablacar.com/user-profile-picture/tr5q9NSBc8G3hUQbxoviTd/thumbnail_144x144.jpeg';
  const url = 'https://localhost:7037/api/Travels/' + travel.id;

  const onBorrar = () => {
    fetch(url, { method: 'DELETE', headers: { 'Content-Type': 'application/json' } })
      .then((response) => {
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        window.location.reload();
        return response.json;
      })
      .catch((error) => console.log(error));
  };

  return (
    <li className="p-4 w-[576px] bg-white shadow-2xl elevate h-52 rounded-3xl block relative m-4">
      {/* Top Card */}
      <div className="flex justify-between h-2/3">
        <div className="flex justify-between">
          <div className="px-2">
            <p className="pb-2">{startTime}</p>
            <p className="pt-2">{endTime}</p>
          </div>
          <svg width="20" height="90" xmlns="http://www.w3.org/2000/svg">
            <line x1="10" y1="15" x2="10" y2="50" stroke="black" strokeWidth="4" />
            <circle cx="10" cy="12" r="5" fill="gray" />
            <circle cx="10" cy="55" r="5" fill="gray" />
          </svg>
          <div className="px-2">
            <p className="text-left pb-2">{travel.originCity}</p>
            <p className="text-left pt-2">{travel.endCity}</p>
          </div>
        </div>
        <p className="font-bold">$ {travel.price}</p>
      </div>

      {/* Bottom Card */}
      <div className="flex justify-between">
        <div className="flex items-center justify-center">
          <img alt="Driver" src={driverImage} className="h-16 rounded-full border-blue-400 border-2 border-solid" />
          <p className="px-2">Id de viaje: {travel.id}</p>
        </div>
        <div>Medallas</div>
      </div>

      {/* X para borrar */}
      <div className="absolute bottom-2 right-2 cursor-pointer bg-red-500 text-white rounded-full p-2" onClick={onBorrar}>
        X
      </div>
    </li>
  );
}
