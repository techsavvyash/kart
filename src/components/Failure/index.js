import React from "react"
import { KartContainer, KartBG, KartHeading } from "../Kart/KartElements"
import { Btn } from "../Product/Info/InfoElements"
import Bg from "../../images/kart.svg"
import { useHistory } from "react-router"

const PaymentFailure = () =>{
    let history = useHistory() ;
    return (
        <KartContainer>
            <KartBG src={Bg} />
            <KartHeading> 
                Payment Failed!. <br />
                <Btn onClick = {()=>{history.push("/")}}> Login </Btn>
            </KartHeading>
        </KartContainer>
    )
}

export default PaymentFailure ;