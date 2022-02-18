import { useState } from "react";
import Address from "./Address";
import CreditCard from "./CreditCard";
import { FormContainer, FormButton } from "./StyledComponents";

function Billing(props) {
    const { shippingAddress, creditCard, setCreditCard, stepTitle, step, incrementStep }  = props
    const [billingAddress, setBillingAddress] = useState({firstName:"", lastName:"", address:"", state:"", city:"", zip:""})
    const [checked, setChecked] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault(); 
        incrementStep(e)
     }

    return (  
        <FormContainer onSubmit={handleSubmit}>
            <Address currentAddress={checked ? shippingAddress : billingAddress} setCurrentAddress={setBillingAddress} stepTitle={stepTitle} step={step} incrementStep={incrementStep}/>
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
            <label>Same as shipping address</label> 
            <CreditCard creditCard={creditCard} setCreditCard={setCreditCard} />
            <FormButton>
                { step === 0 ? `Continue to Billing` : step === 1 ? `Place Order` : `Continue Shopping`}
            </FormButton>
        </FormContainer>
    );
}

export default Billing;