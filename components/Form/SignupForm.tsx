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
import { InputErros } from '../../types/error'
import { getErrorMsg, loginUser } from '../../helpers'
import { useRouter } from 'next/router'
import axios, { AxiosError } from 'axios'
import { ErrorText } from './InputFeildElements'

const SignupForm = () => {
    const [data, setData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [validationErrors, setValidationErrors] = useState<InputErros[]>([])
    const [submitError, setSubmitError] = useState<string>("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const validateData = (): boolean => {
        const err = []

        if (data.fullName?.length < 4) {
            err.push({ fullName: "Full name must be atleast 4 characters long" })
        }
        else if (data.fullName?.length > 30) {
            err.push({ fullName: "Full name should be less than 30 characters" })
        }
        else if (data.password?.length < 6) {
            err.push({ password: "Password should be atleast 6 characters long" })
        }
        else if (data.password !== data.confirmPassword) {
            err.push({ confirmPassword: "Passwords don't match" })
        }

        setValidationErrors(err)

        if (err.length > 0) {
            return false
        }
        else {
            return true
        }
    }

    const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const isValid = validateData()

        if (isValid) {
            // sign up

            try {
                setLoading(true)
                const apiRes = await axios.post("http://localhost:3000/api/auth/signup", data)

                if (apiRes?.data?.success) {
                    // save data in session using next auth

                    const loginRes = await loginUser({
                        email: data.email,
                        password: data.password
                    })

                    if (loginRes && !loginRes.ok) {
                        setSubmitError(loginRes.error || "")
                    }
                    else {
                        router.push("/")
                    }
                }
            } catch (error: unknown) {
                if (error instanceof AxiosError) {
                    const errorMsg = error.response?.data?.error
                    setSubmitError(errorMsg)
                }
            }

            setLoading(false)
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // We get property name from event.target.name and set the value from onChange in it
        // So name in our input component should be same as the property in data state

        setData({ ...data, [event.target.name]: event.target.value })
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
                    disabled={loading}
                />

                {
                    submitError &&
                    <ErrorText>
                        {submitError}
                    </ErrorText>
                }

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