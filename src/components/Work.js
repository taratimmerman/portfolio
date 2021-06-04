import React from 'react';
import styled from 'styled-components';
import FamilyPromise from '../assets/fp-login-blue.png';
import {
    Link
} from "react-router-dom";

const Work = () => {
    return (
        <WorkContainer>
            <ProjectsWrapper>
                <Link to="/family-promise">
                    <ProjectCard>
                        <FPImage alt="Family Promise Service Tracker"></FPImage>
                        <Overlay>
                            <StyledH3>Family Promise Service Tracker</StyledH3>
                        </Overlay>
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
    margin: 1rem 0 5rem 0;
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
    position: relative;
    display:flex;
    align-items: center;
    justify-content: center;
`;

const Overlay = styled.h2`
    opacity: 0;
    position: absolute;
    background-color: #4285F4;
    width: 700px;
    height: 700px;
    transition: 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        opacity: 0.8;
        }

    @media screen and (max-width: 768px) {
        width: 500px;
        height: 500px;
        transition: 0.5s ease;
    }

    @media screen and (max-width: 500px) {
        width: 300px;
        height: 300px;
        transition: 0.5s ease;
    }
`;

const StyledH3 = styled.h3`
    color: #404040;
    text-align: center;
    font-size: 3rem;

    @media screen and (max-width: 768px) {
        transition: 0.5s ease;
        font-size: 2rem;
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

    @media screen and (max-width: 768px) {
        width: 500px;
        height: 500px;
        transition: 0.5s ease;
    }

    @media screen and (max-width: 500px) {
        width: 300px;
        height: 300px;
        transition: 0.5s ease;
    }
`;