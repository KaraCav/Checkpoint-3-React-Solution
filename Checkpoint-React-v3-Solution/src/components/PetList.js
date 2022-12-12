import React, { useState } from 'react';
import SinglePet from './SinglePet';

const PetList = (props) => {
  const [filter, setFilter] = useState('all');
  const { handleDelete } = props;
  const handleSelectChange = (evt) => {
    setFilter(evt.target.value);
  };
  const pets = props.pets.filter((pet) => {
    if (filter === 'all') return pet;
    if (filter === 'cats') return pet.species === 'cat';
    if (filter === 'dogs') return pet.species === 'dog';
  });
  return (
    <>
      <div>
        <label htmlFor="speciesFilter">Filter by species: </label>
        <select onChange={handleSelectChange} name="speciesFilter">
          <option>all</option>
          <option>cats</option>
          <option>dogs</option>
        </select>
      </div>
      <div className="pet-list">
        {pets.map((pet) => {
          return (
            <SinglePet key={pet.id} pet={pet} handleDelete={handleDelete} />
          );
        })}
      </div>
    </>
  );
};

export default PetList;
