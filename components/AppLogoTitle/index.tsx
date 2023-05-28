import React from 'react'
import {
    AppTitle,
    Container,
    LogoImage
} from './AppLogoTitleElements'
import LogoImgSrc from '../../public/assets/images/logo.png'

type Props = {}

const AppLogoTitle = (props: Props) => {
    return (
        <Container href="/">
            <AppTitle> OV Travels </AppTitle>
            <LogoImage 
                src={LogoImgSrc}
                alt="logo"
            />
        </Container>
    )
}

export default AppLogoTitle