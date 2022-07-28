import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  
  const [state,setState] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then((response) => {
      console.log(response.data.results);
      setState(response.data.results)
    })
    .catch((err) => [])
  },[])

  return (
    <div className="App">
      <form>
        <button>Fetch Pokemon</button>
          {
            state.map((pokemon)=>{
              return <div>
                  <li className='nameText'>{pokemon.name}</li>
              </div>
            })
          }
      </form>
    </div>
  );
}

export default App;