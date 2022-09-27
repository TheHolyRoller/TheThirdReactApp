import React, { useEffect, useState } from 'react';


function Popular() {

  const [popular, setPopular] = useState([]);


useEffect(() => {

getPopular();


}, []);




  const getPopular = async () => {

    //TO DO  SORT OUT API KEY IN .ENV
    //const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process}&number=9`);
    //const data = await api.json();
    //console.log(data);
    //setPopular(data.recipes)

  }


  return (
    <div>

      <div>
      <p>
      Hellow
      </p>
      </div>

      );

    }


    </div>





  )
}

export default Popular
