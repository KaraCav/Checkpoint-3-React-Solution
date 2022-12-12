import React, { useEffect, useState } from 'react';
import PetList from './PetList';
import axios from 'axios';

const Root = () => {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchCounter, setFetchCounter] = useState(0);
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get('/api/pets');
        setPets(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [fetchCounter]);

  const removePet = (petId) => {
    setPets(pets.filter((pet) => pet.id !== petId));
  };

  return (
    <>
      {error && <div>Error: {error}</div>}
      {loading && <div>Loading</div>}
      <h1>Adoption Center</h1>
      <PetList pets={pets} handleDelete={removePet} />
    </>
  );
};

export default Root;
