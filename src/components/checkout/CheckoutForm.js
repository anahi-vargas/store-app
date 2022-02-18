import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"
import Shipping from "./Shipping";
import Billing from "./Billing";
import ProgressBar from "./ProgressBar";
import Confirmation from "./Confirmation";
import { BackButton, MainContainer } from "./StyledComponents";
import { CartContext } from "../../contexts/CartContext";


function CheckoutForm(props) {   
    const stepTitles = ["Shipping", "Billing", "Confirmation"]
    const [creditCard, setCreditCard] = useState({cardholderName: "", cardNumber:"", securityCode:"", expirationDate:""})
    const { step, setStep, currentAddress, setCurrentAddress } = props
    const { setCart } = useContext(CartContext)
    let navigate = useNavigate()

    const displayComponent = () => {
        const components = [<Shipping shippingAddress={currentAddress} setShippingAddress={setCurrentAddress} stepTitle={stepTitles[0]} step={step} incrementStep={incrementStep} />, 
                            <Billing shippingAddress={currentAddress} stepTitle={stepTitles[1]} creditCard={creditCard} setCreditCard={setCreditCard} step={step} incrementStep={incrementStep}  />, 
                            <Confirmation name={creditCard.cardholderName} paymentMethod={creditCard.cardNumber.slice(12, 16)} step={step} incrementStep={incrementStep} />]
        return components[step]
    }

    const incrementStep = (e) => {
        e.preventDefault(); 
        if (step === 1) {
            setCart([])
        }
        if( step === 2) 
            navigate("/products")
        if (step < 2) 
            setStep(step => step + 1);  
    }

    const decrementStep = (e) => {
        e.preventDefault(); 
        setStep(step => step - 1)
    }
    
    return(
    <MainContainer>
        <ProgressBar step={step} titles={stepTitles} />
        <BackButton step={step} onClick={decrementStep}>
            <FaArrowLeft />
        </BackButton>
        {displayComponent()}
    </MainContainer>)
}

export default CheckoutForm;