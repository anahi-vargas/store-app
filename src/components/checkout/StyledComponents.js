import styled from "styled-components"

export const CheckoutPageContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    height: 100vh
`;

export const FormContainer = styled.div`
    width: 60vw;
    height: 85vh;
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const FormTitle = styled.div`
    font-size: 1.2rem;
    font-weight: 400;
`;

export const FormInput = styled.input`
    width: 100%;
    height: 5vh;
    margin-bottom: 3vh;
`;

export const FormRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    > input {
        width: 48%;
    }
`;

export const FormButton = styled.button`
    background-color: #551A8B;
    color: #F5f5f5;
    outline: none;
    padding: none;
    cursor: pointer;  
    border-radius: 25px;
    width: 12vw;
    height: 4.5vh;
    position: absolute;
    bottom: 12%;
`;

export const BackButton = styled.button`
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    margin-left: 10vh;
    align-self: self-start;
`;

export const FormStepContainer = styled.div`
    width: 40%;
    height: 60%;
`;

export const ProgressBarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const ProgressBarStep = styled.div`
    width: 100%;
    text-align: center;
`;

export const ProgressBarTitle = styled.p`
    font-weight: 500;
    font-size: 1rem;
`;

export const SummaryContainer = styled.div`
    margin-top: 5vh;
    width: 30vw;
    height: 30%;
    display: flex;
    flex-direction: column;
    padding: 3vh;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    div:first-child {
        font-weight: 600;
        font-size: 1.25rem;
    }
`;

export const OrderDetailsContainer = styled.div`
    margin-top: 5vh;
    width: 30vw;
    height: 54vh;
    display: flex;
    flex-direction: column;
    padding: 3vh;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    div:first-child {
        font-weight: 600;
        font-size: 1.25rem;
    }
    overflow-y: auto;
`;

export const DetailsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    padding-bottom: 2vh;
`;

export const DetailsTitle = styled.div`
    border-bottom: 1px solid #bbbbbb;
    margin-bottom: 2vh;
`;

export const DetailsImage = styled.img`
    width: 15%;
    height: 100%;
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