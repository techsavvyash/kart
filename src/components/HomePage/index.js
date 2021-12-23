import Axios from "axios";
import React, { useEffect, useState } from "react" ;
import ProdCard from '../Product/Card';
import { HomePgContainer } from "./HomePageElements";
const Razorpay = require("razorpay") ;
const loadScript = require("../Utility/LoadScript");

const HomePg = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [Products, setProducts] = useState([{
        "name": "sample",
    }]);

    // const loadScript = (src) => {
    //     return new Promise((resolve) => {
    //       const script = document.createElement("script");
    //       script.src = src;
    //       script.onload = () => {
    //         resolve(true);
    //       };
    //       script.onerror = () => {
    //         resolve(false);
    //       };
    //      document.body.appendChild(script);
    //    });
    // };

    useEffect(()=>{
        let ignore = false;
        if(!ignore) {
            ignore = true;
            try{
                Axios({
                    method: "GET",
                    url: "/shop/products",
                    withCredentials: true
                }).then(res => {
                    setProducts([...res.data.message]);
                })

                Axios( {
                    method:"GET" ,
                    url: "/auth/checkLoginStatus",
                    withCredentials: true
                }).then((res)=>{
                    setIsLoggedIn(res.data.loginStatus) ;
                })

                loadScript("https://checkout.razorpay.com/v1/checkout.js");
            } catch(err) {
                alert(err);
            }
        }
    }, []) ;

    return(
        <HomePgContainer>
            {
                Products.map((prod, key)=>{
                    return(
                        <ProdCard id = {prod._id} name={prod.name} price = {prod.price} brand = {prod.brand} key={key} isLoggedIn = {isLoggedIn}/>
                    )
                })
            }
            <button onClick = {(event)=>{
                let options = {
                    "key_id": "rzp_test_wA6CMQo6R8vt6t", // Enter the Key ID generated from the Dashboard
                    //"key_secret": "d6Ookh3AtEjkUNcs5Pyn1Bsz",
                    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                    "currency": "INR",
                    "name": "Acme Corp",
                    "description": "Test Transaction",
                    "order_id": "order_DBJOWzybf0sJbb", //This is a sample Order ID. Pass the `id` obtained in the previous step
                    "handler": function (response){
                        alert(response.razorpay_payment_id);
                        alert(response.razorpay_order_id);
                        alert(response.razorpay_signature)
                    },
                    "prefill": {
                        "name": "Yash",
                        "email": "yash@email.com",
                        "contact": "999999999"
                    },
                    "notes": {
                        "address": "Razorpay Corporate Office"
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
                event.preventDefault() ;
            }}> CLick </button>
        </HomePgContainer>
    )
}

export default HomePg ;