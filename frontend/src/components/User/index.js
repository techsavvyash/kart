import React, { useState, useEffect } from 'react'
import UserImg from '../../images/male_avatar.svg'
import {ProdQuickInfoItem, ProdImg, ProdInfoContainer, 
        ProdInfoTopSec, ProdInfoBtmSec, ProdDetailedInfo, ProdQuickInfo} from '../Product/Info/InfoElements'
import Axios from 'axios'

const User = () => {
    const [user, setUser] = useState({
        name: "",
        mobile: "",
        email: "",
        wishList: [],
        orderList: []
    });
    
    const getDetails = ()=>{
        try{
            Axios({
                method: "GET",
                url: "/auth/getUserDetails",
                withCredentials: true
            }).then(res => {
                setUser({...res.data.userDetails});
            })
        } catch(err) {
            alert(err);
        }
        
    }
    useEffect(() => {
        getDetails();
    }, [])

    return (
        <ProdInfoContainer>
            <ProdInfoTopSec>
                <ProdImg src={UserImg}/>
                <ProdQuickInfo>
                    <ProdQuickInfoItem> Name: {user.name} </ProdQuickInfoItem>
                    <ProdQuickInfoItem> Mobile: {user.mobile} </ProdQuickInfoItem>
                    <ProdQuickInfoItem> Email/Username: {user.email} </ProdQuickInfoItem>
                </ProdQuickInfo>
            </ProdInfoTopSec>
             <ProdInfoBtmSec>
                Order History: 
                {user.orderList.map((order, key)=>{
                    return(
                    <ProdDetailedInfo id={key}>{
                        order.map((item, key) => {
                            return(
                                <ProdQuickInfoItem id = {key}> {item} </ProdQuickInfoItem>
                            )
                        })}
                    </ProdDetailedInfo>)
                })}
        
                WishList: 
                {user.wishList.map((order, key)=>{
                    return(
                        <ProdDetailedInfo id={key}>{
                            order.map((item, key) => {
                                return(
                                    <ProdQuickInfoItem id={key}> {item} </ProdQuickInfoItem>
                                    )
                                })}
                    </ProdDetailedInfo>)
                })}    
            </ProdInfoBtmSec>
        </ProdInfoContainer> 
    )
}

export default User ;
