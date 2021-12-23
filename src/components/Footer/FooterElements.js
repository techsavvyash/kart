import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'
export const FooterContainer = styled.footer`
    bottom: 0;
    background: #000000;
    position: relative;
    color: #fff;
    width: 100%;
    height: 8%;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`

export const FooterSocials = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
`

export const FooterSocialLink = styled(LinkR)`
    width: 50px;
    color:#01bf71;
`