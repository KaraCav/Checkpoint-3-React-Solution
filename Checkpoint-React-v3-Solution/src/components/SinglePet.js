import React, { useState } from 'react';
import DeletePet from './DeletePet';

const SinglePet = (props) => {
  const { id, name, description, species } = props.pet;
  const { handleDelete } = props;
  const [adopted, setAdopted] = useState(false);
  return (
    <div className={`single-pet ${adopted ? 'adopted' : ''}`}>
      <h2>{name}</h2>
      <div>{species}</div>
      <div>{description}</div>
      <hr />
      <div>{adopted ? 'Adopted!' : 'Available'}</div>
      <button onClick={() => setAdopted(!adopted)}>Toggle Status</button>
      <DeletePet petId={id} handleDelete={handleDelete} />
    </div>
  );
};

export default SinglePet;
