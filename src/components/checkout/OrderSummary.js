import { useContext, useEffect, useState } from "react";
import { states } from "../../utils"
import { CartContext } from "../../contexts/CartContext";
import { ContainerTitle, SummaryRow } from "../cart/StyledComponents";
import { SummaryContainer } from "./StyledComponents";

function OrderSummary(props) {
    const { getCartTotal, getTotalItems } = useContext(CartContext)
    const subtotal = getCartTotal()
    const totalItems = getTotalItems()
    const [tax, setTax] = useState(0)
    const shipping = subtotal > 75 || subtotal === 0 ? 0 : 5.99
    const orderTotal = subtotal + shipping + tax

    useEffect( () => {
        let stateObj = states.find(state => state.name === props.state)

        if (stateObj !== undefined)
            setTax(stateObj.stateRate * subtotal)
    }, [props.state, subtotal])

    return ( 
        <SummaryContainer>
            <ContainerTitle>Order Summary</ContainerTitle>
            <SummaryRow>
                <span>Total Items</span>
                <span>{totalItems}</span>
            </SummaryRow>
            <SummaryRow>
                <span>Item Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
            </SummaryRow>
            <SummaryRow>
                <span>Shipping</span>
                {shipping === 0 ? <span>Free</span> : <span>${shipping}</span>}
            </SummaryRow>
            <SummaryRow>
                <span>Tax</span>
                {tax <= 0 ? <span>TBD</span> : <span>${tax.toFixed(2)}</span>}
            </SummaryRow>
            <SummaryRow>
                <span>Total</span>
                <span>${orderTotal.toFixed(2)}</span>
            </SummaryRow>
        </SummaryContainer>
     );
}

export default OrderSummary;