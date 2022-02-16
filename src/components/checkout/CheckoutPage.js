import CheckoutForm from "./CheckoutForm";
import { CheckoutPageContainer, SummaryContainer } from "./StyledComponents";
import OrderSummary from "./OrderSummary";
import OrderDetails from "./OrderDetails";

function CheckoutPage() {
    return (  
        <CheckoutPageContainer>
            <CheckoutForm />
            <div>
                <OrderSummary />
                <OrderDetails />
            </div>
        </CheckoutPageContainer>
    );
}

export default CheckoutPage;