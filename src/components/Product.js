import { useEffect, useState } from "react";
import { ProductCard, ProductImage } from "./StyledComponents";
import { getSingleProduct } from "../utils"

function Product(props) {
    const { id, image, price, title } = props
    const [productId, setProductId] = useState("")
    const [selectedProduct, setSelectedProduct] = useState([])

    const handleClick = (id) => {
        console.log("set id")
        setProductId(id)
    }

    useEffect( () => {
        console.log("use effect")
        getSingleProduct(id).then(data => console.log(data))
    }, [productId])

    return (
        <ProductCard onClick={() => handleClick(id)}>
            <ProductImage src={image} alt={`Product ${title}`} />
            <div>{title}</div>
            <div>{price}</div>
        </ProductCard>)
}
    
export default Product;