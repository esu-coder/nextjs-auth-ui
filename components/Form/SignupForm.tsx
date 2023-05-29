import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { AiOutlineMail, AiOutlineUnlock } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import AppLogoTitle from '../AppLogoTitle'
import {
    Container,
    Form,
    FormTitle,
    InfoText,
    InfoTextContainer,
    Link
} from './FormElements'
import InputFeild from './InputFeild'
import Button from '../Button'
import { InputError } from '../../types/error'
import { getErrorMsg } from '../../helpers'

const SignupForm = () => {
    const [data, setData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [validationErrors, setValidationErrors] = useState<InputError[]>([])

    const validateData = (): boolean => {
        const err = []
        
        if(data.fullName?.length < 4) {
            err.push({fullName: "Full name must be atleast 4 characters long"})
        }
        else if(data.fullName?.length > 30) {
            err.push({fullName: "Full name should be less than 30 characters"})
        }
        else if(data.password?.length < 6) {
            err.push({password: "Password should be atleast 6 characters long"})
        }
        else if(data.password !== data.confirmPassword) {
            err.push({confirmPassword: "Passwords don't match"})
        }

        setValidationErrors(err)

        if(err.length > 0) {
            return false
        }
        else {
            return true
        }
    }

    const handleSignup = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const isValid = validateData()

        if(isValid) {
            // sign up
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // We get property name from event.target.name and set the value from onChange in it
        // So name in our input component should be same as the property in data state

        setData({...data, [event.target.name]: event.target.value})
    }

    return (
        <Container>
            <AppLogoTitle />

            <Form onSubmit={handleSignup}>
                <FormTitle> Sign Up </FormTitle>

                <InputFeild
                    type="text"
                    placeholder={'Full Name'}
                    value={data.fullName}
                    name="fullName"
                    onChange={handleInputChange}
                    icon={<BsPerson />}
                    required
                    error={getErrorMsg("fullName", validationErrors)}
                />
                <InputFeild
                    type="email"
                    placeholder={'Email'}
                    value={data.email}
                    name="email"
                    onChange={handleInputChange}
                    icon={<AiOutlineMail />}
                    required
                />
                <InputFeild
                    type="password"
                    placeholder={'Password'}
                    value={data.password}
                    name="password"
                    onChange={handleInputChange}
                    icon={<AiOutlineUnlock />}
                    required
                    error={getErrorMsg("password", validationErrors)}
                />
                <InputFeild
                    type="password"
                    placeholder={'Confirm Password'}
                    value={data.confirmPassword}
                    name="confirmPassword"
                    onChange={handleInputChange}
                    icon={<RiLockPasswordLine />}
                    required
                    error={getErrorMsg("confirmPassword", validationErrors)}
                />

                <Button
                    title={"Sign up"}
                    type="submit"
                />

                <InfoTextContainer>
                    <InfoText>
                        Already have account?
                    </InfoText>

                    <Link href={"/login"}>
                        Login
                    </Link>
                </InfoTextContainer>
            </Form>
        </Container>
    )
}

export default SignupForm