import styled from "styled-components";

export const Container = styled.button`
    border: none;
    background-color: ${props => props.disabled ? 'lightgray' : '#24a0ed'} ;
    color: ${props => props.disabled ? 'black' : '#fff'};
    font-size: 0.9rem;
    width: 100%;
    padding: 0.8rem;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    transition: all 0.5s;
    border-radius: 5px;
    outline: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);

    &:hover {
        background-color: ${props => props.disabled ? 'lightgray' : '#707070'};
    }
`