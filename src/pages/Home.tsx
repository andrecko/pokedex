import { useEffect, useState } from "react"
import axios from 'axios';
import { Pokemon } from "../models/pokemon";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

export const Home = () => {

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

  // console.log(pokemons);
  return (
    <div>
      <Navbar />
      <Container maxWidth='xl'>
        <Grid container>
            <Grid item xs={3}>
                <PokemonCard />
            </Grid>
            <Grid item xs={3}>
                <PokemonCard />
            </Grid>
            <Grid item xs={3}>
                <PokemonCard />
            </Grid>
            <Grid item xs={3}>
                <PokemonCard />
            </Grid>
        </Grid>
      </Container>
    </div>
  )
}