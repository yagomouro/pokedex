export interface IResults{
    count: number,
    next?: string,
    previous?: string,
    results: IPokemonData[]
}

export interface IPokemonData{
    name: string
    url: string
}