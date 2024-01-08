import React, { useEffect, useState } from 'react';
import CardComponent from '../Card/cardComponent';
import { Travel } from '../../../models/travel.class';

function TravelsContainer() {
  const [travels, setTravels] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7037/api/Travels', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setTravels(
          data.map((data) => (
            <CardComponent key={data.id} travel={new Travel(data)} />
          )),
        );
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-slate-400">
      {/* <CardComponent travel={defTravel} /> */}
      {travels}
    </div>
  );
}

export default TravelsContainer;
