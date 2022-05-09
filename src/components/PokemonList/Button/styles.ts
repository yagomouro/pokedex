import styled from "styled-components";

export const ChangePokemonButton = styled.button`
    background-color: transparent;
    border-radius: 30%;
    cursor: pointer;
    width: 3.4rem;
    left: -0.59rem;
    height: 2.2rem;
    color: white;
    position: relative;

    &.offButton {
        left: -15.1rem;
        top: -2.2rem;
        height: 3.5rem;
        width: 3.5rem;
        position: absolute;
        border-radius: 50%;

        @media screen and (max-width: 700px) {
            top: -1.5rem;
        }
        @media screen and (max-width: 600px) {
            top: -1.5rem;
        }
        @media screen and (max-width: 500px) {
            top: -1rem;
        }
    }

    &.disabled {
        cursor: initial;
    }

    @media screen and (max-width: 700px) {
        top: 0.6rem;
    }
    @media screen and (max-width: 600px) {
        top: 0.5rem;
    }
    @media screen and (max-width: 500px) {
        top: 1.1rem;
    }
`;
