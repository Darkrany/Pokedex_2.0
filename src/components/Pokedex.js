import React, { useState, useEffect } from 'react'
import PokedexList from './PokedexList';
import Pagination from './Pagination';

export default function Pokedex() {

  const [pokemons, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pkmsPerPages, setPkmsPerPages] = useState(20);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const offset = (currentPage - 1) * pkmsPerPages; //Calculamos el indice del primer pokemon en la pagina actual con la resta, despues multiplicamos para mostrar cada pagina
    
     setLoading(true);

    fetch('https://pokeapi.co/api/v2/pokemon/?limit=' + pkmsPerPages + '&offset=' + offset)
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
        setPokemon(pokemonRequest);
        
      })
      .catch(() => setError(true) )
      .finally(() => setLoading(false));

  }, [currentPage, pkmsPerPages]);

  if (error){
  return <p>No se puede obtener informacion</p>
}
  return (
 <div>

  {loading ? (<p>Obteniendo informacion...</p>
  ) : (
    <PokedexList pokemons={pokemons}></PokedexList>
  )}
  

  <Pagination 
    currentPage={currentPage} 
    setCurrentPage={setCurrentPage}  
    pkmsPerPages={pkmsPerPages}
    setPkmsPerPages={setPkmsPerPages}
    
    ></Pagination>
 </div>
  );

}
