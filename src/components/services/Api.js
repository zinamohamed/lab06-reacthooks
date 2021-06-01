export const getAll = async () => { 
  const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters');
    const arnold = await res.json(); 
  
  
    return arnold.map(character => ({
      id: character._id,
      name: character.name,
      image: character.image
  
    }));
  
  };
  
  export const getSingleCharacter = async (id) => { 
      
    const res = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`);
      
    const singleCharacter = await res.json();
      
    return singleCharacter;
  };