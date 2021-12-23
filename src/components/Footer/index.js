import React from 'react'
import { FooterContainer, FooterSocials, FooterSocialLink} from './FooterElements'
import {AiFillGithub, AiFillLinkedin, AiFillYoutube, AiFillBehanceCircle, AiFillCodepenCircle} from 'react-icons/ai'


const Footer = () => {
    return (
        <FooterContainer>
            <FooterSocials>
                <FooterSocialLink to="github" onClick = {()=>{
                    window.location.href = "https://github.com"
                }}><AiFillGithub /></FooterSocialLink>
                <FooterSocialLink to="github" onClick = {()=>{
                    window.location.href = "https://github.com"
                }}><AiFillLinkedin /></FooterSocialLink>
                <FooterSocialLink to="github" onClick = {()=>{
                    window.location.href = "https://github.com"
                }}><AiFillYoutube /></FooterSocialLink>
                <FooterSocialLink to="github" onClick = {()=>{
                    window.location.href = "https://github.com"
                }}><AiFillBehanceCircle /></FooterSocialLink>
                <FooterSocialLink to="github" onClick = {()=>{
                    window.location.href = "https://github.com" ;
                }}><AiFillCodepenCircle /></FooterSocialLink>
            </FooterSocials>
           
        </FooterContainer>
    )
}

export default Footer
