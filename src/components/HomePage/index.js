import Axios from "axios";
import React, { useEffect, useState } from "react" ;
import ProdCard from '../Product/Card';
import { HomePgContainer } from "./HomePageElements";
const HomePg = () => {

    const [Products, setProducts] = useState([{
        "name": "sample",
    }]);
    useEffect(()=>{
        let ignore = false;
        if(!false) {
            ignore = true;
            Axios({
                method: "GET",
                url: "/shop/products",
            }).then(res => {
                setProducts([...res.data.message]);
            })
        }
    }, []) ;

    return(
        <HomePgContainer>
            {
                Products.map((prod, key)=>{
                    return(
                        <ProdCard id = {prod._id} name={prod.name} price = {prod.price} brand = {prod.brand} key={key}/>
                    )
                })
            }
        </HomePgContainer>
    )
}

export default HomePg ;