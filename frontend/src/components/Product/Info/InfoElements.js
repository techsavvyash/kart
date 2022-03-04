import styled from "styled-components";

export const ProdInfoContainer = styled.div`
    min-height: 88vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    background: black;
    overflow-y: auto; 
    position: static;

    /* @media screen and (max-width: 768px){
        flex-direction: row;
    } */
`;


export const ProdInfoBtmSec = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    /* position: absolute; */
    margin: 2.25%;
    color: white;
    font-size: x-large;
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
    @media screen and (max-width: 768px){
        flex-direction: column;
        text-align: center;
    }
`

export const ProdQuickInfo = styled.ul`
    list-style: none;
    right: 0;
    top: 1;
    position: relative;
    color:white;
    width: 60vw;
    /* display: flex;
    align-items: flex-end;
    justify-content: flex-end; */
`;

export const ProdImg = styled.img`
    left: 0;
    top: 0;
    width: 60%;
    position: relative;
    border: solid white 1pt;
    margin-right: 5%;
    margin-left: 5%;
    @media screen and (max-width: 768px) {
        width: 85vw;
        
    }

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
    border: solid white 0.5pt;
    padding: 12px;
    margin: 5px;
    border-radius: 5px;
    @media screen and (max-width: 768px) {
        font-size: medium;
    }
`

export const ProdQuickInfoItem = styled.li`
    font-size: xx-large;
    width: 45vw;
    margin: 10px;
    @media screen and (max-width: 768px) {
        font-size: large;
        width: 90vw;
    }
`;

export const ProdReviewItem = styled.p`
    font-size: x-large;
    border: solid white 0.5pt;
    border-radius: 5px;
    color: white;
    padding: 12px;
    margin: 1%;  
    @media screen and (max-width: 768px) {
        font-size: medium;
    }
`;



export const Btn = styled.button`
    background-color: #01bf71;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.2 all ease-in;
    height: 50px;
    width: 160px;
    font-size: 20px;
    margin: 12.5px;
    box-shadow: grey 2px 2px 2px;
`

export const DeliveryIcon = styled.div`
    color: white;
    height: 50px;
    padding-left: 5px;
    padding-right: 5px;
    @media screen and (max-width: 768px) {
        margin: 2px;
        paddin: 2px;
    }
`