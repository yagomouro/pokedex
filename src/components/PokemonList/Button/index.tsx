import React, { ButtonHTMLAttributes } from "react"


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
}

const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
    return (
        <button
            {...rest}
        >
            {title}
        </button>
    )
}

export default Button