import styled from "styled-components"
import { Button } from "../products/StyledComponents";

export const CartContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const ShadowContainer = styled.div`
    width: 20vw;
    height: 28vh;
    display: flex;
    flex-direction: column;
    padding: 3vh;
    margin-top: 5vh;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    div:first-child {
        font-weight: 600;
        font-size: 1.25rem;
    }
`;

export const ProductList = styled.div`
    width: 50vw;
    height: auto;
    display: flex;
    flex-direction: column;
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
    color: var(--primary-btn-clr);
    font-size: 1.1rem;

    & : hover {
        cursor: pointer;
    }
`;

export const CheckoutButton = styled(Button)`
    margin: 2vh 0 2vh 0;
    position: absolute;
    top: 28vh;

    &:active {
        background-color: var(--secondary-btn-clr);
        color: black;
    }
`;

export const ContainerTitle = styled.div`
    border-bottom: 1px solid var(--divider-clr);
    padding-bottom: 0.25vh;
    margin-bottom: 1.5vh;
`;

export const SummaryRow = styled.div`
    display: flex;
    justify-content: space-between;
`