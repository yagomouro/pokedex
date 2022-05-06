import { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";
import { POKEMON } from "../../../constants/pokemon";
import api from "../../../services/api";
import { IPokemon } from "../../../types/IPokemon";
import { IPokemonData } from "../../../types/IResults";
import { PokemonWrapper } from "./styles";

export default function PokemonCard({ url }: IPokemonData) {
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

    return (
        <PokemonWrapper>
            <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} /> <br />
            <span>Name: {pokemon?.name}</span><br />
            <span>Type: {pokemon?.types[0]?.type?.name}</span>
        </PokemonWrapper>

    )
}