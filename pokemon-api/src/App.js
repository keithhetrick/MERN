import './App.css';
import { useState, useEffect } from 'react'

function App() {
  
  const [state,setState] = useState([])

  useEffect(() => {
    console.log('useEffect running')
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then((result)=>{
      console.log(result)
      return result.json()
    }).then((res)=>{
      console.log(res)
      setState(res.results)
    }).catch((error)=>{
      console.log(error);
    })
  },[])

  return (
    <div className="App">
      <form>
        <button>Fetch Pokemon</button>
        {
          state.map((pokemon)=>{
            return <div>
              <li>{pokemon.name}</li>
            </div>
          })
        }
      </form>
    </div>
  );
}

export default App;