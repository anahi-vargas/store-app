import { useContext, useState } from "react"
import { CartContext } from "../../contexts/CartContext";

function QuantityButtons() {

    const { quantity, setQuantity} = useState(1)
    // const { increaseQuantity, decreaseQuantity } = useContext(CartContext) 

    return ( 
        <div>
            <div>Buttons</div>
            <button disabled={quantity === 1} onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
        </div>
     );
}

export default QuantityButtons;