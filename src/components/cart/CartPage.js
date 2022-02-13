import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import Product from "../products/Product";
import { ProductList, ProductListItem } from "../products/StyledComponents";

function CartPage() {

    const { removeProduct, cart } = useContext(CartContext)
    let navigate = useNavigate()

    const handleClick = () => navigate("/checkout")

    return ( 
        cart.length === 0 ?
        <div>Bag is Empty</div> :
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
                    </ProductListItem>
                </ProductList>
            )}
            <button onClick={handleClick}>Checkout</button>
        </div>
     );
}

export default CartPage;