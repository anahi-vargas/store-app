import { useState, useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import {  Button, QuantityHeading, QuantitySelect } from "./StyledComponents"

function ProductAddButton(props) {
    const maxQuantity = 10
    const [quantity, setQuantity] = useState(1)
    const { addProduct } = useContext(CartContext)
    const { product } = props

    return ( 
        <>
        <QuantityHeading>Qty</QuantityHeading>
        <div>
            <QuantitySelect value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}>
                {[...Array(maxQuantity).keys()].map( quantity => 
                    <option key={quantity} value={quantity+1} name="quantity">{quantity+1}</option>)}
            </QuantitySelect>
            <Button onClick={() => addProduct({product, quantity})}>Add to Cart</Button>
        </div>
        </>
     );
}

export default ProductAddButton;