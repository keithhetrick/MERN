import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import URLNumber from './components/URLNumber';
import Hello from './components/Hello';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/:num' element={<URLNumber />} />
          <Route path='/:type' element={<Hello />} />
          <Route path='/:type/:color/:bgcolor' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;