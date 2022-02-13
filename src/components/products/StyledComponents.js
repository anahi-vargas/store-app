import styled from "styled-components"

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
    width: 50%;
    height: 60%;
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
    align-items: flex-start;
`;

export const ProductDetailsInfo = styled.div`
    flex-direction: column;
`;

export const ProductDetailsImage = styled.img`
    min-width: 30vw;
    height: auto;
`;

export const ProductList = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProductListItem = styled.div`
    flex-direction: row;
    width: 100%;
`;