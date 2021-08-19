import React from 'react'
import { FormContainer, FormInput, FormLabel, Form, FormHeading } from './LoginElements'
import { LoginFormBg, LoginBtn } from './LoginElements'
import bg from '../../images/login.svg'
const Login = () => {
    return (
        <FormContainer>
            <LoginFormBg src={bg} />
                <Form>
                    <FormHeading>Hey, There Welcome Back!<br />Login Below</FormHeading>
                    <FormLabel>Email</FormLabel>
                    <FormInput />
                    <FormLabel>Password</FormLabel>
                    <FormInput />
                    <LoginBtn >Sign In</LoginBtn>
                </Form>
        </FormContainer>
    )
}

export default Login
