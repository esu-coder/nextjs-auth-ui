import React from 'react'
import { ButtonProps } from '../../types/propTypes'
import { Container } from './ButtonElements'

const Button = ({ title, type }: ButtonProps) => {
    return (
        <Container type={type}>
            {title}
        </Container>
    )
}

export default Button