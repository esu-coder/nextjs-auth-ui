import React from 'react'
import Button from '../Button'
import { Container, UserEmail, UserName, Wrapper } from './UserProfileElements'
import { useSession, signOut } from "next-auth/react";


const UserProfile = () => {
    const { data: session }: any = useSession();

    const handleSignOut = () => {
        signOut()
    }

    return (
        <Container>
            <Wrapper>
                {
                    session &&
                    <>
                        <UserName>
                            {
                                'Hello ' + session?.user?.name
                            }
                        </UserName>
                        <UserEmail>
                            { session?.user.email }
                        </UserEmail>

                        <Button
                            title="Logout"
                            onClick={handleSignOut}
                        />
                    </>
                }
            </Wrapper>
        </Container>
    )
}

export default UserProfile