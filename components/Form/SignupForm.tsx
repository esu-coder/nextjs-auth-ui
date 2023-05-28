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


const SignupForm = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSignup = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <Container>
            <AppLogoTitle />

            <Form onSubmit={handleSignup}>
                <FormTitle> Sign Up </FormTitle>

                <InputFeild
                    type="text"
                    placeholder={'Full Name'}
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    icon={<BsPerson />}
                    required
                />
                <InputFeild
                    type="email"
                    placeholder={'Email'}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    icon={<AiOutlineMail />}
                    required
                />
                <InputFeild
                    type="password"
                    placeholder={'Password'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    icon={<AiOutlineUnlock />}
                    required
                />
                <InputFeild
                    type="password"
                    placeholder={'Confirm Password'}
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    icon={<RiLockPasswordLine />}
                    required
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