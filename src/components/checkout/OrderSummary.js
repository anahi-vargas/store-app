import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { SummaryRow } from "../cart/StyledComponents";
import { SummaryContainer, DetailsTitle } from "./StyledComponents";

function OrderSummary() {
    const { cart, getCartTotal } = useContext(CartContext)
    const subtotal = getCartTotal()
    const [tax, setTax] = useState(0)
    const shipping = subtotal > 75 || subtotal === 0 ? 0 : 5.99
    const orderTotal = subtotal + shipping + tax

    return ( 
        <SummaryContainer>
            <DetailsTitle>Order Summary</DetailsTitle>
            <SummaryRow>
                <span>Total Items</span>
                <span>{cart.length}</span>
            </SummaryRow>
            <SummaryRow>
                <span>Item Subtotal</span>
                <span>${subtotal}</span>
            </SummaryRow>
            <SummaryRow>
                <span>Shipping</span>
                {shipping === 0 ? <span>Free</span> : <span>${shipping}</span>}
            </SummaryRow>
            <SummaryRow>
                <span>Tax</span>
                <span>${tax}</span>
            </SummaryRow>
            <SummaryRow>
                <span>Total</span>
                <span>${orderTotal}</span>
            </SummaryRow>
        </SummaryContainer>
     );
}

export default OrderSummary;