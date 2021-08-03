import React, { useLayoutEffect } from 'react';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

import Tara from '../assets/tara.png';
import {
    PageSection,
    PageTitle,
    PageTitleBorder
} from '../styles/pageStyles';

const About = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <PageSection>
            <PageTitle>About</PageTitle>
            <PageTitleBorder />

            <AboutImage alt="Tara Timmerman"></AboutImage>

            <AboutText>
                <StyledH4>Hi! Nice to meet you, I&apos;m Tara.</StyledH4>
                <StyledP>I recently graduated from <StyledLink href="https://lambdaschool.com/hire-from-lambda" target="_blank" rel="noopener noreferrer">Lambda School</StyledLink> in Full Stack Web Development and enjoy creating inclusive, user-friendly and efficient web applications. Check out some of what I&apos;ve been up to lately <StyledLink href="https://github.com/taratimmerman/ticket-punch-fe" target="_blank" rel="noopener noreferrer">here</StyledLink>, <StyledLink href="https://github.com/taratimmerman/ticket-punch-be" target="_blank" rel="noopener noreferrer">here</StyledLink> and <StyledLink href="https://dev.to/taratimmerman" target="_blank" rel="noopener noreferrer">there</StyledLink>.</StyledP>
                <StyledP>I thrive in a collaborative environment and appreciate building excellent relationships between people and teams—my Lambda apprenticeship team met and developed a robust app in just four weeks—and I&apos;m actively searching for the next talented team to join.</StyledP>
                <StyledP>Before Lambda School, I worked at HCA Healthcare, where I was a prominent part of their community impact—like being directly responsible for increasing blood drive donations by over 10% in 2018—and later moved into technical support.</StyledP>
                <StyledP>When I am not programming, I can be found longboarding and spending time with my wife and pups in <StyledLink href="https://en.wikipedia.org/wiki/Silicon_Slopes" target="_blank" rel="noopener noreferrer">Silicon Slopes</StyledLink>⛰️.</StyledP>
            </AboutText>

            <SocialsWrapper>
                <SocialsLink href="https://www.linkedin.com/in/tara-timmerman/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialsLink>
                <SocialsLink href="https://github.com/taratimmerman" target="_blank" rel="noopener noreferrer"><FaGithub /></SocialsLink>
            </SocialsWrapper>

        </PageSection>
    );
};

export default About;

// STYLED COMPONENTS BELOW:

const AboutImage = styled.div`
    background-image: url(${Tara});
    box-shadow: 0 70px 140px 0 rgb(130 136 171 / 20%);
    background-position: center;
    width: 18rem;
    height: 18rem;
    border-radius: 50%;
    border: 5px solid #fcfcfc;
`;

const AboutText = styled.div`
    margin: 3rem 0;
    justify-content: flex-start;
    width: 70vw;
    max-width: 700px;
`;

const StyledH4 = styled.h4`
    font-size: 1.3rem;
`;

const StyledP = styled.p`
    margin: 1rem 0 0 0;
    line-height: 1.8em;
    text-rendering: optimizeLegibility;
    font-size: 1rem;
`;

const StyledLink = styled.a`
    text-decoration: underline;
    color: black;
    font-size: 1rem;

    &:hover {
        text-decoration: none;
        }
`;

const SocialsWrapper = styled.div`
    max-width: 100px;
`;

const SocialsLink = styled.a`
    text-decoration: none;
    color: #404040;
    font-size: 1.5rem;
    padding: 10px;

    &:hover {
        transition: 0.8s ease-out;
        color: black;
        }
`;