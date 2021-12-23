import React, { useEffect } from 'react'
import { useState } from 'react';
import { FormContainer, FormInput, FormLabel, Form, FormHeading } from './LoginElements'
import { LoginFormBg, LoginBtn } from './LoginElements'
import bg from '../../images/login.svg'
import Axios from "axios";
import { WarningMessage } from '../Utility/UtilityElements';
import { useHistory } from 'react-router';
import { KartBG, KartContainer, KartHeading } from '../Kart/KartElements';
import BG from "../../images/kart.svg";

const Login = (props) => {
    let history = useHistory();
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLogged, setIsLoggedIn] = useState(false);

    let warningBox = document.getElementById("warningBox");
    const loginReq = (event) => {
        let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
        if(!regex.test(userName)){
            document.getElementById("warningBox").innerText = "Invalid email";
        } else{
            try {
                Axios({
                    method: "POST",
                    url: "/auth/login",
                    data: {
                        email: userName,
                        password: password
                    }
                }).then((res)=>{
                    warningBox.innerText = res.data.message;
                    warningBox.style.backgroundColor = res.data.success ? "#01bf71" : "#d61818";
                    setIsLoggedIn(res.data.success);
                    if(res.data.success){
                        history.goBack();
                    }
                }) 
            } catch(err) {
                console.log(err);
            }
        }
        event.preventDefault();
    }
    if(!props.isLoggedIn){
    return (
        <FormContainer>
            <LoginFormBg src={bg} />
                <Form onSubmit={loginReq}>
                    <FormHeading>Hey, There Welcome Back!<br />Login Below</FormHeading>
                    <WarningMessage id="warningBox"> </WarningMessage>
                    <FormLabel>Email</FormLabel>
                    <FormInput type="email" onChange = {(event) => setUsername(event.target.value)} />
                    <FormLabel>Password</FormLabel>
                    <FormInput type="password" onChange = {(event) => setPassword(event.target.value)}/>
                    <LoginBtn >Sign In</LoginBtn>
                </Form>
        </FormContainer>
    )} else {
        history.push("/");
        return(
        <KartContainer>
            <KartBG src = {BG}/>
            <KartHeading>You are already loggedIn, redirecting to home!</KartHeading>
        </KartContainer>)
    }
}

export default Login
