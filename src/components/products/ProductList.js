import Product from "./Product";
import { ProductGrid } from "../StyledComponents"

function ProductList(props) {

    const { products } = props
    
    return(
        <ProductGrid>
            {products.map( product => 
            <Product key={product.id} id={product.id} image={product.image} price={product.price} title={product.title} />)}
        </ProductGrid>)
}

export default ProductList;