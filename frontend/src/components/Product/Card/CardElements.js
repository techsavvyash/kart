import styled from "styled-components";

export const CardContainer = styled.div`
    background: #fff;
    box-shadow: 3px 3px 1px grey;
    border-radius: 20px;
    width: 425px;
    height: 400px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center; 
    margin: 10px;
    cursor: pointer;
    font-size: larger;
    &:hover{
        background: grey;
    }
`

export const CardProdDetails = styled.h4`
    color: #000;
    padding: 1.5rem;
`
export const CardProdPhoto = styled.img`
    width: 170px;
    height: 150px;
    padding: 5px;
    margin: 5px;
`   
