import styled from "styled-components";

export const LoginFormContainer = styled.div`
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`
export const LoginFormBg = styled.img`
    width: 50%;
    left: 0;
`;

export const VideoBg  = styled.video`
    width: 100%;
    /* height: 80%; */
    overflow: hidden;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const LoginForm = styled.form`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border-radius: 5px;
`
export const FormLabel = styled.label`
    color: black;
    font-size: 48px;
    text-align: center;
    
`

export const FormInput = styled.input`
    display: block;
    height: 120px;
    width: 240px;

`
export const LoginBtn = styled.button`
    background-color: #01bf71;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.2 all ease-in;
    height: 50px;
    width: 100px;
    font-size: 30px;
`