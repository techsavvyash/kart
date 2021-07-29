import React, { useState } from 'react'
import Footer from '../components/Footer';
import { LoginFormContainer } from '../components/Login/LoginElements';
import Navbar from '../components/Navbar'
import ProdCard from '../components/Product/Card';
import ProdSection from '../components/Product/Section';
import SideBar from '../components/Sidebar'
import Login from '../components/Login';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = ()=>{
        setIsOpen(!isOpen);
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            {/* <div style={{display:'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center'}}>
            <ProdCard name="Apple iPhone 12 Pro" price="147" brand="generic" /> 
            <ProdCard name="Apple iPhone 12 Pro" price="147" brand="generic" /> 
            <ProdCard name="Apple iPhone 12 Pro" price="147" brand="generic" /> 
            <ProdCard name="Apple iPhone 12 Pro" price="147" brand="generic" /> 
            <ProdCard name="Apple iPhone 12 Pro" price="147" brand="generic" /> 
            <ProdCard name="Apple iPhone 12 Pro" price="147" brand="generic" /> 
            <ProdCard name="Apple iPhone 12 Pro" price="147" brand="generic" /> 
            <ProdCard name="Apple iPhone 12 Pro" price="147" brand="generic" /> 
            <ProdCard name="Apple iPhone 12 Pro" price="147" brand="generic" /> 
            <ProdCard name="Apple iPhone 12 Pro" price="147" brand="generic" /> 
            <ProdCard name="Apple iPhone 12 Pro" price="147" brand="generic" /> 
            <ProdCard name="Apple iPhone 12 Pro" price="147" brand="generic" /> 
            <ProdCard name="Apple iPhone 12 Pro" price="147" brand="generic" /> 
            <ProdCard name="Apple iPhone 12 Pro" price="147" brand="generic" /> 
            </div> */}
            <Login  />
            <Footer />
        </>
    );
};



export default Home
