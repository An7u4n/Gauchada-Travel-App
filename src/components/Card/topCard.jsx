import React from 'react';

export default function TopCard() {
  return (
    <div className="flex justify-between h-2/3">
      <div className="flex justify-between">
        <div className="px-2">
          <p className="pb-2">10:00</p>
          <p className="pt-2">12:00</p>
        </div>
        <svg width="20" height="90" xmlns="http://www.w3.org/2000/svg">
          <line
            x1="10"
            y1="15"
            x2="10"
            y2="50"
            stroke="black"
            stroke-width="4"
          />
          <circle cx="10" cy="12" r="5" fill="red" />
          <circle cx="10" cy="55" r="5" fill="red" />
        </svg>
        <div className="px-2">
          <p className="text-left pb-2">Osorio</p>
          <p className="text-left pt-2">Florianopolis</p>
        </div>
      </div>
      <p className="font-bold">$100</p>
    </div>
  );
}
