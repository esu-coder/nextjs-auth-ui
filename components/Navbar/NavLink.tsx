import React from 'react'
import { useRouter } from 'next/router'
import { NavLinkProps } from '../../types/propTypes'
import { NavLink as Link } from './NavElements'

const NavLink = ({ route, children, color, large, onClick }: NavLinkProps) => {
    const router = useRouter()
    const currentRoute = router.pathname

    return (
        <Link
            href={route}
            onClick={onClick}
            color={color}
            large={large}
            className={currentRoute === route ? 'active' : ''}
        >
            {children}
        </Link>
    )
}

export default NavLink