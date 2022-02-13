import { useState } from "react"
import { FaArrowLeft } from "react-icons/fa"
import Billing from "./Billing";
import ProgressBar from "./ProgressBar";
import Review from "./Review";
import Shipping from "./Shipping";
import { CheckoutFormContainer, FormContainer, BackButton } from "./StyledComponents";

function CheckoutForm() {   
    const [step, setStep] = useState(0)
    const stepTitles = ["Shipping", "Billing", "Review"]

    const displayComponent = () => {
        const components = [<Shipping />, <Billing />, <Review />]
            return components[step]
    }
    
    return(
    <CheckoutFormContainer>
        <ProgressBar step={step} titles={stepTitles} />
        <BackButton disabled={step === 0} onClick={(e) => { e.preventDefault(); setStep(step => step - 1)}}>
            <FaArrowLeft />
        </BackButton>
        <FormContainer>
            <div>{displayComponent()}</div>
            <button onClick={(e) => {  e.preventDefault(); if (step < 2) setStep(step => step + 1)}}>
                { step > 1 ? `Place Order` : `Continue to ${stepTitles[step+1]}`}
            </button>
        </FormContainer>
    </CheckoutFormContainer>)
}

export default CheckoutForm;