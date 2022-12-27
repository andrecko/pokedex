import { useEffect, useState } from "react"
import axios from 'axios';
import { Pokemon } from "../models/pokemon";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { Skeletons } from "../components/Skeletons";

export const Home = () => {

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 21; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }
    axios.all(endpoints.map(async (endpoint) => (await axios.get(endpoint)).data))
      .then((res: Pokemon[]) => setPokemons(res));
  }

  const pokemonFilter = (word: string) => {
    var filteredPokemons: Pokemon[] = []

    if (word === '')
      getPokemons()

    pokemons.forEach(pokemon => {
      if (pokemon.name.includes(word.toLowerCase()) || 
          pokemon.types[0].type.name.includes(word.toLowerCase()) ||
          pokemon.types[1]?.type.name.includes(word.toLowerCase()))
        filteredPokemons.push(pokemon);
    });

    setPokemons(filteredPokemons);
  }

  return (
    <div>
      <Navbar term={pokemonFilter} />
      <Container maxWidth='xl' >
        <Grid container spacing={2}>
          {pokemons.length === 0 ? (<Skeletons />) :
            (pokemons.map((pokemon, key) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                <PokemonCard pokemon={pokemon} />
              </Grid>
            )))
          }
        </Grid>
      </Container>
    </div>
  )
}