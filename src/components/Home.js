import React from 'react';
import styled from 'styled-components';
import Work from './Work';

const Home = () => {
    return (
        <>
        <GreetingWrapper>
            <Greeting>Hi, I’m Tara.</Greeting>
            <Greeting>I’m a recent Web Development grad</Greeting>
            <Greeting>from <StyledLink href="https://lambdaschool.com/hire-from-lambda" target="_blank">Lambda School</StyledLink>.</Greeting>
        </GreetingWrapper>
        <Work />
        </>
    )
};

export default Home

// STYLED COMPONENTS BELOW:

const GreetingWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 3rem 0 5rem 0;
`;

const Greeting = styled.h1`
    font-size: 3.5rem;
    line-height: 1.55em;
    color: #404040;
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