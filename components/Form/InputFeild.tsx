import React, { useState } from 'react'
import { InputProps } from '../../types/propTypes'
import {
    Container,
    HidePassIcon,
    Input,
    ShowPassIcon
} from './InputFeildElements'

const InputFeild = ({ placeholder, icon, type, required, value, onChange }: InputProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordIcon = () => {
        setShowPassword(!showPassword)
    }

    const renderPasswordIcon = () => {
        if (showPassword) {
            return (
                <HidePassIcon onClick={togglePasswordIcon} />
            )
        }
        else {
            return (
                <ShowPassIcon onClick={togglePasswordIcon} />
            )
        }
    }

    const inputType = type === 'password' && showPassword ? 'text' : type;

    return (
        <Container>
            {icon}

            <Input
                placeholder={placeholder}
                type={inputType}
                required={required}
                value={value}
                onChange={onChange}
            />

            {
                type === 'password' &&
                renderPasswordIcon()
            }
        </Container>
    )
}

export default InputFeild