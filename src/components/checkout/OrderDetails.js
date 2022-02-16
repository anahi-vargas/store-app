import { useContext } from "react";
import { MdRemoveCircleOutline } from "react-icons/md"
import { CartContext } from "../../contexts/CartContext";
import { RemoveButton } from "../cart/StyledComponents";
import { OrderDetailsContainer, DetailsContainer, DetailsImage, DetailsInfo, DetailsTitle } from "./StyledComponents";

function OrderDetails() {
    const { cart, removeProduct } = useContext(CartContext)
    return ( 
        <OrderDetailsContainer>
            <DetailsTitle>Order Details</DetailsTitle>
            {cart.map((item, index)  => 
                <DetailsContainer>
                    <DetailsImage src={item.product.image} alt={item.product.title} />
                    <DetailsInfo>
                        <div>{item.product.title}</div>
                        <div>${item.product.price}</div>
                        <div>Qty. {item.quantity}</div>
                    </DetailsInfo>
                    <RemoveButton onClick={() => removeProduct(index)}><MdRemoveCircleOutline/></RemoveButton>
                </DetailsContainer>)}
        </OrderDetailsContainer>
     );
}

export default OrderDetails;