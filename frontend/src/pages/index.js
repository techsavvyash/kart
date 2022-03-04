import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import HomePg from '../components/HomePage';
import SideBar from '../components/Sidebar'
import Login from '../components/Login';
import SignUp from '../components/SignUp/index';
import ProdInfo from '../components/Product/Info';
import Kart from '../components/Kart';
import CheckOut from '../components/Checkout';
import User from '../components/User';
import PaymentSuccess from '../components/Success';
import PaymentFailure from '../components/Failure';
import FrontPage from '../components/FrontPage'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = ()=>{
        setIsOpen(!isOpen);
    }

    return (
        <Router> 
        <div style = {{overflow: "auto"}}>
            <SideBar isOpen={isOpen} toggle={toggle} /> 
            <Navbar toggle={toggle} />
            <Switch >
                <Route exact path = "/"> 
                    <HomePg /> 
                </Route>
                <Route path = "/login">
                    <Login />
                </Route>
                <Route path = "/signup">
                    <SignUp />
                </Route>
                <Route path = "/info/:prodId">
                    <ProdInfo/>
                </Route>
                <Route path = "/user" >
                    <User />
                </Route>
                <Route path = "/kart">
                    <Kart />
                </Route>
                <Route path = "/checkout">
                    <CheckOut />
                </Route>
                <Route path = "/success/:orderId">
                    <PaymentSuccess />
                </Route>
                <Route path = "/failure/:orderId">
                    <PaymentFailure />
                </Route>
            </Switch>
            <Footer />
        </div>
        </Router>
    );
};



export default Home
