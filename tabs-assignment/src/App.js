import './App.css';
import { Tabs } from './components/Tabs';

const App = () => {

  return (
    <div className="App">
      <main>
        <Tabs>
          <div label='Tab 1'>
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          <div label='Tab 2'>
            <p className='text'>Tab 2 content is showing here:</p>
            <p className='text'>Peter Piper picked a pack of pickled peppers</p>
            <p className='text'>Mother Mary quite contray</p>
            <p className='text'>She sells sea-shells by the seashore...</p>
            <p className='text'>...the shells she sells are sea-shells, I'm sure</p>
          </div>
          <div label='Tab 3'>
            <p className='text'>Bro I could use a burger...</p>
          </div>
        </Tabs>
      </main>
    </div>
  );
}

export default App;