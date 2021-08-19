import React from 'react'
import productImg from '../../../images/product.svg'
import {ProdReviews, ProdReviewItem, ProdQuickInfoItem, ProdImg, ProdInfoContainer, 
        ProdInfoTopSec, ProdInfoBtmSec, ProdDetailedInfo, ProdQuickInfo, 
        ProdReviewSec } from './InfoElements'

const ProdInfo = () => {
    return (
        <ProdInfoContainer>
            <ProdInfoTopSec>
                <ProdImg src={productImg}/>
                <ProdQuickInfo>
                    <ProdQuickInfoItem>Samsung Galaxy S21+ (Coral Blue) | 12GB</ProdQuickInfoItem>
                    <ProdQuickInfoItem>Price: ₹100/-</ProdQuickInfoItem>
                    <ProdQuickInfoItem>Brand: Some brand</ProdQuickInfoItem>
                </ProdQuickInfo>
            </ProdInfoTopSec>
            <ProdInfoBtmSec>
                Description:
                <ProdDetailedInfo>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </ProdDetailedInfo>
            </ProdInfoBtmSec>
            <ProdReviewSec>
                Reviews:
                <ProdReviews>
                    <ProdReviewItem>
                        User: John Doe <br /> 
                        Review: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </ProdReviewItem>
                    <ProdReviewItem>
                        User: Jane Doe <br />     
                        Review: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </ProdReviewItem>
                </ProdReviews>
            </ProdReviewSec>
        </ProdInfoContainer>
    )
}

export default ProdInfo
