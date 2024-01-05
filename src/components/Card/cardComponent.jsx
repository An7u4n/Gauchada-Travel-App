import React from 'react';
import TopCard from './topCard';
import BottomCard from './bottomCard';

export default function CardComponent() {
  return (
    <li className="p-4 max-w-xl bg-white h-52 rounded-3xl block">
      <TopCard />
      <BottomCard />
    </li>
  );
}
