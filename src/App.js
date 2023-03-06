import './App.css';

import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log(data)

  return (
    <div className="App">
      <header className="App-header">
        {
          
          data.results.map(item => 
            <div key={item.name}> {item.name}</div>
            )
            
        }
        Hola mundo
      </header>
    </div>
  );
}

export default App;
