import React, { useState } from 'react'
import { AiOutlineMail, AiOutlineUnlock } from 'react-icons/ai'
import AppLogoTitle from '../AppLogoTitle'
import Button from '../Button'
import {
    Container,
    Form,
    FormTitle,
    InfoText,
    InfoTextContainer,
    Link
} from './FormElements'
import InputFeild from './InputFeild'
import { InputError } from "../../types/error"
import { useRouter } from 'next/router'
import { getErrorMsg } from '../../helpers'
import SocialButton from '../SocialButton'
import GoogleImage from '../../public/assets/images/google.svg'
import { signIn } from 'next-auth/react'

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [submitError, setSubmitError] = useState<string>("")
    const [validationErrors, setValidationErrors] = useState<InputError[] | []>([])
    const router = useRouter()

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const validateData = (): boolean => {
        const err = []

        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (!email) {
            err.push({ email: "Email is required" })
        }
        else if (!emailRegex.test(email)) {
            err.push({ email: "Please Enter valid Email" })
        }
        else if (!password) {
            err.push({ password: "Password is required" })
        }

        setValidationErrors(err)

        if (err.length > 0) {
            return false
        }
        else {
            return true
        }
    }

    const handleLogin = async () => {
        const isValid = validateData()

        if (isValid) {
            // credentials login
        }
    }

    const handleGoogleSignIn = (event: React.FormEvent<Element>) => {
        event.preventDefault()

        signIn('google', { callbackUrl: 'http://localhost:3000/' })
    }

    return (
        <Container>
            <AppLogoTitle />
            <Form>
                <FormTitle> Login </FormTitle>

                <InputFeild
                    placeholder='Email'
                    type='email'
                    icon={<AiOutlineMail />}
                    value={email}
                    onChange={handleEmailChange}
                    error={getErrorMsg('email', validationErrors)}
                />

                <InputFeild
                    placeholder='Password'
                    type='password'
                    icon={<AiOutlineUnlock />}
                    value={password}
                    onChange={handlePasswordChange}
                    error={getErrorMsg('password', validationErrors)}
                />

                <Link href="/forgot-password">
                    Forgot Password?
                </Link>

                <Button
                    title='Login'
                    onClick={handleLogin}
                />

                <SocialButton
                    title={"Login with Google"}
                    icon={GoogleImage}
                    onClick={handleGoogleSignIn}
                />

                <InfoTextContainer>
                    <InfoText>
                        New User?
                    </InfoText>

                    <Link href='/signup'>
                        Create an Account
                    </Link>
                </InfoTextContainer>
            </Form>
        </Container>
    )
}

export default LoginForm