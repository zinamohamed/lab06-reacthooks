import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Character = ({ name, image, id }) => {
  
  return (
    <div >
      <p>Character: {name}</p>
      <Link exact="true" to={`/details/${id}`}>
        <img src={image} alt={name}/>
      </Link>
    </div>
  );
    
};


Character.propTypes = { 
  name: PropTypes.string.isRequired,
};

export default Character;