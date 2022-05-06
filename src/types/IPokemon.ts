export interface IPokemon {
    name: string;
    id: number
    sprites: pokemonSprites
    types: Array<pokemonTypes>
}

export interface pokemonSprites{
    front_default: string
}

export interface pokemonTypes{
    slot: number
    type: typePokemon
}

export interface typePokemon{
    name: string
    url: string
}
