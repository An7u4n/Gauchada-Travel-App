import React from 'react';

export default function TopCard({ travel }) {
  let options = { hour: 'numeric', minute: 'numeric' };
  let startTime = new Intl.DateTimeFormat('es-ES', options).format(travel.startTime);
  let endTime = new Intl.DateTimeFormat('es-ES', options).format(travel.endTime);
  return (
    <div className="flex justify-between h-2/3">
      <div className="flex justify-between">
        <div className="px-2">
          <p className="pb-2">{startTime}</p>
          <p className="pt-2">{endTime}</p>
        </div>
        <svg width="20" height="90" xmlns="http://www.w3.org/2000/svg">
          <line x1="10" y1="15" x2="10" y2="50" stroke="black" strokeWidth="4" />
          <circle cx="10" cy="12" r="5" fill="red" />
          <circle cx="10" cy="55" r="5" fill="red" />
        </svg>
        <div className="px-2">
          <p className="text-left pb-2">{travel.originCity}</p>
          <p className="text-left pt-2">{travel.endCity}</p>
        </div>
      </div>
      <p className="font-bold">$ {travel.price}</p>
    </div>
  );
}
