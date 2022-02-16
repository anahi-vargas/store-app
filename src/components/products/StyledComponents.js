import styled from "styled-components"
import { NavLink } from "react-router-dom" 

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & : hover {
        cursor: pointer;
    }

    & > div {
        width: 70%;
        padding: 0;
        color: #24272a;
    }
`;

export const ProductImage = styled.img`
    width: 40%;
    height: 50%;
    padding: 2.5vh;
`;

export const ProductTitle = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const ProductPrice = styled.div`
    font-weight: bold;
`;

export const StyledCategoryList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CategoryButton = styled.button`
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: lighter;
    font-size: 1rem;
    text-transform: capitalize;

    &:hover {
        position: relative;
    }

    &:hover::after {
        content:'';
        position:absolute;
        left: 0;
        bottom: 0; 
        width: 100%;
        border-bottom: 2px solid #000;  
    }

    &:focus {
        color: blue;
    }
`

export const CategoryNameList = styled.div`
   
`;

export const CategoryName = styled.div`
    font-weight: bold;
    font-size: 1.5rem;
    text-transform: capitalize;
`;

export const ProductDetailsContainer = styled.div`
    margin: auto;
    width: 90vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const ProductDetailsInfo = styled.div`
    flex-direction: column;
    margin: 4vh 0vh 0vh 4vh;

    > div {
        margin-bottom: 0.2vw;
    }

    div:first-child {
        font-size: 1.2rem;
        font-weight: bold;
    }

    div:last-child {
        display: flex;
        align-items: center;
    }

`;

export const ProductDetailsImage = styled.img`
    max-width: 20vw;
    max-height: 35vh;
    margin: 3vh;
`;

export const ProductDetailsTitle = styled.h1` {
    font-size: 1.5rem;
    margin: 0;
    
}`;

export const ProductList = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProductListItem = styled.div`
    flex-direction: row;
    width: 100%;
`;

export const QuantityHeading = styled.div`
    font-size: 0.9rem;
    margin-top: 2vh;
    // font-size: 1.05rem;
    // font-weight: 500;
    // margin: 1vh 0vh 1vh 0.5vh;
`;


export const QuantityButtonContainer = styled.div`
    display: flex;
    border: 1px solid #551A8B;
    justify-content: space-evenly;
    align-items: center;
    width: 8vw;
    height: 4.75vh;
    border-radius: 25px;
    font-size: 1.25rem;
    margin-right: 2vh;
`

export const QuantityButton = styled.div`
    cursor: pointer;
`

export const QuantitySelect = styled.select`
    background: transparent;
    border-color: #551A8B;
    border-left-style: none;
    border-right-style: none;
    border-top-style: none;
    width: 6vw;
    height: 5.5vh;
    font-size: 1.25rem;
    line-height: 1.5;
    padding-left: 0;
    margin: 0vh 1vh 1vh 0vh;
    outline: none;
`;

export const AddButton = styled.button`
    background-color: #551A8B;
    color: #F5f5f5;
    outline: none;
    padding: none;
    cursor: pointer;  
    border-radius: 25px;
    width: 8vw;
    height: 4.5vh;
    justify-content: center;
    align-items: center;
`;

export const RecommendedContainer = styled.div``;

export const RecommendedHeading = styled.div`
    text-transform: uppercase;
`;

export const RecommendedProducts = styled.div`
    display: flex;
    
`;

export const BackButton = styled(NavLink)`
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    text-decoration: none;
    margin-top: 2vh;

    div:first-child {
        font-size: 1rem;
        padding-top: 2px;
    }

    &:hover {
        text-decoration: underline;
    }
`

export const ProductDetailsMain = styled.div`
    display: flex;
`

export const ProductDetailsDescription = styled.div`
    max-width: 100vw;
    overflow: hidden;
`;

export const DescriptionHeading = styled.div`
    font-weight: 500;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
`;

export const DetailsIcon = styled.div`
    padding-top: 3px;
`;

export const DescriptionParagraph = styled.div`
    max-height: ${props => props.isOpen ? "0": "20vh"}; 
    display:flex;
    flex-direction: column;
    align-items: flex-start !important;
    overflow: hidden;
    line-height: 1.4;

    > p {
        text-transform: capitalize;
    }
`;

