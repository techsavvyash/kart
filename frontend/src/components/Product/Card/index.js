import React from 'react'
import Photo from '../../../images/undraw_web_shopping_dd4l.svg'
import { CardContainer, CardProdDetails, CardProdPhoto } from './CardElements'
import { Btn } from '../Info/InfoElements'
import { useHistory } from 'react-router'
import Axios from 'axios' ;

const ProdCard = ({id, name, price, brand, isLoggedIn}) => {
    let history = useHistory();

    const onClickView = (event) => {
        let infoItem = event.target.parentNode.parentNode.id;
        history.push(`/info/${infoItem}`, {from: "/"});
    }

    const addKartHandler = (event) => {
        let infoItem = event.target.parentNode.parentNode.id ;
        if(isLoggedIn) {
            try {
                Axios({
                    method: "POST" ,
                    url: "/shop/list",
                    withCredentials: true,
                    data: {
                        item: infoItem,
                        list: "cart"
                    }
                }).then((res)=>{
                    alert(res.data.message) ;
                })
            } catch(err) {
                alert(err) ;
            }
        } else {
            alert("You need to login to add item to cart!");
        }
    }

    return (
        <CardContainer id = {id}>
            <CardProdPhoto src={Photo} />
            <CardProdDetails>
                {name} <br />
                Price: ₹{price} <br />
                Brand: {brand} <br />
                ✔ Free 7 Days Delivery Guranteed!
                <Btn onClick = {addKartHandler}> Add to Kart </Btn ><Btn onClick = {onClickView}>View</Btn>
            </CardProdDetails>
        </CardContainer>
    )
}

export default ProdCard
