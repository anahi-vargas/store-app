import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 6vh;
    max-height: 8vh;
    background: var(--primary-nav-clr);
    color: var(--primary-font-clr);
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 0vw 5vw 0vw 5vw;
`;

export const Logo = styled.div`
    font-size: 1.45rem;

    &:hover {
        cursor: pointer;
    }
`;

export const Links = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 35vw;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 768px) {
        position: absolute;
        right: 0px;
        height: 16vh;
        top: 6vh;
        background-color: var(--secondary-nav-clr);
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 0.5rem 1rem;
        border: transparent;
        border-top: 2px solid var(--primary-clr);
        display: ${props => props.active ? "flex": "none"};
    }
`;

export const NavLinks = styled(NavLink)`
    text-decoration: none;

    &:hover {
        position: relative;
        cursor: pointer;
        color: var(--primary-clr);
    }
`;

export const MenuButton = styled.div`
    display: none;
    cursor: pointer;
    
    @media screen and (max-width: 768px) {
        display: block;
    }
`;

export const SearchBarContainer = styled.div`
    display: flex;
    color: var(--primary-clr);

    > input {
        background: transparent;
        color: black;
        border: none;
        outline: none;
        border-bottom: 1px solid var(--primary-clr);
    }
`;

export const NotFoundContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30vh;
    font-size: 2.5rem;
    color: var(--primary-clr);
`;