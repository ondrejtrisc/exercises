import React, { useState, useEffect } from 'react'

export const App = () => {

  const [ pokemon, setPokemon ] = useState([]);
  const [ pokemonThumbnails, setPokemonThumbnails ] = useState([]);

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    getPokemonWithThumbnails();
  }, [pokemon]);

  const getPokemonWithThumbnails = async () => {
    // let pokemonDetailedObjects = [];
    // for (const poke of pokemon) {
    //   const response = await fetch(poke.url);
    //   const data = await response.json();
    //   console.log('pokeData', data);
    //   pokemonDetailedObjects.push({
    //     ...data.species,
    //     thumbnail: data.sprites.front_default
    //   });
    // }
    const pokemonDetailedObjectsPromises = pokemon.map(async poke => {
      const response = await fetch(poke.url);
      const data = await response.json();
      return {
        ...data.species,
        thumbnail: data.sprites.front_default
      }
    });
    const pokemonDetailedObjects = await Promise.all(pokemonDetailedObjectsPromises);
    setPokemonThumbnails(pokemonDetailedObjects);
  }

  const getPokemon = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=5');
      const data = await response.json();
      console.log('data', data);
      setPokemon(data.results);
    }
    catch (err) {
      console.log('err', err);
    }
  }

  const pokemonElements = pokemonThumbnails.map((poke, index) => {
    return (
      <div>
        <img src={poke.thumbnail} />
        <p key={`pokemon-${index}`}>{poke.name}</p>
      </div>
      );
  })

  return (<div>{pokemonElements}</div>);
}

export default App;