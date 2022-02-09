import styled from "styled-components"

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 6vh;
    max-height: 8vh;
    background: var(--secondary-clr);
    color: var(--primary-font-clr);
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 0vw 5vw 0vw 5vw;
`;

export const Logo = styled.div`
    font-size: 1.45rem;
`;

export const Links = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 25vw;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 768px) {
        position: absolute;
        right: 0px;
        height: 12vh;
        top: 6vh;
        background-color: #4a4a4a;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 0.5rem 1rem;
        border: transparent;
        border-top: 2px solid var(--primary-clr);
        display: ${props => props.active ? "flex": "none"};
    }
`;

export const MenuButtonLine = styled.div`
    background-color: var(--primary-font-clr);
    width: 25px;
    height: 2px;
    margin: 5px;
    border-radius: 10px;
`;
export const MenuButton = styled.div`
    display: none;
    cursor: pointer;
    
    @media screen and (max-width: 768px) {
        display: block;
    }
`;

export const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 30vh);
    grid-gap: 4vh;
    justify-content: center;
    align-items: center;
`;

export const ProductCard = styled.div`
    width: 20vw;
    height: 40vh;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & : hover {
        cursor: pointer;
    }

    & > div {
        width: 70%;
        overflow-wrap: break-word;
        padding: 0;
    }
`;

export const ProductImage = styled.img`
    width: 50%;
    height: 60%;
    padding: 2.5vh;
    border: solid;
`;

export const StyledCategoryList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;