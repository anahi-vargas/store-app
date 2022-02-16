import { FormInput, FormRow, FormStepContainer, FormTitle } from "./StyledComponents";

function Shipping(props) {

    const { shippingAddress, setShippingAddress} = props
    const {firstName, lastName, address, state, city, zip } = shippingAddress

    const handleChange = (e) => {
        const {value, name} = e.target;
        setShippingAddress(prev => ({...prev, [name]: value}))
     }

    return ( 
        <FormStepContainer>
            <FormTitle>Shipping Address</FormTitle>
            <FormRow>
                <FormInput type="text" placeholder="First Name*" name="firstName" value={firstName} onChange={handleChange} />
                <FormInput type="text" placeholder="Last Name*"  name="lastName" value={lastName} onChange={handleChange} />
            </FormRow>
            <FormInput type="text" placeholder="Address*" name="address" value={address} onChange={handleChange} />
            <FormRow>
                <FormInput type="text" placeholder="State" name="state" value={state} onChange={handleChange} />
                <FormInput type="text" placeholder="City" name="city" value={city} onChange={handleChange} />
            </FormRow>
            <FormInput type="text" placeholder="Zip Code" name="zip" value={zip} onChange={handleChange} />
        </FormStepContainer>
     );
}

export default Shipping;