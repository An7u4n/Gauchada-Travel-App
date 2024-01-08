import React from 'react';

export default function BottomCard({ travel }) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center">
        <img
          alt="Driver"
          src="https://cdn.blablacar.com/user-profile-picture/tr5q9NSBc8G3hUQbxoviTd/thumbnail_144x144.jpeg"
          className="h-16 rounded-full border-blue-400 border-2 border-solid"
        />
        <p className="px-2">Id de viaje: {travel.id}</p>
      </div>
      <div>Medallas</div>
    </div>
  );
}
