import { useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import Product from "../products/Product";
import { ProductList, ProductListItem } from "../products/StyledComponents";

function CartPage() {

    const { removeProduct, updateQuantity, cart } = useContext(CartContext)
    let navigate = useNavigate()

    const handleClick = () => navigate("/checkout")

    const increaseQuantity = (index, quantity) => updateQuantity(index, quantity + 1)
    const decreaseQuantity = (index, quantity) => updateQuantity(index, quantity - 1)

    return ( 
        cart.length === 0 ?
        <div>Cart is Empty</div> :
        <div>
            {cart.map( (item, index) =>
                <ProductList key={item.product.id}>
                    <ProductListItem>
                        <div>
                            <Product id={item.product.id} image={item.product.image} price={item.product.price} title={item.product.title} />
                            <button onClick={() => removeProduct(index)}>Remove x</button>
                        </div>
                        <div>${item.product.price * item.quantity}</div>
                        <div>${item.product.price} ea</div>
                        <div><span>Quantity:</span> <span>{item.quantity}</span></div>
                        <div>Update Quantity
                        <div>
                        <button disabled={item.quantity === 1} onClick={() => decreaseQuantity(index, item.quantity)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(index, item.quantity)}>+</button>
                    </div>
                        </div>
                    </ProductListItem>
                </ProductList>
            )}
            <button onClick={handleClick}>Checkout</button>
        </div>
     );
}

export default CartPage;