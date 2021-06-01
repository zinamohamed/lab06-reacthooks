import React, { useState, useEffect } from 'react';
import { getAll } from '../services/Api';
import CharacterList  from '../presentations/CharacterList';


const MainPage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAll()
      .then(characters => {
        setCharacters(characters);
      })
      .finally(() => setLoading(false));

  }, []);

  return (
    <div>
      <CharacterList 
        characters={characters}
        loading={loading}
      />
    </div>
  );
    
};

export default MainPage;