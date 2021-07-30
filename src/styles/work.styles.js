import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WorkSection = styled.section`
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const WorkContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 940px;
    padding: 0 15px 0 15px;
    margin: 0 15px 0 15px;
`;

// Wraps description and image divs
export const ProjectWrapper = styled.div`
    background-color: #fcfcfc;
    box-shadow: 0 70px 140px 0 rgb(130 136 171 / 20%);
    border-radius: 10px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }

    :not(:first-child) {
        margin-top: 40px;

        @media (min-width: 992px) {
            margin-top: 80px;
        }

        @media (min-width: 768px) {
            margin-top: 60px;
            border-radius: 15px;
        }
    }
`;

// Wraps project text div
export const ProjectDetails = styled.div`
    width: 100%;
    flex: 0 0 50%;
    padding: 36px;
    text-align: center;

    @media (min-width: 1200px) {
        min-height: 472px;
        padding: 94px 80px;
        text-align: left;
    }
    @media (min-width: 992px) {
        min-height: 455px;
        padding: 86px 60px;
        text-align: left;
    }
    @media (min-width: 768px) {
        min-height: 336px;
        padding: 48px 56px;
        text-align: left;
    }
`;

// Wraps project title, role, and button
export const ProjectText = styled.div`
    width: 100%;
`;

export const ProjectTitle = styled.h3`
    font-weight: 700;
    font-size: 1.625rem;
    line-height: 1.33;
    letter-spacing: .8px;

    @media (min-width: 992px) {
        font-size: 	2.5rem;
        letter-spacing: 1.25px;
    }

    @media (min-width: 768px) {
        font-size: 1.75rem;
        letter-spacing: 1px;
    }
`;

export const ProjectRole = styled.p`
    margin-top: 20px;
    font-size: 	0.875rem;
    font-weight: 500;
    line-height: 1.78;
    letter-spacing: .44px;
    color: #5c5c5c;
    text-transform: uppercase;
`;

export const ProjectButtonWrapper = styled.div`
    margin-top: 40px;
        @media (min-width: 768px) {
            margin-top: 80px;
        }
`;

export const ProjectButton = styled(Link)`
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

    &.ticket-punch{
        background-image: linear-gradient(225deg,#1ad4bb,#b2de94);
    }

    &.family-promise{
        background-image: linear-gradient(150deg,#c99fff -20%,#4a4eff);
    }

    :hover{
        opacity: 0.8;
    }
`;

// Wraps project image
export const ProjectVisual = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px 10px 0 0;

    @media (min-width: 768px) {
        border-radius: 0 15px 15px 0;
    }

    &.ticket-punch{
        background-image: linear-gradient(225deg,#0abac2,#b2de94);
    }

    &.family-promise{
        background-image: linear-gradient(150deg,#c99fff -20%,#4a4eff);
    }
`;

export const ProjectImage = styled.img`
    max-height: 300px;
    vertical-align: middle;
    border-style: none;
    padding: 36px;

    @media (min-width: 992px) {
        max-height: 475px;
    }

    @media (min-width: 768px) {
        max-height: 400px;
    }
`;