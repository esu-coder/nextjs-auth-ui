import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 100%;
    padding: 4rem;

    @media (max-width: 768px) {
        width: 90%;
    }
`

export const UserName = styled.h3`
    margin: 1rem;
`

export const UserEmail = styled.h5`
    margin-bottom: 1rem;
    color: slateblue;
    font-size: 0.9rem;
`