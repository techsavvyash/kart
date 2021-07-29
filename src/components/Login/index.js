import React from 'react'
import { LoginFormContainer, FormInput, FormLabel, LoginBtn, LoginForm, LoginFormBg, VideoBg } from './LoginElements'
import bg from '../../images/login.svg'
const Login = () => {
    return (
        <LoginFormContainer>
            <LoginFormBg src={bg} />
                <LoginForm>
                    <FormLabel>Email</FormLabel>
                    <FormInput />
                    <FormLabel>Password</FormLabel>
                    <FormInput />
                    <LoginBtn >Sing In</LoginBtn>
                </LoginForm>
            
        </LoginFormContainer>

    )
}

export default Login
