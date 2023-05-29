import Image from 'next/image'
import React, { useState } from 'react'
import { useWindowSize } from '../../hooks'
import LogoImage from '../../public/assets/images/logo.png'
import { WindowSize } from '../../types'
import {
    CloseButtonContainer,
    CloseIcon,
    LogoContainer,
    MenuIcon,
    MenuLinkContainer,
    Nav,
    NavLinkContainer,
    OverlayMenu
} from './NavElements'

import NavLink from './NavLink'
import { useSession } from "next-auth/react"
import { BsFillPersonFill } from 'react-icons/bs'

const Navbar = () => {

    const size: WindowSize = useWindowSize()
    const [showMenu, setShowMenu] = useState(false)
    const { data: session } = useSession()

    const openMenu = () => {
        setShowMenu(true)
    }

    const closeMenu = () => {
        setShowMenu(false)
    }

    return (
        <Nav>
            <LogoContainer>
                <NavLink route="/">
                    <Image
                        src={LogoImage}
                        alt="logo"
                        width={50}
                        height={50}
                    />
                </NavLink>
            </LogoContainer>

            <NavLinkContainer>
                {
                    size.width > 768 ?
                        <>
                            <NavLink route="/">
                                Home
                            </NavLink>
                            <NavLink route="/products">
                                Products
                            </NavLink>

                            {
                                session ?
                                    <NavLink route='/profile'>
                                        <BsFillPersonFill size={30} />
                                    </NavLink>
                                    :
                                    <NavLink
                                        route="/login"
                                    >
                                        Login
                                    </NavLink>

                            }
                        </>
                        :
                        <MenuIcon
                            size={30}
                            onClick={openMenu}
                        />
                }
            </NavLinkContainer>

            {
                showMenu &&
                <OverlayMenu>
                    <CloseButtonContainer>
                        <CloseIcon
                            size={40}
                            color={'white'}
                            onClick={closeMenu}
                        />
                    </CloseButtonContainer>
                    <MenuLinkContainer>
                        <NavLink
                            route="/"
                            large
                            color='white'
                            onClick={closeMenu}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            route="/products"
                            large
                            color='white'
                            onClick={closeMenu}
                        >
                            Products
                        </NavLink>
                        <NavLink
                            route="/login"
                            large
                            color='white'
                            onClick={closeMenu}
                        >
                            Login
                        </NavLink>
                    </MenuLinkContainer>
                </OverlayMenu>
            }
        </Nav>
    )
}

export default Navbar