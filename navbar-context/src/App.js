import './App.css';
import { FormWrapper } from './components/FormWrapper';
import { Navbar } from './components/Navbar';
import { Wrapper } from './components/Wrapper';

function App() {
  return (
    <Wrapper className="App">
      <Navbar />
      <FormWrapper />
    </Wrapper>
  );
}

export default App;