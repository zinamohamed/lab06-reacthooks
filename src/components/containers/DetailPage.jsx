import React, { useState, useEffect } from 'react';
import { getSingleCharacter } from '../services/Api';


const DetailPage = (props) => {

  const [singleCharacter, setSingleCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    getSingleCharacter(props.match.params.id)
      .then(arnold => { 
        setSingleCharacter(arnold);
      })
      .finally(() => setLoading(false));
  }, []);
  
  return (
    <div>
      {
        loading
          ?
          <h2>Loading...</h2>
          :
          <div>
            <h2>{singleCharacter.name}</h2>
            <img src={singleCharacter.image}/>
          </div>
      }
    </div>
  );
    
};

export default DetailPage;