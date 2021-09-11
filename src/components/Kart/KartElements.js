import styled from "styled-components";

export const KartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background-color: #000;
    margin: none;
    padding: 12px;
    color: white;
    font-size: larger;
    overflow-y: auto;
    min-height: 85.5vh;
     
`

export const KartHeading = styled.h2`
    font-size: xx-large;
    margin: 24px;
    z-index: 50;
`
export const HeadingULine = styled.hr`
    display: inline-block;
    color: #000000;
`

export const ProdTable = styled.table`
    /* border: solid white 2pt; */
    padding: 12px;
    color: white;
    width: 60vw;
    border-radius: 15px;
    background-color: white;
    box-shadow: grey 7px 7px;
    border-spacing: 0;
    overflow: auto;
    
    @media screen and (max-width: 768px) {
        width: 90vw;
    }
   
`
export const ColHeading = styled.th`
    margin: 5px;
    margin-top: 10px;
    font-size: x-large;
    text-align: center;
    color: black;
    border-bottom: solid black 1pt;
    @media screen and (max-width: 768px) {
        font-size: medium;
    }
    
`

export const TableRow = styled.tr`
    margin: 5px;
    font-size: large;
    text-align: center;
    color: black;
`

export const TableItem = styled.td`
    margin: 5px;
    font-size: x-large;
    text-align: center;
    height: 15vh;
    width: 18vw;
    border: solid white 2pt;
    color: black;
    border-bottom: solid black 1pt;
    @media screen and (max-width: 768px) {
        font-size: medium;
    }
`

export const CheckOutBtn = styled.button`
    background-color: #01bf71;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.2 all ease-in;
    height: 100px;
    width: 300px;
    font-size: xx-large;
    margin: 25px;    
`

