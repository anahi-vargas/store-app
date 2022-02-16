import styled from "styled-components"

export const CartContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const ProductList = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    padding: 2vh;
    margin: 5vh 0 5vh 0;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const ProductListItem = styled.div`
    display:flex;
    width: 100%;
    height: 25vh;
    justify-content: space-evenly;
    align-items: center;

    > img {
        width: 15%;
        height: 70%;

        &:hover {
            cursor: pointer;
        }
    }

    border-bottom: 1px solid #bbbbbb;
`;

export const CartInfo = styled.div`
    width: 40%;
`;

export const CartInput = styled.input`
    width: 3.5vw;
    height: 3vh;
`;

export const CartTotatPrice = styled.div`
    width: 10%;
`;

export const RemoveButton = styled.button`
    background: transparent;
    border: none;
    outline: none;
    margin: 0;
    color: #551A8B;
    font-size: 1.1rem;

    & : hover {
        cursor: pointer;
    }
`;

export const CheckoutButton = styled.button`
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
    margin: 2vh 0 2vh 0;
`;

export const SummaryContainer = styled.div`
    margin-top: 5vh;
    width: 20%;
    height: 40%;
    display: flex;
    flex-direction: column;
    padding: 3vh;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    div:first-child {
        font-weight: 600;
        font-size: 1.25rem;
    }
`;


export const SummaryRow = styled.div`
    display: flex;
    justify-content: space-between;
`