import { FormInput, FormTitle, FormRow } from "./StyledComponents" 

function CreditCard(props) {
    const { creditCard, setCreditCard } = props
    const { cardholderName, cardNumber, securityCode, expirationDate } = creditCard

    const handleCard = (e) => {
        const {value, name} = e.target;
        setCreditCard(prev => ({...prev, [name]: value}))
     }
    return ( 
        <>
        <FormTitle>Payment Details</FormTitle>
        <FormInput type="text" placeholder="Cardholder Name" name="cardholderName" value={cardholderName} onChange={handleCard} />
        <FormInput type="text" minLength={16} maxLength={16} placeholder="Credit Card Number" name="cardNumber" value={cardNumber} onChange={handleCard} />
        <FormRow>
            <FormInput type="text" minLength={3} maxLength={3} placeholder="Security Code" name="securityCode" value={securityCode} onChange={handleCard}  />
            <FormInput type="text" placeholder="Expiration" name="expirationDate" value={expirationDate} onChange={handleCard}  />
        </FormRow>
        </>
     );
}

export default CreditCard;