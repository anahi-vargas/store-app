import { useState } from "react"
import { FaArrowLeft } from "react-icons/fa"
import Billing from "./Billing";
import ProgressBar from "./ProgressBar";
import Review from "./Review";
import Shipping from "./Shipping";
import { FormContainer, BackButton, FormButton } from "./StyledComponents";

function CheckoutForm() {   
    const [step, setStep] = useState(0)
    const stepTitles = ["Shipping", "Billing", "Review"]
    const [shippingAddress, setShippingAddress] = useState({firstName:"", lastName:"", address:"", state:"", city:"", zip:""})

    const displayComponent = () => {
        const components = [<Shipping shippingAddress={shippingAddress} setShippingAddress={setShippingAddress} />, 
                            <Billing shippingAddress={shippingAddress} />, <Review />]
            return components[step]
    }
    
    return(
    <FormContainer>
        <ProgressBar step={step} titles={stepTitles} />
        <BackButton disabled={step === 0} onClick={(e) => { e.preventDefault(); setStep(step => step - 1)}}>
            <FaArrowLeft />
        </BackButton>
        {displayComponent()}
        <FormButton onClick={(e) => {  e.preventDefault(); if (step < 2) setStep(step => step + 1)}}>
            { step > 1 ? `Place Order` : `Continue to ${stepTitles[step+1]}`}
        </FormButton>
    </FormContainer>)
}

export default CheckoutForm;