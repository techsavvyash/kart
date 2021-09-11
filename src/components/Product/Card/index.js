import React from 'react'
import Photo from '../../../images/undraw_web_shopping_dd4l.svg'
import { CardContainer, CardProdDetails, CardProdPhoto, CardBtnWrapper, CardBuyBtn, CardInfoBtn } from './CardElements'
import { Btn } from '../Info/InfoElements'

const ProdCard = ({name, price, brand}) => {
    return (
        <CardContainer>
            <CardProdPhoto src={Photo} />
            <CardProdDetails>
                {name} <br />
                Price: ₹{price} <br />
                Brand: {brand} <br />
                ✔ Free 7 Days Delivery Guranteed!
                <Btn>Buy Now</Btn ><Btn>View</Btn>
            </CardProdDetails>
            {/* <CardBtnWrapper>
                <CardBuyBtn />
                <CardInfoBtn />
            </CardBtnWrapper> */}
        </CardContainer>
    )
}

export default ProdCard
