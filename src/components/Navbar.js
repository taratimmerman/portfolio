import React from 'react';

import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Navbar = ({ toggle }) => {
    return (
        <NavContainer>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>

            <StyledNavLink to="/portfolio/work">
                <NavOption>
                    Work
                </NavOption>
            </StyledNavLink>
            
            <StyledNavLink to="/portfolio">
                <NavLogo>
                    Tara Timmerman
                </NavLogo>
            </StyledNavLink>

            <StyledNavLink to="/portfolio/about">
                <NavOption>
                    About
                </NavOption>
            </StyledNavLink>

        </NavContainer>
    );
};

export default Navbar;

Navbar.propTypes = {
    toggle: PropTypes.func 
};

// STYLED COMPONENTS BELOW:

const NavContainer = styled.nav`
    height: 55px;
    background-color: #fcfcfc;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eaeaea;
    position: sticky;
    z-index: 10;
    top: 0;
    width: 100%;

    @media screen and (max-width: 768px) {
        transition: 0.8s all ease;
        justify-content: center;
    }
`;

const StyledNavLink = styled(NavLink)`
    color: #5e5e5e;
    margin: 32px;
    text-decoration: none;

    &.active {
        color: black;
    }
`;

const NavOption = styled.h3`
    font-size: 1.125rem;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: black;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavLogo = styled.h1`
    color: #404040;
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-decoration: none;

    @media screen and (max-width: 768px) {
        font-size: 1.3rem;
        width: 160px;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-175%, 65%);
        font-size: 1.3rem;
        cursor: pointer;
        color: #5e5e5e;
    }
`;