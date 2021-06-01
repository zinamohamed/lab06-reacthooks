import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters, loading }) => {
 
  return (
    <div>
      {
        loading
          ?
          <h2>Loading...</h2>
          :
          <ul  aria-label="characters">
            {characters.map(character => 
              (<li key={character.id}>
                <Character 
                  id={character.id}
                  name={character.name}
                  image={character.image}
                />
              </li>) 
            )}
          </ul>
      }
    </div>
  );
    
};

CharacterList.propTypes = { 
  characters: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default CharacterList;