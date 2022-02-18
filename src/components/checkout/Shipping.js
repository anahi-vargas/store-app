import Address from "./Address";
import { FormContainer, FormButton } from "./StyledComponents";

function Shipping(props) {
    const { shippingAddress, setShippingAddress, step, incrementStep } = props 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        incrementStep(e)
     }

    return ( 
           <FormContainer onSubmit={handleSubmit} style={{marginTop: "4vh"}}>
               <Address {...props} currentAddress={shippingAddress} setCurrentAddress={setShippingAddress} />
               <FormButton>
                    { step === 0 ? `Continue to Billing` : step === 1 ? `Place Order` : `Continue Shopping`}
                </FormButton>
           </FormContainer>
     );
}

export default Shipping;