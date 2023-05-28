import styled, { css } from "styled-components";
import { BsEye, BsEyeSlash } from 'react-icons/bs';

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;

    & svg {
        position: absolute;
        transform: translateX(1rem);
        color: rgba(0, 0, 0, 0.65);
    }
`

export const Input = styled.input`
    font-size: 0.85rem;
    padding: 1rem 3rem;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    width: 100%;
`

const EyeIcon = css`
    position: absolute;
    right: 25px;
    color: rgba(0, 0, 0, 0.65);
`

export const ShowPassIcon = styled(BsEye)`
    ${EyeIcon}
`

export const HidePassIcon = styled(BsEyeSlash)`
    ${EyeIcon}
`

