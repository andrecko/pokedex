import { useEffect, useState } from "react"
import axios from 'axios';
import { Pokemon } from "./models/pokemon";

function App() {

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  // useEffect(() => {
  //   axios.get(`https://pokeapi.co/api/v2/pokemon`).then(response => {
  //     response.data.results.forEach((pokemonLista: any) => {
  //       axios.get(pokemonLista.url).then((pokemon: any) => {
  //         setPokemons(pokemon.data);
  //       })
  //     });
  //   })
  // }, [])

  // console.log(pokemons);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 21; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }
    var response = axios.all(endpoints.map(async (endpoint) => (await axios.get(endpoint)).data)).then((res: Pokemon[]) => setPokemons(res));
  }

  console.log(pokemons);
  return (
    <div>
      <ul>
        {pokemons.map((pokemon) => {
          return (
            <li key={pokemon.name}>
              <strong>{pokemon.name}</strong>
            </li>
          )
        })}
      </ul>
    </div>
  )

}

export default App
