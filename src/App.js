import logo from './logo.svg';
import './App.css';
import ImagePng from './horloge mécanique steampunk.png';
import Image2Png from './engrenage.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ImagePng} className="App-png" alt="logo" />
        <img src={Image2Png} className="App2-png" alt="logo" />
        <img src={Image2Png} className="App3-png" alt="logo" />
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
