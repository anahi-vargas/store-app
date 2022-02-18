import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { CheckoutButton, ContainerTitle, ShadowContainer, SummaryRow } from "./StyledComponents";

function CartSummary() {
    const { getCartTotal, getTotalItems } = useContext(CartContext)
    const total = getCartTotal()
    const totalItems = getTotalItems()
    let navigate = useNavigate()


    return ( 
        <ShadowContainer>
            <ContainerTitle>Cart Summary</ContainerTitle>
            <SummaryRow> 
                <span>{totalItems} items</span>
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
        </ShadowContainer>
     );
}

export default CartSummary;