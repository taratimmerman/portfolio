import React from 'react';

import styled from 'styled-components';

import Mask from '../assets/footer-white-mask.png';

const Footer = () => {
    return (
        <FooterBackground>
            <FooterMask src={Mask}/>
            <FooterContainer>
                <StyledH1>Want to learn more?</StyledH1>
                <StyledH3>Download my <StyledLink href="https://docs.google.com/document/d/1gfU0IKuo67Ltiy2_7zOFov7EbIvxhLtGJ37qSVVrx14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">resume</StyledLink>.</StyledH3>
                <Copyright>© 2021 Tara Timmerman</Copyright>
            </FooterContainer>
        </FooterBackground>
    );
};

export default Footer;

// STYLED COMPONENTS BELOW:

const FooterMask = styled.img`
    width: 100%;
    z-index: -99;
    transform: translateY(-3px);
`;

const FooterBackground = styled.div`
    z-index: -99;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom right,#450b7c,#563cc9,#49e9fb);
`;

const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #f8f8f8;
    padding: 3rem 0 3rem 0;
`;

const StyledH1 = styled.h1`
    margin: 1rem 0;
    text-align: center;
`;

const StyledH3 = styled.h3`
    margin: 1rem 0;
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: black;

    &:hover {
        text-decoration: underline;
        }
`;

const Copyright = styled.span`
    margin: 4rem 2rem 0;
    font-size: .85rem;
`;