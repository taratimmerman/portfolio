import React, { useLayoutEffect } from 'react';

import styled from 'styled-components';

import Mask from '../assets/hero-white-mask.png';
import { PageSection } from '../styles/pageStyles';
import Skills from './Skills';
import Work from './Work';


const Home = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <PageSection>
            <GreetingBackground>
                <GreetingWrapper>
                    <Greeting>Hi, I&apos;m Tara.</Greeting>
                    <Greeting>I&apos;m a recent Web Development grad</Greeting>
                    <Greeting>from <StyledLink href="https://lambdaschool.com/hire-from-lambda" target="_blank">Lambda School</StyledLink>.</Greeting>
                </GreetingWrapper>
                <HeroMask src={Mask} />
            </GreetingBackground>
            <Skills />
            <Work />
        </PageSection>
    );
};

export default Home;

// STYLED COMPONENTS BELOW:

const HeroMask = styled.img`
    width: 100%;
    z-index: 0;
    transform: translateY(8px);
`;

const GreetingBackground = styled.div`
    z-index: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top right,#c04de2,#340c7f);
`;

const GreetingWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 3rem 0 1rem 0;

    @media screen and (max-width: 500px) {
        margin: 2rem 0 1rem 0;
    }
`;

const Greeting = styled.h1`
    font-size: 3.5rem;
    line-height: 1.55em;
    color: #f8f8f8;
    max-width: 80vw;
    text-align: center;

    @media screen and (max-width: 825px) {
        font-size: 2.5rem;
        transition: 0.5s ease;
    }

    @media screen and (max-width: 500px) {
        font-size: 2rem;
        transition: 0.5s ease;
    }
    @media screen and (max-width: 400px) {
        font-size: 1.5rem;
        transition: 0.5s ease;
    }
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: black;
`;