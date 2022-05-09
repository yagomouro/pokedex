import { useCallback, useEffect, useState } from "react"
import api from "../../services/api"
import PokemonCard from "./PokemonCard"
import { IResults } from "../../types/IResults"
import Button from "./Button"
import { PokedexContainer, CardContainer, ButtonContainer, PokemonInfo, ButtonWrapper } from "./styles"
import SvgPokedex from "./Svg"

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
            <SvgPokedex />
            <PokemonInfo>
                <CardContainer>
                    {allPokemons.results.map((pokemon, index) => (
                        <PokemonCard
                            key={index}
                            {...pokemon}
                        />
                    ))}
                </CardContainer>
                <ButtonContainer>
                    <p>Nº {offset + 1}</p>
                    <ButtonWrapper>
                        <Button
                            title=""
                            onClick={offset >= 1 ? decrementOffset : undefined}
                            className={offset >= 1 ? "" : "disabled"}
                        />
                        <Button
                            title=""
                            onClick={offset <= 1124 ? incrementOffset : undefined}
                            className={offset <= 1124 ? "" : "disabled"}
                        />
                    </ButtonWrapper>
                </ButtonContainer>
            </PokemonInfo>
        </PokedexContainer>

    )
}