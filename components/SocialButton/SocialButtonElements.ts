import styled from "styled-components";

export const Container = styled.button`
    border: none;
    background-color: #fff;
    color: #707070;
    font-size: 0.9rem;
    width: 100%;
    padding: 0.8rem;
    cursor: pointer;
    transition: all 0.5s;
    border-radius: 5px;
    outline-color: transparent;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #f0f0f0;
    }
`

export const Title = styled.span`
    margin-left: 1rem;
    display: flex;
    justify-content: flex-start;
    flex: 2;
`

export const SocialImageContainer = styled.div`
    display: flex;
    flex: 0.75;
    justify-content: flex-end;
`