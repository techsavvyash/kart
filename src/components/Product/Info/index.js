import React from 'react'
import productImg from '../../../images/product.svg'
import {ProdReviewItem, ProdQuickInfoItem, ProdImg, ProdInfoContainer, 
        ProdInfoTopSec, ProdInfoBtmSec, ProdDetailedInfo, ProdQuickInfo, 
        ProdReviewSec, Btn, DeliveryIcon } from './InfoElements'
import {FaShippingFast, FaMapMarkerAlt, FaShare, FaTwitter, FaFacebook} from 'react-icons/fa'
import {MdLocalOffer} from 'react-icons/md'
import {TiTick} from 'react-icons/ti'

const ProdInfo = () => {
    return (
        <ProdInfoContainer>
            <ProdInfoTopSec>
                <ProdImg src={productImg}/>
                <ProdQuickInfo>
                    <ProdQuickInfoItem>Samsung Galaxy S21+ (Coral Blue) | 12GB</ProdQuickInfoItem>
                    <ProdQuickInfoItem>Price: ₹100/-</ProdQuickInfoItem>
                    <ProdQuickInfoItem>Brand: Some brand</ProdQuickInfoItem>
                    <ProdQuickInfoItem>
                    <DeliveryIcon> <FaShippingFast /> 7 Day Delivery Gurantee </DeliveryIcon>
                    </ProdQuickInfoItem>
                    <ProdQuickInfoItem>
                    <DeliveryIcon> <MdLocalOffer /> No Offers Are Currently Available </DeliveryIcon>
                    </ProdQuickInfoItem>
                    <ProdQuickInfoItem>
                    <DeliveryIcon> <FaMapMarkerAlt /> Deliverable at your current location </DeliveryIcon>
                    </ProdQuickInfoItem>
                    <ProdQuickInfoItem>
                    <DeliveryIcon> <TiTick /> In Stock </DeliveryIcon>
                    </ProdQuickInfoItem>
                    <ProdQuickInfoItem>
                    <DeliveryIcon> 
                        <FaShare /> Share <span /> <span />
                        <FaTwitter /> Tweet <span /> <span />
                        <FaFacebook /> Post  <span /> <span />
                    </DeliveryIcon>
                    </ProdQuickInfoItem>
                    <ProdQuickInfoItem>
                        <Btn>Buy Now</Btn> 
                        <Btn>Add to Kart</Btn>
                        <Btn>Add to Wishlist</Btn>
                    </ProdQuickInfoItem>
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
                <div>
                    <ProdReviewItem>
                        User: John Doe <br /> 
                        Review: Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </ProdReviewItem>
                    <ProdReviewItem>
                        User: Jane Doe <br />     
                        Review: Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </ProdReviewItem>
                </div>
            </ProdReviewSec> 
        </ProdInfoContainer> 
    )
}

export default ProdInfo
