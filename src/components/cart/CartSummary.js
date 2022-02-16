import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { CheckoutButton, SummaryContainer, SummaryRow } from "./StyledComponents";

function CartSummary() {
    const { cart, getCartTotal } = useContext(CartContext)
    const total = getCartTotal()
    let navigate = useNavigate()


    return ( 
        <SummaryContainer>
            <div>Cart Summary</div>
            <SummaryRow> 
                <span>{cart.length} items</span>
                <span>${total.toFixed(2)}</span>
            </SummaryRow>
            <SummaryRow>
                <span>Shipping</span>
                {total >= 75 ? <span>Free</span> : <span>$5.99</span>}
            </SummaryRow>
            <SummaryRow>
                <span>Tax</span>
                <span>TBD</span>
            </SummaryRow>
            <CheckoutButton onClick={() => navigate("/checkout")}>Checkout</CheckoutButton>
        </SummaryContainer>
     );
}

export default CartSummary;