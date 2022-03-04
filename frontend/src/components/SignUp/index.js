import React from 'react'
import { useState } from 'react'
import { FormContainer, FormInput, FormLabel, Form, FormHeading } from './SignUpElements'
import { SignUpFormBg, SignUpBtn } from './SignUpElements'
import { WarningMessage } from '../Utility/UtilityElements'
import bg from '../../images/signup.svg'
import Axios from "axios"
import { useHistory } from 'react-router'

const SignUp = () => {
    
    let history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState(0);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    let warningBox = document.getElementById("warningBox");

    const signupReq = (event) => {
        let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
        if(!regex.test(email)){
            warningBox.innerText = "Invalid email";
        } else if(password !== confirmPassword) {
            warningBox.innerText = "Passwords don't match!";
            document.getElementById("password").style.borderColor = "#d61818";
            document.getElementById("confirmPassword").style.borderColor = "#d61818";
        } else if(mobile.toString().length !== 10 ) {
            warningBox.innerText = "Enter a valid 10 digit mobile number";
        } else {
            try{
                Axios({
                    method: "POST",
                    url: "/auth/signup",
                    data: {
                        name: name, 
                        email: email, 
                        mobile: mobile, 
                        password: password,
                        accountType: "normal"
                    }, 
                }).then((res)=>{
                    warningBox.innerText = res.data.message;
                    warningBox.style.backgroundColor = res.data.success ? "#01bf71" : "#d61818";
                    alert(res.data.message);
                    if(res.data.success) history.push('/login',  {from: '/signup'});
                })
            } catch(err){
                console.log(err);
            }
        }
        event.preventDefault();
    }
        
    return (
        <FormContainer>
            <SignUpFormBg src={bg} />
                <Form onSubmit = {signupReq}>
                    <FormHeading>
                        Hey There! Welcome to Kart<br />
                        Fill the form below to SignUp for your free kart account.
                    <WarningMessage id="warningBox"></WarningMessage>
                    </FormHeading>
                    <FormLabel>Name: </FormLabel>
                    <FormInput type="text" onChange = {(event)=>{
                        setName(event.target.value);
                    }} />
                    <FormLabel>Email: </FormLabel>
                    <FormInput type="email" onChange = {(event)=>{
                        setEmail(event.target.value);
                    }} />
                    <FormLabel>Mobile: </FormLabel>
                    <FormInput type="number" onChange = {(event)=>{
                        setMobile(event.target.value);
                    }} /> 
                    <FormLabel> Password: </FormLabel>
                    <FormInput type="password" id="password" onChange = {(event) =>{
                        setPassword(event.target.value);
                    }} />
                    <FormLabel> Confirm Password: </FormLabel>
                    <FormInput type="password" id="confirmPassword" onChange = {(event)=>{
                        setConfirmPassword(event.target.value);
                    }} />
                    <SignUpBtn id="signUpBtn">Sign Up</SignUpBtn>
                </Form>
        </FormContainer>
    )
}

export default SignUp ;
