import styled from "styled-components";

export const PokedexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 9rem auto;
`;

export const PokemonInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 60rem;
    height: 40rem;
`;

export const CardContainer = styled.div``;

export const ButtonContainer = styled.div`
    width: 100%;
    position: relative;
    justify-content: center;
    gap: 20px;
    align-items: center;
    height: 40px;
    display: flex;
    position: relative;
    top: 14.5rem;
    left: -16rem;

    p {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 9.4rem;
        height: 3.7rem;
        left: 0.3rem;
        top: -0.4;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    position: absolute;
    top: -2rem;
    left: 36.8rem;
`;
