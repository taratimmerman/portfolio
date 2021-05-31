import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ toggle }) => {
    return (
        <NavContainer>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>

            <NavOption>
                Work
            </NavOption>

            <NavLogo>
                tara timmerman
            </NavLogo>

            <NavOption>
                About
            </NavOption>

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

const NavOption = styled.div`
    color: #5e5e5e;
    margin: 75px;
    font-size: .80rem;
    cursor: pointer;

    &.active {
        color: #404040;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #404040;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavLogo = styled.div`
    color: #404040;
    cursor: pointer;
    font-size: 1.8rem;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
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