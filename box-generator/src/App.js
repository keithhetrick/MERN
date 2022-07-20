import './App.css';
import { useState } from 'react'; 
import Header from './components/Header';
import Content from './components/Content';

const App = () => {
  
  const [box, setBox] = useState([]);
  console.log(box);
  
  return (
    <div className="App">
      <Header box={ box } setBox={ setBox } />
      <Content box={ box } />
    </div>
  );
}

export default App;