import React from 'react'
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <StyledH1>Want to learn more?</StyledH1>
            <StyledH3>Download my <StyledLink href="https://resume.creddle.io/resume/8jy1or5ub4n" target="_blank">resume</StyledLink>.</StyledH3>
            <Copyright>© 2021 Tara Timmerman</Copyright>
        </FooterContainer>
    )
}

export default Footer

// STYLED COMPONENTS BELOW:

const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #5c5c5c;
    margin: 3rem 0;
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