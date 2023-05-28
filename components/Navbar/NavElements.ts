import Link from "next/link";
import styled from "styled-components";
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiFillCloseCircle } from 'react-icons/ai'

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.25);
`

export const LogoContainer = styled.div`
    padding-left: 1rem;
`

export const NavLinkContainer = styled.div`
    display: flex;
    align-items: center;
`

export const NavLink = styled(Link) <{ large?: boolean }>`
    padding: 1rem;
    margin-left: 1rem;
    font-size: ${props => props.large ? '1.5rem' : '1rem'};
    color: ${props => props.color || '#132424'};

    &:hover {
        color: #a6a2a2;
    }

    &.active {
        color: #03a062;
    }
`

export const MenuIcon = styled(GiHamburgerMenu)`
    cursor: pointer;
    margin: 0 1rem;
`

export const CloseIcon = styled(AiFillCloseCircle)`
    cursor: pointer;
`

export const OverlayMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #132424;

    @media (min-width: 768px) {
        display: none;
    }
`

export const MenuLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const CloseButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1.5rem;
    position: absolute;
`