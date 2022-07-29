import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import URLText from './components/URLText';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/:text' element={<URLText />} />
          <Route path='/:text/:color/:bgColor' element={<URLText />} />
        </Routes>
      </BrowserRouter>
      <input type='checkbox' id='darkmode-toggle' />
      <label htmlFor='darkmode-toggle'></label>
      <div className='backgroundChange'></div>
    </div>
  );
}

export default App;