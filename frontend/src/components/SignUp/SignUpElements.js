import styled from "styled-components";

export const SignUpFormBg = styled.img`
    width: 30%;
    left: 0;
    bottom: 0;
    position: absolute;
    
    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const SignUpBtn = styled.button`
    background-color: #01bf71;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.2 all ease-in;
    height: 50px;
    width: 170px;
    font-size: 20px;
`

export const FormContainer = styled.div`
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    min-height: 88vh;
    /* position: relative; */
    /* z-index: 1; */
   overflow: auto;
`

export const Form = styled.form`
    /* z-index: 11; */
    width: 40vh;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 15px;
    box-shadow: 5px 5px grey; 
`
export const FormLabel = styled.label`
    color: black;
    text-align: left;
    margin: 6px;
    font-weight: bold;
    
`;

export const FormInput = styled.input`
    display: block;
    height: 50px;
    width: 70%;
    max-width: 1000px;
    border: solid black 2pt;
    margin: 12px;

`
export const LoginBtn = styled.button`
    background-color: #01bf71;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.2 all ease-in;
    height: 50px;
    width: 100px;
    font-size: 20px;
`

export const FormHeading = styled.h3`
    color: #01bf71;
    text-align: center;
    
`

