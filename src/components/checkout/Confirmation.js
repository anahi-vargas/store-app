import { BsCheckCircle } from "react-icons/bs"
import { ConfirmationContainer, ConfirmationDetails, DetailsHeading, DetailsRow } from "./StyledComponents";

function Confirmation(props) {
    const orderDate = new Date().toDateString();

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
                    <span>{props.name}</span>
                </DetailsRow>
                <DetailsRow>
                <span>Payment Method</span>
                <span>{props.paymentMethod}</span>
                </DetailsRow>
                <DetailsRow>
                    <span>Total</span>
                    <span>$90</span>
                </DetailsRow>
            </ConfirmationDetails>
        </ConfirmationContainer>
     );
}

export default Confirmation;