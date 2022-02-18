import { useState } from "react";
import Address from "./Address";
import CreditCard from "./CreditCard";
import { FormContainer } from "./StyledComponents";

function Billing(props) {
    const { shippingAddress, creditCard, setCreditCard, stepTitle }  = props
    const [billingAddress, setBillingAddress] = useState({firstName:"", lastName:"", address:"", state:"", city:"", zip:""})
    const [checked, setChecked] = useState(false)

    return (  
        <FormContainer>
            <Address currentAddress={checked ? shippingAddress : billingAddress} setCurrentAddress={setBillingAddress} stepTitle={stepTitle}/>
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
            <label>Same as shipping address</label> 
            <CreditCard creditCard={creditCard} setCreditCard={setCreditCard} />
        </FormContainer>
    );
}

export default Billing;