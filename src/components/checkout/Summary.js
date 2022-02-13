import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { SummaryContainer } from "./StyledComponents";

function Summary() {
    const [subtotal, setSubtotal] = useState(0)
    const [tax, setTax] = useState(0)
    const shipping = subtotal > 75 ? 0 : 5.99
    const orderTotal = subtotal + shipping + tax
    const { cart } = useContext(CartContext)

    useEffect( () => {
        const itemTotal = cart.reduce( ( total, { product: { price }, quantity } ) => total + price*quantity , 0)
        setSubtotal(itemTotal)
    }, [])

    return ( 
        <SummaryContainer>
            <div>Order Summary</div>
            <div><span>Item Subtotal</span><span>${subtotal}</span></div>
            <div><span>Shipping</span><span>${shipping}</span></div>
            <div><span>Sales Tax</span><span>${tax}</span></div>
            <div><span>Order Total</span><span>${orderTotal}</span></div>
        </SummaryContainer>
     );
}

export default Summary;