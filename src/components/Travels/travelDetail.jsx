import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardComponent from './Card/cardComponent';
import { Travel } from '../../models/travel.class';

export default function TravelDetail() {
  const { id } = useParams();
  const [travel, setTravel] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7037/api/Travels/' + id, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setTravel(<CardComponent key={data.id} travel={new Travel(data)} />);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return <div className=" w-[100vw] h-[80vh] flex items-center justify-center">{travel}</div>;
}
