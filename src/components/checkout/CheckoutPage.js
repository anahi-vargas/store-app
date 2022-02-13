import CheckoutForm from "./CheckoutForm";
import { CheckoutPageContainer, SummaryContainer } from "./StyledComponents";
import Summary from "./Summary";

function CheckoutPage() {
    return (  
        <CheckoutPageContainer>
            <CheckoutForm />
            <Summary />
        </CheckoutPageContainer>
    );
}

export default CheckoutPage;