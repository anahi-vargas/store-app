import { states } from "../../utils";
import { FormInput, FormRow, FormTitle } from "./StyledComponents";

function Address(props) {

    const { currentAddress, setCurrentAddress, stepTitle } = props
    const {firstName, lastName, address, state, city, zip } = currentAddress

    const handleChange = (e) => {
        const {value, name} = e.target;
        setCurrentAddress(prev => ({...prev, [name]: value}))
     }

    return ( 
        <>
        <FormTitle>{stepTitle} Address</FormTitle>
        <FormRow>
            <FormInput required type="text" placeholder="First Name*" name="firstName" value={firstName} onChange={handleChange} />
            <FormInput required type="text" placeholder="Last Name*"  name="lastName" value={lastName} onChange={handleChange} />
        </FormRow>
        <FormInput required type="text" placeholder="Address*" name="address" value={address} onChange={handleChange} />
        <FormRow>
            <FormInput required list="states"placeholder="State" name="state" value={state} onChange={handleChange} />
            <datalist id="states">
                {states.map( state => 
                <option key={state.name} name="state" value={state.name} onChange={handleChange}/>)}
            </datalist>
            <FormInput required type="text" placeholder="City" name="city" value={city} onChange={handleChange} />
        </FormRow>
        <FormInput required type="text" minLength={5} maxLength={5} placeholder="Zip Code" name="zip" value={zip} onChange={handleChange} />
        </>
     );
}

export default Address;