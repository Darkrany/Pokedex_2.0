import React from 'react'

export default function PokedexList(props) {
    const pokemons = props.pokemons
  return (
        
    <div className ="poke-list" >
      {pokemons.map((pokemon) => (
         <div className ="card-container" key={pokemon.id}>
          <span className="poke-number">#{pokemon.id}</span>
         <img className="poke-image" src={pokemon.img}></img>
         <h2 className="poke-name">{pokemon.name}</h2>
         </div>
      ))}
    </div>
  )
}
