import { PokemonSprites } from "./pokemon-sprites";
import { PokemonStats } from "./pokemon-stats";
import { Types } from "./types";

export interface Pokemon {
    id: number;
    name: string;
    weight: number;
    sprites: PokemonSprites;
    types: Types[];
    stats: PokemonStats[];
}