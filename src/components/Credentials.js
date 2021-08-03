import React from 'react';

import styled from 'styled-components';

import CredentialsImg from '../assets/lambda-badge-full-stack-web.png';
import {
    PageSection,
    PageTitle,
    PageTitleBorder
} from '../styles/pageStyles';

const Credentials = () => {
    return (
        <PageSection>
            <PageTitle>My Credentials</PageTitle>
            <PageTitleBorder />
            <CredentialsWrapper>
                <LambdaCredentials src={CredentialsImg} />
                <CredentialsButton href="https://www.credly.com/badges/cb1eb195-decb-41ce-bab5-4e41874006dc" target="_blank" rel="noopener noreferrer">Verify Credentials</CredentialsButton>
            </CredentialsWrapper>
        </PageSection>
    );
};

export default Credentials;

// STYLED COMPONENTS:

const CredentialsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 6rem;
`;

const LambdaCredentials = styled.img`
    margin: 1rem;
`;

const CredentialsButton = styled.a`
    box-shadow: 0 11px 36px 0 rgb(70 89 138 / 25%);
    cursor: pointer;
    width: 100%;
    max-width: 250px;
    height: 50px;
    padding: 16px 32px;
    font-weight: 700;
    font-size: .688rem;
    line-height: 18px;
    letter-spacing: 1.54px;
    text-transform: uppercase;
    border-radius: 25px;
    border: none;
    white-space: nowrap;
    vertical-align: middle;
    transition: opacity .2s ease,transform 50ms;
    color: #fcfcfc;
    text-decoration: none;
    text-align: center;
    background-image: linear-gradient(225deg,#FF8989,#FF6200);
    margin: 1rem;

    :hover{
        opacity: 0.8;
    }
`;