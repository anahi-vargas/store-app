import Address from "./Address";
import { FormContainer } from "./StyledComponents";

function Shipping(props) {
    const { shippingAddress, setShippingAddress, stepTitle } = props 

    return ( 
           <FormContainer style={{marginTop: "4vh"}}>
               <Address currentAddress={shippingAddress} setCurrentAddress={setShippingAddress} stepTitle={stepTitle} />
           </FormContainer>
     );
}

export default Shipping;