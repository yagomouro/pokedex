import { useCallback, useEffect, useState } from "react"
import api from "../../services/api"
import PokemonCard from "./PokemonCard"
import { IResults } from "../../types/IResults"
import Button from "./Button"
import { PokedexContainer } from "./styles"

export function PokemonList(): JSX.Element {

    const [allPokemons, setAllPokemons] = useState<IResults>({
        count: 0,
        results: [],
        next: "",
        previous: ""
    })
    const [offset, setOffset] = useState(0)

    const incrementOffset = () => setOffset(prev => prev + 1)
    const decrementOffset = () => setOffset(prev => prev - 1)

    const getAllPokemons = useCallback(async () => {
        try {
            const response = await api.get<IResults>(`pokemon?limit=1&offset=${offset}`)
            setAllPokemons(response.data)

        } catch (error) {
            console.log(error)
        }
    }, [offset])

    useEffect(() => {
        getAllPokemons()
    }, [getAllPokemons, offset])

    return (


        <PokedexContainer>
            {allPokemons.results.map((pokemon, index) => (
                <PokemonCard
                    key={index.toString()}
                    {...pokemon}
                />
            ))}

            <div
                style={{
                    justifyContent: "center",
                    gap: '20px',
                    alignItems: "center",
                    height: "40px",
                    display: "flex"
                }}
            >
                <Button
                    title="Voltar"
                    onClick={decrementOffset}
                />
                <p>{offset}</p>
                <Button
                    title="Avançar"
                    onClick={incrementOffset}
                />
            </div>
        </PokedexContainer>

    )
}