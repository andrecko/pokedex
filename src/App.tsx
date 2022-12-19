import { useEffect, useState } from "react"
import axios from 'axios';
import { Pokemon } from './models/pokemon'

function App() {

  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon`).then(response => {
      setPokemons(response.data);
      console.log(response.data.results)
    })
  }, [])

  return (
    <div>Hello world!</div>
  )

}

export default App
