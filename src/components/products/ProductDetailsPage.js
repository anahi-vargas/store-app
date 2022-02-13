import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { getSingleProduct } from "../../utils"
import { ProductDetailsContainer, ProductDetailsImage, ProductDetailsInfo } from "./StyledComponents";

function ProductDetailsPage() {
    const [product, setProduct] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [quantity, setQuantity] = useState(1)
    const { addProduct } = useContext(CartContext)
    let params = useParams()

    const increaseQuantity = () => setQuantity(prevQuantity => prevQuantity + 1)
    const decreaseQuantity = () => setQuantity(prevQuantity => prevQuantity - 1)

    useEffect( () => {
        getSingleProduct(params.id).then(data => {
            setProduct(data)
            setLoading(false)
        })
    }, [params.id])

    return ( 
        <ProductDetailsContainer>
            {!isLoading && 
            <>
                <ProductDetailsImage src={product.image} alt={`${product.title}`} />
                <ProductDetailsInfo>
                    <div>{product.title}</div>
                    <div>${product.price}</div>
                    <div><span>{product.rating.rate}</span> <span>({product.rating.count})</span></div>
                    <div>{product.description}</div>
                    <div>{product.category}</div>
                    <div>
                        <button disabled={quantity === 1} onClick={decreaseQuantity}>-</button>
                        <span>{quantity}</span>
                        <button onClick={increaseQuantity}>+</button>
                    </div>
                    <button onClick={() => addProduct({product, quantity})}>Add to Cart</button>
                </ProductDetailsInfo>
                </>}
        </ProductDetailsContainer>
     );
}

export default ProductDetailsPage;