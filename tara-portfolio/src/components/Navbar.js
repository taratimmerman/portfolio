import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import {
    Link
} from "react-router-dom";

const Navbar = ({ toggle }) => {
    return (
        <NavContainer>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>

            <Link to="/" style={LinkStyle}>
                <NavOption>
                    Work
                </NavOption>
            </Link>
            
            <Link to="/" style={LogoStyle}>
                <NavLogo>
                    tara timmerman
                </NavLogo>
            </Link>

            <Link to="/about" style={LinkStyle}>
                <NavOption>
                    About
                </NavOption>
            </Link>

        </NavContainer>
    )
}

export default Navbar

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

const LinkStyle = {
    color: '#5e5e5e',
    margin: '60px',
    fontsize: '.80rem',
    textDecoration: 'none'
};

const LogoStyle = {
    textDecoration: 'none'
};

const NavOption = styled.div`

    &.active {
        color: black;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        color: black;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavLogo = styled.div`
    color: #404040;
    font-size: 1.8rem;
    font-weight: bold;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        font-size: 1.3rem;
        width: 150px;
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