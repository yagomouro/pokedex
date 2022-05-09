import React, { ButtonHTMLAttributes } from "react"
import { ChangePokemonButton } from "./styles"


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string,
}

const Button: React.FC<ButtonProps> = ({ className, title, ...rest }) => {
    return (
        <ChangePokemonButton
            className={className}
            {...rest}
        >
            {title}
        </ChangePokemonButton>
    )
}

export default Button