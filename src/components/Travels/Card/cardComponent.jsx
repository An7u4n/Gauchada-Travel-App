import React from 'react';
import PropTypes from 'prop-types';
import TopCard from './topCard';
import BottomCard from './bottomCard';
import { Travel } from '../../../models/travel.class';

CardComponent.propTypes = {
  travel: PropTypes.instanceOf(Travel),
};

export default function CardComponent({ travel }) {
  return (
    <li className="p-4 max-w-xl bg-white shadow-2xl elevate h-52 rounded-3xl block">
      <TopCard travel={travel} />
      <BottomCard travel={travel} />
    </li>
  );
}
