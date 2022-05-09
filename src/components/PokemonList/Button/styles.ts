import styled from "styled-components";

export const ChangePokemonButton = styled.button`
    background-color: transparent;
    cursor: pointer;
    width: 3.3rem;
    left: -0.6rem;
    height: 2.2rem;
    color: white;
    position: relative;

    &.disabled {
        cursor: initial;
    }

    @media screen and (max-width: 700px) {
        top: 0.6rem;
    }
    @media screen and (max-width: 600px) {
        top: 1rem;
    }
`;
