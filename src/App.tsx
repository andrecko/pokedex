import { useEffect, useState } from "react"
import axios from 'axios';
import { Pokemon } from './models/pokemon'

function App() {

  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon`).then(response => {
      response.data.results.forEach((pokemonLista: any) => {
        axios.get(pokemonLista.url).then((pokemon: any) => {
          setPokemons(pokemon.data);
        })
      });
    })
  }, [])

  return (
    <ul>
      {pokemons.map((pokemon: Pokemon) => (
        <li key={pokemon.id}>
          <li href={pokemon.id}>{pokemon.name}</a>
        </li>
      ))}
    </ul>
  )

}

export default App
