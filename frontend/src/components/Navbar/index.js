import React from 'react'
import { Nav, NavbarContainer, NavLogo, NavMenu, MobileIcon, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarElements'
import {FaBars} from 'react-icons/fa'

const Navbar = ({toggle}) => {
    return (
       <> 
        <Nav>
            <NavbarContainer>
                <NavLogo to = "/"> kart </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars /> 
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/signup">SignUp</NavLinks>
                    </NavItem>
                    <NavBtn>
                        <NavBtnLink to="/login">Sign In</NavBtnLink>
                    </NavBtn>
                </NavMenu> 
            </NavbarContainer>
        </Nav>
       </>
    )
}

export default Navbar
