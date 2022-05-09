import { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";
import { POKEMON } from "../../../constants/pokemon";
import api from "../../../services/api";
import { IPokemon } from "../../../types/IPokemon";
import { IPokemonData } from "../../../types/IResults";
import { DataType, DataWrapper, PokemonData, PokemonImage, PokemonImageWrapper, PokemonWrapper } from "./styles";

interface pokemonCardProps extends IPokemonData {
    turnOff: boolean,
}

export default function PokemonCard({ url, turnOff }: pokemonCardProps) {
    const [pokemon, setPokemon] = useState<IPokemon>(POKEMON)

    const getPokemon = useCallback(async () => {
        try {
            const { data }: AxiosResponse<IPokemon> = await api.get(url)
            setPokemon(prev => ({ ...prev, ...data }))
        } catch (error) {
            console.log(error)
        }
    }, [url])

    useEffect(() => {
        getPokemon()
    }, [getPokemon])

    const capitalizeFirstLetter = (name: string) => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    return (

        <>
            {!turnOff &&
                <PokemonWrapper className={turnOff ? "hidden" : undefined}>
                    <PokemonImageWrapper>
                        <PokemonImage src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
                    </PokemonImageWrapper>
                    <DataWrapper>

                        <PokemonData className="pokemonName">{capitalizeFirstLetter(pokemon?.name)}</PokemonData>
                        <DataType>
                            <PokemonData className="pokemonType">{pokemon?.types[0] ? capitalizeFirstLetter(pokemon?.types[0]?.type?.name) : "--"}</PokemonData>
                            <PokemonData className="pokemonType">{pokemon?.types[1] ? capitalizeFirstLetter(pokemon?.types[1]?.type?.name) : "--"}</PokemonData>
                        </DataType>
                    </DataWrapper>
                </PokemonWrapper>
            }

        </>

    )
}