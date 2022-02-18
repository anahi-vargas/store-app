import { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";
import OrderDetails from "./OrderDetails";
import { CheckoutPageContainer } from "./StyledComponents";

function CheckoutPage() {
    const [step, setStep] = useState(0)
    const [ currentAddress, setCurrentAddress] = useState({firstName:"", lastName:"", address:"", state:"", city:"", zip:""})
    return (  
        <CheckoutPageContainer>
            <CheckoutForm currentAddress={currentAddress} setCurrentAddress={setCurrentAddress} step={step} setStep={setStep} />
            {step !== 2 && <div>
                <OrderSummary state={currentAddress.state} />
                <OrderDetails />
            </div>}
        </CheckoutPageContainer>
    );
}

export default CheckoutPage;