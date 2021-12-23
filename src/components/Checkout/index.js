import React, { useState } from 'react' ;
import { FormContainer, FormInput, FormLabel, Form, 
        FormHeading, SignUpFormBg, SignUpBtn  } from '../SignUp/SignUpElements.js' ;
import bg from '../../images/add.svg' ;

const CheckOut = () => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState(0);
    const [addLine1, setAddLine1] = useState("");
    const [addLine2, setAddLine2] = useState("");

    const buyNow = (event) => {

    }

    return (
        <FormContainer>
            <SignUpFormBg src={bg} />
                <Form>
                    <FormHeading>
                        Kindly Enter your Contact Details and Delivery Address below<br />
                    </FormHeading>
                    <FormLabel>Name: </FormLabel>
                    <FormInput type="text" />
                    <FormLabel>Mobile: </FormLabel>
                    <FormInput type="number" />
                    <FormLabel>Address Line1: </FormLabel>
                    <FormInput type="text" />
                    <FormLabel>Address Line2: </FormLabel>
                    <FormInput type="text" />
                    <SignUpBtn > Proceed To Pay </SignUpBtn>
                </Form>
        </FormContainer>
    )
}

export default CheckOut ;
