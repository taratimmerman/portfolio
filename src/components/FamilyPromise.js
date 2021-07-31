import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import HeroPic from '../assets/fp-hero.png';
import Plug from '../assets/fp-plug.gif';
import Walkthrough from '../assets/fp-walkthrough.gif';

const FamilyPromise = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      });

    return (
        <FPContainer>
            <Title>Family Promise Service Tracker</Title>
            <Role>Backend Developer</Role>
            <Hero></Hero>
            <FPText>
                <StyledH3>Overview</StyledH3>
                <StyledP>For my Lambda School apprenticeship, I helped develop the Family Promise Service Tracker web app in May 2021 to enable Family Promise to monitor and evaluate their impact and track their services on the go.</StyledP>
                <StyledH4>About Family Promise</StyledH4>
                <StyledP>Family Promise is a charitable organization that helps families experiencing homelessness and low-income families achieve lasting independence through community response. Family Promise recognizes poverty is a complex problem that requires a multi-faceted response. They respond by integrating education, smart programming, effective policies, and the practical work of thousands of volunteers. They provide food, shelter and support to homeless families. Family Promise also provides advice and advocacy to vulnerable families to prevent them from becoming homeless. They have a goal of changing the lives of one million children by 2030.</StyledP>
                <Gif1></Gif1>
                <StyledH4>My Role</StyledH4>
                <StyledP>Engaged in back-end design and implementation through research, wireframing, interaction design, visual design, prototyping, and cross-team cooperation.</StyledP>
                <StyledP>Worked closely with front-end engineers to understand technical constraints and ensure quality standards for database design, as well as stakeholders and product managers to identify user needs and adapted project goals as the project developed.</StyledP>
                <StyledP>Used Node and Express to create API endpoints and PostgreSQL for the data table necessary to track service recipients by household and not only on an individual basis and track simple app metrics.</StyledP>
                <StyledP>Optimized the amount of Axios calls that the client had to make by using Knex database queries to combine service and recipient information in one GET request. Read more about that <StyledLink href="https://dev.to/taratimmerman/why-lambda-school-is-worth-it-3ddc" target="_blank">here</StyledLink>.</StyledP>
                <StyledH4>Results</StyledH4>
                <ol>
                    <li>Tablet-First</li>
                    <StyledP>The application supports tablet screens for data entry and general application use and users can easily use the application on a computer.</StyledP>
                    <li>Service Management</li>
                    <StyledP>Users can log a service into the system, check service logs, and edit or delete a service log.</StyledP>
                    <li>Recipients</li>
                    <StyledP>Users can add a service recipient to the system, search for recipients, and edit or delete a recipient. Users can also track recipients on an individual and household basis.</StyledP>
                    <li>Metrics</li>
                    <StyledP>User can monitor recipients and services by: Amount of unique service recipients, Amount of logged services, new recipients created in the last 7 days, and new services completed in the last 7 days.</StyledP>
                </ol>
                <Gif2></Gif2>
                <StyledH3>Next Steps</StyledH3>
                <StyledP>I am thrilled about where this app will go. The stakeholder’s main vision is to have a full-screen, interactive map for a Family Promise employee or volunteer to monitor and evaluate their service analytics. My team spent considerable time laying the foundations and designing future possible implementations for the next step in metrics. For example, plotting the locations of services on a map is a crucial first step in this direction. And ideally, dragging the map around would generate new analyses based on the area being viewed, and allow users to view the services behind those metrics.</StyledP>
            </FPText>
        </FPContainer>
    );
};

export default FamilyPromise;

// STYLED COMPONENTS BELOW:

const FPContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h2`
    margin: 2rem;
    text-align: center;
`;

const Role = styled.h4`
    text-transform: uppercase;
    color: gray;
    font-weight: lighter;
    text-align: center;
`;

const Hero = styled.div`
    margin: 4rem 0 0 0;
    background-image: url(${HeroPic});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    width: 95vw;
    height: 30rem;

    @media screen and (max-width: 768px) {
        margin: 2rem;
        height: 15rem;
        transition: 0.5s ease;
    }

    @media screen and (max-width: 500px) {
        margin: 1rem;
        height: 10rem;
        transition: 0.5s ease;
    }
`;

const FPText = styled.div`
    margin: 1rem 0;
    justify-content: flex-start;
    width: 70vw;
    max-width: 800px;
    color: #5c5c5c;
`;

const StyledH3 = styled.h3`
    font-size: 2rem;
`;

const StyledH4 = styled.h4`
    font-size: 1.1rem;
    margin: 4rem 0 1rem 0;
`;

const StyledP = styled.p`
    margin: 1rem 0;
    line-height: 1.8em;
    text-rendering: optimizeLegibility;
`;

const Gif1 = styled.div`
    background-image: url(${Plug});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    max-width: 800px;
    height: 400px;
    margin: 1rem;
`;

const StyledLink = styled.a`
    text-decoration: underline;
    color: black;

    &:hover {
        text-decoration: none;
        }
`;

const Gif2 = styled.div`
    background-image: url(${Walkthrough});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    max-width: 800px;
    height: 400px;
    margin: 1rem;
`;