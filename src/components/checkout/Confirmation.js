import { BsCheckCircle } from "react-icons/bs"
import { ConfirmationContainer, ConfirmationDetails, DetailsHeading, DetailsRow, FormButton } from "./StyledComponents";

function Confirmation(props) {
    const orderDate = new Date().toDateString();
    const {name, paymentMethod, step, incrementStep} = props

    return ( 
        <ConfirmationContainer>
            <BsCheckCircle color="green" fontSize="4.5rem" />
            <h1>Order Confirmed</h1>
            <ConfirmationDetails>
                <DetailsHeading>Order Details</DetailsHeading>
                <DetailsRow>
                    <span>Order#</span>
                    <span>392874</span>
                </DetailsRow>
                <DetailsRow>
                    <span>Order Date</span>
                    <span>{orderDate}</span>
                </DetailsRow>
                <DetailsRow>
                    <span>Name</span>
                    <span>{name}</span>
                </DetailsRow>
                <DetailsRow>
                <span>Payment Method</span>
                <span>{paymentMethod}</span>
                </DetailsRow>
                <DetailsRow>
                    <span>Total</span>
                    <span>$90</span>
                </DetailsRow>
            </ConfirmationDetails>
            <FormButton onClick={(e) => incrementStep(e)}>
                { step === 0 ? `Continue to Billing` : step === 1 ? `Place Order` : `Continue Shopping`}
            </FormButton>
        </ConfirmationContainer>
     );
}

export default Confirmation;