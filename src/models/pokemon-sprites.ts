interface Animated {
    front_default: string;
    front_shiny: string;
}

interface BlackWhite{
    animated: Animated;
}

interface Game {
    'black-white': BlackWhite;
}

interface Versions {
    'generation-v': Game;
}

export interface PokemonSprites {
    id: number;
    front_default: string;
    front_shiny: string;
    front_female: string;
    front_female_shiny: string;
    back_default: string;
    back_shiny: string;
    back_female: string;
    back_female_shiny: string;
    versions: Versions;
}