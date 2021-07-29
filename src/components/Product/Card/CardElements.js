import styled from "styled-components";

export const CardContainer = styled.div`
    background: #010606;
    box-shadow: 3px 3px 1px grey;
    border-radius: 20px;
    width: 350px;
    height: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center; 
    margin: 10px;
    cursor: pointer;
    &:hover{
        background: grey;
    }
`

export const CardProdDetails = styled.h4`
    color: #fff;
    padding: 1.5rem;


`
export const CardProdPhoto = styled.img`
    width: 170px;
    height: 150px;
    padding: 5px;
    margin: 5px;
`   
