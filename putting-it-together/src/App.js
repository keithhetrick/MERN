import './App.css';
import PersonCard1 from './components/PersonCard1'
import PersonCard2 from './components/PersonCard2';
import PersonCard3 from './components/PersonCard3';
import PersonCard4 from './components/PersonCard4';

const App = () => {

  const person = [{
    firstName:'Jane',
    lastName:'Doe',
    age:45,
    hairColor:'black'
  },
  {
    firstName:'John',
    lastName:'Smith',
    age:88,
    hairColor:'Brown'
  },
  {
    firstName:'Millard',
    lastName:'Fillmore',
    age:50,
    hairColor:'Brown'
  },
  {
    firstName:'Maria',
    lastName:'Smith',
    age:62,
    hairColor:'Brown'
  }]
    
  
  return (
    <div className="App">
      <PersonCard1 className='card' person={ person } />
      <PersonCard2 className='card' person={ person } />
      <PersonCard3 className='card' person={ person } />
      <PersonCard4 className='card' person={ person } />

      </div>
    );
  }

export default App;