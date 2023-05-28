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

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <Container>
            <AppLogoTitle />
            <Form onSubmit={handleLogin}>
                <FormTitle> Login </FormTitle>

                <InputFeild
                    placeholder='Email'
                    type='email'
                    icon={<AiOutlineMail />}
                    value={email}
                    onChange={handleEmailChange}
                    required
                />

                <InputFeild
                    placeholder='Password'
                    type='password'
                    icon={<AiOutlineUnlock />}
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />

                <Link href="/forgot-password">
                    Forgot Password?
                </Link>

                <Button
                    type='submit'
                    title='Login'
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