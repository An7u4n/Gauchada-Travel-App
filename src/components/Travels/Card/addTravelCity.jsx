import React, { useEffect, useState } from 'react';

export default function AddTravelCity({ text, nome }) {
  const [provinces, setProvinces] = useState();
  const [cities, setCities] = useState();

  // Get province and city
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await fetch('https://apis.datos.gob.ar/georef/api/provincias', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) throw new Error(`Error: ${response.status}`);

        const data = await response.json();
        const provinces = data.provincias.map((province) => province.nombre).sort();
        setProvinces(provinces.map((province) => <option key={province}>{province}</option>));
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProvinces();
  }, []);

  const cityFetch = async (e) => {
    try {
      const response = await fetch('https://apis.datos.gob.ar/georef/api/municipios?provincia=' + e.target.value + '&max=999', { method: 'GET', headers: { 'Content-Type': 'application/json' } });
      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const data = await response.json();
      setCities(
        data.municipios
          .map((city) => city.nombre)
          .sort()
          .map((city) => <option key={city}>{city}</option>),
      );
    } catch (error) {
      console.error('Erorr:', error);
    }
  };
  return (
    <div className="relative z-0 w-full group mb-7">
      <label htmlFor={nome + 'Province'} className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        {text}
      </label>
      <select id={nome + 'Province'} name={nome + 'Province'} className="w-36 border-2 mt-2" onChange={cityFetch}>
        {provinces}
      </select>
      <label htmlFor={nome + 'City'} className="ml-4 peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
      <select id={nome + 'City'} name={nome + 'City'} className="ml-4 w-36 border-2 mt-2">
        {cities}
      </select>
    </div>
  );
}
