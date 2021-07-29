import React from 'react'
import Photo from '../../../images/undraw_web_shopping_dd4l.svg'
import { CardContainer, CardProdDetails, CardProdPhoto, CardBtnWrapper, CardBuyBtn, CardInfoBtn } from './CardElements'
const ProdCard = ({name, price, brand}) => {
    return (
        <CardContainer>
            <CardProdPhoto src={Photo} />
            <CardProdDetails>
                {name} <br />
                ₹{price} <br />
                {brand} <br />
                ✔ Free 7 Days Delivery Guranteed!
            </CardProdDetails>
            {/* <CardBtnWrapper>
                <CardBuyBtn />
                <CardInfoBtn />
            </CardBtnWrapper> */}
        </CardContainer>
    )
}

export default ProdCard
