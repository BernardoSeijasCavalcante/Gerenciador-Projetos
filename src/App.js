import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Evento from './components/Evento';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
      <SayMyName name="Joãozinho" resp={2222} qualidade="azul">
      </SayMyName>
      <Evento></Evento>
      <Form></Form>
      <HelloWorld>

      </HelloWorld>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
