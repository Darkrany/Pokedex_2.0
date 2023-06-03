
import './App.css';
import Pokedex from './components/Pokedex';
import Details from './components/Details'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <header className="App-header">
    
        <img src="https://archives.bulbagarden.net/media/upload/4/4b/Pokédex_logo.png" className="logo" alt="logo" />
      
        <BrowserRouter>
          <Routes>
            <Route index element={<Pokedex />} />
            <Route path="details/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
