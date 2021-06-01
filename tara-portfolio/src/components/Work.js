import React from 'react';
import styled from 'styled-components';
import FamilyPromise from '../assets/fp-login-blue.png';
import {
    Link
} from "react-router-dom";

const Work = () => {
    return (
        <WorkContainer>
            <StyledH3>Work</StyledH3>
            <ProjectsWrapper>
                <Link to="/family-promise">
                    <ProjectCard>
                        <FPImage alt="Family Promise Service Tracker"></FPImage>
                        <StyledH2>Family Promise Service Tracker</StyledH2>
                    </ProjectCard>
                </Link>
            </ProjectsWrapper>
        </WorkContainer>
    )
};

export default Work

// STYLED COMPONENTS BELOW

const WorkContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #404040;
    margin: 3rem 0 5rem 0;
`;

const StyledH3 = styled.h3`
    margin: 0 0 5rem 0;
`;

const ProjectsWrapper = styled.div`
    width: 80vw;
    max-width: 1000px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const ProjectCard = styled.div`
    max-width: 700px;
    margin: auto; 
    position: relative;
    display:flex;
    align-items: center;
    justify-content: center;
`;

const StyledH2 = styled.h2`
    opacity: 0;
    position: absolute;
    font-size: 2.5rem;
    transition: 0.5s ease;
    color: #404040;

    @media screen and (max-width: 768px) {
        opacity: 1;
        font-size: 2rem;
        transition: 0.5s ease;
    }

    @media screen and (max-width: 500px) {
        opacity: 1;
        font-size: 1.3rem;
        transition: 0.5s ease;
    }
`;

const FPImage = styled.div`
    background: url(${FamilyPromise});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 700px;
    height: 700px;
    transition: 0.5s ease;

    &:hover {
        opacity: 0.3;
        transition: 0.5s ease-out;
        ${StyledH2} {
            opacity: 1;
            }
        }

    @media screen and (max-width: 768px) {
        opacity: 0.3;
        width: 500px;
        height: 500px;
        transition: 0.5s ease;
    }

    @media screen and (max-width: 500px) {
        opacity: 0.3;
        width: 300px;
        height: 300px;
        transition: 0.5s ease;
    }
`;