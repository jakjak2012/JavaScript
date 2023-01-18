import React, {useState} from "react";

const PokemonList = () => {
    const [pokemon, setPokemon] = useState([]);
    const fetchPokemon = (e) => 
    {fetch("https://pokeapi.co/api/v2/pokemon/?limit=807&offset=0")
    .then(response => {
      // not the actual JSON response body but the entire HTTP response
      return response.json();
  }).then(response => {
      // we now run another promise to parse the HTTP response into usable JSON
      setPokemon(response.results);
  }).catch(err=>{
      console.log(err);
  });}
    

    return (
        <div>
            <button onClick={fetchPokemon}>Fetch Pokemon</button>

            <ul>
                {pokemon.map((p, index) => <li key={index}>{p.name}</li>)}
            </ul>
        </div>
    )
}

export default PokemonList;




