import { Types } from "./types";

interface PokemonSprites {
    front_default: string;
    front_shiny: string;
    front_female: string;
    front_female_shiny: string;
    back_default: string;
    back_shiny: string;
    back_female: string;
    back_female_shiny: string;
}

export interface Pokemon {
    id: number;
    name: string;
    sprites: PokemonSprites;
    types: Types[];
}