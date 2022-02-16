import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { FormStepContainer, FormTitle } from "./StyledComponents";


function Review() {

    const { cart } = useContext(CartContext)
    console.log(cart)

    return ( 
        <FormStepContainer>
            <FormTitle>Review</FormTitle>
            {cart.map(item => {
                <div>
                    <img src={item.product.image} alt={`${item.product.title}`}/>
                    <div>{item.product.title}</div>
                    <div>{item.product.price}</div>
                    <div>{item.quantity}</div>
                </div>
            })}
        </FormStepContainer>
     );
}

export default Review;