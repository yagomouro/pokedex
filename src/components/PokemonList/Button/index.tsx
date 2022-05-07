import React, { ButtonHTMLAttributes } from "react"
import { ChangePokemonButton } from "./styles"


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
}

const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
    return (
        <ChangePokemonButton
            {...rest}
        >
            {title}
        </ChangePokemonButton>
    )
}

export default Button