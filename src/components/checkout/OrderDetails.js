import { useContext } from "react";
import { MdRemoveCircleOutline } from "react-icons/md"
import { CartContext } from "../../contexts/CartContext";
import { ContainerTitle, RemoveButton } from "../cart/StyledComponents";
import { OrderDetailsContainer, DetailsContainer, DetailsImage, DetailsInfo } from "./StyledComponents";

function OrderDetails() {
    const { cart, removeProduct } = useContext(CartContext)
    return ( 
        <OrderDetailsContainer>
            <ContainerTitle>Order Details</ContainerTitle>
            {cart.map((item, index)  => 
                <DetailsContainer key={item.product.id}>
                    <DetailsImage src={item.product.image} alt={item.product.title} />
                    <DetailsInfo>
                        <div>{item.product.title}</div>
                        <div>${item.product.price}</div>
                        <div>Qty. {item.quantity}</div>
                    </DetailsInfo>
                    <RemoveButton onClick={() => removeProduct(index)}><MdRemoveCircleOutline color="red" /></RemoveButton>
                </DetailsContainer>)}
        </OrderDetailsContainer>
     );
}

export default OrderDetails;