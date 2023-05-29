import Image from 'next/image'
import React from 'react'
import { SocialButtonProps } from '../../types/propTypes'
import {
    Container,
    SocialImageContainer,
    Title,
} from './SocialButtonElements'


const SocialButton = ({ title, onClick, icon }: SocialButtonProps) => {
    return (
        <Container
            onClick={onClick}
        >
            <SocialImageContainer>
                <Image
                    src={icon}
                    alt={'social'}
                    height={20}
                    width={20}
                />
            </SocialImageContainer>

            <Title>
                {title}
            </Title>

        </Container>
    )
}

export default SocialButton