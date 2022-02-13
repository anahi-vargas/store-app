import { ProductCard, ProductImage } from "../StyledComponents";
import { useNavigate } from "react-router-dom";
import { ProductPrice, ProductTitle } from "./StyledComponents";

function Product(props) {
    const { id, image, price, title } = props

    let navigate= useNavigate()

    const handleClick = (id) => navigate(`/products/${id}`)
    
    return (
        <ProductCard onClick={() => handleClick(id)}>
            <ProductImage src={image} alt={`Product ${title}`} />
            <ProductTitle>{title}</ProductTitle>
            <ProductPrice>${price}</ProductPrice>
        </ProductCard>)
}
    
export default Product;