import { useEffect, useState } from "react"
import axios from 'axios';
import { Pokemon } from './models/pokemon'

function App() {

  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon`).then(response => {
      response.data.results.forEach((pokemonLista: any) => {
        axios.get(pokemonLista.url).then((pokemon: any) => {
          console.log({name: pokemon.data.name, type: [pokemon.data.types[0].type.name, pokemon.data.types[1]?.type.name]});
        })
      });
    })
  }, [])

  return (
    <ul>
      
    </ul>
  )

}

export default App
