import React from "react"
import { KartContainer, KartBG, KartHeading } from "../Kart/KartElements"
import { Btn } from "../Product/Info/InfoElements"
import Bg from "../../images/kart.svg"
import { useHistory } from "react-router"

const PaymentSuccess = () =>{
    let history = useHistory() ;
    return (
        <KartContainer>
            <KartBG src={Bg} />
            <KartHeading> 
                Payment Successful, check your email for invoice. <br />\
                <Btn onClick = {()=>{history.push("/")}}> Home </Btn>
            </KartHeading>
        </KartContainer>
    )
}

export default PaymentSuccess ;