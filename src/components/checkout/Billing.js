import { useState } from "react";
import { states } from "../../utils"
import { FormInput, FormRow, FormStepContainer, FormTitle } from "./StyledComponents";

function Billing(props) {
    const { shippingAddress }  = props
    const [billingAddress, setBillingAddress] = useState({firstName:"", lastName:"", address:"", state:"", city:"", zip:""})
    const {firstName, lastName, address, state, city, zip } = billingAddress
    const [checked, setChecked] = useState(false)

    const handleChange = (e) => {
        const {value, name} = e.target;
        setBillingAddress(prev => ({...prev, [name]: value}))
     }

    return (  
        <FormStepContainer>
        <FormTitle>Billing Address</FormTitle>
            <FormRow>
                <FormInput type="text" placeholder="First Name*" name="firstName" value={checked ? shippingAddress.firstName : firstName} onChange={handleChange} />
                <FormInput type="text" placeholder="Last Name*" name="lastName" value={checked ? shippingAddress.lastName : lastName} onChange={handleChange}/>
            </FormRow>
            <FormInput type="text" placeholder="Address*" name="address" value={checked ? shippingAddress.address : address} onChange={handleChange} />
            <FormRow>
                <FormInput type="text" placeholder="State" name="state" value={checked ? shippingAddress.state : state} onChange={handleChange} />
                {/* <input list="states" name="state" />
                <datalist id="states">
                    {states.map( state => <option key={state.name} value={`${state.name}`} />)}
                </datalist> */}
                <FormInput type="text" placeholder="City" name="city" value={checked ? shippingAddress.city : city} onChange={handleChange} />
            </FormRow>
            <FormInput type="text" placeholder="Zip" name="zip" value={checked ? shippingAddress.zip : zip} onChange={handleChange} />
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
            <label>Same as shipping address</label>
            <FormTitle>Payment Details</FormTitle>
            <FormInput type="text" placeholder="Credit Card Number" name="creditCardNumber" />
            <FormRow>
                <FormInput type="text" placeholder="Security Code" name="securityCode" />
                <FormInput type="month" placeholder="Expiration" name="expirationDate" />
            </FormRow>
        </FormStepContainer>
    );
}

export default Billing;