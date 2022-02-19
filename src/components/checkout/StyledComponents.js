import styled from "styled-components"
import { ShadowContainer } from "../cart/StyledComponents";
import { Button } from "../products/StyledComponents";

export const CheckoutPageContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    height: 94vh;
`;

export const MainContainer = styled(ShadowContainer)`
    width: 60vw;
    height: 85vh; 
    padding: 0;
    align-items: center;
`;

export const FormTitle = styled.div`
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 0.5vh;
`;

export const FormInput = styled.input`
    width: 100%;
    height: 5vh;
    margin-bottom: 1.25vh;
`;

export const FormRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    > input {
        width: 48%;
    }
`;

export const FormButton = styled(Button).attrs({type: "submit"})`
    width: 12vw;

    &:active {
        background-color: var(--secondary-btn-clr);
        color: black;
    }
`;

export const BackButton = styled.button`
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    margin-left: 10vh;
    align-self: self-start;
    display: ${props => props.step === 0 || props.step === 2 ? "none" : "flex"};
`;

export const FormContainer = styled.form`
    width: 40%;
    height: 80%;
    margin-top: 2vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProgressBarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 1.5vh;
    background-color: var(--progress-bar-clr);
`;

export const ProgressBarStep = styled.div`
    width: 100%;
    text-align: center;
`;

export const ProgressBarTitle = styled.p`
    font-weight: 500;
    font-size: 1rem;
`;

export const SummaryContainer = styled(ShadowContainer)`
    width: 30vw;
`;

export const OrderDetailsContainer = styled(SummaryContainer)`
    height: 52vh;
    overflow-y: auto;
`;

export const DetailsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding-bottom: 2vh;
`;

export const DetailsImage = styled.img`
    width: 10vh;
    height: 12vh;
`;

export const DetailsInfo = styled.div`
    width: 60%;
    div:first-child {
        font-size: 1rem;
    }
    div:last-child {
        font-size: 0.75rem;
    }
`;

export const ConfirmationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 5vh;
    background-color: var(--progress-bar-clr);
`;
export const ConfirmationDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 30%;
    height: 50%;
`;

export const DetailsHeading = styled.h2`
    border-bottom: 1px solid #000;
    font-weight: 500;
    font-size: 1.25rem;
    width: 100%;
    margin: 0 0 2vh 0;
`;

export const DetailsRow = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 1vh;

    > span {
        width: 50%;
    }

    span:first-child {
        text-align: Right;
        margin-right: 3vh;
    }
    span:last-child {
       text-align: left;
    }
`;
