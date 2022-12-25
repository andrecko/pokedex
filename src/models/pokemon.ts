import { PokemonSprites } from "./pokemon-sprites";
import { Types } from "./types";

export interface Pokemon {
    id: number;
    name: string;
    sprites: PokemonSprites;
    types: Types[];
}