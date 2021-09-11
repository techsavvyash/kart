import React from 'react'
import { FormContainer, FormInput, FormLabel, Form, FormHeading } from './SignUpElements'
import { SignUpFormBg, SignUpBtn } from './SignUpElements'
import bg from '../../images/signup.svg'
const SignUp = () => {
    return (
        <FormContainer>
            <SignUpFormBg src={bg} />
                <Form>
                    <FormHeading>
                        Hey There! Welcome to Kart<br />
                        Fill the form below to SignUp for your free kart account.
                    </FormHeading>
                    
                    <FormLabel>Name: </FormLabel>
                    <FormInput type="text" />
                    <FormLabel>Email: </FormLabel>
                    <FormInput type="text" />
                    <FormLabel>Mobile: </FormLabel>
                    <FormInput type="number" />
                    <FormLabel>Password: </FormLabel>
                    <FormInput type="text" />
                    <FormLabel>Confirm Password: </FormLabel>
                    <FormInput type="text" />
                    <SignUpBtn >Sign Up</SignUpBtn>
                </Form>
        </FormContainer>
    )
}

export default SignUp
