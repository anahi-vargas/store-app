import styled from "styled-components"

export const CheckoutPageContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin-top: 4vh;
    border: 1px solid black;
    height: 100vh
`;

export const CheckoutFormContainer = styled.form`
    border: 1px solid blue;
    width: 60vw;
    min-height: 70vh;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ShippingContainer = styled.div`

`;


export const SummaryContainer = styled.div`
    border: 1px solid red;    
`;

export const BackButton = styled.button`
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    margin-left: 5vh;
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

export const ProgressBarLine = styled.div`
    background: blue;
    width: 30%;
`;
export const ProgressBarCircle = styled.div`
    width: 25px;
    height: 25px;
    border: 2px solid black;

    // & > span {
    //     position: absolute;
    //     left: 50%;
    //     transform: translateX(-50%);
    // }

    // &:before, &:after {
    //     content: '';
    //     position: absolute;
    //     top: 29.5vh;
    //     height: 3px;
    //     width: 44px;
    //     background: red;
    // }
`;

export const ProgressBarCheck = styled.div`
    display: none;
`;