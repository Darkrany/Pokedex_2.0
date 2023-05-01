import React, { useState, useEffect } from 'react'
import PokedexList from './PokedexList';


export default function Pokedex() {

  const [pokemons, setPokemon] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then((res) => res.json())
      .then((data) => {
        const pokemonRequest = data.results.map((pokemon) => {
            const pkmID = pokemon.url.split('/')[6];
            const pkmName = pokemon.name.charAt().toUpperCase() + pokemon.name.substring(1)
            
            return {
              id: pkmID,
              name: pkmName,
              url: pokemon.url,
              img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pkmID+".png"
            };
        });
        setPokemon(pokemonRequest)
      }); 

  }, []);

  return (
 <div>
  <PokedexList pokemons={pokemons}></PokedexList>
 </div>
  );

}
