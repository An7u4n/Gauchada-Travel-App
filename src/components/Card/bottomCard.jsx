import React from 'react';

export default function BottomCard() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center">
        <img
          alt="Driver"
          src="https://cdn.blablacar.com/user-profile-picture/tr5q9NSBc8G3hUQbxoviTd/thumbnail_144x144.jpeg"
          className="h-16 rounded-full border-blue-400 border-2 border-solid"
        />
        <p className="">Drivers Name</p>
      </div>
      <div>Medallas</div>
    </div>
  );
}
