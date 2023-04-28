import React, { useState, useEffect } from 'react'
import PokedexList from './PokedexList';


export default function Pokedex() {
  const [pokemons, setPokemon] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then(res => res.json())
      .then(data => setPokemon(data.results)); //Almacenamos en el state los resultados de la llamada
      
  }, []);

  return (
 <div>
  <PokedexList pokemons={pokemons}></PokedexList>
 </div>
  );

}
