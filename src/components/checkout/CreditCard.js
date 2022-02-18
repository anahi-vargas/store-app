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
        <FormInput required placeholder="Cardholder Name" name="cardholderName" value={cardholderName} onChange={handleCard} />
        <FormInput minLength={16} maxLength={16} placeholder="Credit Card Number" name="cardNumber" value={cardNumber} onChange={handleCard} />
        <FormRow>
            <FormInput minLength={3} maxLength={4} placeholder="CVV" name="securityCode" value={securityCode} onChange={handleCard}  />
            <FormInput type="month" min="2022-02" max="2030-01" pattern="[0-9]{4}-[0-9]{2}" placeholder="Expiration Date" name="expirationDate" value={expirationDate} onChange={handleCard}  />
        </FormRow>
        </>
     );
}

export default CreditCard;