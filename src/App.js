import logo from './logo.svg';
import './App.css';
import Pokedex from './components/Pokedex';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <Pokedex></Pokedex>
        
      </header>
    </div>
  );
}

export default App;
