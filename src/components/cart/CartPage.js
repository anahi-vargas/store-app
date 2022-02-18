import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { FaTrashAlt } from "react-icons/fa"
import { CartContainer, CartInfo, CartInput, CartTotatPrice, ProductList, ProductListItem, RemoveButton } from "./StyledComponents";
import CartSummary from "./CartSummary";
import { NotFoundContainer } from "../StyledComponents";

function CartPage() {

    const { removeProduct, updateQuantity, cart } = useContext(CartContext)
    let navigate = useNavigate()

    return ( 
        <div>
        {cart.length === 0 ?
        <NotFoundContainer>Your Cart is Empty</NotFoundContainer> :
            <CartContainer>
                <ProductList>
                    {cart.map( (item, index) =>
                        <ProductListItem key={item.product.id}>
                            <img src={item.product.image} alt={`${item.product.title}`} onClick={() => navigate(`/products/${item.product.id}`)} />
                            <CartInfo>
                                <div>{item.product.title}</div>
                                <div>${item.product.price}</div>
                                <div>Qty: {item.quantity}</div>
                            </CartInfo>
                            <CartInput type="number" min="1" max="99" name="quantity" value={item.quantity}  onChange={(e) => updateQuantity(index, parseInt(e.target.value))}/>
                            <CartTotatPrice>${(item.product.price * item.quantity).toFixed(2)}</CartTotatPrice>
                            <RemoveButton onClick={() => removeProduct(index)}><FaTrashAlt/></RemoveButton>
                        </ProductListItem> 
                    )}
                </ProductList>
                <CartSummary />
            </CartContainer>}
        </div>
     );
}

export default CartPage;