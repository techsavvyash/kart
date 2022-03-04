import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ProdTable, KartContainer, ColHeading, 
         TableRow, TableItem, KartHeading, CheckOutBtn, KartBG } from "./KartElements";
import Bg from "../../images/kart.svg"
import Axios from "axios";
import { Btn } from "../Product/Info/InfoElements";
const Razorpay = require("razorpay") ;
const loadScript = require("../Utility/LoadScript");

const Kart = (props) => {
    let history = useHistory() ;
    const [isLoggedIn, setIsLoggedIn] = useState(false) ;
    const [cart, setCart] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mob, setMob] = useState(1111111111);
    const [res, setRes] = useState({});
    let grandTotal = 0, totalQty = 0;

    const checkOutHandler = (event) => {
        Axios({
            method: "POST",
            url: "/shop/checkout",
            withCredentials: true
        }).then(res => {
            
            console.log("orderID" + res.data.orderId);
            let options = {
                "key": "rzp_test_wA6CMQo6R8vt6t", // Enter the Key ID generated from the Dashboard
                //"amount": 85056 * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
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

    useEffect(()=>{
        let ignore = false;
        if(!ignore) {
            ignore = true;
            try {
                Axios({
                    method: "GET",
                    url: "/auth/checkLoginStatus",
                    withCredentials: true
                }).then(res => {
                    setIsLoggedIn(res.data.loginStatus) ;
                    if(res.data.loginStatus) {
                        setName(res.data.userDetails.name);
                        setEmail(res.data.userDetails.email);
                        setMob(res.data.userDetails.mobile);
                        return Axios({
                            method: "GET",
                            url: "/shop/list?list=cart",
                            withCredentials: true
                        }).then(res => {
                            console.log(res.data) ;
                            setCart([...res.data.message]);
                            console.log(cart) ;
                        })
                    }
                })

                loadScript("https://checkout.razorpay.com/v1/checkout.js");
            } catch(err) {
                alert(err);
            }
        }
    }, [])
    if(isLoggedIn && cart.length){
        console.log(isLoggedIn);
    return (
        <KartContainer>
            <KartHeading> Your order Summary is given below </KartHeading>
            <ProdTable>
                <thead>
                <TableRow>
                    <ColHeading>Item</ColHeading>
                    <ColHeading>Qty</ColHeading>
                    <ColHeading>Price</ColHeading>
                    <ColHeading>Total</ColHeading>
                </TableRow>
                </thead>
                <tbody>
                {cart.map((item, key)=>{
                    totalQty += 1 ;
                    grandTotal += item.price ;
                    return(
                    <TableRow key={key}>
                        <TableItem> {item.name} </TableItem>
                        <TableItem> {1} </TableItem>
                        <TableItem> Rs. {item.price}/- </TableItem>
                        <TableItem> Rs. {item.price}/- </TableItem>
                    </TableRow>) 
                })}
                {
                    <TableRow>
                    <TableItem> Total Qty </TableItem>
                    <TableItem> {totalQty} </TableItem>
                    <TableItem>Grand Total: </TableItem>
                    <TableItem> Rs. {grandTotal}/-</TableItem>
                    </TableRow>
                }
                </tbody>
            </ProdTable>
            <CheckOutBtn onClick ={() => {checkOutHandler()}}> Check Out </CheckOutBtn> 
        </KartContainer>
    )} else if(!isLoggedIn) {
        return(
        <KartContainer>
            <KartBG src={Bg} />
            <KartHeading> 
                You need to login first before accessing the cart. <br />\
                <Btn onClick = {()=>{history.push("/login")}}> Login </Btn>
            </KartHeading>
        </KartContainer>
        );
    } else if(cart.length == 0) {
        return(
        <KartContainer>
            <KartBG src={Bg} />
            <KartHeading> 
                Your cart is empty. <br />
                <Btn onClick = {()=>{history.push("/")}}> Home </Btn>
            </KartHeading>
        </KartContainer>
        );
    }
}

export default Kart ;