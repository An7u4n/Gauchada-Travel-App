import React from 'react';

export default function TopCard() {
  return (
    <div className="flex justify-between h-2/3">
      <div className="flex justify-between">
        <div className="px-2">
          <p className="py-1">10:00</p>
          <p className="py-1">12:00</p>
        </div>
        <svg width="20" height="70" xmlns="http://www.w3.org/2000/svg">
          <line
            x1="10"
            y1="10"
            x2="10"
            y2="50"
            stroke="black"
            stroke-width="4"
          />
          <circle cx="10" cy="10" r="5" fill="red" />
          <circle cx="10" cy="50" r="5" fill="red" />
        </svg>
        <div className="px-2">
          <p className="text-left py-1">Osorio</p>
          <p className="text-left py-1">Florianopolis</p>
        </div>
      </div>
      <p className="font-bold">$100</p>
    </div>
  );
}
