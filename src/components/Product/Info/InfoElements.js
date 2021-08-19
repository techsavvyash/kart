import styled from "styled-components";

export const ProdInfoContainer = styled.div`
    height: 88vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    background: black;
    overflow-y: auto; 
    position: static;
`;


export const ProdInfoBtmSec = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    /* position: absolute; */
    margin: 2.25%;
    color: white;
    font-size: larger;
    font-weight: bold;
   
    
`;

export const ProdInfoTopSec = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    /* position: absolute; */
    margin-top: 2%;
    margin-bottom: 2.25%;
`

export const ProdQuickInfo = styled.ul`
    list-style: none;
    right: 0;
    top: 1;
    position: relative;
    color:white;
    /* display: flex;
    align-items: flex-end;
    justify-content: flex-end; */
`;

export const ProdImg = styled.img`
    left: 0;
    top: 0;
    width: 50%;
    position: relative;
    border: solid white 1pt;
    margin-right: 5%;
    margin-left: 5%;

`;

export const ProdReviewSec = styled.div`
    margin-top: 5%;
    margin-right: 2.25%;
    margin-left: 2.25%;
    margin-bottom: 10%;
    list-style: none;
    color: white;
    font-weight: bolder;
    font-size: xx-large;
   
`

export const ProdDetailedInfo = styled.p`
    color: white;
    font-size: x-large;
`

export const ProdQuickInfoItem = styled.li`
    font-size: x-large;
    width: 45vw;
`;

export const ProdReviewItem = styled.p`
    font-size: x-large;
    border: solid white 2pt;
    color: white;
    padding: 12px;
    margin: 1%;  
`;

export const ProdReviews = styled.div`
`;