import React, { useState, useEffect } from 'react'
import productImg from '../../../images/product.svg'
import {ProdReviewItem, ProdQuickInfoItem, ProdImg, ProdInfoContainer, 
        ProdInfoTopSec, ProdInfoBtmSec, ProdDetailedInfo, ProdQuickInfo, 
        ProdReviewSec, Btn, DeliveryIcon } from './InfoElements'
import {FaShippingFast, FaMapMarkerAlt, FaShare, FaTwitter, FaFacebook} from 'react-icons/fa'
import {MdLocalOffer} from 'react-icons/md'
import {TiTick} from 'react-icons/ti'
import Axios from 'axios'
import {FormInput, FormLabel } from '../../Login/LoginElements'
const Razorpay = require("razorpay") ;
const loadScript = require("../../Utility/LoadScript");

const ProdInfo = () => {
    const [text, setText] = useState("");
    const [name, setName] = useState("sgdsgs");
    const [email, setEmail] = useState("email@email.com");
    const [mob, setMob] = useState(1111111111) ;
    const [details, setDetails] = useState({
        _id: "",
       name: "",
       price: 0,
       brand: "",
       description: "",
       reviews: [] 
    });

    const buyNowHandler = (event) => {
        Axios({
            method: "POST",
            url: "/shop/buynow", 
            withCredentials: true,
            data: {
                prodId: details._id,
                qty: 1
            }
        }).then(res => {
            let options = {
                "key": "rzp_test_wA6CMQo6R8vt6t", // Enter the Key ID generated from the Dashboard
                //"amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "KART",
                "description": "Order Payment",
                "order_id": res.data.orderId, //This is a sample Order ID. Pass the `id` obtained in the previous step
                "handler": function (response){
                    console.log(response);
                    Axios({
                        method: "POST",
                        url: "/shop/verify",
                        withCredentials: true,
                        data: response
                    }).then(res => {
                        alert(res.data.message);
                    })
                },
                "prefill": {
                    "name": name,
                    "email": email,
                    "contact": mob
                },
                "theme": {
                    "color": "#00bf71"
                }
            }
            var rzp1 = new window.Razorpay(options);
            rzp1.on('payment.failed', function (response){
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
            }); 
            rzp1.open() ;
            //event.preventDefault();
        })
    }

    const addListHandler = (list, event) => {
            try {
                Axios({
                    method: "POST" ,
                    url: "/shop/list",
                    withCredentials: true,
                    data: {
                        item: details._id,
                        list: list
                    }
                }).then((res)=>{
                    alert(res.data.message) ;
                })
            } catch(err) {
                //alert(err) ;
            }
    }

    const submitRewiew = () => {
        try{
            Axios({
                method: "POST",
                url: "/shop/addReview",
                data: {
                    id: details._id,
                    name: "Anonymous" ,
                    text: text,
                },
            }).then((res) => {
                alert(res.data.message);
            }) 
        } catch(err) {
            alert(err);
        }
    };
    
    const getDetails = () => {
        let id = (window.location.pathname).substr(6);
        try {
            Axios({
                method: "PUT",
                url: `/shop/getInfo/${id}`,
            }).then(res => {
                if(res.data.success) setDetails({...res.data.product});
            })
        } catch(err) {
            alert(err);
        }
    }

    useEffect(() => {
        loadScript("https://checkout.razorpay.com/v1/checkout.js");
        getDetails();
    }, [])

    return (
        <ProdInfoContainer>
            <ProdInfoTopSec>
                <ProdImg src={productImg}/>
                <ProdQuickInfo>
                    <ProdQuickInfoItem> {details.name} </ProdQuickInfoItem>
                    <ProdQuickInfoItem> Price: ₹{details.price}/- </ProdQuickInfoItem>
                    <ProdQuickInfoItem> Brand: {details.brand} </ProdQuickInfoItem>
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
                        <Btn onClick = {() => buyNowHandler()}>Buy Now</Btn> 
                        <Btn onClick = {() => addListHandler("cart")}>Add to Kart</Btn>
                        <Btn onClick = {() => addListHandler("wishlist")}>Add to Wishlist</Btn>
                    </ProdQuickInfoItem>
                </ProdQuickInfo>
            </ProdInfoTopSec>
             <ProdInfoBtmSec>
                Description:
                <ProdDetailedInfo>
                    {details.description}                
                </ProdDetailedInfo>
            </ProdInfoBtmSec>
            <ProdReviewSec>
                Reviews:
                <div>
                    {
                        details.reviews.map((review, key)=>{
                            return(<ProdReviewItem key = {key}>
                                User:   {review.customer} <br /> 
                                Review: {review.message}
                            </ProdReviewItem>)
                        })
                    }
                    <ProdReviewItem>
                        User: Jane Doe <br />     
                        Review: Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </ProdReviewItem>
                </div>
                Add a Review:
                <div>
                    <ProdReviewItem>
                        <FormLabel> Comment: </FormLabel>
                        <FormInput type="text" onChange = {(event)=>{
                            setText(event.target.value);
                        }} />
                        <Btn onClick = {submitRewiew}> Submit </Btn>
                    </ProdReviewItem>
                </div>
            </ProdReviewSec> 
        </ProdInfoContainer> 
    )
}

export default ProdInfo
